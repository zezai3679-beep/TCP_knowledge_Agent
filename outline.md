# TCP三次握手和四次挥手——开发计划

> **主题**：`blueprint`（Checkpoint Plan 已选定）—— 深藏青底 + 青色强调 + IBM Plex Mono，工程蓝图气质
> **总时长**：约 5 分 30 秒（口播约 1350 字 ÷ 4 字/秒）
> **章节数**：7 章 / 22 步

---

## 1. intro-tcp — TCP是什么（3 steps · ~22s）

**信息池**（从 article 抽取的细节）：

- 类型：协议定位。TCP位于OSI七层模型的传输层（第四层）—— article §1
- 类型：核心功能。保证数据可靠、有序、不丢失地从一台设备传输到另一台 —— article §1
- 类型：比喻。TCP像保证货物安全送达的快递公司 —— article §1

**开发计划**：

- step 1 (~7s) — 主题词 TCP + 副标题"三次握手和四次挥手"
- step 2 (~8s) — 快递公司比喻：TCP像保证货物安全送达的快递
- step 3 (~7s) — 三个关键词卡片：可靠、有序、不丢失

口播节选：
> "TCP，中文叫传输控制协议。它在互联网七层模型里属于传输层，是最核心的协议之一。"

---

## 2. handshake-three — 三次握手建立连接（4 steps · ~38s）

**信息池**：

- 类型：步骤描述。SYN → SYN+ACK → ACK 三步走 —— article §3.2
- 类型：核心概念。初始序列号ISN（Initial Sequence Number）—— article §3.2
- 类型：比喻。TCP握手像打电话确认对方在线 —— article §3.1
- 类型：本质原因。三次刚刚好，双方都确认对方收到了自己的消息 —— article §3.3

**开发计划**：

- step 1 (~9s) — 章节标题"三次握手" + 问号钩子："为什么要握手？"
- step 2 (~10s) — 第一步动画：客户端 SYN 发出，箭头指向服务器
- step 3 (~10s) — 第二步：服务器 SYN+ACK 返回，箭头双向
- step 4 (~9s) — 第三步：客户端 ACK 发出，连接建立完成

口播节选：
> "在TCP传输数据之前，必须先建立连接。这个过程需要三步，所以叫三次握手。"

---

## 3. handshake-why — 为什么是三次（3 steps · ~25s）

**信息池**：

- 类型：反面论证。一次不够：客户端发了SYN就以为连上了，但服务器可能根本没收到 —— article §3.3
- 类型：反面论证。两次有问题：服务器发了SYN加ACK，万一ACK丢了怎么办 —— article §3.3
- 类型：结论。三次刚刚好，双方都确认对方收到了自己的消息 —— article §3.3

**开发计划**：

- step 1 (~8s) — 错误示意：一次握手 → 失败场景
- step 2 (~8s) — 错误示意：两次握手 → ACK丢失场景
- step 3 (~9s) — 正确示意：三次握手 → 双向确认成功

口播节选：
> "一次不够。发了SYN就以为连上了，但服务器可能根本没收到。两次也有问题。"

---

## 4. wave-four — 四次挥手关闭连接（5 steps · ~42s）

**信息池**：

- 类型：步骤描述。FIN → ACK → FIN → ACK 四步走 —— article §4.2
- 类型：核心概念。TIME_WAIT状态，等待2MSL（约60秒）才真正关闭 —— article §4.3
- 类型：原因。为什么不能三次：TCP是全双工，数据双向传输 —— article §4.1
- 类型：步骤细节。服务器收到FIN后先回ACK（可能还有数据在传），等数据发完再发自己的FIN —— article §4.2

**开发计划**：

- step 1 (~8s) — 章节标题"四次挥手" + 全双工动画解释
- step 2 (~9s) — 第一步FIN + 第二步ACK
- step 3 (~9s) — 第三步FIN + 第四步ACK
- step 4 (~8s) — TIME_WAIT状态说明，60秒倒计时动画
- step 5 (~8s) — 连接关闭，回归初始状态

