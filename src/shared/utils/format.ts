// 날짜 포맷팅
export function formatDate(
  date: string | Date,
  format: "short" | "long" = "short"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (format === "short") {
    return dateObj.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  return dateObj.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
}

// 시간 포맷팅
export function formatTime(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// 날짜와 시간 포맷팅
export function formatDateTime(date: string | Date): string {
  return `${formatDate(date)} ${formatTime(date)}`;
}

// 숫자 포맷팅 (천 단위 콤마)
export function formatNumber(num: number): string {
  return num.toLocaleString("ko-KR");
}

// 별점 표시를 위한 별 문자열 생성
export function formatRating(rating: number, maxRating: number = 5): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    "★".repeat(fullStars) + (hasHalfStar ? "☆" : "") + "☆".repeat(emptyStars)
  );
}

// 거리 포맷팅 (미터 -> 킬로미터)
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  }
  return `${(meters / 1000).toFixed(1)}km`;
}

// 텍스트 자르기
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}
