---
title: Get Started
order: 1
---

# End-to-End Secure Communication for Distributed Applications

In this step-by-step guide we’ll learn how to build mutually-authenticated, end-to-end encrypted,
secure messaging channels that protect en-route messages against eavesdropping, tampering, and forgery.

Data, within modern distributed applications, are rarely exchanged over a single point-to-point
transport connection. Application messages routinely flow over complex, multi-hop, multi-protocol
routes — _across data centers, through queues and caches, via gateways and brokers_ — before reaching
their end destination.

Transport layer security protocols are unable to protect application messages because their protection
is constrained by the length and duration of the underlying transport connection. Ockam is a collection of
programming libraries (in Rust and Elixir) that make it simple for our applications to guarantee end-to-end
integrity, authenticity, and confidentiality of data.

We no longer have to implicitly depend on the defenses of every machine or application within the same,
usually porous, network boundary. Our application's messages don't have to be vulnerable at every point,
along their journey, where a transport connection terminates.

Instead, our application can have a strikingly smaller vulnerability surface and easily make
_granular authorization decisions about all incoming information and commands._

Let's build mutually-authenticated, end-to-end protected communication between distributed applications:

### Setup

If you don't have it, please [install](https://www.rust-lang.org/tools/install) the latest version of Rust.

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Next, create a new cargo project to get started:

```
cargo new --lib hello_ockam && cd hello_ockam && mkdir examples &&
  echo 'ockam = "*"' >> Cargo.toml && cargo build
```

If the above instructions don't work on your machine, please
[post a question](https://github.com/ockam-network/ockam/discussions/1642),
we would love to help.

### Step-by-step

- [01. Node](/learn/how-to-guides/rust/01-node/)
- [02. Worker](/learn/how-to-guides/rust/02-worker)
- [03. Routing](/learn/how-to-guides/rust/03-routing)
- [04. Transport](/learn/how-to-guides/rust/04-transport)
- [05. Secure Channel](/learn/how-to-guides/rust/05-secure-channel)
