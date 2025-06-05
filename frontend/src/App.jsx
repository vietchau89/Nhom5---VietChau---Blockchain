import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "./contractABI.json";
import { CONTRACT_ADDRESS } from "./config";

function App() {
  const [account, setAccount] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [remainingTime, setRemainingTime] = useState(0);
  const [voteStatus, setVoteStatus] = useState("");
  const [isVoting, setIsVoting] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        fetchData(); // Gọi fetch lại sau khi kết nối ví
      } catch (err) {
        console.error("Lỗi khi kết nối ví:", err);
      }
    } else {
      alert("Vui lòng cài đặt MetaMask!");
    }
  };

  const fetchData = async () => {
    if (!window.ethereum) return;
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);

      const candidateList = await contract.getAllCandidates();
      setCandidates(candidateList);

      const timeLeft = await contract.getRemainingTime();
      setRemainingTime(parseInt(timeLeft));
    } catch (error) {
      console.error("Lỗi fetch dữ liệu:", error);
    }
  };

  const castVote = async () => {
    if (!selectedCandidate) {
      setVoteStatus("❗ Vui lòng chọn ứng viên trước khi biểu quyết.");
      return;
    }

    try {
      setIsVoting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

      const hasVoted = await contract.hasVoted(account);
      if (hasVoted) {
        setVoteStatus("❗ Bạn đã biểu quyết rồi.");
        return;
      }

      const tx = await contract.vote(selectedCandidate);
      await tx.wait();

      setVoteStatus("✅ Biểu quyết thành công!");
    } catch (error) {
      console.error("Vote error:", error);
      setVoteStatus("❌ Lỗi biểu quyết. Vui lòng thử lại.");
    } finally {
      setIsVoting(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      fetchData();
    }

    const timer = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🗳️ Hệ thống Biểu quyết Blockchain</h1>

      {!account ? (
        <button onClick={connectWallet}>🔌 Kết nối ví</button>
      ) : (
        <div>
          <p>✅ Đã kết nối</p>
          <p>👛 Ví: {account}</p>
        </div>
      )}

      <hr />

      <p>⏳ Thời gian còn lại: {formatTime(remainingTime)}</p>

      <h3>Chọn ứng viên:</h3>
      {candidates.length === 0 ? (
        <p>⏳ Đang tải danh sách ứng viên...</p>
      ) : (
        candidates.map((candidate, index) => (
          <button
            key={index}
            onClick={() => setSelectedCandidate(candidate)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedCandidate === candidate ? "lightgreen" : "#eee",
            }}
          >
            {candidate}
          </button>
        ))
      )}

      {selectedCandidate && (
        <p>✅ Ứng viên đã chọn: <strong>{selectedCandidate}</strong></p>
      )}

      <br />
      <button
        onClick={castVote}
        disabled={isVoting || remainingTime === 0 || !account}
      >
        🗳️ Biểu quyết
      </button>

      <p>{voteStatus}</p>
    </div>
  );
}

export default App;
