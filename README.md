# NER_Transformers

Cách chạy chương trình trên máy tính cá nhân:

1. Tải và cài đặt Node.js (phiên bản LTS) tại đây: https://nodejs.org/en (lúc cài đặt, đừng chọn ô "Automatically install the necessary tools...")

2. Tải Python 3.11.9 về máy tính (tải các phiên bản Python khác có thể bị lỗi trong quá trình cài đặt thư viện, và đường dẫn của các bước bên dưới có thể khác): https://www.python.org/downloads/release/python-3119/

3. Clone repository này về máy tính

4. Tải model về máy tính, và bỏ vào thư mục ner_model trong repo vừa clone về: https://drive.google.com/file/d/1_VKpdsK9ChogCWPqbsHogr2S-Kc5l8RE/view?usp=sharing

5. Mở thư mục vừa clone bằng VSCODE

6. Mở terminal bên trong VSCODE (Ctrl + ~), rồi gõ lệnh "npm i"

7. Tạo virtual environment bằng lệnh: python -m venv my_venv

8. Nhập lệnh sau để sử dụng virtual environment:

- my_venv\Scripts\Activate.ps1 (nếu chạy bằng Powershell, có thể sẽ cần nhập lệnh sau trước khi chạy: Set-ExecutionPolicy Unrestricted -Scope Process)
- my_venv\Scripts\activate.bat (nếu chạy bằng cmd)

9. Cài đặt các module của Python cần thiết có trong requirements.txt: pip install -r requirements.txt

10. Tải file dll cần thiết để chạy torch: https://drive.google.com/file/d/1BE6gCiT8b4XeZPTZElJZ6eC2Dz_mGyQB/view?usp=sharing

11. Copy file dll vào đường dẫn: my_venv\Lib\torch\lib\

12. Sau khi cài đặt xong, gõ lệnh "npm run both" để chạy chương trình

- Nếu trong quá trình chạy các lệnh npm bị lỗi sau khi mới cài đặt Node.js thì khởi động lại máy tính rồi chạy lại
- Sau khi hoàn thành, nhập lệnh "deactivate" vào terminal để thoát virtual environment. Để vào lại virtual environment thì nhập lại lệnh my_venv\Scripts\activate
- Cài đặt VC_redist.x64.exe tại https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170 nếu máy chưa có (nếu máy có cài Visual Studio thì có thể đã có rồi)
