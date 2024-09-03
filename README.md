# NER_Transformers

Cách chạy chương trình trên máy tính cá nhân:

1. Tải và cài đặt Node.js (phiên bản LTS) tại đây: https://nodejs.org/en (lúc cài đặt, đừng chọn ô "Automatically install the necessary tools...")

2. Tải Python về máy tính (nên dùng python 3.9 trở về sau)

3. Clone repository này về máy tính

4. Tải model về máy tính, và bỏ vào thư mục ner_model trong repo vừa clone về: https://drive.google.com/file/d/1_VKpdsK9ChogCWPqbsHogr2S-Kc5l8RE/view?usp=sharing

5. Mở thư mục vừa clone bằng VSCODE

6. Mở terminal bên trong VSCODE (Ctrl + ~), rồi gõ lệnh "npm i" để cài đặt các packages cần thiết cho backend Node.js

7. Tạo virtual environment (để cài đặt các module của python locally trong thư mục của project, mà không cần cài globally) bằng lệnh: python -m venv my_venv (lúc này, một thư mục mới có tên my_venv sẽ được tạo ra, và các module của Python sẽ được lưu vào đây)

8. Nhập lệnh sau để sử dụng virtual environment: my_venv\Scripts\activate

9. Cài đặt các module của Python cần thiết có trong requirements.txt: pip install -r requirements.txt (các module này sẽ được cài local trong thư mục project này, vì đã dùng virtual environment)

10. Tải file dll cần thiết để chạy torch: https://drive.google.com/file/d/1BE6gCiT8b4XeZPTZElJZ6eC2Dz_mGyQB/view?usp=sharing

11. Copy file dll vào đường dẫn: my_venv\Lib\torch\lib\

12. Sau khi cài đặt xong, gõ lệnh "npm run both" để chạy chương trình

- Nếu trong quá trình chạy các lệnh npm bị lỗi sau khi mới cài đặt Node.js thì khởi động lại máy tính rồi chạy lại
- Sau khi hoàn thành, nhập lệnh "deactivate" vào terminal để thoát virtual environment. Để vào lại virtual environment thì nhập lại lệnh my_venv\Scripts\activate
- Nếu không thể chạy lệnh my_venv\Scripts\activate, mở Powershell bằng quyền admin, chạy lệnh "Set-ExecutionPolicy RemoteSigned", rồi thử lại (để trả về như cũ, nhập lệnh: Set-ExecutionPolicy Restricted)
- Cài đặt VC_redist.x64.exe tại https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170 nếu máy chưa có (nếu máy có cài Visual Studio thì có thể đã có rồi)
