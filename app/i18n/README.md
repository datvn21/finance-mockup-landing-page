# Internationalization (i18n) Guide

## Tổng quan

Dự án hỗ trợ đa ngôn ngữ với 2 ngôn ngữ: **Tiếng Việt (vi)** và **Tiếng Anh (en)**.

## Cấu trúc

- `translations.ts` - File chứa tất cả các bản dịch
- `LanguageContext.tsx` - React Context để quản lý ngôn ngữ hiện tại

## Cách sử dụng

### 1. Routes

Hệ thống hỗ trợ các routes sau:

- `/` hoặc `/vi` - Hiển thị trang bằng tiếng Việt
- `/en` - Hiển thị trang bằng tiếng Anh

### 2. Chuyển đổi ngôn ngữ

Người dùng có thể chuyển đổi ngôn ngữ bằng cách:

- Click vào nút "VI/EN" trên thanh NavBar (desktop)
- Chọn "Ngôn ngữ" trong menu mobile

### 3. Sử dụng trong Component

```tsx
import { useLanguage } from "~/i18n/LanguageContext";

export default function MyComponent() {
  const { language, t } = useLanguage();

  return (
    <div>
      <h1>{t("home")}</h1>
      <p>Current language: {language}</p>
    </div>
  );
}
```

### 4. Thêm translations mới

Để thêm một key translation mới, cập nhật file `translations.ts`:

```typescript
export const translations = {
  vi: {
    // ... existing keys
    myNewKey: "Giá trị tiếng Việt",
  },
  en: {
    // ... existing keys
    myNewKey: "English value",
  },
} as const;
```

### 5. Link với ngôn ngữ

Khi tạo link, sử dụng `basePath` để đảm bảo đúng ngôn ngữ:

```tsx
const { language } = useLanguage();
const basePath = language === "vi" ? "/" : `/${language}`;

<Link to={basePath}>Home</Link>
<Link to={`${basePath}/about`}>About</Link>
```

## Các keys hiện có

### NavBar

- `search` - Placeholder cho ô tìm kiếm
- `signIn` - Đăng nhập
- `signUp` - Đăng ký
- `language` - Ngôn ngữ

### Menu

- `home` - Trang Chủ / Home
- `market` - Thị trường / Market
- `economy` - Kinh tế / Economy
- `industry` - Ngành / Industry
- `world` - Thế giới / World
- `policy` - Chính sách / Policy
- `opinion` - Ý kiến / Opinion
- `more` - Thêm / More

### Site Info

- `siteName` - Tên website
- `siteDescription` - Mô tả website

### Content

- `readMore` - Xem thêm / Read more
- `secondary` - Secondary
- `newsTitle` - Tiêu đề tin mẫu
- `newsDesc` - Mô tả ngắn tin mẫu
- `newsLongDesc` - Mô tả dài tin mẫu

## Lưu ý

- Ngôn ngữ mặc định là **Tiếng Việt**
- Ngôn ngữ được xác định từ URL path
- Context tự động cập nhật khi người dùng chuyển route