口播节选：
> "数据传输是双向的。你说'我发完了'，对方可能还在给你发数据。所以关闭也得双向分别确认。"

---

## 5. state-diagram — 状态转换图（3 steps · ~25s）

**信息池**：

- 类型：流程图。客户端状态链：CLOSED → SYN_SENT → ESTABLISHED → FIN_WAIT_1 → FIN_WAIT_2 → TIME_WAIT → CLOSED —— article §5.1
- 类型：流程图。服务器状态链：LISTEN → SYN_RECEIVED → ESTABLISHED → CLOSE_WAIT → LAST_ACK → CLOSED —— article §5.2
- 类型：工具推荐。Wireshark抓包工具，过滤条件 tcp.flags.syn==1 —— article §6

**开发计划**：

- step 1 (~8s) — 客户端状态转换流程图动画
- step 2 (~8s) — 服务器状态转换流程图动画
- step 3 (~9s) — Wireshark工具介绍 + 抓包示例说明

口播节选：
> "客户端一开始是CLOSED初始状态。发了SYN变成SYN_SENT。收到服务器回复变成ESTABLISHED。"

---

## 6. interview-qa — 面试常问问题（4 steps · ~38s）

**信息池**：

- 类型：Q&A。为什么三次握手：防止历史连接混乱（SYN超时重传场景）—— article §7.1
- 类型：Q&A。为什么四次挥手：TCP全双工，双向分别确认 —— article §7.2
- 类型：Q&A。SYN洪水攻击：攻击者发SYN但不完成握手，耗尽服务器资源；防御：SYN Cookie —— article §7.3
- 类型：Q&A。TIME_WAIT为什么60秒：2MSL，确保关闭过程所有包消散，不影响新连接 —— article §7.4

**开发计划**：

- step 1 (~10s) — Q1 为什么是三次握手（SYN超时重传场景）
- step 2 (~9s) — Q2 为什么是四次挥手（全双工解释）
- step 3 (~10s) — Q3 SYN洪水攻击 + SYN Cookie防御
- step 4 (~9s) — Q4 TIME_WAIT为什么是60秒（2MSL解释）

口播节选：
> "面试官问这个问题，不是考你背书。真正的原因是——两次握手没法防止历史连接混乱。"

---

## 7. summary — 总结（2 steps · ~15s）

**信息池**：

- 类型：核心结论。三次握手确认双方收发能力，建立可靠连接 —— article §8
- 类型：核心结论。四次挥手确保双方数据传完，优雅关闭连接 —— article §8

**开发计划**：

- step 1 (~8s) — 两个核心结论大字展示
- step 2 (~7s) — 结语金句："搞懂这两个过程，你对TCP的理解就超过大多数人了"

口播节选：
> "三次握手确认双方收发能力，建立可靠连接。四次挥手确保双方数据传完，优雅关闭连接。"

---

## 素材清单

### intro-tcp
- ✓ ASCII字符绘制网络层次图（代码即可）
- ⚠️ 如有TCP/IP协议栈示意图可放置（待用户提供）

### handshake-three
- ✓ SYN/SYN+ACK/ACK 三步ASCII流程图（代码即可）
- ⚠️ 如有真实抓包数据可嵌入（待用户提供）

### handshake-why
- ✓ 一次/两次/三次对比示意（代码即可）

### wave-four
- ✓ FIN/ACK/FIN/ACK 四步ASCII流程图（代码即可）
- ⚠️ TIME_WAIT 60秒倒计时动效

### state-diagram
- ✓ 客户端状态转换图（代码绘制）
- ✓ 服务器状态转换图（代码绘制）

### interview-qa
- ⚠️ SYN洪水攻击示意图（待提供或placeholder）

### summary
- ✓ 金句排版（代码即可）