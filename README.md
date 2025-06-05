⏳ Khóa Thời Gian Biểu Quyết - Time-Locked Voting Smart Contract

🧠 Giới thiệu chung

"Khóa thời gian biểu quyết" là một hệ thống bỏ phiếu điện tử ứng dụng công nghệ Blockchain nhằm đảm bảo tính minh bạch, công bằng và không thể gian lận trong quá trình biểu quyết.

Hệ thống cho phép người dùng tham gia bỏ phiếu thông qua một giao diện DApp (Decentralized Application) kết nối với ví blockchain như MetaMask. Điểm nổi bật của ứng dụng là áp dụng cơ chế khóa thời gian (time-lock) – chỉ cho phép gửi phiếu trong một khoảng thời gian đã được xác định trước. Sau khi thời gian kết thúc, hợp đồng thông minh sẽ tự động khóa quyền bỏ phiếu và công bố kết quả một cách minh bạch, không thể thay đổi.

Ứng dụng có thể triển khai trong các môi trường cần biểu quyết công khai nhưng an toàn, như: cuộc bầu cử nội bộ, bình chọn ý tưởng, quản trị DAO, v.v.

🔧 Tính năng nổi bật
✅ Khởi tạo biểu quyết: Người quản trị có thể tạo cuộc biểu quyết mới với tiêu đề, danh sách lựa chọn và thời gian bắt đầu/kết thúc cụ thể.

✅ Đồng hồ đếm ngược thời gian biểu quyết: Giao diện hiển thị thời gian còn lại để người dùng biết rõ hạn cuối gửi phiếu.

✅ Kiểm tra thời gian thực: Hợp đồng thông minh luôn so sánh thời gian hiện tại với thời gian kết thúc biểu quyết để xác định tính hợp lệ của phiếu.

✅ Bỏ phiếu an toàn: Mỗi địa chỉ ví chỉ được bỏ phiếu một lần, phiếu được ghi nhận on-chain, không thể chỉnh sửa hay xóa.

✅ Công bố kết quả tự động: Sau khi thời gian biểu quyết kết thúc, smart contract sẽ cho phép hiển thị kết quả dựa trên số phiếu đã thu thập.

❌ Không thể gửi phiếu sau khi hết giờ: Mọi nỗ lực bỏ phiếu sau thời điểm đã định sẽ bị từ chối bởi hợp đồng thông minh.

💡 Cách hoạt động
Tạo cuộc biểu quyết:

Admin nhập tiêu đề, các lựa chọn và thời gian bắt đầu/kết thúc.

Thông tin được ghi vào blockchain thông qua smart contract.

Tham gia bỏ phiếu:

Người dùng kết nối ví (MetaMask), xem đồng hồ đếm ngược và lựa chọn phương án muốn bầu.

Phiếu được gửi on-chain nếu thời gian còn hợp lệ.

Kiểm tra thời gian và hợp lệ:

Smart contract sử dụng block.timestamp để kiểm tra thời điểm gửi phiếu.

Nếu vượt quá thời gian kết thúc, không cho phép gửi.

Công bố kết quả:

Sau khi thời gian kết thúc, bất kỳ ai cũng có thể gọi hàm đọc kết quả để xem tổng hợp.

🧪 Công nghệ và công cụ sử dụng

| Thành phần              | Công nghệ áp dụng                      |
| ----------------------- | -------------------------------------- |
| Blockchain platform     | Ethereum Testnet (Goerli hoặc Sepolia) |
| Hợp đồng thông minh     | Solidity                               |
| Công cụ phát triển      | Hardhat / Remix IDE                    |
| Giao diện người dùng    | ReactJS, TailwindCSS                   |
| Kết nối blockchain      | Web3.js hoặc Ethers.js                 |
| Ví người dùng           | MetaMask                               |
| Đồng hồ đếm ngược       | JavaScript Timer / React Countdown lib |
| Kiểm tra thời gian thực | `block.timestamp` trong Solidity       |

📁 Cấu trúc thư mục
time-lock-voting/
├── contracts/            # Solidity smart contracts

│   └── Voting.sol
├── scripts/              # Triển khai, test contract

│   └── deploy.js
├── frontend/             # React frontend app

│   ├── src/

│   │   ├── components/

│   │   ├── App.js

│   │   └── utils/

│   └── public/

├── test/                 # Unit tests cho smart contract

├── README.md             # Giới thiệu dự án

└── hardhat.config.js     # Cấu hình dự án Hardhat

🚀 Hướng dẫn chạy thử
✅ Yêu cầu
Node.js

MetaMask

Hardhat

Ethereum testnet (Goerli hoặc Sepolia)

🔄 Triển khai local

git clone https://github.com/vietchau89/Nhom5---VietChau---Blockchain.git

cd time-lock-voting

npm install

npx hardhat compile

npx hardhat run scripts/deploy.js --network goerli

cd frontend

npm install

npm run start

👨‍💻 Tác giả
 
Nguyễn Việt Châu

MSV: 1571020025
