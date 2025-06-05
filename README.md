⏱ Khóa Thời Gian Biểu Quyết Dựa Trên Blockchain

Giới thiệu chung về sản phẩm

Dự án Khóa thời gian biểu quyết là một ứng dụng phi tập trung (DApp) được xây dựng trên nền tảng blockchain nhằm cung cấp một cơ chế biểu quyết minh bạch, an toàn và có thời hạn rõ ràng. Hệ thống sử dụng các hợp đồng thông minh (smart contracts) để quản lý quá trình biểu quyết, đảm bảo rằng các phiếu bầu chỉ được phép thực hiện trong một khoảng thời gian xác định và không thể bị thay đổi sau khi thời gian biểu quyết kết thúc. Dự án hướng tới việc ứng dụng công nghệ blockchain để tăng cường tính minh bạch và bảo mật trong các quy trình biểu quyết trực tuyến, chẳng hạn như bầu cử, bỏ phiếu cộng đồng hoặc các quyết định tổ chức.
Mục tiêu chính của dự án:

Đảm bảo tính minh bạch: Mọi phiếu bầu được lưu trữ trên blockchain, không thể chỉnh sửa hay xóa.
Khóa thời gian: Chỉ cho phép bỏ phiếu trong khoảng thời gian được định sẵn.
Phi tập trung: Loại bỏ trung gian, tăng cường sự tin cậy và bảo mật.

Dự án này phù hợp để triển khai trong các ứng dụng như quản trị tổ chức phi tập trung (DAO), bầu cử trực tuyến, hoặc các hệ thống biểu quyết cộng đồng.
Sơ đồ hệ thống và các chức năng
Sơ đồ hệ thống
Hệ thống bao gồm các thành phần chính:

Người dùng (Voters): Những cá nhân tham gia bỏ phiếu thông qua giao diện DApp.
Hợp đồng thông minh (Smart Contract): Được triển khai trên blockchain (ví dụ: Ethereum) để quản lý quy trình biểu quyết, bao gồm thời gian bắt đầu, thời gian kết thúc, và kết quả biểu quyết.
Giao diện người dùng (Frontend): Một ứng dụng web (sử dụng HTML, JavaScript, Web3.js) để người dùng tương tác với hợp đồng thông minh.
Blockchain: Lưu trữ dữ liệu biểu quyết và đảm bảo tính bất biến.
Ví tiền điện tử (Wallet): Người dùng sử dụng ví như MetaMask để xác thực danh tính và gửi giao dịch.



🚀Các chức năng chính

Khởi tạo biểu quyết:
Quản trị viên (admin) triển khai hợp đồng thông minh với thời gian bắt đầu và kết thúc biểu quyết.
Xác định các lựa chọn biểu quyết (ví dụ: "Đồng ý", "Không đồng ý").


Bỏ phiếu:
Người dùng kết nối ví MetaMask để xác thực và gửi phiếu bầu.
Chỉ cho phép bỏ phiếu trong khoảng thời gian được xác định.
Mỗi người dùng chỉ được bỏ phiếu một lần.


Khóa thời gian:
Sau khi thời gian biểu quyết kết thúc, hợp đồng thông minh tự động khóa, ngăn chặn mọi hành động bỏ phiếu mới.


Kiểm tra kết quả:
Kết quả biểu quyết được công khai trên blockchain, bất kỳ ai cũng có thể tra cứu.
Hiển thị số phiếu cho từng lựa chọn.


Bảo mật:
Sử dụng địa chỉ ví để xác thực người dùng, ngăn chặn gian lận.
Dữ liệu được lưu trữ trên blockchain, đảm bảo tính minh bạch và bất biến.



🛠️Công nghệ và kỹ thuật
Công nghệ sử dụng

Blockchain: Ethereum (hoặc các blockchain tương thích EVM như Binance Smart Chain, Polygon).
Hợp đồng thông minh: Solidity (phiên bản 0.8.x).
Giao diện người dùng: 
HTML, CSS, JavaScript.
Web3.js để tương tác với blockchain.
React.js (tùy chọn) để xây dựng giao diện động.


Ví tiền điện tử: MetaMask để xác thực và gửi giao dịch.
Công cụ phát triển:
Truffle hoặc Hardhat để triển khai và kiểm tra hợp đồng thông minh.
Remix IDE để phát triển nhanh.
Ganache để tạo blockchain cục bộ cho mục đích kiểm thử.


Lưu trữ dữ liệu: Dữ liệu biểu quyết được lưu trên blockchain, không cần cơ sở dữ liệu bên ngoài.

⚙Kỹ thuật chính

Hợp đồng thông minh:
Sử dụng Solidity để viết hợp đồng thông minh với các hàm chính: khởi tạo biểu quyết, bỏ phiếu, kiểm tra thời gian, và lấy kết quả.
Sử dụng modifier để kiểm soát quyền truy cập (chỉ admin khởi tạo, chỉ người dùng bỏ phiếu trong thời gian cho phép).
Sử dụng biến block.timestamp để kiểm soát thời gian biểu quyết.


Bảo mật:
Ngăn chặn bỏ phiếu trùng lặp bằng cách lưu trữ trạng thái của từng địa chỉ ví.
Sử dụng sự kiện (event) để ghi lại các hành động quan trọng như bỏ phiếu hoặc khóa thời gian.


Tương tác người dùng:
Sử dụng Web3.js để kết nối DApp với blockchain.
Giao diện web hiển thị thời gian còn lại, các lựa chọn biểu quyết, và kết quả trực quan.



💡Hướng dẫn triển khai

Chuẩn bị môi trường:
Cài đặt Node.js, Truffle/Hardhat, và MetaMask.
Tạo một blockchain cục bộ bằng Ganache hoặc sử dụng testnet (Ropsten, Rinkeby).


Viết hợp đồng thông minh:
Dưới đây là một mẫu hợp đồng thông minh đơn giản bằng Solidity:




// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Candidate {
        string name;
        uint voteCount;
    }

    mapping(address => bool) public hasVoted;
    Candidate[] public candidates;

    constructor(string[] memory candidateNames) {
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate(candidateNames[i], 0));
        }
    }

    function vote(uint candidateIndex) public {
        require(!hasVoted[msg.sender], "Already voted!");
        hasVoted[msg.sender] = true;
        candidates[candidateIndex].voteCount++;
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }
}

📌Hướng dẫn cài đặt và chạy dự án
Clone repository:
bash




git clone <your-repo-url>

Cài đặt phụ thuộc:
bash




npm install

Triển khai hợp đồng:

bash




truffle migrate --network <network-name>
Chạy giao diện:

Mở file index.html trong trình duyệt hoặc chạy server cục bộ bằng npm start (nếu sử dụng React).

Kết nối MetaMask và sử dụng DApp để bỏ phiếu.

👨‍💻 Tác giả
Nguyễn Việt Châu
MSV: 1571020025

