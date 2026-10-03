import kebabcase from "lodash.kebabcase";
import slugify from "slugify";

const hasNonLatin = (str: string): boolean => /[^\x00-\x7F]/.test(str);

/**
 * 拼音与中文标签名映射表
 */
export const TAG_MAP: Record<string, string> = {
  haoran: "浩然",
  xinran: "欣然",
  "浩然": "浩然",
  "欣然": "欣然",
};

/**
 * 标签 Slug 规范化映射表（确保中文标签统一转成拼音 URL）
 */
export const TAG_SLUG_MAP: Record<string, string> = {
  "浩然": "haoran",
  "欣然": "xinran",
};

/**
 * Slugify a string using a hybrid approach:
 * - Latin strings: slugify (e.g. "E2E Testing" → "e2e-testing")
 * - Strings with non-Latin chars: lodash.kebabcase (preserves non-Latin chars)
 */
export const slugifyStr = (str: string): string => {
  // 优先匹配预设的中文->拼音 Slug 映射
  if (TAG_SLUG_MAP[str]) {
    return TAG_SLUG_MAP[str];
  }

  if (hasNonLatin(str)) {
    return kebabcase(str);
  }
  return slugify(str, { lower: true });
};

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

/**
 * 根据 Slug 或中文获取美化后的展示名称
 */
export const getTagDisplayName = (tag: string): string => {
  return TAG_MAP[tag.toLowerCase()] || tag;
};
