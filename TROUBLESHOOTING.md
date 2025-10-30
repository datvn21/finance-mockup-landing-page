# Hướng dẫn khắc phục lỗi 404

## Vấn đề

Sau khi thêm routes mới (`/en`, `/vi`), bạn có thể gặp lỗi 404 khi truy cập.

## Giải pháp

### Bước 1: Restart Dev Server

1. Trong terminal đang chạy dev server, nhấn `Ctrl + C` để dừng
2. Chạy lại lệnh:
   ```bash
   npm run dev
   # hoặc
   pnpm dev
   ```

### Bước 2: Clear Cache (nếu cần)

```bash
# Xóa folder .react-router (nếu có)
rm -rf .react-router

# Hoặc trên Windows PowerShell:
Remove-Item -Recurse -Force .react-router
```

### Bước 3: Kiểm tra URLs

Sau khi restart, thử các URLs sau:

- `http://localhost:5173/` → Trang chủ (tiếng Việt mặc định)
- `http://localhost:5173/vi` → Trang tiếng Việt
- `http://localhost:5173/en` → Trang tiếng Anh

## Lưu ý

- React Router cần rebuild khi thay đổi file `routes.ts`
- Đảm bảo không có typo trong URL
- Nếu vẫn lỗi, thử xóa `node_modules/.vite` cache

## Debug

Nếu vẫn gặp vấn đề, kiểm tra console log để xem routes đã được load chưa.
