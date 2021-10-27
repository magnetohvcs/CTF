![Alt](https://github.com/magnetohvcs/ctf/blob/main/ctf-hackthebox/Auth0-CTF/web_purple_expense/3.png)
bài này khá cơ bản, chủ yếu là ta sẽ đọc code để tìm ra flag. tìm kiếm trong tệp database.js ở dòng thứ 40 có đoạn code này
### __INSERT INTO user_data (user_uid,type,description,amount) VALUES (73,'Income','🚩 HTB{f4k3_fl4g_f0r_t3st1ng} 🚩',1337);__
flag được đặt ở table user_data
![Alt](https://github.com/magnetohvcs/ctf/blob/main/ctf-hackthebox/Auth0-CTF/web_purple_expense/Untitled.png)

sau đó ta đọc tiếp tệp challenge/routes/index.js ta thấy đường dẫn này __/api/transactions/:user_uid__ 
nó sẽ lấy __user_uid__ làm tham số đưa vào hàm __getSavedTransactions__ 
![Alt](https://github.com/magnetohvcs/ctf/blob/main/ctf-hackthebox/Auth0-CTF/web_purple_expense/2.png)
ở hàm này nhận đối số __user_uid__ và thực hiện câu query __SELECT * FROM user_data WHERE user_uid = ?__ 
![alt](https://github.com/magnetohvcs/ctf/blob/main/ctf-hackthebox/Auth0-CTF/web_purple_expense/1.png)
bây giờ ta chỉ cần tạo tài khoản và đăng nhập sau đó truy cập đường dẫn này
__http://46.101.8.93:32211/api/transactions/73__ để nhận flag __HTB{Id0rs_f0r_Br34kfa57}__

[solution](https://raw.githubusercontent.com/magnetohvcs/ctf/main/ctf-hackthebox/Auth0-CTF/web_purple_expense/solution.py)
<br />

#### [source của bài này](https://github.com/magnetohvcs/ctf/raw/main/ctf-hackthebox/Auth0-CTF/web_purple_expense/web_purple_expense.zip)
