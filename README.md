# ShareMyKnowledge

Kho tài liệu học tập của cộng đồng StuDevCommunity, được viết dưới dạng Markdown.

## Xem tài liệu

Mở `index.html` trong trình duyệt hoặc truy cập trang GitHub Pages. Trang sẽ tự động quét kho tài liệu từ GitHub và hiển thị cây thư mục để duyệt.

## Kiểm tra trước khi đẩy

Dùng script sau để kiểm tra tất cả file Markdown có thể hiển thị đúng trên frontend:

```bash
node scripts/check-render.mjs
```

Tự động sửa lỗi encoding (chuyển UTF-16 sang UTF-8):

```bash
node scripts/check-render.mjs --fix
```
