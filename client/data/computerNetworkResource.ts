import type { ResourceDocument } from "@/components/subjects/resourceTypes";

const COMPUTER_NETWORK_RESOURCE: ResourceDocument = {
  "subject": "Computer Networks",
  "format_version": "2.0",
  "reading_style": "topic_based",
  "topics": [
    {
      "title": "Fundamentals of Computer Networks",
      "subsections": [
        {
          "id": "basics-of-computer-networks",
          "title": "Basics of Computer Networks",
          "summary": "Computer network is a collection of interconnected devices that communicate with each other to exchange data and resources.",
          "sections": [
            {
              "id": "basics-of-computer-networks--overview",
              "heading": "Overview",
              "explanation": "Computer network is a collection of interconnected devices that communicate with each other to exchange data and resources. It enables efficient communication and supports services like email, file sharing, and internet access. Nodes are physical devices such as computers, mobiles, or printers. Routers and switches control the flow of information. Transmission media carry data from one device to another. Wired media includes Ethernet and optical fiber cables. Basic of Computer Networks Working Computer network operates by enabling devices to communicate and exchange data using a shared communication system. Each device in the network follows predefined rules to ensure that data is transmitted accurately, efficiently, and securely. Working Structure A network consists of nodes such as computers, servers, routers, and switches that send or receive data. These nodes are connected through links, which may be wired (cables, optical fiber) or wireless (Wi-Fi, radio signals). When data is sent, it is broken into small packets and transmitted across the network. Protocols define how data packets are formatted, transmitted, received, and acknowledged. Each device is identified by a unique IP address, which ensures data reaches the correct destination. Network devices like switches and routers forward data packets along the best available path. Security mechanisms, such as firewalls, monitor traffic and allow or block data based on security rules. Types of Computer Network Architecture\nClient-Server Architecture: Represents a type of computer network architecture in which nodes function as servers or clients, where the server manages client behavior, known as Client-Server Architecture ."
            },
            {
              "id": "basics-of-computer-networks--peer-to-peer-architecture",
              "heading": "Peer-to-Peer Architecture",
              "explanation": "Operates without any central server, allowing each device to act as either a client or a server, known as P2P (Peer-to-Peer) Architecture . These are physical devices that connect computers, printers and other electronic equipment to a network and enable data sharing, transferring and managing."
            },
            {
              "id": "basics-of-computer-networks--router",
              "heading": "Router",
              "explanation": "Functions as a networking device that connects multiple networks and directs data between them. Connects local networks to the internet Determines the best path for data packets Uses IP addresses to forward data correctly"
            },
            {
              "id": "basics-of-computer-networks--switch",
              "heading": "Switch",
              "explanation": "Connects devices within the same network and manages internal data communication. Connects computers, printers, and servers Sends data only to the intended device Improves network efficiency and performance"
            },
            {
              "id": "basics-of-computer-networks--hub",
              "heading": "Hub",
              "explanation": "Acts as a basic device that connects multiple devices within a network. Broadcasts data to all connected devices Does not filter or manage traffic Less secure and less efficient than a switch"
            },
            {
              "id": "basics-of-computer-networks--bridge",
              "heading": "Bridge",
              "explanation": "Connects two network segments and filters traffic between them. Reduces unnecessary data transmission Improves network performance Works using MAC addresses"
            },
            {
              "id": "basics-of-computer-networks--gateway",
              "heading": "Gateway",
              "explanation": "Connects two different networks that use different protocols. Translates data between different systems Enables communication between dissimilar networks Commonly used to connect private networks to external networks"
            },
            {
              "id": "basics-of-computer-networks--access-point-ap",
              "heading": "Access Point (AP)",
              "explanation": "Provides wireless connectivity to devices in a network. Extends a wired network into Wi-Fi Allows mobile devices to connect wirelessly Improves network coverage area"
            },
            {
              "id": "basics-of-computer-networks--modem",
              "heading": "Modem",
              "explanation": "Converts digital data into signals suitable for transmission and vice versa. Connects a home or office network to the ISP Converts digital signals to analog and back Enables internet access"
            },
            {
              "id": "basics-of-computer-networks--firewall",
              "heading": "Firewall",
              "explanation": "Security device that monitors and controls network traffic. Blocks unauthorized access Filters incoming and outgoing data Protects networks from cyber threats Goals and Uses\nResource Sharing: Allow multiple users to share hardware, software, and data resources efficiently.\nInternet and Cloud Access: Enable access to the Internet, online services, and cloud-based applications.\nCost Efficiency: Reduce operational and infrastructure costs through shared resources and centralized systems.\nReliability and Availability: Improve system reliability using backup paths and fault-tolerant mechanisms.\nScalability and Growth: Support easy expansion by adding new devices and services as demand increases.\nSecurity and Control: Protect data and network resources using authentication, access control, and monitoring."
            }
          ],
          "quick_revision": [
            "Computer network is a collection of interconnected devices that communicate with each other to exchange data and resources.",
            "Peer-to-Peer Architecture: Operates without any central server, allowing each device to act as either a client or a server, known as P2P (Peer-to-Peer) Architecture . These are physical devices…",
            "Router: Functions as a networking device that connects multiple networks and directs data between them.",
            "Switch: Connects devices within the same network and manages internal data communication.",
            "Hub: Acts as a basic device that connects multiple devices within a network.",
            "Bridge: Connects two network segments and filters traffic between them.",
            "Gateway: Connects two different networks that use different protocols.",
            "Access Point (AP): Provides wireless connectivity to devices in a network.",
            "Modem: Converts digital data into signals suitable for transmission and vice versa.",
            "Firewall: Security device that monitors and controls network traffic."
          ]
        },
        {
          "id": "network-devices",
          "title": "Network Devices",
          "summary": "Network Devices are the physical appliances required for communication and interaction between computers on a computer network.",
          "sections": [
            {
              "id": "network-devices--overview",
              "heading": "Overview",
              "explanation": "Network Devices are the physical appliances required for communication and interaction between computers on a computer network. Enable communication by transmitting and receiving data between devices. Allow devices to connect to networks efficiently and securely. Improve network performance by reducing congestion and managing traffic. Extend network coverage and solve signal loss or attenuation problems. Types of Network Devices Layer 1 Devices: Physical Layer These devices deal with raw electrical or optical signals (bits). These devices don't understand IP addresses or MAC addresses."
            },
            {
              "id": "network-devices--hub",
              "heading": "Hub",
              "explanation": "It is a central connection point for devices in a LAN. It takes an incoming signal on one port and blindly broadcasts it to all other ports without knowing the recipient. High network traffic collisions and security risks (everyone sees everyone's data). It is a obsolete device, replaced by Switches."
            },
            {
              "id": "network-devices--repeater",
              "heading": "Repeater",
              "explanation": "It regenerates signals to extend the range of a network. It receives a weak signal (due to attenuation over long cables), amplifies it, and retransmits it. Extending WiFi range or Ethernet cables beyond 100 meters."
            },
            {
              "id": "network-devices--modem-modulator-demodulator",
              "heading": "Modem (Modulator-Demodulator)",
              "explanation": "This bridges the gap between digital computer data and analog signals, allowing devices to connect to the internet via telephone, cable, or fiber lines. Connects your home network to the ISP (Internet Service Provider). Converts digital signals from your computer into analog signals for telephone/cable lines (Modulation) and vice-versa (Demodulation). Layer 2 Devices: Data Link Layer These devices work with MAC Addresses (Physical Addresses). They are smarter than hubs."
            },
            {
              "id": "network-devices--switch",
              "heading": "Switch",
              "explanation": "A switch is a high-speed networking device that connects devices (computers, printers, servers) within a Local Area Network (LAN), Unlike hub, switch learns the MAC address of every connected device. It sends data only to the specific port where the destination device is connected. Reduces collisions and improves security and speed."
            },
            {
              "id": "network-devices--bridge",
              "heading": "Bridge",
              "explanation": "This connects two separate LAN segments to make them appear as one. Filters traffic based on MAC addresses to keep local traffic local, reducing congestion. Largely replaced by Switches (which are essentially multi-port bridges)."
            },
            {
              "id": "network-devices--access-point-ap",
              "heading": "Access Point (AP)",
              "explanation": "It is a networking hardware device that allows Wi-Fi-enabled devices, such as laptops and smartphones, to connect to a wired network. Acts as a bridge between wired Ethernet and wireless Wi-Fi devices. An AP only provides Wi-Fi signal and it does not route traffic or assign IP addresses. Layer 3 Devices: Network Layer These devices work with IP Addresses (Logical Addresses) and connect different networks together."
            },
            {
              "id": "network-devices--router",
              "heading": "Router",
              "explanation": "It is a networking device that connects multiple networks and directs data packets between them using IP addresses. It uses IP Addresses to determine the best path for data packets to travel. It maintains a Routing Table to make these decisions. Routers stop broadcast traffic, isolating networks from each other."
            },
            {
              "id": "network-devices--brouter-bridging-router",
              "heading": "Brouter (Bridging Router)",
              "explanation": "It is a networking device combining bridge and router functions, operating at both the Data Link and Network layers of the OSI model. It can route known protocols (like TCP/IP). It bridge unknown protocols (like non-routable legacy traffic) at the same time and rarely used today. Layer 4-7 Devices: Advanced Processing"
            },
            {
              "id": "network-devices--gateway",
              "heading": "Gateway",
              "explanation": "It is a hardware device or software node that acts as an entry/exit point between two distinct networks using different protocols, translating data to ensure compatibility. It can convert protocols, data formats, or architectures (e.g., connecting a TCP/IP network to a legacy Mainframe network). An Internet Gateway translates your private LAN requests into public internet requests."
            },
            {
              "id": "network-devices--firewall",
              "heading": "Firewall",
              "explanation": "It is a network security system, comprising hardware, software, or both that monitors and controls incoming and outgoing network traffic based on predetermined security rules It is a physical appliance at the network edge. This is installed on a specific server or PC. It tracks active connections. Hub vs. Switch vs. Router Feature Hub Switch Router Layer Layer 1 (Physical) Layer 2 (Data Link) Layer 3 (Network) Address Type None (Bits) MAC Address IP Address Data Flow Broadcast (to all) Unicast (to destination) Route (best path) Intelligence Dumb Smart Smarter Used For Obsolete Connecting Devices (LAN) Connecting Networks (WAN)"
            }
          ],
          "quick_revision": [
            "Network Devices are the physical appliances required for communication and interaction between computers on a computer network.",
            "Hub: It is a central connection point for devices in a LAN. It takes an incoming signal on one port and blindly broadcasts it to all other ports without knowing the recipient.",
            "Repeater: It regenerates signals to extend the range of a network.",
            "Modem (Modulator-Demodulator): This bridges the gap between digital computer data and analog signals, allowing devices to connect to the internet via telephone, cable, or fiber lines.",
            "Switch: A switch is a high-speed networking device that connects devices (computers, printers, servers) within a Local Area Network (LAN), Unlike hub, switch learns the MAC…",
            "Bridge: This connects two separate LAN segments to make them appear as one.",
            "Access Point (AP): It is a networking hardware device that allows Wi-Fi-enabled devices, such as laptops and smartphones, to connect to a wired network.",
            "Router: It is a networking device that connects multiple networks and directs data packets between them using IP addresses.",
            "Brouter (Bridging Router): It is a networking device combining bridge and router functions, operating at both the Data Link and Network layers of the OSI model.",
            "Gateway: It is a hardware device or software node that acts as an entry/exit point between two distinct networks using different protocols, translating data to ensure…",
            "Firewall: It is a network security system, comprising hardware, software, or both that monitors and controls incoming and outgoing network traffic based on predetermined security…"
          ]
        },
        {
          "id": "types-of-computer-networks",
          "title": "Types of Computer Networks",
          "summary": "A computer network is a group of two or more independent computers and devices connected to share data, resources, and services.",
          "sections": [
            {
              "id": "types-of-computer-networks--overview",
              "heading": "Overview",
              "explanation": "A computer network is a group of two or more independent computers and devices connected to share data, resources, and services. These connections can be established using wired media or wireless technologies. Types of Computer Networks are classified based on several factors: Geographical area Transmission medium Ownership and access control Classification Based on Geographical Area Categorizing computer networks according to the physical distance or area they cover, ranging from small personal spaces to large global regions. Based on geographical area, computer networks are mainly divided into five types:"
            },
            {
              "id": "types-of-computer-networks--personal-area-network-pan",
              "heading": "Personal Area Network (PAN)",
              "explanation": "This connects personal devices within a very short range around a single user.\nCoverage Range: 1–10 meters\nKey Technologies: Bluetooth, NFC, Infrared\nReal-World Example: Smartphone connected to wireless earbuds\nWhen It Is Used: For short-range communication between personal devices Personal Area Network"
            },
            {
              "id": "types-of-computer-networks--local-area-network-lan",
              "heading": "Local Area Network (LAN)",
              "explanation": "This connects computers and devices within a limited area such as a home, office, or building.\nCoverage Range: One room, building, or small campus\nKey Technologies: Ethernet, Wi-Fi\nReal-World Example: Home or office Wi-Fi network\nWhen It Is Used: For fast and secure communication within a local location Local Area Network"
            },
            {
              "id": "types-of-computer-networks--campus-area-network-can",
              "heading": "Campus Area Network (CAN)",
              "explanation": "A CAN connects multiple LANs within a campus or a group of nearby buildings.\nCoverage Range: University or corporate campus\nKey Technologies: Ethernet, Fiber Optics\nReal-World Example: College or corporate campus network\nWhen It Is Used: To interconnect LANs across a campus under one organization Campus Area Network"
            },
            {
              "id": "types-of-computer-networks--metropolitan-area-network-man",
              "heading": "Metropolitan Area Network (MAN)",
              "explanation": "A MAN connects multiple networks within a city or metropolitan region.\nCoverage Range: City or large town\nKey Technologies: Fiber Optics, Microwave, Metro Ethernet\nReal-World Example: City-wide ISP network\nWhen It Is Used: To provide high-speed connectivity across a city Metropolitan Area Network (MAN)"
            },
            {
              "id": "types-of-computer-networks--wide-area-network-wan",
              "heading": "Wide Area Network (WAN)",
              "explanation": "A WAN connects networks over large geographical areas such as countries or continents.\nCoverage Range: Country, continent, or global\nKey Technologies: Leased lines, Satellite links, Internet\nReal-World Example: The Internet\nWhen It Is Used: To enable long-distance and global communication Wide Area Network Classification Based on Transmission Medium Computer networks can also be classified based on how data is transmitted between devices. Transmission technology refers to the method or medium used to send data signals from one device to another."
            },
            {
              "id": "types-of-computer-networks--broadcast-network",
              "heading": "Broadcast Network",
              "explanation": "This used a shared communication medium among all connected devices. Data transmitted by one node is received by all other nodes in the network. Each data packet contains a destination address, and only the intended device processes it. Communication follows a one-to-many model. No dedicated physical path exists between sender and receiver.\nExamples: Ethernet (bus-based) Wireless LAN (Wi-Fi)"
            },
            {
              "id": "types-of-computer-networks--point-to-point-network",
              "heading": "Point-to-Point Network",
              "explanation": "This uses dedicated links between communicating devices. Data is transmitted directly from one node to another. Communication follows a one-to-one model. Data may pass through intermediate devices (routers or switches). Requires routing algorithms to determine the best path.\nExamples: Internet Leased line networks Telephone networks Classification Based on Ownership and Access Control This classification focuses on administrative control and accessibility, rather than transmission medium, size, or technology. Based on transmission technology, computer networks are mainly divided into three types:"
            },
            {
              "id": "types-of-computer-networks--private-network",
              "heading": "Private Network",
              "explanation": "This type of network is owned and managed by an individual, organization, or institution Access is restricted to authorized users only Requires authentication such as usernames, passwords, VPNs, or access tokens Used mainly for internal communication Offers higher security, privacy, and control\nExamples: Corporate intranet Office LAN Private cloud network"
            },
            {
              "id": "types-of-computer-networks--public-network",
              "heading": "Public Network",
              "explanation": "This type of network is owned by service providers or government authorities Accessible to the general public Requires little or no authorization to connect Offers wide accessibility but lower security Usually shared by a large number of users Can operate over both wired and wireless media\nExamples: Internet Public Wi-Fi networks Mobile cellular networks"
            },
            {
              "id": "types-of-computer-networks--hybrid-network",
              "heading": "Hybrid Network",
              "explanation": "This type of network is combination of private and public networks Some parts of the network are restricted, while others are publicly accessible Allows organizations to maintain internal security while providing external connectivity Common in modern enterprise and cloud-based systems\nExamples: Corporate network connected to the Internet Enterprise cloud networks Online banking systems Internetwork An internetwork is a collection of two or more independent networks connected together to function as a single logical network. It enables communication between devices across different networks. The Internet itself is the largest example of an internetwork. Consists of multiple networks, not just individual computers. Uses networking devices to interconnect networks Intranet and Extranet"
            },
            {
              "id": "types-of-computer-networks--intranet",
              "heading": "Intranet",
              "explanation": "An intranet is a private network used within an organization. It is accessible only to authorized users such as employees. Owned and controlled by a single organization Access restricted using login credentials Used for internal communication and collaboration Improves information sharing within the organization Uses Employee portals Internal emails and messaging Sharing company policies and documents Internal applications (HR, payroll, project management) Examples Corporate internal website University campus portal Government department internal systems"
            },
            {
              "id": "types-of-computer-networks--extranet",
              "heading": "Extranet",
              "explanation": "An extranet is an extension of an intranet that allows limited access to external users. it connects the organization's internal network with trusted outsiders. Partially private network Access provided to partners, vendors, suppliers, or customers Requires authentication and authorization Often implemented using VPN or secure web access Uses Business-to-business (B2B) communication Supply chain management Customer portals Partner collaboration platforms Examples Supplier management system Online banking portals Vendor access portals"
            }
          ],
          "quick_revision": [
            "A computer network is a group of two or more independent computers and devices connected to share data, resources, and services.",
            "Personal Area Network (PAN): This connects personal devices within a very short range around a single user.",
            "Local Area Network (LAN): This connects computers and devices within a limited area such as a home, office, or building.",
            "Campus Area Network (CAN): A CAN connects multiple LANs within a campus or a group of nearby buildings.",
            "Metropolitan Area Network (MAN): A MAN connects multiple networks within a city or metropolitan region.",
            "Wide Area Network (WAN): A WAN connects networks over large geographical areas such as countries or continents.",
            "Broadcast Network: This used a shared communication medium among all connected devices.",
            "Point-to-Point Network: This uses dedicated links between communicating devices.",
            "Private Network: This type of network is owned and managed by an individual, organization, or institution Access is restricted to authorized users only Requires authentication such as…",
            "Public Network: This type of network is owned by service providers or government authorities Accessible to the general public Requires little or no authorization to connect Offers wide…",
            "Hybrid Network: This type of network is combination of private and public networks Some parts of the network are restricted, while others are publicly accessible Allows organizations to…",
            "Intranet: An intranet is a private network used within an organization.",
            "Extranet: An extranet is an extension of an intranet that allows limited access to external users. it connects the organization's internal network with trusted outsiders."
          ]
        }
      ]
    },
    {
      "title": "Network Models",
      "subsections": [
        {
          "id": "osi-model",
          "title": "OSI Model",
          "summary": "Layers of OSI Model The OSI (Open Systems Interconnection) Model is a conceptual framework created by the International Organization for Standardization (ISO) to describe how data is transmitted across a network using a structured seven-layer architecture.",
          "sections": [
            {
              "id": "osi-model--overview",
              "heading": "Overview",
              "explanation": "Layers of OSI Model The OSI (Open Systems Interconnection) Model is a conceptual framework created by the International Organization for Standardization (ISO) to describe how data is transmitted across a network using a structured seven-layer architecture. Divides network communication into seven functional layers. Assigns specific responsibilities to each layer. Promotes compatibility between different networking systems. Simplifies network design, implementation, and troubleshooting."
            },
            {
              "id": "osi-model--layer-1-the-physical-layer",
              "heading": "Layer 1: The Physical Layer",
              "explanation": "Layer 1: The Physical Layer is the foundation of the OSI model, acting as the bridge for actual physical connections between devices. Its primary mission is the transmission of raw, unstructured bitstreams over a physical medium from one node to the next.\nCore Responsibility: It manages the hardware-level transmission of individual bits. When receiving data, it translates incoming physical signals back into digital 0s and 1s to be processed by the Data Link layer.\nEssential Hardware: Common devices operating at this level include Hubs , Repeaters , Modems , and Cables .\nBit Synchronization: It ensures the sender and receiver are \"in sync\" by providing a clock signal that controls the timing of bit transmission.\nBit Rate Control: It dictates the transmission speed, defined as the number of bits sent per second.\nPhysical Topologies: It defines the structural layout of the network, such as Bus, Star, or Mesh configurations."
            },
            {
              "id": "osi-model--transmission-mode",
              "heading": "Transmission Mode",
              "explanation": "It determines the direction of data flow, utilizing modes like Simplex (one-way), Half-Duplex (two-way, one at a time), or Full-Duplex (simultaneous two-way)."
            },
            {
              "id": "osi-model--layer-2-the-data-link-layer-dll",
              "heading": "Layer 2: The Data Link Layer (DLL)",
              "explanation": "Data Link Layer serves as the bridge between the physical hardware and the logical network, ensuring reliable node-to-node delivery of data. Its primary goal is to ensure that data transfer is error-free across the physical medium."
            },
            {
              "id": "osi-model--data-packaging-framing",
              "heading": "Data Packaging (Framing)",
              "explanation": "A packet from the Network layer is encapsulated into a frame using \"start\" and \"stop\" bits, so the receiver knows where each unit of data begins and ends. One packet usually maps to one frame; it's split into multiple frames only if it's larger than the network's frame size (MTU). Addressing and Hardware DLL uses MAC addresses to identify devices and adds sender and receiver MAC addresses to the frame header. Common devices Switches and Bridges.\nSublayers: DLL is divided into two sublayers, LLC (Logical Link Control) , which handles flow and error control and interfaces with upper layers, and MAC (Media Access Control) , which controls how devices access the shared medium and handles hardware addressing.\nError Control: Detects and retransmits damaged or lost frames.\nFlow Control: Matches data rate between a fast sender and slow receiver to avoid loss.\nAccess Control: Decides which device can transmit when multiple devices share a channel, avoiding collisions."
            },
            {
              "id": "osi-model--layer-3-the-network-layer",
              "heading": "Layer 3: The Network Layer",
              "explanation": "Network Layer manages data transmission between hosts across different networks by handling logical addressing and path finding.\nData Unit: Data segments are encapsulated into Packets.\nLogical Addressing: Assigns unique IP addresses (sender and receiver) to the packet header to identify devices globally.\nRouting: Determines the most efficient physical path from the source to the destination across interconnected networks.\nHardware: Primarily implemented via Routers and Switches .\nInter-networking: Facilitates communication between disparate networks by directing traffic to the correct destination."
            },
            {
              "id": "osi-model--layer-4-the-transport-layer",
              "heading": "Layer 4: The Transport Layer",
              "explanation": "Transport Layer ensures end-to-end delivery of entire messages. It acts as a liaison between the Application layer and the Network layer, making sure data reaches the correct application on the destination host. Data Unit Data is broken into Segments.\nService Point Addressing: Uses Port Numbers (e.g., Port 80 for web traffic) to deliver data to the correct process or application, not just the device.\nSegmentation & Reassembly: Splits large messages into smaller segments for transmission and reassembles them in order at the destination.\nProtocols: Common protocols include TCP (reliable), UDP (fast).\nConnection-Oriented (TCP): Requires a \"handshake\" to establish a connection; ensures reliability via error checking and acknowledgements.\nConnectionless (UDP): Sends data immediately without a formal connection; faster but offers no guarantee of delivery."
            },
            {
              "id": "osi-model--layer-5-the-session-layer",
              "heading": "Layer 5: The Session Layer",
              "explanation": "Session Layer acts as the \"dialogue manager,\" controlling the opening, closing, and security of communication channels between two devices.\nSession Lifecycle: Manages establishment, maintenance, and termination of connections between applications.\nAuthentication & Security: Verifies communicating parties and ensures the connection is secure.\nSynchronization: Inserts checkpoints into the data stream so a failed transfer can resume from the last checkpoint instead of restarting.\nDialog Control: Directs whether communication is half-duplex (alternating) or full-duplex (simultaneous)."
            },
            {
              "id": "osi-model--practical-example",
              "heading": "Practical Example",
              "explanation": "In a web-based messenger, the Session Layer keeps the active link between your browser and server open, while handling background encryption and data conversion."
            },
            {
              "id": "osi-model--layer-6-the-presentation-layer",
              "heading": "Layer 6: The Presentation Layer",
              "explanation": "Often called the Translation Layer, the Presentation Layer ensures data is formatted, secured, and compressed so the receiving application can correctly interpret it.\nTranslation: Converts data from the Application layer into a standardized format for transmission, bridging differences in data representation between systems.\nStandards & Formats: Handles media encoding using standards such as JPEG, MPEG , and GIF .\nEncryption/Decryption: Secures data by converting plaintext into ciphertext and back, typically handled by protocols like TLS/SSL .\nCompression: Reduces the number of bits needed for transmission, improving network efficiency and speed."
            },
            {
              "id": "osi-model--layer-7-the-application-layer",
              "heading": "Layer 7: The Application Layer",
              "explanation": "Layer 7: The Application Layer sits at the top of the OSI stack, acting as the direct interface between the software user and the network. It produces the data to be sent and displays data received from other layers.\nUser Interface: Acts as a \"window\" for network-based applications (web browsers, email clients) to access network services.\nCore Protocols: Uses high-level protocols such as HTTP/S (Web), SMTP (Email), FTP (File Transfer), and DNS (Domain Name Resolution).\nNetwork Virtual Terminal (NVT): Lets users log into and interact with remote hosts as if physically present.\nFile Transfer, Access, and Management (FTAM): Provides a framework to retrieve, manage, and manipulate files on remote computers."
            },
            {
              "id": "osi-model--directory-services",
              "heading": "Directory Services",
              "explanation": "Offers distributed database access to manage global information about network objects and services. Data Flows in the OSI Model When data moves from one device to another, it travels down through all 7 layers at the sender's end, then climbs back up through all 7 layers at the receiver's end. Application Layer Creates the data. Presentation Layer Formats and encrypts the data. Session Layer Establishes and manages the connection.\nTransport Layer: Breaks data into segments for reliable delivery.\nNetwork Layer: Packages segments into packets and routes them.\nData Link Layer: Frames the packets and sends them to the next device.\nPhysical Layer: Converts frames into bits and transmits them. Each layer adds its own information to the data, and these additions are removed in reverse order when the data arrives. Example Suppose Person A sends an email to Person B.\nStep 1 (Application Layer): Person A writes and sends the email using an app like Gmail or Outlook.\nStep 2 (Presentation Layer): The mail app encrypts and formats the data for transmission.\nStep 3 (Session Layer): A connection is established between sender and receiver.\nStep 4 (Transport Layer): The email data is broken into segments, with sequence numbers and error-checking added for reliability.\nStep 5 (Network Layer): Packets are addressed to find the best route.\nStep 6 (Data Link Layer): Packets are framed, MAC addresses are added, and frames are checked for errors."
            },
            {
              "id": "osi-model--step-7-physical-layer",
              "heading": "Step 7 (Physical Layer)",
              "explanation": "Frames are transmitted as electrical or optical signals over a physical medium like an ethernet cable or Wi-Fi. Once the email reaches Person B, this process runs in reverse, each layer removes its added information, until the original email is displayed in Person B's inbox. OSI Layers Protocols Used in the OSI Layers Layer Working Protocol Data Unit (PDU) Protocols Establishes physical connection between devices and transmits raw bits over the medium. Bits USB, SONET/SDH Data Link Layer Provides node-to-node delivery and error detection/correction. Frames Ethernet, PPP, PPTP Network Layer Handles logical addressing and routing of data between different networks. Packets IP, ICMP, IGMP, OSPF Transport Layer Ensures end-to-end communication, segmentation, flow control, and error handling. Segments (TCP) / Datagrams (UDP) TCP, UDP, SCTP Session Layer Establishes, manages, and terminates communication sessions between applications. Data RPC Presentation Layer Translates, encrypts, and formats data for the application layer. Data TLS/SSL, MIME Provides network services directly to end-user applications. Data FTP, SMTP, DNS, DHCP, NetBIOS"
            }
          ],
          "quick_revision": [
            "Layers of OSI Model The OSI (Open Systems Interconnection) Model is a conceptual framework created by the International Organization for Standardization (ISO) to…",
            "Layer 1: The Physical Layer: Layer 1: The Physical Layer is the foundation of the OSI model, acting as the bridge for actual physical connections between devices.",
            "Transmission Mode: It determines the direction of data flow, utilizing modes like Simplex (one-way), Half-Duplex (two-way, one at a time), or Full-Duplex (simultaneous two-way).",
            "Layer 2: The Data Link Layer (DLL): Data Link Layer serves as the bridge between the physical hardware and the logical network, ensuring reliable node-to-node delivery of data.",
            "Data Packaging (Framing): A packet from the Network layer is encapsulated into a frame using \"start\" and \"stop\" bits, so the receiver knows where each unit of data begins and ends.",
            "Layer 3: The Network Layer: Network Layer manages data transmission between hosts across different networks by handling logical addressing and path finding.",
            "Layer 4: The Transport Layer: Transport Layer ensures end-to-end delivery of entire messages.",
            "Layer 5: The Session Layer: Session Layer acts as the \"dialogue manager,\" controlling the opening, closing, and security of communication channels between two devices.",
            "Practical Example: In a web-based messenger, the Session Layer keeps the active link between your browser and server open, while handling background encryption and data conversion.",
            "Layer 6: The Presentation Layer: Often called the Translation Layer, the Presentation Layer ensures data is formatted, secured, and compressed so the receiving application can correctly interpret it.",
            "Layer 7: The Application Layer: Layer 7: The Application Layer sits at the top of the OSI stack, acting as the direct interface between the software user and the network.",
            "Directory Services: Offers distributed database access to manage global information about network objects and services.",
            "Step 7 (Physical Layer): Frames are transmitted as electrical or optical signals over a physical medium like an ethernet cable or Wi-Fi."
          ]
        },
        {
          "id": "tcp-ip-model",
          "title": "TCP/IP Model",
          "summary": "The TCP/IP model is a layered networking framework that explains how data is communicated between devices over a network using standardized protocols to ensure reliable and efficient transmission.",
          "sections": [
            {
              "id": "tcp-ip-model--overview",
              "heading": "Overview",
              "explanation": "The TCP/IP model is a layered networking framework that explains how data is communicated between devices over a network using standardized protocols to ensure reliable and efficient transmission. Defined as a four-layer architecture consisting of Application, Transport, Internet, and Network Access layers. Standardized by RFC 1122, which specifies its structure and behavior. Simpler and more practical than the seven-layer OSI model. Serves as the core framework of the modern Internet and networking systems. TCP/IP Layers Layers of TCP/IP Model"
            },
            {
              "id": "tcp-ip-model--application-layer",
              "heading": "Application Layer",
              "explanation": "This is the top layer of the TCP/IP model, where applications like web browsers, email clients, and file-sharing tools interact with the network. Acts as a bridge between user applications and lower network layers. Supports protocols such as HTTP, FTP, SMTP, and DNS. Handles data formatting so information is correctly understood by both sender and receiver. Provides encryption for secure communication. Manages sessions to track ongoing connections."
            },
            {
              "id": "tcp-ip-model--transport-layer",
              "heading": "Transport Layer",
              "explanation": "Ensures reliable and efficient delivery of data between devices, managing segmentation, ordering, and retransmission as needed. Breaks large messages into packets and reassembles them at the destination. TCP checks for errors, resends lost data, and ensures correct order. UDP provides low-latency, connectionless delivery without error checking. Prevents the receiver from being overwhelmed by regulating data flow. Uses port numbers to allow multiple applications to share the network simultaneously. Transport Layers"
            },
            {
              "id": "tcp-ip-model--tcp-transmission-control-protocol",
              "heading": "TCP (Transmission Control Protocol)",
              "explanation": "TCP is used when reliability and accuracy are important. It ensures that data is delivered exactly as sent. TCP detects errors in the data using checksums to ensure integrity. If any data is lost or corrupted during transmission, TCP automatically resends it. Data is broken into packets, and TCP ensures these packets arrive in the correct sequence. TCP establishes a connection between sender and receiver before sending data, maintaining a stable session throughout the communication. Loading web pages, downloading files, sending emails, or any application where data must be complete and accurate."
            },
            {
              "id": "tcp-ip-model--udp-user-datagram-protocol",
              "heading": "UDP (User Datagram Protocol)",
              "explanation": "UDP is used when speed is more important than perfect accuracy. It is faster but does not guarantee reliable delivery. UDP detects errors via checksums but does not verify or recover from them. Lost or damaged data is not resent. Packets may arrive out of order, and the protocol does not fix it. Because it avoids extra checks and connections, UDP is faster and uses fewer resources. Live video streaming, online gaming, VoIP calls, or real-time applications where speed matters more than reliability."
            },
            {
              "id": "tcp-ip-model--internet-layer",
              "heading": "Internet Layer",
              "explanation": "Responsible for addressing, packaging, and routing data packets so they can travel across networks and reach the correct destination device. It ensures that data can move between different networks efficiently. Internet Layer Assigns IP addresses to identify source and destination devices. Determines the best path for data to travel across networks. Breaks large packets into smaller ones for transmission and reassembles them at the destination. Primarily uses IP (Internet Protocol), along with supporting protocols like ICMP for error reporting and ARP for address resolution."
            },
            {
              "id": "tcp-ip-model--network-access-link-layer",
              "heading": "Network Access (Link Layer)",
              "explanation": "Responsible for physically transmitting data over network hardware, including cables, switches, and wireless connections. It handles how data is formatted for the network medium and ensures it reaches the next device on the path. Network Access (Link Layer) Sends and receives raw bits over physical media like Ethernet cables, fiber optics, or Wi-Fi. Organizes data into frames for proper transmission and recognition by devices. Detects transmission errors using checksums or CRC. Uses hardware addresses to identify devices within the same network segment. Determines how multiple devices share the same physical medium, avoiding collisions. Working The working of TCP/IP can be explained with the help of the diagram given below and explained When Sending Data (From Sender to Receiver)\nApplication Layer: The user’s software (like a web browser or email client) creates the data and passes it to the next layer.\nTransport Layer: The data is broken into segments, and TCP or UDP adds control information to ensure reliable delivery or fast transmission.\nInternet Layer: Each segment is encapsulated into packets with IP addresses so it can be routed across networks to the destination device."
            },
            {
              "id": "tcp-ip-model--network-access-link-layer-2",
              "heading": "Network Access (Link) Layer",
              "explanation": "The packets are converted into frames suitable for the physical network (Ethernet, Wi-Fi) and transmitted over cables or wireless signals. When Receiving Data (At the Destination)\nNetwork Access Layer: The frames are received from the physical medium and checked for errors.\nInternet Layer: Frames are unpacked to extract packets and use the IP address to ensure it reaches the correct device.\nTransport Layer: Segments are reassembled into the original message, and any missing or corrupted data is corrected (if TCP is used)."
            },
            {
              "id": "tcp-ip-model--application-layer-2",
              "heading": "Application Layer",
              "explanation": "The complete data is delivered to the user application (like the browser displaying a webpage or the email client showing a message). Advantages and Disadvantages of TCP/IP Advantages\nWidely Used: Forms the foundation of the Internet and most modern networks.\nPlatform Independent: Works on different hardware and operating systems.\nReliable Communication: TCP ensures error checking, delivery confirmation, and data integrity.\nScalable: Can support small networks to global Internet-scale networks.\nOpen Standard: Free to use and not controlled by a single organization. Disadvantages\nComplexity for Beginners: Can be difficult to fully understand all protocols.\nNo Strict Layer Enforcement: Unlike OSI, layer boundaries are not rigid, which may cause implementation variations.\nOverhead: TCP’s error checking and reliability features can add extra data overhead.\nSecurity Limitations: Basic TCP/IP was not designed with strong built-in security; additional protocols like TLS/SSL are needed."
            },
            {
              "id": "tcp-ip-model--limited-multimedia-support",
              "heading": "Limited Multimedia Support",
              "explanation": "Original design focused on data, not optimized for real-time audio/video (needs extra protocols). Why was TCP/IP chosen Over the OSI Model TCP/IP is preferred over the OSI model because it is simpler, practical, and widely implemented in real-world networks and the Internet. Unlike OSI, which is mostly theoretical, TCP/IP is protocol-driven and focuses on actual communication needs. Illustration of Relationship between OSI and TCP/IP Protocol\nSimpler Structure: TCP/IP has only 4 layers, compared to 7 in OSI, making it easier to implement and understand in real systems.\nProtocol-Driven Design: TCP/IP was designed based on working protocols, while OSI is mostly a theoretical framework.\nFlexibility and Robustness: TCP/IP adapts well to different hardware and networks and includes error handling, routing, and congestion control.\nOpen Standard: TCP/IP is open, free to use, and not controlled by any single organization, which helped it gain universal acceptance.\nActual Use vs Conceptual Model: OSI is great for learning and design principles, but TCP/IP is the model actually used in real-world networking."
            }
          ],
          "quick_revision": [
            "The TCP/IP model is a layered networking framework that explains how data is communicated between devices over a network using standardized protocols to ensure reliable…",
            "Application Layer: This is the top layer of the TCP/IP model, where applications like web browsers, email clients, and file-sharing tools interact with the network.",
            "Transport Layer: Ensures reliable and efficient delivery of data between devices, managing segmentation, ordering, and retransmission as needed.",
            "TCP (Transmission Control Protocol): TCP is used when reliability and accuracy are important.",
            "UDP (User Datagram Protocol): UDP is used when speed is more important than perfect accuracy.",
            "Internet Layer: Responsible for addressing, packaging, and routing data packets so they can travel across networks and reach the correct destination device.",
            "Network Access (Link Layer): Responsible for physically transmitting data over network hardware, including cables, switches, and wireless connections.",
            "Network Access (Link) Layer: The packets are converted into frames suitable for the physical network (Ethernet, Wi-Fi) and transmitted over cables or wireless signals.",
            "Application Layer: The complete data is delivered to the user application (like the browser displaying a webpage or the email client showing a message).",
            "Limited Multimedia Support: Original design focused on data, not optimized for real-time audio/video (needs extra protocols)."
          ]
        }
      ]
    },
    {
      "title": "Physical Layer",
      "subsections": [
        {
          "id": "physical-layer",
          "title": "Physical Layer",
          "summary": "Physical Layer in OSI Model The Physical Layer is the lowest OSI layer responsible for transmitting raw data bits through physical network hardware.",
          "sections": [
            {
              "id": "physical-layer--overview",
              "heading": "Overview",
              "explanation": "Physical Layer in OSI Model The Physical Layer is the lowest OSI layer responsible for transmitting raw data bits through physical network hardware. Handles physical and electrical data transmission Includes cables, connectors, plugs, and receivers Transfers raw bits between devices Defines hardware standards and signal types Physical Layer in OSI Model Functions of Physical Layer The Physical Layer is responsible for sending raw data as bits over a physical medium. It converts data into signals that can travel through wires, fiber optics, or wireless channels (encoding) and turns these signals back into data at the receiver (decoding). It ensures signals are transmitted correctly and uses techniques like modulation to prepare the data for transmission and demodulation to retrieve it at the other end. This layer also decides how data flows (one-way, two-way alternately, or simultaneously) through transmission modes and controls the speed and timing of data transmission to keep everything running smoothly. Physical Topologies Physical topologies describe the physical arrangement of devices and cables in a network. Below are the different topologies used in Computer Networks Line Configuration\nPoint-to-Point configuration: In Point-to-Point configuration, there is a line (link) that is fully dedicated to carrying the data between two devices."
            },
            {
              "id": "physical-layer--multi-point-configuration",
              "heading": "Multi-Point configuration",
              "explanation": "In a Multi-Point configuration, there is a line (link) through which multiple devices are connected. Types of Network Topology . Protocols in Physical Layer Typically, a combination of hardware and software programming makes up the physical layer. It consists of several protocols that control data transmissions on a network. The following are some examples of Layer 1 protocols: Ethernet (IEEE 802.3) : Widely used for wired networks. Wi-Fi (IEEE 802.11) : For wireless communication. Bluetooth (IEEE 802.15.1) : Short-range wireless communication. USB (Universal Serial Bus) : For connecting devices over short distances. Need of Physical Layer in Security In security, Physical Layer is essential because many attacks can occur before any software is involved. Threats at this level target the actual hardware or transmission medium."
            },
            {
              "id": "physical-layer--cable-tapping",
              "heading": "Cable Tapping",
              "explanation": "Hackers can intercept data by directly connecting to network cables. Physical Access : If someone gets into server rooms or hardware areas without permission, they can steal or damage equipment. Wireless Signal Interception : Attackers can capture Wi-Fi signals from outside using special tools. Hardware Manipulation : Someone might tamper with physical devices like routers or USB ports to secretly install harmful software. Applications It ensures devices can transmit and receive raw data over physical mediums. It provides universal standards for cables, connectors, and signaling, ensuring compatibility.\nSupport for Various Media: Works with wired (e.g., Ethernet) and wireless (e.g., Wi-Fi) technologies."
            }
          ],
          "quick_revision": [
            "Physical Layer in OSI Model The Physical Layer is the lowest OSI layer responsible for transmitting raw data bits through physical network hardware.",
            "Multi-Point configuration: In a Multi-Point configuration, there is a line (link) through which multiple devices are connected.",
            "Cable Tapping: Hackers can intercept data by directly connecting to network cables."
          ]
        },
        {
          "id": "types-of-network-topology",
          "title": "Types of Network Topology",
          "summary": "Network topology is the arrangement of devices (nodes) and connections (links) in a computer network.  It shows how devices are connected and how data flows between them.",
          "sections": [
            {
              "id": "types-of-network-topology--overview",
              "heading": "Overview",
              "explanation": "Network topology is the arrangement of devices (nodes) and connections (links) in a computer network. It shows how devices are connected and how data flows between them.\nPhysical Topology: Actual arrangement of devices and cables."
            },
            {
              "id": "types-of-network-topology--logical-topology",
              "heading": "Logical Topology",
              "explanation": "How data flows between devices. Point-to-Point Topology In point-to-point topology, two devices are connected directly to each other using a dedicated link. Only two devices communicate through the connection. Data can be transferred directly between the two devices.\nExample: A direct connection between two routers. Point to Point Topology Mesh Topology In mesh topology, devices are connected to several other devices through separate links. Data can take different paths to reach its destination. If one link fails, another link can be used for communication.\nExample: Mesh networks used in wireless home or office networks. Mesh Star Topology In star topology, all devices are connected to a central device, usually a switch. All communication between devices passes through the central device. Adding or removing a device does not affect the other connections.\nExample: Computers connected to a switch in an office LAN. Star Topology Bus Topology In bus topology, all devices share a single main cable called the backbone. Data travels along the main cable and is received by the intended device. It uses less cabling compared with some other topologies.\nExample: Traditional Ethernet networks that used a shared coaxial cable. Bus Topology Ring Topology In ring topology, each device is connected to two other devices, forming a ring. Data moves from one device to the next around the ring. Devices take turns transmitting data in networks that use token passing.\nExample: Token Ring networks. Ring Topology Tree Topology In tree topology, devices are connected in a hierarchical structure, forming different branches. It combines the features of star and hierarchical network structures. New devices or branches can be added as the network grows.\nExample: A large organization's network where different departments have separate network segments connected to a main network. Tree Topology Hybrid Topology In hybrid topology, two or more different network topologies are combined in the same network. Different parts of the network can use different topologies. The design can be changed according to the network's requirements.\nExample: A university network that uses star topology within buildings and connects those buildings using another topology. Hybrid Topology"
            }
          ],
          "quick_revision": [
            "Network topology is the arrangement of devices (nodes) and connections (links) in a computer network.",
            "Logical Topology: How data flows between devices."
          ]
        },
        {
          "id": "modes-of-transmission",
          "title": "Modes of Transmission",
          "summary": "Transmission Modes Transmission Modes describe how data is exchanged between two devices over a communication channel.  They specify whether information moves in a single direction or in both directions, and whether devices can transmit at the same time.",
          "sections": [
            {
              "id": "modes-of-transmission--overview",
              "heading": "Overview",
              "explanation": "Transmission Modes Transmission Modes describe how data is exchanged between two devices over a communication channel. They specify whether information moves in a single direction or in both directions, and whether devices can transmit at the same time. Defines the pattern of communication Determines sender and receiver roles Influences speed and performance Used in networking and telecommunication systems Transmission Modes\nNote: It is also known as a communication mode. Buses and networks are designed to allow communication to occur between individual devices that are interconnected Simplex Mode Simplex Mode is a transmission mode in which communication occurs in only one direction, from a sender to a receiver, without any possibility of reverse data flow. One device acts only as transmitter The other device acts only as receiver No feedback or acknowledgment is supported\nExample: Keyboard and traditional monitors. The keyboard can only introduce input, the monitor can only give the output. Advantages Simple and easy to implement Lower installation and maintenance cost Utilizes the entire bandwidth for sending Suitable for broadcast-type applications Disadvantages No error reporting from receiver Not suitable for interactive systems Cannot confirm successful delivery Limited use in modern two-way communication systems Half-Duplex Mode Half-Duplex Mode is a transmission mode in which communication can occur in both directions, but only one device can transmit at a time. The devices take turns sending and receiving data over the same channel. Supports bidirectional communication Uses a single shared communication channel Transmission occurs alternately between devices\nExample: Walkie-talkie in which message is sent one at a time and messages are sent in both directions. Advantages More flexible than one-way communication Cost-effective compared to full-duplex systems Efficient use of a single channel Suitable for controlled communication environments Disadvantages Cannot send and receive simultaneously Possible delay due to turn-based transmission Performance decreases with heavy traffic Risk of collision if control mechanisms fail Full-Duplex Mode Full-Duplex Mode is a transmission mode in which communication takes place in both directions at the same time. Both connected devices can transmit and receive data simultaneously without waiting for each other. Enables simultaneous two-way data exchange Uses separate channels or divided bandwidth Common in real-time communication systems\nExample: Telephone Network in which there is communication between two persons by a telephone line, through which both can talk and listen at the same time. Advantages Faster data transfer rate No waiting time between transmissions Improved communication efficiency Suitable for interactive applications Disadvantages Higher installation cost Requires more complex hardware Greater bandwidth requirement Increased system configuration complexity"
            }
          ],
          "quick_revision": [
            "Transmission Modes Transmission Modes describe how data is exchanged between two devices over a communication channel."
          ]
        },
        {
          "id": "transmission-media",
          "title": "Transmission Media",
          "summary": "Transmission Media in Computer Networks Transmission media refers to the physical or wireless communication channel used to carry data signals from one device to another within a computer network.",
          "sections": [
            {
              "id": "transmission-media--overview",
              "heading": "Overview",
              "explanation": "Transmission Media in Computer Networks Transmission media refers to the physical or wireless communication channel used to carry data signals from one device to another within a computer network. It forms the fundamental pathway through which information is transmitted, ensuring connectivity between networked devices. The selection of a transmission medium depends on factors such as Transmission distance Data transfer speed (bandwidth) Susceptibility to interference and noise Cost and installation requirements Based on the nature of the transmission path, transmission media are broadly classified into two main types: Types of Transmission Media Guided Media also known as wired or bounded transmission media, refers to transmission media in which data signals are transmitted through a physical path using cables. The signal is confined and guided along a fixed route, providing controlled communication between network devices. Uses physical cables to transmit data signals. Provides dedicated and well-defined transmission paths. Major types of guided media included Twisted Pair Cables, Coaxial Cables and Optical Fiber Cables. Offers higher data transmission rates compared to most wireless media. Provides better security due to physical connectivity and limited signal leakage. Suitable for short to long-distance communication, depending on the cable type used."
            },
            {
              "id": "transmission-media--twisted-pair-cable",
              "heading": "Twisted Pair Cable",
              "explanation": "A twisted pair cable consists of two individually insulated copper conductors twisted together in a helical pattern to minimize electromagnetic interference (EMI) and crosstalk between adjacent pairs. Multiple twisted pairs are typically enclosed within a protective outer sheath, making this cable one of the most commonly used and cost-effective guided transmission media. Twisting of conductors helps reduce interference and signal degradation. Multiple pairs can be bundled together within a single cable. Widely used due to low cost, flexibility, and ease of installation. Commonly used in telephone systems and local area networks (LANs). (a) Unshielded Twisted Pair (UTP) UTP cable consists of twisted copper wire pairs without any additional metallic shielding. The twisting provides basic protection against interference, making UTP suitable for environments with moderate noise levels. Unshielded Twisted Pair\nAdvantages: Least expensive among guided transmission media. Easy to install and maintain due to its lightweight and flexible nature. Supports high data transmission rates over short distances. Widely used in Ethernet-based LANs and telephone networks.\nDisadvantages: Lower performance and capacity compared to Shielded Twisted Pair (STP). Limited transmission distance due to signal attenuation. More susceptible to noise and electromagnetic interference. (b) Shielded Twisted Pair (STP) Shielded Twisted Pair (STP) cable consists of twisted pairs of insulated copper conductors enclosed within an additional metallic shielding layer, such as a foil or braided shield. This shielding provides enhanced protection against external electromagnetic interference (EMI) and reduces crosstalk, resulting in more stable and reliable data transmission. Shielded Twisted Pair Advantages Provides better performance at higher data transmission rates compared to UTP. Significantly reduces electromagnetic interference and crosstalk. Ensures more reliable and stable communication, especially in noisy environments. Suitable for high-speed Ethernet networks and voice and data transmission systems. Disadvantages Higher cost compared to Unshielded Twisted Pair (UTP). More complex installation and termination due to shielding requirements. Bulkier and less flexible, making cable management more difficult."
            },
            {
              "id": "transmission-media--coaxial-cable",
              "heading": "Coaxial Cable",
              "explanation": "Coaxial Cable consists of a central copper conductor surrounded by a dielectric insulating layer, a metallic shielding layer, and an outer protective jacket. This structure allows signals to be transmitted with better protection against noise and interference compared to twisted pair cables. Supports data transmission in both baseband mode (single channel) and broadband mode (multiple channels). Provides higher bandwidth than twisted pair cables. Strong shielding makes it more resistant to noise, crosstalk, and electromagnetic interference (EMI). Commonly used in cable television (CATV), broadband networks, and analog television systems. More durable and reliable due to its layered construction. Easier to install and maintain compared to optical fiber cables. Coaxial Cable\nAdvantages: Supports higher bandwidth than twisted pair cables. Offers better signal quality and reliability. Allows multiple channels using frequency division multiplexing (FDM). Less affected by external electromagnetic interference.\nDisadvantages: More expensive than twisted pair cables. Requires proper grounding to ensure safety and minimize interference. Bulkier and less flexible due to multiple layers. More vulnerable to security breaches, as the cable can be physically tapped."
            },
            {
              "id": "transmission-media--optical-fiber-cable",
              "heading": "Optical Fiber Cable",
              "explanation": "Optical Fiber Cable is a guided transmission medium that transmits data in the form of light signals through a glass or plastic core using the principle of total internal reflection. The core is surrounded by a cladding layer with a lower refractive index, which confines the light within the core and enables high-speed, long-distance data transmission. Supports very large data volumes at extremely high speeds. Can operate in unidirectional or bidirectional communication modes. WDM (Wavelength Division Multiplexer) allows multiple light signals to be transmitted simultaneously over a single fiber. Widely used where high bandwidth, long distance, and low signal loss are required.\nAdvantages: Provides very high bandwidth and data-carrying capacity. Lightweight and compact, making installation easier over long distances. Exhibits low signal attenuation, suitable for long-distance communication. Immune to electromagnetic interference (EMI) and electrical noise. Resistant to corrosion and harsh environmental conditions.\nDisadvantages: Complex installation and maintenance due to precise splicing and handling requirements. High initial installation and equipment cost. Fragile compared to copper cables and requires careful handling.\nMedical: Used in endoscopy, imaging systems, and laser-based surgical procedures.\nDefense and Aerospace: Supports secure, high-speed, and interference-free communication.\nCommunication: Widely used in internet backbone networks, undersea cables, and telecommunication systems."
            },
            {
              "id": "transmission-media--industrial-and-automotive",
              "heading": "Industrial and Automotive",
              "explanation": "Used for sensing, lighting, data communication, and safety systems. Unguided Media Unguided media, also known as wireless or Unbounded transmission media , uses electromagnetic waves to transmit data without any physical medium. Signals propagate through free space such as air or vacuum. The main types of unguided media are radio waves, microwaves, and infrared waves.\nFeatures: Signals propagate through air or free space Less secure due to broadcast nature Suitable for long-distance communication"
            },
            {
              "id": "transmission-media--radio-waves",
              "heading": "Radio Waves",
              "explanation": "Radio waves are a type of electromagnetic wave that can easily be generated and can propagate through buildings and other obstacles. They do not require line-of-sight between transmitting and receiving antennas, making them highly suitable for broadcast communication and wireless data transmission. Frequency Range 3 kHz – 300 GHz\nApplications: AM and FM radio broadcasting, television transmission, cordless phones, and wireless communication. Shortwave AM radio broadcasting VHF (Very High Frequency) FM radio and television UHF (Ultra High Frequency) Television and mobile communication Transmitter Generates and modulates the signal\nReceiver: Receives and demodulates the signal Radiowaves"
            },
            {
              "id": "transmission-media--microwaves",
              "heading": "Microwaves",
              "explanation": "Micro waves are a form of unguided transmission media that use line-of-sight communication, where the transmitting and receiving antennas must be properly aligned. The transmission range depends on the height of the antennas. Microwaves operate in the frequency range of 1 GHz to 300 GHz and are widely used in mobile communication, satellite links, and television distribution. Advantages Cost-effective compared to laying physical cables No need for land acquisition Suitable for communication over difficult terrains and oceans Supports high data transmission rates\nDisadvantages: Less secure without proper encryption Susceptible to weather conditions such as rain and fog Affected by obstacles due to line-of-sight requirement High cost of antenna design, installation, and maintenance Microwave Transmission"
            },
            {
              "id": "transmission-media--infrared",
              "heading": "Infrared",
              "explanation": "Infrared waves are used for short-range wireless communication and operate in the frequency range of 300 GHz to 400 THz. They cannot penetrate solid obstacles, which limits their range but helps minimize interference between nearby systems. Infrared waves are commonly used in TV remote controls, wireless keyboards, mice, and printers. Infrared Waves Difference Between Radio Waves, Micro Waves, and Infrared Waves Radio Waves Microwaves Infrared Waves Omnidirectional in nature Highly directional Directional, requires line of sight (LOS) Can penetrate buildings and obstacles easily due to low frequency Poor penetration; line of sight required Cannot penetrate obstacles Frequency range: 3 kHz – 300 GHz Frequency range: 1 GHz – 300 GHz Frequency range: 300 GHz – 400 THz Low security Medium security (encryption possible) Relatively high security but limited range Moderate attenuation Variable attenuation, depends on weather conditions High attenuation Some frequency bands require government licensing Most frequency bands are licensed by the government Generally unlicensed Low to moderate cost High cost Low cost Supports long-distance communication Suitable only for very short-distance communication Causes of Transmission Impairment Transmission impairment refers to the loss or distortion of signals during data transmission, leading to errors or reduced quality in communication. Common causes include signal distortion, attenuation, and noise all of which can affect the clarity and reliability of transmitted data. Transmission Impairment\nAttenuation: Loss of signal strength as the signal propagates over a transmission medium due to resistance and energy loss. In analog systems, amplifiers are used to increase signal strength, while in digital communication, repeaters or regenerators are used to restore the original signal.\nDistortion: Occurs when the shape of the transmitted signal changes. This typically happens in composite signals where different frequency components travel at different speeds, causing phase shifts and timing differences at the receiver.\nNoise: It refers to unwanted electrical or electromagnetic signals that interfere with the original signal, potentially corrupting data. Common types of noise include thermal noise, induced noise, crosstalk, impulse noise. Factors Considered for Designing the Transmission Media\nBandwidth: It refers to the range of frequencies that a transmission medium can support. Higher bandwidth allows higher data transmission rates, assuming other factors such as noise and attenuation remain constant. Transmission Impairment Transmission Impairment occurs when the received signal differs from the transmitted signal. Signal quality will be impacted as a result of transmission impairment.\nInterference: It is the disturbance of a signal caused by the addition of unwanted signals from external sources such as electromagnetic radiation or neighboring channels. It degrades signal clarity and may result in data corruption. Applications of Transmission Media in Computer Networks Transmission Media Application Unshielded Twisted Pair (UTP) Local Area Networks (LAN), telephones Shielded Twisted Pair (STP) Industrial networks, environments with high interference Optical Fiber Cable Long-distance communication, internet backbones Coaxial Cable Cable TV, broadband internet, CCTV Radio Wireless communication, AM/FM radio, mobile phones Infrared Remote controls, short-range communication Microwave Satellite communication, radar, long-distance links Planar Transmission Lines Planar transmission lines are specialized guided structures used to carry high-frequency electrical signals over very short distances within electronic circuits and printed circuit boards. Although they are not used as network communication media, they apply the same fundamental transmission principles used in guided transmission media, such as controlled signal propagation, impedance matching, and interference reduction. They follow the same physical layer concepts as guided transmission media. Used where very high-frequency signals must be transmitted with minimal loss. Help demonstrate how transmission media principles are applied inside electronic hardware. Commonly studied in advanced physical-layer and RF design contexts. Stripline Stripline is a planar guided transmission structure in which a conducting strip is embedded between two parallel ground planes, allowing high-frequency signals to propagate with excellent shielding and minimal electromagnetic interference. Fully enclosed structure provides high EMI immunity Supports TEM mode propagation Offers better signal isolation and stability Used in microwave and high-frequency circuit design Suitable for high-performance RF systems Microstripline Microstripline is a planar transmission structure consisting of a conducting strip placed on a dielectric substrate with a ground plane on the opposite side, making it widely used for high-frequency signal transmission in printed circuit boards. Simple and cost-effective PCB implementation Partially exposed fields → lower shielding than stripline Supports quasi-TEM mode propagation Common in RF circuits, antennas, and microwave PCBs Preferred for compact electronic designs"
            }
          ],
          "quick_revision": [
            "Transmission Media in Computer Networks Transmission media refers to the physical or wireless communication channel used to carry data signals from one device to another…",
            "Twisted Pair Cable: A twisted pair cable consists of two individually insulated copper conductors twisted together in a helical pattern to minimize electromagnetic interference (EMI) and…",
            "Coaxial Cable: Coaxial Cable consists of a central copper conductor surrounded by a dielectric insulating layer, a metallic shielding layer, and an outer protective jacket.",
            "Optical Fiber Cable: Optical Fiber Cable is a guided transmission medium that transmits data in the form of light signals through a glass or plastic core using the principle of total…",
            "Industrial and Automotive: Used for sensing, lighting, data communication, and safety systems.",
            "Radio Waves: Radio waves are a type of electromagnetic wave that can easily be generated and can propagate through buildings and other obstacles.",
            "Microwaves: Micro waves are a form of unguided transmission media that use line-of-sight communication, where the transmitting and receiving antennas must be properly aligned.",
            "Infrared: Infrared waves are used for short-range wireless communication and operate in the frequency range of 300 GHz to 400 THz."
          ]
        }
      ]
    },
    {
      "title": "Data Link Layer",
      "subsections": [
        {
          "id": "data-link-layer",
          "title": "Data Link Layer",
          "summary": "Data Link Layer in OSI Model The Data Link Layer is the second layer from the bottom in the seven-layer OSI model.  The major functions of the Data Link Layer include framing, physical addressing, error detection, flow control, and media access control.",
          "sections": [
            {
              "id": "data-link-layer--overview",
              "heading": "Overview",
              "explanation": "Data Link Layer in OSI Model The Data Link Layer is the second layer from the bottom in the seven-layer OSI model. The major functions of the Data Link Layer include framing, physical addressing, error detection, flow control, and media access control. It organises data into frames and provides node-to-node delivery over a physical link. It also provides an interface between the Network Layer and the Physical Layer. Data Link Layer in OSI Model Sub-Layers of The Data Link Layer"
            },
            {
              "id": "data-link-layer--logical-link-control-llc",
              "heading": "Logical Link Control (LLC)",
              "explanation": "This sublayer provides services to the Network Layer and handles functions such as multiplexing, flow control , error control , and acknowledgments, depending on the LLC service used.\nProtocol Identification: Helps identify and multiplex Network Layer protocols carried over the data link.\nFlow Control: Regulates the rate of data transmission to prevent data overflow between sender and receiver.\nError Control: Depending on the LLC service used, it may provide error control and acknowledgment mechanisms."
            },
            {
              "id": "data-link-layer--media-access-control-mac",
              "heading": "Media Access Control (MAC)",
              "explanation": "This is the lower sub-layer of the Data Link Layer responsible for controlling how devices access the physical transmission medium. It handles physical addressing and ensures that data is transmitted efficiently without conflicts on the network.\nPhysical Addressing: Uses source and destination MAC addresses in frames to identify devices on the local network.\nMedia Access Management: Controls when a device can send data to avoid collisions in shared communication channels.\nFrame Transmission: Delimits and processes frames for transmission over the physical medium. Functions of DLL Data Link Layer Services . Protocols in Data link layer There are various protocols in the data link layer , which are as follows Synchronous Data Link Protocol (SDLC) High-Level Data Link Control (HDLC) Serial Line Interface Protocol (SLIP) Point to Point Protocol (PPP) Link Access Procedure (LAP) Link Control Protocol (LCP) Network Control Protocol (NCP) Devices Operating at the Data Link Layer All these devices rely on MAC addresses for efficient frame delivery and play a important role in local network communication and access control . Devices at Data Link Layer"
            },
            {
              "id": "data-link-layer--switch",
              "heading": "Switch",
              "explanation": "A switch operates at the Data Link Layer ( Layer 2 ) and connects multiple devices within a LAN. It forwards data frames to the correct destination using MAC address tables."
            },
            {
              "id": "data-link-layer--bridge",
              "heading": "Bridge",
              "explanation": "A bridge is a Layer 2 networking device that connects network segments and forwards frames based on MAC addresses. It can divide a LAN into separate segments to reduce unnecessary traffic. Traditional standalone bridges are now uncommon, as modern Ethernet switches provide similar bridging functionality with multiple ports."
            },
            {
              "id": "data-link-layer--network-interface-card-nic",
              "heading": "Network Interface Card (NIC)",
              "explanation": "A NIC is a hardware component in devices like computers and printers. A NIC provides the network interface for a device and handles Data Link Layer functions such as MAC addressing and frame processing. It also interfaces with the Physical Layer to transmit and receive data over the network medium."
            },
            {
              "id": "data-link-layer--wireless-access-point-wap",
              "heading": "Wireless Access Point (WAP)",
              "explanation": "A WAP allows wireless devices to connect to a wired network. It operates primarily at the Data Link Layer and manages MAC-layer communication between wireless devices and the network. Uses protocols like Wi-Fi (IEEE 802.11) to communicate with devices. Note : The Data Link Layer can be targeted by attacks like MAC spoofing or ARP poisoning. Understanding how devices and frames operate at this layer helps detect and mitigate such threats. Switching and Network Segmentation Switching Techniques Virtual LAN Link Aggregation Error Control, Flow Control and ARQ Protocols Error Detection Error Correction Stop and wait ARQ Sliding Window Protocol- Go Back N Sliding Window Protocol- Selective Repeat Piggybacking Limitations"
            },
            {
              "id": "data-link-layer--link-level-scope",
              "heading": "Link-Level Scope",
              "explanation": "The Data Link Layer provides communication over a single link or network segment and does not perform end-to-end routing across multiple networks. Increased Overhead : Adding headers, trailers, and redundant data (for error correction) increases the size of transmitted data. Error Handling Dependency : While it can detect and correct some errors, it relies on upper layers for handling more complex issues. No Routing Capability : The Data Link Layer does not make routing decisions; routing between different networks is handled by the Network Layer. Resource Usage : Flow control and error correction mechanisms may consume extra processing power and memory Applications Local Area Networks (LANs) : Enables reliable communication between devices within a local network using protocols like Ethernet (IEEE 802.3). Wireless Networks (Wi-Fi) : Supports communication between wireless devices using standards such as IEEE 802.11, including MAC-layer medium access and frame handling. Switches and MAC Addressing : Facilitates the operation of switches by using MAC addresses to forward data frames to the correct device within the network. Point-to-Point Connections : Used in protocols like PPP (Point-to-Point Protocol) to establish and manage direct communication between two nodes."
            }
          ],
          "quick_revision": [
            "Data Link Layer in OSI Model The Data Link Layer is the second layer from the bottom in the seven-layer OSI model.",
            "Logical Link Control (LLC): This sublayer provides services to the Network Layer and handles functions such as multiplexing, flow control , error control , and acknowledgments, depending on the LLC…",
            "Media Access Control (MAC): This is the lower sub-layer of the Data Link Layer responsible for controlling how devices access the physical transmission medium.",
            "Switch: A switch operates at the Data Link Layer ( Layer 2 ) and connects multiple devices within a LAN. It forwards data frames to the correct destination using MAC address…",
            "Bridge: A bridge is a Layer 2 networking device that connects network segments and forwards frames based on MAC addresses.",
            "Network Interface Card (NIC): A NIC is a hardware component in devices like computers and printers.",
            "Wireless Access Point (WAP): A WAP allows wireless devices to connect to a wired network.",
            "Link-Level Scope: The Data Link Layer provides communication over a single link or network segment and does not perform end-to-end routing across multiple networks."
          ]
        },
        {
          "id": "switching-techniques",
          "title": "Switching Techniques",
          "summary": "Switching | Computer Networks Switching is the process of transferring data from one device to another within the same network or across different networks using switches.",
          "sections": [
            {
              "id": "switching-techniques--overview",
              "heading": "Overview",
              "explanation": "Switching | Computer Networks Switching is the process of transferring data from one device to another within the same network or across different networks using switches. It mainly occurs at the Data Link Layer (Layer 2) of the OSI model, where data is forwarded in the form of frames based on MAC addresses. A switch connects multiple devices within a network. It reduces interference by sending data only to the intended device. It forwards data frames to the correct port using MAC addresses. It delivers data directly to connected devices (computers, phones). For communication outside the local network, it forwards data to a router.\nExample: A website request passes through multiple switches and routers before reaching the server. Network Switching Network Switching is a specific type of switching used in computer networks. It is about transferring data packets from one device (node) to another across a network.\nFrame Reception: The switch receives a data frame from a connected device.\nMAC Address Extraction: The switch reads the destination MAC address from the frame header.\nLookup: The switch searches its MAC (switching) table for the destination address.\nForwarding: If the address is found, the frame is sent to the corresponding port. If not found, the switch performs flooding (forwards the frame to all ports except the incoming port).\nTable Update: The switch learns the source MAC address and updates its MAC table for future use.\nFrame Transmission: The frame is delivered to the correct destination device or forwarded toward the network. There are three types of switching methods Message Switching Message switching is one of the earliest switching techniques. In this method The entire message is sent to an intermediate node. The message is stored temporarily at that node before being forwarded to the next node. No dedicated path is established between the sender and receiver.\nAnalogy: Like sending a physical letter that is first stored at a post office before moving to the next branch. Circuit Switching Circuit switching is a connection-oriented method widely used in traditional telephone networks. In this method: a dedicated path is established between the sender and receiver before any data transmission begins The connection remains reserved for the entire duration of the communication session Both ends enjoy a fixed bandwidth and low latency.\nAnalogy: Like reserving a private road for the whole trip, even if no cars are on it for some time. Packet Switching Packet switching is the foundation of modern computer networks, including the Internet. In this method: Data is divided into small packets. Each packet carries a portion of the message and the destination address. Packets may travel through different paths in the network. At the destination, packets are reassembled to reconstruct the original message.\nAnalogy: Like sending a book in separate chapters through different courier routes, then reassembling them at the destination. Comparison of Switching Types Message Switching Circuit Switching Packet Switching No dedicated path; the entire message is stored and forwarded at each node. A fixed, dedicated path is established before transmission. Data is split into packets that follow dynamic or virtual paths. Very inefficient due to full message storage and forwarding. Inefficient because bandwidth remains reserved even when idle. Highly efficient due to optimal bandwidth utilization. High transmission delay. Low delay after initial setup. Delay varies based on network conditions. Less reliable and obsolete. Reliable with guaranteed connection. Reliable with error control and retransmission. Used in telegraph systems. Used in traditional telephone networks. Used in the Internet."
            }
          ],
          "quick_revision": [
            "Switching | Computer Networks Switching is the process of transferring data from one device to another within the same network or across different networks using…"
          ]
        },
        {
          "id": "virtual-lan",
          "title": "Virtual LAN",
          "summary": "Virtual LAN (VLAN) A Virtual LAN (VLAN) is a logical grouping of devices within a network that allows them to communicate as if they are on the same local network, even if they are physically connected to different switches.",
          "sections": [
            {
              "id": "virtual-lan--overview",
              "heading": "Overview",
              "explanation": "Virtual LAN (VLAN) A Virtual LAN (VLAN) is a logical grouping of devices within a network that allows them to communicate as if they are on the same local network, even if they are physically connected to different switches. It reduces unnecessary broadcast traffic, enhances security, and improves network performance, flexibility, and manageability. Traditionally, broadcast domains were separated using Layer 3 devices (routers).\nSame VLAN: Devices communicate directly within the same broadcast domain."
            },
            {
              "id": "virtual-lan--different-vlans",
              "heading": "Different VLANs",
              "explanation": "Communication requires Inter-VLAN Routing via a router or a Layer 3 switch (SVI). VLAN ID Ranges (Cisco Standard) VLAN 0 and VLAN 4095 Reserved VLAN IDs are defined by IEEE 802.1Q and used internally for protocol operations and cannot be configured or assigned to ports."
            },
            {
              "id": "virtual-lan--vlan-1-default-vlan",
              "heading": "VLAN 1 (Default VLAN)",
              "explanation": "The default VLAN on Cisco switches and all switch ports are assigned to VLAN 1 by default. It cannot be deleted and is commonly used for control and management protocols such as STP, CDP, and VTP. VLAN 2 to VLAN 1001 (Normal VLAN Range) This range is used for regular VLAN configuration. VLANs in this range are fully configurable, editable, and delectable, and are stored in the switch’s VLAN database. VLAN 1002 to VLAN 1005 Reserved VLANs for legacy network technologies such as FDDI and Token Ring. These VLANs are predefined and cannot be removed, even if the technologies are no longer in use. VLAN 1006 to VLAN 4094 (Extended VLAN Range) Designed for large-scale networks requiring a high number of VLANs. VLANs in this range are stored in the running configuration and typically require the switch to operate in VTP transparent mode. VLAN Configuration Example VLAN Configuration Create VLANs Switch(config) vlan 2 Switch(config-vlan) name Accounts Switch(config) vlan 3 Switch(config-vlan) name HR Assign switch ports to VLANs Switch(config) interface fa0/0 Switch(config-if) switchport mode access Switch(config-if) switchport access vlan 2 Switch(config) interface fa0/1 Switch(config-if) switchport mode access Switch(config-if) switchport access vlan 3 Here, port Fa0/0 is assigned to VLAN 2 and port Fa0/1 is assigned to VLAN 3. Since these VLANs are separate broadcast domains, devices in different VLANs require inter-VLAN routing to communicate with each other. Types of VLAN Links"
            },
            {
              "id": "virtual-lan--access-link",
              "heading": "Access Link",
              "explanation": "Connects a VLAN-unaware end device (such as a PC) to a VLAN-aware switch. Frames transmitted over an access link are untagged and belong to a single VLAN."
            },
            {
              "id": "virtual-lan--trunk-link",
              "heading": "Trunk Link",
              "explanation": "Connects VLAN-aware devices such as switch-to-switch or switch-to-router links. It carries traffic from multiple VLANs using IEEE 802.1Q tagging."
            },
            {
              "id": "virtual-lan--hybrid-link",
              "heading": "Hybrid Link",
              "explanation": "Supports both tagged and untagged frames on the same link. It is typically vendor-specific and not part of the IEEE 802.1Q standard. Features VLAN Tagging (IEEE 802.1Q) Inserts a 4-byte VLAN tag into Ethernet frames to identify the VLAN to which the frame belongs.\nVLAN Membership: Devices can be assigned to VLANs based on switch port, MAC address, or protocol type.\nVLAN Trunking: Allows multiple VLANs to share a single physical link between VLAN-aware devices."
            },
            {
              "id": "virtual-lan--dynamic-vlans",
              "heading": "Dynamic VLANs",
              "explanation": "VLAN membership is automatically assigned to devices based on predefined policies or authentication mechanisms. Real-Time Applications\nVoIP (Voice over IP): Dedicated voice VLANs ensure Quality of Service (QoS) by prioritizing voice traffic.\nVideo Conferencing: VLAN prioritization helps reduce latency and jitter, improving call quality.\nCloud and Data Centers: VLANs provide logical isolation of tenant workloads for security and traffic separation.\nIoT Networks: VLANs segment IoT devices to limit access and reduce security risks.\nGaming Networks: VLANs can prioritize gaming traffic to minimize lag and packet loss."
            },
            {
              "id": "virtual-lan--remote-access",
              "heading": "Remote Access",
              "explanation": "Secure VLANs support VPN users and external connections while maintaining network isolation. Advantages\nImproved Security: Sensitive traffic is isolated within separate VLANs.\nEnhanced Performance: Limits broadcast and multicast traffic, reducing unnecessary network load.\nSimplified Management: Logical grouping of users or departments (e.g., HR, Finance) simplifies administration.\nFlexibility: Devices can be moved between VLANs without physical cable changes.\nCost Efficiency: Reduces the need for multiple physical networks and excessive routing hardware.\nScalability: Large networks can be divided into manageable segments. Disadvantages\nIncreased Configuration Complexity: Requires careful planning and configuration.\nVLAN ID Limitations: Standard VLAN IDs are limited, which can affect very large networks.\nSecurity Risks: Misconfigurations may allow VLAN hopping attacks.\nInteroperability Issues: Compatibility problems may arise with non-standard or legacy devices.\nTroubleshooting Difficulty: Isolated traffic flows can make fault diagnosis more complex."
            }
          ],
          "quick_revision": [
            "Virtual LAN (VLAN) A Virtual LAN (VLAN) is a logical grouping of devices within a network that allows them to communicate as if they are on the same local network, even…",
            "Different VLANs: Communication requires Inter-VLAN Routing via a router or a Layer 3 switch (SVI).",
            "VLAN 1 (Default VLAN): The default VLAN on Cisco switches and all switch ports are assigned to VLAN 1 by default.",
            "Access Link: Connects a VLAN-unaware end device (such as a PC) to a VLAN-aware switch.",
            "Trunk Link: Connects VLAN-aware devices such as switch-to-switch or switch-to-router links.",
            "Hybrid Link: Supports both tagged and untagged frames on the same link.",
            "Dynamic VLANs: VLAN membership is automatically assigned to devices based on predefined policies or authentication mechanisms.",
            "Remote Access: Secure VLANs support VPN users and external connections while maintaining network isolation."
          ]
        },
        {
          "id": "link-aggregation",
          "title": "Link Aggregation",
          "summary": "Control Protocol The Link Aggregation Control Protocol (LACP) is an IEEE standard protocol that combines multiple physical Ethernet links into a single logical link.",
          "sections": [
            {
              "id": "link-aggregation--overview",
              "heading": "Overview",
              "explanation": "Control Protocol The Link Aggregation Control Protocol (LACP) is an IEEE standard protocol that combines multiple physical Ethernet links into a single logical link. This aggregation increases overall bandwidth and improves network reliability by allowing traffic to be shared across various links, while presenting a single connection to the network. It automatically detects and negotiates link aggregation between connected devices It supports up to 16 Ethernet interfaces in one aggregation group It allows a maximum of 8 active links, with the remaining links kept as a standby Provides load balancing across active links Ensures automatic failover if any link in the group fails LACP LACP Modes LACP operates in two negotiation modes that determine how link aggregation is established between devices:"
            },
            {
              "id": "link-aggregation--active-mode",
              "heading": "Active Mode",
              "explanation": "The port actively sends LACP Data Units (LACPDUs) to the connected device to initiate and maintain link aggregation."
            },
            {
              "id": "link-aggregation--passive-mode",
              "heading": "Passive Mode",
              "explanation": "The port does not initiate communication but responds to received LACPDUs. Link aggregation is formed only if the connected device operates in active mode. LACP Architecture and OSI Model Layers LACP functions across multiple layers of the OSI model to efficiently manage link aggregation and traffic flow:\nLayer 1 (Physical Layer): Combines multiple physical Ethernet links into a single logical communication channel."
            },
            {
              "id": "link-aggregation--layer-2-data-link-layer",
              "heading": "Layer 2 (Data Link Layer)",
              "explanation": "Groups switch ports into an aggregation set and manages MAC addressing and Ethernet frame transmission."
            },
            {
              "id": "link-aggregation--layer-3-network-layer",
              "heading": "Layer 3 (Network Layer)",
              "explanation": "Applies hashing algorithms based on parameters such as IP addresses, MAC addresses, or TCP/UDP port numbers to distribute traffic across active links for load balancing. Features of LACP"
            },
            {
              "id": "link-aggregation--port-capacity",
              "heading": "Port Capacity",
              "explanation": "Supports up to 8 active links in a Link Aggregation Group (LAG); additional links can be configured as standby."
            },
            {
              "id": "link-aggregation--lacp-multicast-address",
              "heading": "LACP Multicast Address",
              "explanation": "Uses the multicast MAC address 01:80:C2:00:00:02 to exchange LACP Data Units (LACPDUs) between devices.\nFast Mode: LACP packets are transmitted every 1 second\nSlow Mode (Default): LACP packets are transmitted every 30 seconds"
            },
            {
              "id": "link-aggregation--load-balancing",
              "heading": "Load Balancing",
              "explanation": "Traffic distribution can be performed using per-packet, per-flow, or per-socket hashing mechanisms based on MAC, IP, or transport-layer information."
            },
            {
              "id": "link-aggregation--failover-support",
              "heading": "Failover Support",
              "explanation": "Automatically redirects traffic to remaining operational links if any active link fails, ensuring continuous connectivity. LACP Standards 1. IEEE 802.3ad (Original Standard) Introduced Ethernet link aggregation Combines multiple full-duplex Ethernet links into one logical interface (LAG) Increases bandwidth using multiple lower-speed links instead of a single high-speed link 2. IEEE 802.1AX (Enhanced Standard) Successor to IEEE 802.3ad Provides improved fault tolerance and redundancy Ensures higher link availability Widely used in modern switches and data centers for scalable performance LACP Configuration (Cisco Example) # Enable LACP on switch ports Switch(config)# interface range fa0/0 - 3 Switch(config-if-range)# channel-group 1 mode active Switch(config-if-range)# exit # Verify EtherChannel Switch# show etherchannel summary LACP Port Selection Here, ports fa0/0–fa0/3 are aggregated into LAG 1 using LACP in active mode LACP Commands Real-World Applications\nEnterprise LANs: Aggregating switch uplinks for higher bandwidth.\nData Centers: Enhancing throughput and redundancy for servers and storage systems.\nService Providers: Bundling multiple WAN links to deliver high-speed connectivity."
            },
            {
              "id": "link-aggregation--high-availability-systems",
              "heading": "High-Availability Systems",
              "explanation": "Ensuring zero downtime with automatic failover. LACP increases network capacity by aggregating multiple physical links into a single logical channel, providing higher bandwidth, efficient traffic distribution, automatic failover, and simplified, cost-effective link management. LACP needs compatible devices and careful configuration, may cause packet reordering with improper load balancing, requires strict VLAN handling, and has limited port scalability."
            }
          ],
          "quick_revision": [
            "Control Protocol The Link Aggregation Control Protocol (LACP) is an IEEE standard protocol that combines multiple physical Ethernet links into a single logical link.",
            "Active Mode: The port actively sends LACP Data Units (LACPDUs) to the connected device to initiate and maintain link aggregation.",
            "Passive Mode: The port does not initiate communication but responds to received LACPDUs.",
            "Layer 2 (Data Link Layer): Groups switch ports into an aggregation set and manages MAC addressing and Ethernet frame transmission.",
            "Layer 3 (Network Layer): Applies hashing algorithms based on parameters such as IP addresses, MAC addresses, or TCP/UDP port numbers to distribute traffic across active links for load balancing.",
            "Port Capacity: Supports up to 8 active links in a Link Aggregation Group (LAG); additional links can be configured as standby.",
            "LACP Multicast Address: Uses the multicast MAC address 01:80:C2:00:00:02 to exchange LACP Data Units (LACPDUs) between devices.",
            "Load Balancing: Traffic distribution can be performed using per-packet, per-flow, or per-socket hashing mechanisms based on MAC, IP, or transport-layer information.",
            "Failover Support: Automatically redirects traffic to remaining operational links if any active link fails, ensuring continuous connectivity.",
            "High-Availability Systems: Ensuring zero downtime with automatic failover."
          ]
        },
        {
          "id": "framing",
          "title": "Framing",
          "summary": "Framing in Data Link Layer A frame is the basic unit of data transmission at the Data Link Layer, consisting of a structured group of bits that carries data along with control information.",
          "sections": [
            {
              "id": "framing--overview",
              "heading": "Overview",
              "explanation": "Framing in Data Link Layer A frame is the basic unit of data transmission at the Data Link Layer, consisting of a structured group of bits that carries data along with control information. Frames include control information such as addressing and error detection. Framing is performed at the Data Link Layer (DLL) of the OSI model. It divides a continuous stream of bits into manageable and meaningful units. Framing enables reliable transmission and proper processing at the receiver. It helps in synchronization between the sender and receiver. Data Link layer services\nNote: Framing is crucial in techniques like Time Division Multiplexing (TDM), where data is sent in fixed time slots. Data Link Layer technologies such as Ethernet, Token Ring, and Frame Relay use well-defined frame formats to ensure proper data identification and reliable communication. Purpose of Framing"
            },
            {
              "id": "framing--framing-serves-several-purposes-in-the-data-link-layer",
              "heading": "Framing serves several purposes in the Data Link Layer",
              "explanation": "It defines clear frame boundaries so the receiver can correctly identify each frame. It carries source and destination addresses to support accurate point-to-point communication. It supports error detection and correction to maintain data integrity. It ensures reliable and well-organized data transmission.\nNote: The framing and reassembly process is handled entirely by the Data Link Layer and remains transparent to the user. Types of Framing"
            },
            {
              "id": "framing--fixed-size-framing",
              "heading": "Fixed-Size Framing",
              "explanation": "Frames have a predefined fixed size No start or end delimiters are required, as the frame length defines the boundary.\nDrawback: Causes internal fragmentation when data is smaller than the frame size, leading to bandwidth wastage.\nSolution: Padding is added to fill unused space and complete the frame. DLL - Upper to Lower Level"
            },
            {
              "id": "framing--variable-size-framing",
              "heading": "Variable-Size Framing",
              "explanation": "Variable-size framing uses explicit frame boundary indicators to identify the start and end of a frame.\nLength Field: The frame contains a length field that specifies its size (used in IEEE 802.3 Ethernet). If this field is corrupted, the receiver cannot correctly interpret the frame.\nEnd Delimiter (ED): A unique pattern marks the end of the frame (used in Token Ring). The delimiter pattern may also appear within the data. To resolve delimiter ambiguity, stuffing techniques are applied (a) Character/Byte Stuffing Used when data is character-based. If the data contains the special delimiter character (e.g., $ ), an escape character (e.g., \\O ) is inserted to distinguish it.\nExample: If ED = $, and data contains $, it becomes \\O$.\nDisadvantage: High processing overhead and obsolete in modern systems. (b) Bit Stuffing Bit Stuffing ED pattern is a sequence of bits (e.g., 01111 ). Whenever this pattern appears in data, a 0 is inserted to prevent confusion."
            },
            {
              "id": "framing--examples-details",
              "heading": "Examples & Details",
              "explanation": "Example Problem Data = 011100011110, ED = 0111, After bit stuffing -> 011010001101100 Another Example Data = 110001001, ED = 1000, After bit stuffing -> 11001010011 Problems in Framing Start and End Detection The receiver must correctly identify frame boundaries using delimiters or flags. Synchronization Sender and receiver must stay aligned on frame timing, especially in high-speed networks. Error Handling Noise can corrupt data or delimiters; error detection methods like CRC or checksums are used. Overhead Headers and trailers add control information but reduce usable bandwidth. Efficiency The goal is to maximize payload while minimizing overhead and processing delays. Compatibility Different devices may use different framing methods, causing misinterpretation."
            }
          ],
          "quick_revision": [
            "Framing in Data Link Layer A frame is the basic unit of data transmission at the Data Link Layer, consisting of a structured group of bits that carries data along with…",
            "Framing serves several purposes in the Data Link Layer: It defines clear frame boundaries so the receiver can correctly identify each frame.",
            "Fixed-Size Framing: Frames have a predefined fixed size No start or end delimiters are required, as the frame length defines the boundary.",
            "Variable-Size Framing: Variable-size framing uses explicit frame boundary indicators to identify the start and end of a frame.",
            "Examples & Details: Example Problem Data = 011100011110, ED = 0111, After bit stuffing -> 011010001101100 Another Example Data = 110001001, ED = 1000, After bit stuffing -> 11001010011…"
          ]
        },
        {
          "id": "error-control",
          "title": "Error Control",
          "summary": "Error Control in Data Link Layer Error control in the Data Link Layer ensures that frames transmitted by the sender are received correctly and reliably by the receiver.",
          "sections": [
            {
              "id": "error-control--overview",
              "heading": "Overview",
              "explanation": "Error Control in Data Link Layer Error control in the Data Link Layer ensures that frames transmitted by the sender are received correctly and reliably by the receiver. It focuses on: Detecting errors that occur during data transmission Correcting errors through retransmission when required Ensuring reliable frame delivery over a noisy communication channel The primary mechanism used for error control is Automatic Repeat Request (ARQ). In ARQ, if an error is detected or an ACK is not received, the sender retransmits the affected frame(s) until they are successfully received. There are basically two ways of doing Error control, as given below Ways of Error Control"
            },
            {
              "id": "error-control--error-detection",
              "heading": "Error Detection",
              "explanation": "Error detection refers to the identification of errors in transmitted data. These errors may occur due to noise or other transmission impairments while data is being sent from the transmitter to the receiver in a communication system. It involves techniques used to detect corrupted, distorted, or unclear data before it is processed further."
            },
            {
              "id": "error-control--error-correction",
              "heading": "Error Correction",
              "explanation": "Error correction refers to the process of fixing detected errors to recover the original, error-free data. It involves reconstructing the correct data either by using additional information or through retransmission. However, error correction techniques are generally complex, costly, and resource-intensive, which is why they are used selectively."
            },
            {
              "id": "error-control--stop-and-wait-arq",
              "heading": "Stop-and-Wait ARQ",
              "explanation": "In Stop-and-Wait ARQ, the sender transmits one data frame at a time and waits for an ACK (Acknowledgment) from the receiver. If the ACK is not received within a time limit, the sender retransmits the frame. Once the ACK is received, the sender sends the next frame. This process continues until all frames are successfully delivered."
            },
            {
              "id": "error-control--sliding-window-arq",
              "heading": "Sliding Window ARQ",
              "explanation": "Sliding Window ARQ is used for continuous data transmission, allowing the sender to transmit multiple frames without waiting for an acknowledgment for each one. This improves channel utilization and overall efficiency. Sliding Window ARQ is mainly divided into two types: Techniques of error control"
            },
            {
              "id": "error-control--stop-and-wait-arq-2",
              "heading": "Stop-and-Wait ARQ",
              "explanation": "In Stop-and-Wait ARQ, the sender transmits one data frame at a time and waits for an ACK (Acknowledgment) from the receiver. If the ACK is not received within a time limit, the sender retransmits the frame. Once the ACK is received, the sender sends the next frame. This process continues until all frames are successfully delivered.\nSliding Window ARQ: Sliding Window ARQ is used for continuous data transmission, allowing the sender to transmit multiple frames without waiting for an acknowledgment for each one. This improves channel utilization and overall efficiency. Sliding Window ARQ is mainly divided into two types:"
            },
            {
              "id": "error-control--go-back-n-arq",
              "heading": "Go-Back-N ARQ",
              "explanation": "It is an error control protocol in which the sender is allowed to send multiple frames (up to a fixed window size) without waiting for ACKs. The receiver sends ACKs for correctly received frames. If a frame is lost or arrives with an error, the receiver discards that frame and all subsequent frames. The sender then retransmits the erroneous frame along with all the frames sent after it. When no errors occur, the protocol behaves like a normal sliding window mechanism. This method is simple to implement but may cause unnecessary retransmissions."
            },
            {
              "id": "error-control--selective-repeat-arq",
              "heading": "Selective Repeat ARQ",
              "explanation": "It is an error control protocol in which only the frames that are lost or corrupted are retransmitted, unlike Go-Back-N where multiple frames are resent. It improves efficiency by avoiding unnecessary retransmissions. The sender retransmits only those frames for which a NAK is received or a timeout occurs. Each frame is acknowledged individually, allowing correctly received frames to be accepted and stored. Due to the need for additional buffering and tracking, the protocol is more complex, which limits its use compared to simpler ARQ schemes. The main difference between Go-Back-N ARQ and Selective Repeat ARQ is in the retransmission strategy. In Go-Back-N ARQ, if a frame is lost or corrupted, the sender retransmits that frame along with all subsequent frames in the window. In contrast, Selective Repeat ARQ retransmits only the specific frame that is lost or damaged, making it more efficient.\nRelated Articles: Stop-and-Wait ARQ Sliding Window ARQ Go-Back-N ARQ Selective Repeat ARQ"
            }
          ],
          "quick_revision": [
            "Error Control in Data Link Layer Error control in the Data Link Layer ensures that frames transmitted by the sender are received correctly and reliably by the receiver.",
            "Error Detection: Error detection refers to the identification of errors in transmitted data.",
            "Error Correction: Error correction refers to the process of fixing detected errors to recover the original, error-free data.",
            "Stop-and-Wait ARQ: In Stop-and-Wait ARQ, the sender transmits one data frame at a time and waits for an ACK (Acknowledgment) from the receiver.",
            "Sliding Window ARQ: Sliding Window ARQ is used for continuous data transmission, allowing the sender to transmit multiple frames without waiting for an acknowledgment for each one.",
            "Stop-and-Wait ARQ: In Stop-and-Wait ARQ, the sender transmits one data frame at a time and waits for an ACK (Acknowledgment) from the receiver.",
            "Go-Back-N ARQ: It is an error control protocol in which the sender is allowed to send multiple frames (up to a fixed window size) without waiting for ACKs.",
            "Selective Repeat ARQ: It is an error control protocol in which only the frames that are lost or corrupted are retransmitted, unlike Go-Back-N where multiple frames are resent."
          ]
        },
        {
          "id": "error-detection",
          "title": "Error Detection",
          "summary": "Error Detection in Computer Networks Error detection is a technique used in computer networks to identify whether transmitted data has been corrupted during communication.",
          "sections": [
            {
              "id": "error-detection--overview",
              "heading": "Overview",
              "explanation": "Error Detection in Computer Networks Error detection is a technique used in computer networks to identify whether transmitted data has been corrupted during communication. The sender adds redundant bits to the data before transmission, and the receiver verifies the integrity of the received frame by checking these bits. If an error is detected, the corrupted frame is discarded, and retransmission may be requested through appropriate error control mechanisms. Detects errors caused by noise, interference, or signal distortion Relies on redundant bits for consistency checking Common techniques include Parity Check, Checksum, and Cyclic Redundancy Check (CRC) Helps maintain data integrity and reliable communication Types of Errors"
            },
            {
              "id": "error-detection--single-bit-error",
              "heading": "Single-Bit Error",
              "explanation": "A single-bit error occurs when only one bit of the transmitted data unit is altered during transmission, resulting in corrupted data. Single-Bit Error"
            },
            {
              "id": "error-detection--burst-error",
              "heading": "Burst Error",
              "explanation": "A burst error occurs when two or more consecutive bits in a data unit are corrupted during transmission. Burst Error Error Detection Methods To detect errors, a common technique is to introduce redundancy bits that provide additional information. Various techniques for error detection include: Simple Parity Check Two-Dimensional Parity Check Checksum Cyclic Redundancy Check (CRC)"
            },
            {
              "id": "error-detection--simple-parity-check",
              "heading": "Simple Parity Check",
              "explanation": "Simple bit parity is a basic error detection technique in which an extra bit, called a parity bit, is added to a data unit before transmission. This parity bit helps the receiver determine whether the transmitted data has been corrupted. Detects all single-bit errors in transmitted data. Detects any odd number of bit errors, since odd bit changes alter the parity. Easy to implement in both hardware and software. Fails to detect errors when an even number of bits are corrupted. Not suitable for noisy communication channels with frequent errors. Parity bits are used to maintain a specific parity condition in the data. There are two types of parity: Even Parity : The parity bit is set so that the total number of 1s in the data (including the parity bit) is even. Odd Parity : The parity bit is set so that the total number of 1s in the data (including the parity bit) is odd. Simple Parity Check This scheme makes the total number of 1’s even, that is why it is called even parity checking."
            },
            {
              "id": "error-detection--two-dimensional-parity-check",
              "heading": "Two-Dimensional Parity Check",
              "explanation": "In two-dimensional parity check, parity bits are calculated for each row, similar to a simple parity check. In addition, parity bits are also computed for each column. These row and column parity bits are transmitted along with the data. At the receiver, parity bits are recalculated and compared with the received parity bits to detect errors. Can detect and correct all single-bit errors by identifying the exact row and column where the error occurred. Can detect many multiple-bit errors occurring at different positions in the data matrix. Provides better error detection capability than simple parity check. Certain patterns of multiple-bit errors may remain undetected. If parity bits themselves are corrupted, error detection may fail. 2-D Parity Check"
            },
            {
              "id": "error-detection--checksum",
              "heading": "Checksum",
              "explanation": "Checksum is an error detection technique used to detect errors in transmitted data. In this method, the sender divides the data into fixed-size segments and computes a checksum using 1’s complement arithmetic. The computed checksum is transmitted along with the data. At the receiver, the same computation is performed to verify data integrity. Can detect many types of errors, including single-bit and multiple-bit errors. Provides better error detection than simple parity and two-dimensional parity checks. Widely used in networking protocols such as IP, TCP, and UDP. Fast to compute and easy to implement in software. Supports only error detection and does not provide error correction. Some error patterns may go undetected, especially when errors cancel each other during addition. Less reliable compared to advanced techniques like Cyclic Redundancy Check (CRC). Checksum - Operation at Sender's Side The data is divided into k segments, each of m bits. All segments are added using 1’s complement arithmetic. The 1’s complement of the final sum is calculated to generate the checksum. The checksum is appended to the data and transmitted to the receiver. Checksum - Operation at Receiver's Side All received segments, including the checksum, are added using 1’s complement arithmetic. If the final result is all 1s, the data is considered error-free.. Otherwise, the data is discarded, indicating that an error has occurred. Checksum at Receiver 's and Sender's Side Checksum"
            },
            {
              "id": "error-detection--cyclic-redundancy-check-crc",
              "heading": "Cyclic Redundancy Check (CRC)",
              "explanation": "CRC is based on binary division, unlike checksum which uses addition; redundant CRC bits are appended so the transmitted data becomes exactly divisible by a predefined generator polynomial. At the receiver, the data is divided using the same polynomial; a zero remainder means the data is accepted, while a non-zero remainder indicates transmission errors. Highly effective in detecting single-bit, multiple-bit, and burst errors, making it more reliable than parity checks and checksum methods. Widely used in communication protocols such as Ethernet, HDLC, and USB due to its strong error detection capability. Provides only error detection, not error correction; its effectiveness depends on the chosen generator polynomial. More computationally complex than simple parity or checksum methods and introduces additional processing overhead. CRC CRC Working We have given dataword of length n and divisor of length k. Step 1 Append (k-1) zero's to the original message Step 2 Perform modulo 2 division Step 3 Remainder of division = CRC Step 4 Code word = Data with append k-1 zero's + CRC\nNote: CRC must be k-1 bits Length of Code word = n+k-1 bits Example : Let's data to be send is 1010000 and divisor in the form of polynomial is x 3 +1. CRC method discussed below. CRC Working To learn about CRC in detail, refer to Cyclic Redundancy Check(CRC)"
            }
          ],
          "quick_revision": [
            "Error Detection in Computer Networks Error detection is a technique used in computer networks to identify whether transmitted data has been corrupted during…",
            "Single-Bit Error: A single-bit error occurs when only one bit of the transmitted data unit is altered during transmission, resulting in corrupted data.",
            "Burst Error: A burst error occurs when two or more consecutive bits in a data unit are corrupted during transmission.",
            "Simple Parity Check: Simple bit parity is a basic error detection technique in which an extra bit, called a parity bit, is added to a data unit before transmission.",
            "Two-Dimensional Parity Check: In two-dimensional parity check, parity bits are calculated for each row, similar to a simple parity check.",
            "Checksum: Checksum is an error detection technique used to detect errors in transmitted data.",
            "Cyclic Redundancy Check (CRC): CRC is based on binary division, unlike checksum which uses addition; redundant CRC bits are appended so the transmitted data becomes exactly divisible by a predefined…"
          ]
        },
        {
          "id": "error-correction",
          "title": "Error Correction",
          "summary": "Error Correction in Computer Networks Error correction is the process of detecting and fixing errors that occur during data transmission so that the receiver can correctly understand the received data.",
          "sections": [
            {
              "id": "error-correction--overview",
              "heading": "Overview",
              "explanation": "Error Correction in Computer Networks Error correction is the process of detecting and fixing errors that occur during data transmission so that the receiver can correctly understand the received data. Errors may happen due to noise, interference, or other transmission issues. Error correction techniques help maintain data integrity and ensure reliable communication between network devices. These techniques allow the system to recover correct information even when some transmitted bits are corrupted."
            },
            {
              "id": "error-correction--forward-error-correction-fec",
              "heading": "Forward Error Correction (FEC)",
              "explanation": "Forward Error Correction is an error control technique used during data transmission. The sender adds extra (redundant) bits to the original data before sending it. These extra bits help the receiver detect and correct errors on its own. The receiver does not need to request retransmission from the sender. This reduces delay and improves communication reliability. FEC is useful where retransmission is costly or not possible. It is commonly used in wireless networks, satellite communication, and multimedia streaming. Hamming Code is a simple and common example of a Forward Error Correction technique."
            },
            {
              "id": "error-correction--backward-error-correction",
              "heading": "Backward Error Correction",
              "explanation": "Backward Error Correction is an error control technique used in data communication. The receiver checks the received data for errors using error detection methods. If an error is found, the receiver sends a retransmission request to the sender. The sender retransmits the corrupted data until it is received correctly. This method requires a feedback channel between the sender and receiver. It provides reliable data delivery but can increase transmission delay. Backward Error Correction is commonly implemented using Automatic Repeat Request (ARQ) techniques. Common ARQ methods include Stop-and-Wait, Go-Back-N, and Selective Repeat. Types of Forward Error Correction (FEC) Hamming Code Hamming Code is a Forward Error Correction (FEC) technique used to make data transmission more reliable. It allows the receiver to detect and correct errors on its own without asking the sender to resend the data. Hamming Code can correct one-bit errors and detect two-bit errors, but it cannot fix two errors at the same time. It is suitable for systems where errors are rare and usually occur one bit at a time.2. Reed–Solomon Code Parity bits are placed at positions 1, 2, 4, 8, 16, …, which are powers of two. Each parity bit checks a specific group of data bits, helping locate the exact position of an error. The receiver uses parity checks (syndrome) to identify the incorrect bit and correct it if needed. Since the receiver can fix the error by itself, no retransmission is required, making it a true Forward Error Correction technique. Reed–Solomon Code Reed–Solomon Code is a block-based Forward Error Correction (FEC) technique widely used in digital communication and data storage systems. It works on symbols instead of individual bits, where each symbol contains multiple bits. Because of this symbol-based approach, Reed–Solomon codes are very effective at correcting burst errors, in which many consecutive bits are damaged during transmission or storage."
            },
            {
              "id": "error-correction--symbol-based-working",
              "heading": "Symbol-based working",
              "explanation": "Reed–Solomon codes work on data blocks made of symbols, where each symbol contains multiple bits. Extra parity symbols are added to the block for error correction."
            },
            {
              "id": "error-correction--multiple-error-correction",
              "heading": "Multiple error correction",
              "explanation": "The number of errors that can be corrected depends on the extra symbols added. If 2t redundant symbols are used, the code can correct up to t corrupted symbols in a block.\nStronger than bit-level codes: Since errors are corrected at the symbol level, Reed–Solomon is more powerful than simple methods that correct only single-bit errors."
            },
            {
              "id": "error-correction--very-effective-for-burst-errors",
              "heading": "Very effective for burst errors",
              "explanation": "Burst errors usually damage several consecutive bits, often affecting full symbols. Reed–Solomon codes are designed to recover such damaged symbols accurately."
            },
            {
              "id": "error-correction--wide-practical-usage",
              "heading": "Wide practical usage",
              "explanation": "These codes are widely used in CDs, DVDs, Blu-ray discs, QR codes, barcodes, satellite communication, and digital TV, where data accuracy is critical."
            },
            {
              "id": "error-correction--higher-computation-cost",
              "heading": "Higher computation cost",
              "explanation": "Reed–Solomon codes need more complex encoding and decoding compared to simpler techniques like Hamming Code, but this complexity provides better error correction strength. Types of Backward Error Correction Stop-and-Wait ARQ Stop-and-Wait ARQ is a basic Backward Error Correction method for reliable data transmission. The sender transmits one frame at a time and waits for an acknowledgment (ACK) from the receiver. The receiver sends an ACK only if the frame is received correctly, ensuring reliable delivery. If a frame is lost, contains errors, or the ACK is not received, the sender retransmits the same frame. A timer is used for each frame; if it expires before receiving an ACK, the frame is resent. This method is simple and reliable, but inefficient for high-speed or long-delay networks due to idle waiting time. Go-Back-N ARQ Go-Back-N ARQ is a Backward Error Correction method that allows the sender to transmit multiple frames consecutively without waiting for individual acknowledgments. It uses a sliding window at the sender to control how many frames can be sent before receiving ACKs. The receiver accepts frames only in order; out-of-order frames are discarded even if they are correct. The receiver sends cumulative acknowledgments indicating the highest in-order frame received successfully. If a frame is lost or corrupted, the sender retransmits that frame and all subsequent frames in the window. Go-Back-N improves throughput over Stop-and-Wait but can waste bandwidth if errors occur frequently. Applications of Error Correction"
            },
            {
              "id": "error-correction--wireless-and-mobile-communication-4g-5g-wi-fi",
              "heading": "Wireless and Mobile Communication (4G/5G, Wi-Fi)",
              "explanation": "Error correction ensures reliable data transmission over wireless channels, which are prone to interference, fading, and noise. Techniques like Convolutional Codes, Turbo Codes, and LDPC codes are commonly used in 4G/5G networks and Wi-Fi to improve throughput and reduce packet loss."
            },
            {
              "id": "error-correction--satellite-and-deep-space-communication",
              "heading": "Satellite and Deep-Space Communication",
              "explanation": "Communication over long distances, such as satellite links or deep-space probes, experiences significant signal attenuation and delays. Forward Error Correction methods like Reed–Solomon and Convolutional Codes allow receivers to correct errors without relying on retransmissions, which are impractical due to high latency."
            },
            {
              "id": "error-correction--data-storage-devices-hdd-ssd-cds-dvds",
              "heading": "Data Storage Devices (HDD, SSD, CDs, DVDs)",
              "explanation": "Error correction ensures the integrity of stored data, compensating for physical defects, scratches, or degradation over time. Codes such as Hamming Code, Reed–Solomon, and BCH codes are embedded in storage devices to detect and correct errors automatically."
            },
            {
              "id": "error-correction--qr-codes-barcodes-and-digital-broadcasting",
              "heading": "QR Codes, Barcodes, and Digital Broadcasting",
              "explanation": "QR codes and barcodes use error correction (typically Reed–Solomon) to recover data if part of the code is damaged or obscured. Digital TV, radio, and streaming services implement FEC techniques to maintain high-quality transmission even in noisy environments."
            }
          ],
          "quick_revision": [
            "Error Correction in Computer Networks Error correction is the process of detecting and fixing errors that occur during data transmission so that the receiver can…",
            "Forward Error Correction (FEC): Forward Error Correction is an error control technique used during data transmission.",
            "Backward Error Correction: Backward Error Correction is an error control technique used in data communication.",
            "Symbol-based working: Reed–Solomon codes work on data blocks made of symbols, where each symbol contains multiple bits.",
            "Multiple error correction: The number of errors that can be corrected depends on the extra symbols added.",
            "Very effective for burst errors: Burst errors usually damage several consecutive bits, often affecting full symbols.",
            "Wide practical usage: These codes are widely used in CDs, DVDs, Blu-ray discs, QR codes, barcodes, satellite communication, and digital TV, where data accuracy is critical.",
            "Higher computation cost: Reed–Solomon codes need more complex encoding and decoding compared to simpler techniques like Hamming Code, but this complexity provides better error correction…",
            "Wireless and Mobile Communication (4G/5G, Wi-Fi): Error correction ensures reliable data transmission over wireless channels, which are prone to interference, fading, and noise.",
            "Satellite and Deep-Space Communication: Communication over long distances, such as satellite links or deep-space probes, experiences significant signal attenuation and delays.",
            "Data Storage Devices (HDD, SSD, CDs, DVDs): Error correction ensures the integrity of stored data, compensating for physical defects, scratches, or degradation over time.",
            "QR Codes, Barcodes, and Digital Broadcasting: QR codes and barcodes use error correction (typically Reed–Solomon) to recover data if part of the code is damaged or obscured."
          ]
        },
        {
          "id": "flow-control",
          "title": "Flow Control",
          "summary": "Flow control is a mechanism in the Data Link Layer (DLL) of the OSI model that controls the speed of data transmission between a sender and a receiver.",
          "sections": [
            {
              "id": "flow-control--overview",
              "heading": "Overview",
              "explanation": "Flow control is a mechanism in the Data Link Layer (DLL) of the OSI model that controls the speed of data transmission between a sender and a receiver. It ensures that the sender transmits data at a rate the receiver can handle, preventing buffer overflow and data loss while enabling efficient and reliable communication. It regulates the flow of data between the sender and the receiver It accommodates differences in transmission speed and processing capability It prevents buffer overflow and loss of data at the receiver Functions as a speed-matching mechanism between communicating devices Controls the number of frames sent before receiving an acknowledgement Ensures a balance between the data transmission rate and the receiver’s memory capacity Approaches to Flow Control"
            },
            {
              "id": "flow-control--feedback-based-flow-control",
              "heading": "Feedback-Based Flow Control",
              "explanation": "In this approach, the receiver sends explicit feedback to the sender about its ability to receive data. Based on this feedback, the sender adjusts its transmission rate to match the receiver’s current capacity. The sender transmits data only after receiving acknowledgments or window updates from the receiver Transmission rate is dynamically adjusted according to receiver or network conditions Commonly used in protocols like TCP for efficient and reliable communication Techniques in Computer Architecture Ready-Signal Handshaking This technique is used between components operating at different speeds or clock domains The receiver sends a ready signal indicating it can accept data Data transfer occurs only when the receiver is ready, preventing data loss Credit-Based flow control This technique is used in high-speed protocols such as Fibre Channel The receiver provides credits to the sender, each representing available buffer space The sender can transmit one frame per credit Credits are restored as the receiver processes data More efficient than simple stop-and-wait flow control Credit-based flow control"
            },
            {
              "id": "flow-control--rate-based-flow-control",
              "heading": "Rate-Based Flow Control",
              "explanation": "In rate-based flow control, the sender transmits data at a fixed or pre-negotiated rate without receiving continuous feedback from the receiver. This approach assumes that the receiver can process data at the agreed transmission rate. Sender controls the transmission rate independently Does not rely on acknowledgments or window updates Suitable for predictable and time-sensitive data transmission Commonly used in streaming, multimedia, and hardware systems Techniques in computer architecture\nLeaky Bucket Algorithm: Maintains a constant data output rate by smoothing bursty input traffic, ensuring steady and controlled transmission.\nToken Bucket Algorithm: Generates tokens at a fixed rate, allowing data transmission only when tokens are available. A larger bucket size supports short bursts while preserving the average transmission rate.\nTraffic Shaping and Policing: Regulate network traffic based on a defined rate. Traffic shaping delays excess packets to smooth traffic flow, while policing drops packets that exceed the allowed rate. Techniques of Flow Control"
            },
            {
              "id": "flow-control--stop-and-wait-flow-control",
              "heading": "Stop-and-Wait Flow Control",
              "explanation": "Stop-and-Wait is a simple feedback-based flow control technique in which the sender transmits one frame at a time and waits for an acknowledgment from the receiver before sending the next frame. If the acknowledgment is not received within a specified timeout period, the sender retransmits the frame to ensure reliable delivery. Simple and easy to implement Ensures reliable data transmission Poor link utilization in high-latency or high-bandwidth networks due to idle waiting"
            },
            {
              "id": "flow-control--sliding-window-flow-control",
              "heading": "Sliding Window Flow Control",
              "explanation": "Sliding Window is a feedback-based flow control technique that allows the sender to transmit multiple frames before receiving acknowledgments. The sender maintains a window of unacknowledged frames and moves (slides) the window forward as acknowledgments are received, enabling continuous and pipelined data transmission. Improves bandwidth utilization by enabling pipelined transmission. Allows multiple frames to be in transit simultaneously Requires additional memory and complexity for window and buffer management\nPrevents Data Loss: Regulates data transmission to avoid buffer overflow at the receiver\nImproves Throughput: Optimizes the use of network resources without overloading any component\nMaintains System Stability: Ensures smooth operation of hardware and software components by preventing excessive data input\nEnsures Fairness: Supports balanced data transmission across multiple connections in shared environments such as switches and routers Importance of Flow Control\nPrevents Data Loss: Controls the transmission rate to avoid buffer overflow at the receiver\nImproves Throughput: Ensures efficient utilization of network resources without overloading any device\nMaintains System Stability: Prevents hardware and software components from stalling or failing due to excessive data input\nEnsures Fairness: Enables balanced data transmission across multiple connections in shared environments such as switches and routers"
            }
          ],
          "quick_revision": [
            "Flow control is a mechanism in the Data Link Layer (DLL) of the OSI model that controls the speed of data transmission between a sender and a receiver.",
            "Feedback-Based Flow Control: In this approach, the receiver sends explicit feedback to the sender about its ability to receive data.",
            "Rate-Based Flow Control: In rate-based flow control, the sender transmits data at a fixed or pre-negotiated rate without receiving continuous feedback from the receiver.",
            "Stop-and-Wait Flow Control: Stop-and-Wait is a simple feedback-based flow control technique in which the sender transmits one frame at a time and waits for an acknowledgment from the receiver…",
            "Sliding Window Flow Control: Sliding Window is a feedback-based flow control technique that allows the sender to transmit multiple frames before receiving acknowledgments."
          ]
        },
        {
          "id": "stop-and-wait-arq",
          "title": "Stop and wait ARQ",
          "summary": "Stop-and-Wait ARQ is a reliable data link layer protocol in which the sender transmits one frame at a time and waits for an acknowledgment (ACK) before sending the next frame.",
          "sections": [
            {
              "id": "stop-and-wait-arq--overview",
              "heading": "Overview",
              "explanation": "Stop-and-Wait ARQ is a reliable data link layer protocol in which the sender transmits one frame at a time and waits for an acknowledgment (ACK) before sending the next frame. If the ACK is not received within a specified timeout period, the same frame is retransmitted to ensure reliability. Operates in connection-oriented communication Provides error control using acknowledgments and retransmissions Ensures flow control by allowing only one outstanding frame Uses two sequence numbers (0 and 1) to prevent duplication Considered a special case of Sliding Window Protocol (window size = 1) Achieves one frame per RTT, resulting in low efficiency for large bandwidth–delay products Important Terms\nPropagation Delay: The time taken by a data packet to travel physically from the sender to the receiver over the communication medium. Propagation Delay = (Distance between nodes) / (Propagation speed of Signal)\nRoundtrip Time (RTT): The total time taken for a data frame to reach the receiver plus the time taken for the acknowledgment (ACK) to return to the sender.\nTimeout (TO): The maximum time the sender waits for an acknowledgment before retransmitting the frame. Timeout = Estimated RTT + Safety Margin"
            },
            {
              "id": "stop-and-wait-arq--simple-stop-and-wait",
              "heading": "Simple Stop and Wait",
              "explanation": "At Sender Rule 1 The sender transmits only one data packet at a time. Rule 2 The sender sends the next packet only after receiving an acknowledgment (ACK) for the previously sent packet. At Receiver Rule 1 The receiver sends an acknowledgment immediately after successfully receiving and processing a data packet. Rule 2 Acknowledgments are sent after each packet is consumed, ensuring proper flow Control flow control between sender and receiver. Problems Associated with Stop and Wait"
            },
            {
              "id": "stop-and-wait-arq--lost-data",
              "heading": "Lost Data",
              "explanation": "If a sender transmits a frame and it gets lost in the network, the receiver does not receive it and therefore does not send an acknowledgment (ACK). However, the sender does not wait forever . It starts a timer after transmitting the frame. If the ACK is not received before the timeout expires, the sender retransmits the same frame."
            },
            {
              "id": "stop-and-wait-arq--lost-acknowledgement",
              "heading": "Lost Acknowledgement",
              "explanation": "In this case, the sender sends a data packet which is successfully received by the receiver. The receiver sends an acknowledgment, but the ACK is lost in the network. As the sender does not receive the acknowledgment, it assumes the packet was not received and does not send the next packet, because Stop-and-Wait requires an ACK before proceeding."
            },
            {
              "id": "stop-and-wait-arq--delayed-acknowledgement-data",
              "heading": "Delayed Acknowledgement/Data",
              "explanation": "Here, the sender sends a data packet and the receiver sends an acknowledgment, but the ACK arrives after the sender’s timeout period. The sender may mistakenly interpret this delayed acknowledgment as the response to a later transmission, causing confusion and possible data duplication. This problem highlights the need for sequence numbers and timeouts in ARQ protocols."
            },
            {
              "id": "stop-and-wait-arq--stop-and-wait-for-arq-automatic-repeat-request",
              "heading": "Stop and Wait for ARQ (Automatic Repeat Request)",
              "explanation": "Stop-and-Wait ARQ (Automatic Repeat Request) overcomes the problems of lost data, lost acknowledgments, and delayed frames by using acknowledgments, sequence numbers, and timeouts. It provides both error control through retransmissions and flow control by allowing only one outstanding frame at a time, ensuring reliable data communication."
            },
            {
              "id": "stop-and-wait-arq--time-out",
              "heading": "Time Out",
              "explanation": "Timeout is the maximum time the sender waits for an acknowledgment (ACK) after sending a data frame. If the ACK is not received within this period, the sender assumes the frame or ACK was lost or corrupted and retransmits the same frame to ensure reliable communication."
            },
            {
              "id": "stop-and-wait-arq--sequence-number-data",
              "heading": "Sequence Number (Data)",
              "explanation": "In Stop-and-Wait ARQ, each data frame is assigned a sequence number by the sender. This helps the receiver uniquely identify each frame, detect duplicate frames, and send the correct acknowledgment. The sender transmits the next frame only after receiving the acknowledgment for the current frame, ensuring reliable data delivery."
            },
            {
              "id": "stop-and-wait-arq--sequence-number",
              "heading": "Sequence Number",
              "explanation": "In Stop-and-Wait ARQ, acknowledgments (ACKs) also carry sequence numbers. After successfully receiving a data frame, the receiver sends an ACK indicating the sequence number of the next expected frame. The sender uses this information to confirm successful delivery and decide whether it can proceed with the next transmission or needs to retransmit a frame. Working of Stop and Wait for ARQ The sender A transmits a data frame with sequence number 0. After successfully receiving the frame, the receiver B sends an acknowledgment (ACK) with sequence number 1, indicating that it is expecting the next frame. The sender waits for this acknowledgment before sending the next data frame. Stop-and-Wait ARQ uses only a one-bit sequence number (0 and 1), which means only one frame can be in transit or buffered at any time at both the sender and receiver. Constraints in Stop and Wait ARQ Stop-and-Wait ARQ has low efficiency because the sender must wait for an acknowledgment before transmitting the next packet. This waiting time causes poor channel utilization, especially on high-bandwidth and high-delay links such as satellite networks. The protocol allows only one frame in transit, which limits throughput when the bandwidth–delay product is high. Efficiency can be improved by increasing the window size, which is why more advanced protocols like Go-Back-N ARQ and Selective Repeat ARQ are preferred. Stop-and-Wait ARQ is most suitable for networks with low propagation delay, such as Local Area Networks (LANs)."
            }
          ],
          "quick_revision": [
            "Stop-and-Wait ARQ is a reliable data link layer protocol in which the sender transmits one frame at a time and waits for an acknowledgment (ACK) before sending the next…",
            "Simple Stop and Wait: At Sender Rule 1 The sender transmits only one data packet at a time.",
            "Lost Data: If a sender transmits a frame and it gets lost in the network, the receiver does not receive it and therefore does not send an acknowledgment (ACK).",
            "Lost Acknowledgement: In this case, the sender sends a data packet which is successfully received by the receiver.",
            "Delayed Acknowledgement/Data: Here, the sender sends a data packet and the receiver sends an acknowledgment, but the ACK arrives after the sender’s timeout period.",
            "Stop and Wait for ARQ (Automatic Repeat Request): Stop-and-Wait ARQ (Automatic Repeat Request) overcomes the problems of lost data, lost acknowledgments, and delayed frames by using acknowledgments, sequence numbers,…",
            "Time Out: Timeout is the maximum time the sender waits for an acknowledgment (ACK) after sending a data frame.",
            "Sequence Number (Data): In Stop-and-Wait ARQ, each data frame is assigned a sequence number by the sender.",
            "Sequence Number: In Stop-and-Wait ARQ, acknowledgments (ACKs) also carry sequence numbers."
          ]
        },
        {
          "id": "sliding-window-protocol-go-back-n",
          "title": "Sliding Window Protocol- Go Back N",
          "summary": "Go Back N - Sliding Window Protocol Go-Back-N (GBN) is a sliding window–based Automatic Repeat Request (ARQ) protocol, in which the sender can transmit multiple frames (up to a fixed window size) without waiting for an acknowledgement for each frame.",
          "sections": [
            {
              "id": "sliding-window-protocol-go-back-n--overview",
              "heading": "Overview",
              "explanation": "Go Back N - Sliding Window Protocol Go-Back-N (GBN) is a sliding window–based Automatic Repeat Request (ARQ) protocol, in which the sender can transmit multiple frames (up to a fixed window size) without waiting for an acknowledgement for each frame. If a frame is lost or corrupted, the receiver discards that frame. All subsequent out-of-order frames are also discarded. The sender retransmits the erroneous frame and all following frames in the current window. Example: If frames 1 to 5 are sent and frame 3 is lost, the sender retransmits frames 3, 4, and 5. Characteristics of Go-Back-N (GBN) Sender Window Size (W s ) In Go-Back-N, the sender window size (Ws) is equal to N. For example, in GBN-10, the sender can transmit 10 frames without waiting for acknowledgements. The value of N must be greater than 1 to enable pipelining. When N = 1, Go-Back-N behaves like the Stop-and-Wait ARQ protocol. When processing delay, queuing delay, and ACK transmission delay are ignored, the efficiency of GBN is = N / (1+2a) where, a=T p / T t Tp = Propagation delay Tt = Transmission delay of data frame N = Sender window size Efficiency with Non-Zero Delays When processing delay, queuing delay, and acknowledgment transmission delay are not zero, efficiency is calculated using: Efficiency = N * (Useful time) / (Total Time) where, useful time=T t Total time = T t + 2 * T p + P r + Pq + T t (ack) where, T t =Transmission delay of sender side T p = Propagation Delay Pr = Processing Delay Pq = Queuing Delay T t (ack) = Transmission Delay of Acknowledgement\nSo, the general efficiency expression becomes: E f i c i e n c y = T t + 2 T p + P r + P q + T t ( a c k ) N T t Efficiency=Tt+2Tp+Pr+Pq+Tt(ack)NTt E ff i c i e n cy = Tt + 2 Tp + P r + Pq + Tt ( a c k ) NTt If B is the channel bandwidth, then Throughput = Efficiency × B For the ideal case (no extra delays) Throughput = (N / 1 + 2a) * B 2. Receiver Window Size (W R ) Receiver window size (WR) is always 1. Receiver accepts only the next expected frame. Frames arriving out of order are discarded. Receiver does not buffer out-of-order frames."
            },
            {
              "id": "sliding-window-protocol-go-back-n--acknowledgements",
              "heading": "Acknowledgements",
              "explanation": "Acknowledgments are control messages sent by the receiver to confirm the successful reception of data frames. They play a crucial role in ensuring reliable communication. If the sender does not receive an acknowledgment within a specified timeout interval, it assumes the frame was lost or corrupted and retransmits it. Types of ACKs Cumulative ACK A single ACK confirms the receipt of all frames up to a particular sequence number. Used in Go-Back-N (GBN). Reduces acknowledgment traffic, improving efficiency. If an ACK is lost, multiple frames may be considered unacknowledged, causing unnecessary retransmissions. Independent ACK Each frame is acknowledged separately. Used in Selective Repeat ARQ. Provides higher reliability by avoiding retransmission of correctly received frames. Increases control overhead due to a higher number of ACKs. Working of GB-N Protocol Sender Side The sender maintains a sliding window of size N (e.g., in GBN-4, the window size is 4). It can transmit up to N frames without waiting for individual ACKs. Each transmitted frame is associated with a timer. When an ACK is received, the sender slides the window forward, allowing transmission of new frames. If a timeout occurs for a frame, the sender retransmits that frame and all subsequent frames in the current window. Receiver Side The receiver maintains a window size of 1 (WR = 1). It accepts only the next expected frame in sequence. If the expected frame is received correctly, then the receiver sends an ACK, and updates the expected sequence number. If an out-of-order frame is received, then the receiver discards the frame, and resends the ACK for the last correctly received frame. Relationship Between Window Size and Sequence Numbers In sliding window protocols such as Go-Back-N (GBN) and Selective Repeat (SR), the window size and sequence number space are tightly coupled to ensure correct and reliable data delivery. The window size defines how many frames the sender can transmit without waiting for acknowledgments, enabling pipelined transmission. Sequence numbers are assigned to frames to maintain ordering and to help the receiver identify missing or duplicate frames. To avoid ambiguity caused by sequence number reuse, the combined size of the sender and receiver windows must not exceed the available sequence number space. If the window size is too large, a sequence number may be reused before the earlier frame with the same number is acknowledged, making it difficult for the receiver to distinguish new frames from duplicates. Relation between window size and sequence number is given by the formula W s + W R <= ASN where, W s = Sender window size W R = Receiver window size ASN = Available sequence number In Go-Back-N (GBN), the receiver window size is always 1 Hence, the number of bits required for sequence numbering in GBN is Bits Required in GBN = ⌈ log 2 (N + 1)⌉ The extra +1 ensures that duplicate frames are correctly identified and prevents confusion caused by premature sequence number reuse. Example of GB-N Protocol Consider an Example of GB4. Sender window size is 4 therefore we require a minimum of 4 sequence numbers to label each packet in the window. Now suppose receiver has received all the packets(0, 1, 2 and 3 sent by sender) and hence is now waiting for packet number 0 again (We can not use 4 here as we have only 4 sequence numbers available since N = 4). Now suppose the cumulative ack for the above 4 packets is lost in the network. On sender side, there will be timeout for packet 0 and hence all the 4 packets will be transmitted again. Problem now is receiver is waiting for new set of packets which should have started from 0 but now it will receive the duplicate copies of the previously accepted packets. In order to avoid this, we need one extra sequence number. Now the receiver could easily reject all the duplicate packets which were starting from 0 because now it will be waiting for packet number 4 (We have added an extra sequence number now). This is explained with the help of the illustrations below. Trying with Sequence numbers 4. Now, trying with one extra sequence number. Now it is clear as to why we need an extra 1 bit in the GBN protocol. Go-Back-N is easy to implement and ensures reliable data transfer. By supporting pipelined transmission, it achieves higher throughput than Stop-and-Wait, particularly in low-error and high-delay networks. In error-prone networks, GBN is inefficient because a single lost frame triggers retransmission of multiple frames. This causes unnecessary retransmissions and leads to poor bandwidth utilization."
            },
            {
              "id": "sliding-window-protocol-go-back-n--formulas-code",
              "heading": "Formulas & Code",
              "explanation": "W s + 1 <= ASN If the sender window size is N, then Minimum sequence numbers required = N + 1"
            }
          ],
          "quick_revision": [
            "Go Back N - Sliding Window Protocol Go-Back-N (GBN) is a sliding window–based Automatic Repeat Request (ARQ) protocol, in which the sender can transmit multiple frames…",
            "Acknowledgements: Acknowledgments are control messages sent by the receiver to confirm the successful reception of data frames.",
            "Formulas & Code: W s + 1 <= ASN If the sender window size is N, then Minimum sequence numbers required = N + 1"
          ]
        },
        {
          "id": "sliding-window-protocol-selective-repeat",
          "title": "Sliding Window Protocol- Selective Repeat",
          "summary": "Selective Repeat - Sliding Window Protocol The Selective Repeat Protocol (SRP) is a reliable data transmission technique that enhances protocols like Go-Back-N by retransmitting only those packets that are lost or corrupted, rather than resending all subsequent packets after an error.",
          "sections": [
            {
              "id": "sliding-window-protocol-selective-repeat--overview",
              "heading": "Overview",
              "explanation": "Selective Repeat - Sliding Window Protocol The Selective Repeat Protocol (SRP) is a reliable data transmission technique that enhances protocols like Go-Back-N by retransmitting only those packets that are lost or corrupted, rather than resending all subsequent packets after an error. This selective retransmission reduces unnecessary overhead and improves efficiency, especially on unreliable or noisy communication links.\nWindow Size: The sender’s window (Ws) and the receiver’s window (Wr) are of equal size. This keeps transmission and reception synchronised.\nPacket Handling: The receiver can accept packets that arrive out of order. Correct packets are buffered until missing ones are retransmitted.\nRetransmission Mechanism: The sender retransmits only the packets that are not acknowledged. Retransmission occurs after a timeout or on receiving a Negative Acknowledgement (NAK).\nEfficiency: Selective retransmission reduces unnecessary packet resending. This improves bandwidth utilisation on unreliable links."
            },
            {
              "id": "sliding-window-protocol-selective-repeat--efficiency-formula",
              "heading": "Efficiency Formula",
              "explanation": "The efficiency of SRP is given by η = N / 1+2a where N is the window size and a=Tp/Tt Why Window Size is Important Selective Repeat Protocol (SRP): the sender and receiver window size must be less than or equal to 2 m-1 , which is half of the available sequence number space. If the window size exceeds this limit, sequence numbers may wrap around before earlier packets are acknowledged. As a result, the receiver may be unable to distinguish between new packets and old retransmitted packets. This ambiguity can cause incorrect packet acceptance and lead to transmission errors. Sender only retransmits frames, for which a NAK is received The efficiency of the Selective Repeat Protocol (SRP) is the same as that of the Go-Back-N protocol. It is defined as the ratio of the data transmission time to the total time taken for successful transmission and acknowledgment. The efficiency is given by: η = T t (data) / T t (data) + 2T p + T q + T pro + T t (ack) where, T t (data) = transmission delay of the data packet. T p = propagation delay. T q = queuing delay. T pro = processing delay. T t (ack) = transmission delay of the acknowledgment packet. Buffers and Sequence Numbers\nBuffers Required: In Selective Repeat Protocol, buffering is needed at both ends. The sender requires N buffers, and the receiver also requires N buffers. Hence, the total buffers required are 2N.\nSequence Numbers: To uniquely identify frames and avoid ambiguity, sequence numbers are required at both the sender and receiver. The total number of sequence numbers needed is 2N.\nEfficiency Relation: The efficiency of Selective Repeat Protocol is the same as that of Go-Back-N. It is given by η = N / 1+2a where, a = T p /T t T p is the propagation delay and T t is the transmission delay."
            }
          ],
          "quick_revision": [
            "Selective Repeat - Sliding Window Protocol The Selective Repeat Protocol (SRP) is a reliable data transmission technique that enhances protocols like Go-Back-N by…",
            "Efficiency Formula: The efficiency of SRP is given by η = N / 1+2a where N is the window size and a=Tp/Tt Why Window Size is Important Selective Repeat Protocol (SRP): the sender and…"
          ]
        },
        {
          "id": "piggybacking",
          "title": "Piggybacking",
          "summary": "Piggybacking in Computer Networks Piggybacking is a technique where the receiver delays sending an acknowledgement (ACK) and attaches it to its next outgoing data packet.",
          "sections": [
            {
              "id": "piggybacking--overview",
              "heading": "Overview",
              "explanation": "Piggybacking in Computer Networks Piggybacking is a technique where the receiver delays sending an acknowledgement (ACK) and attaches it to its next outgoing data packet. This reduces the number of separate control frames, improving network efficiency. Sliding window protocols allow the sender to transmit multiple packets before receiving acknowledgements, increasing throughput. Both sender and receiver maintain finite buffers to hold outgoing and incoming packets. Unacknowledged packets are retransmitted after a timeout. Increasing Network Efficiency Network efficiency can be improved by using full-duplex transmission , which allows simultaneous two-way communication between sender and receiver. Unlike simplex or half-duplex modes, full-duplex transmission enables both ends to send and receive data at the same time. Full Duplex Transmission"
            },
            {
              "id": "piggybacking--two-separate-channels",
              "heading": "Two separate channels",
              "explanation": "One channel is used for sending data, and the other for receiving data. However, this approach can waste bandwidth when traffic in one direction is low.\nPiggybacking: A more efficient method where data and acknowledgements share the same channel. The receiver delays sending the ACK and attaches it to the next outgoing data frame. The sender identifies data and ACK information using the frame header, reducing the number of separate control frames and improving overall network efficiency. Working Working of Piggybacking As we can see in the figure, we can see with piggybacking, a single message (ACK + DATA) over the wire in place of two separate messages. Piggybacking improves the efficiency of the bidirectional protocols. If a host has both data and an acknowledgment, it sends a single frame containing both. If only an acknowledgment exists, the host waits for some time to see if data is ready; otherwise, it sends the ACK separately.. If only data is left, the last acknowledgment is included in the data frame. Piggybacking makes better use of the available channel bandwidth by combining data and acknowledgment into a single frame, eliminating the need to send separate ACK frames. This reduces control overhead, lowers transmission costs, and improves the overall latency of data transfer, especially in bidirectional communication. Piggybacking introduces additional protocol complexity because the sender must decide how long to wait before sending an acknowledgment. If the data link layer delays the ACK for too long while waiting for outgoing data, the sender may assume the frame is lost and retransmit it unnecessarily, leading to reduced efficiency."
            }
          ],
          "quick_revision": [
            "Piggybacking in Computer Networks Piggybacking is a technique where the receiver delays sending an acknowledgement (ACK) and attaches it to its next outgoing data packet.",
            "Two separate channels: One channel is used for sending data, and the other for receiving data."
          ]
        }
      ]
    },
    {
      "title": "Network Layer",
      "subsections": [
        {
          "id": "network-layer",
          "title": "Network Layer",
          "summary": "Network Layer in OSI Model The Network Layer is the third layer of the OSI model responsible for logical addressing, routing, and end-to-end packet delivery across interconnected networks.",
          "sections": [
            {
              "id": "network-layer--overview",
              "heading": "Overview",
              "explanation": "Network Layer in OSI Model The Network Layer is the third layer of the OSI model responsible for logical addressing, routing, and end-to-end packet delivery across interconnected networks. Handles logical (IP) addressing of devices Determines optimal routing paths between networks Enables host-to-host communication across multiple networks Network Layer in OSI Model\nNote: Unlike the Data Link Layer, which focuses only on node-to-node delivery within a single network segment, the Network Layer ensures that data travels from the source host to the destination host, even if they are located on different networks. Key Responsibilities of the Network Layer"
            },
            {
              "id": "network-layer--logical-addressing",
              "heading": "Logical Addressing",
              "explanation": "Assigns unique IP addresses to devices, ensuring accurate identification and communication across networks. Packetization : Encapsulates transport layer segments into packets for efficient transmission. Host-to-Host Delivery : Ensures reliable delivery of packets from the sender to the intended receiver across diverse networks. Forwarding : Moves packets from the input interface of a router to the appropriate output interface based on the destination IP. Routing : Determines the optimal path for packets to travel across multiple networks using routing algorithms and protocols. Fragmentation and Reassembly : Splits large packets into smaller fragments to match the maximum transmission unit (MTU) of a network, and reassembles them at the destination. Subnetting : Divides larger networks into smaller subnetworks for efficient addressing and traffic management. Network Address Translation (NAT) : Maps private IPs to public IPs for internet communication, conserving address space and adding security. Functions of Network Layer. How the Network Layer Works How Network Layer Works Each device is assigned a unique logical address (IP address). Data from the transport layer is encapsulated into packets, with source and destination IPs attached. Routers analyze the destination address and determine the best available path. Packets traverse the network hop-by-hop, moving across routers until reaching the destination. If the packet size exceeds the MTU, it is fragmented into smaller units. At the destination, the fragments are reassembled into the original data. If errors occur (e.g., unreachable destination), protocols like ICMP send error messages back to the source. Protocols Operating at the Network Layer"
            },
            {
              "id": "network-layer--ip-internet-protocol-ipv4-ipv6",
              "heading": "IP (Internet Protocol - IPv4/IPv6)",
              "explanation": "Provides logical addressing and delivers packets across networks; IPv6 offers a larger address space and better efficiency.\nICMP (Internet Control Message Protocol): Sends error reports and diagnostic messages (e.g., destination unreachable, ping).\nARP (Address Resolution Protocol): Maps IP addresses to MAC addresses within a local network.\nRARP (Reverse Address Resolution Protocol): Retrieves a device’s IP address using its MAC address (largely obsolete).\nNAT (Network Address Translation): Converts private IP addresses to public IPs, conserving addresses and improving security.\nIPSec (Internet Protocol Security): Secures IP communication through encryption and authentication.\nMPLS (Multiprotocol Label Switching): Uses labels to forward packets efficiently and manage traffic. Routing Protocols\nRIP (Routing Information Protocol): Distance-vector protocol using hop count to select routes.\nOSPF (Open Shortest Path First): Link-state protocol that computes the shortest path using network topology."
            },
            {
              "id": "network-layer--bgp-border-gateway-protocol",
              "heading": "BGP (Border Gateway Protocol)",
              "explanation": "Path-vector protocol that routes data between autonomous systems on the internet. Advantages of the Network Layer Enables end-to-end communication across multiple networks. Supports scalability by allowing subnetting and hierarchical addressing. Efficiently routes packets using shortest-path and dynamic routing algorithms. Provides inter-networking by connecting heterogeneous networks. Limitations of the Network Layer No flow control mechanism; congestion may occur if too many datagrams are in transit. Limited error control; mainly relies on upper layers for reliability. Routers may drop packets under heavy load, leading to possible data loss. Fragmentation increases processing overhead and may affect performance. Difference Between Routing and Flooding Routing Flooding A routing table is required. No Routing table is required May give the shortest path. Always gives the shortest path. Routing is less reliable Flooding is more reliable Traffic is less in Routing Traffic is more in Flooding Duplicate packets are not present Duplicate packet are present For practice, solve quiz on Network Layer ."
            }
          ],
          "quick_revision": [
            "Network Layer in OSI Model The Network Layer is the third layer of the OSI model responsible for logical addressing, routing, and end-to-end packet delivery across…",
            "Logical Addressing: Assigns unique IP addresses to devices, ensuring accurate identification and communication across networks.",
            "IP (Internet Protocol - IPv4/IPv6): Provides logical addressing and delivers packets across networks; IPv6 offers a larger address space and better efficiency.",
            "BGP (Border Gateway Protocol): Path-vector protocol that routes data between autonomous systems on the internet."
          ]
        },
        {
          "id": "classful-network-addressing",
          "title": "Classful Network Addressing",
          "summary": "Introduction of Classful IP Addressing Classful IP addressing was an early method (1981–1993) used to assign IP addresses and divide the IPv4 address space into fixed classes.",
          "sections": [
            {
              "id": "classful-network-addressing--overview",
              "heading": "Overview",
              "explanation": "Introduction of Classful IP Addressing Classful IP addressing was an early method (1981–1993) used to assign IP addresses and divide the IPv4 address space into fixed classes. Each IP address was categorised based on its leading bits, and the class determined its network and host portions. IP addresses were divided into five classes: A, B, C, D, and E. The class of an IP address was identified by its first few bits. Classes A, B, and C were used for unicast communication, supporting large, medium, and small networks, respectively. Class D was reserved for multicast communication. Class E was intended for experimental and research purposes. Dotted Decimal Notation It is a human-readable format used to represent IPv4 addresses, where the 32-bit binary address is divided into four 8-bit segments (bytes) and written as decimal numbers separated by dots. This notation makes IP addresses easier to read, write, and understand compared to their binary form. An IPv4 address consists of four decimal segments (bytes) separated by dots. The value of each segment ranges from 0 to 255, inclusive. Leading zeros are not allowed in any segment (for example, 054 is invalid, while 54 is valid). Hexadecimal Notation This represent a IPv4 addresses in the 32-bit binary address is written using base-16 numbers. In this notation, each 8-bit segment (byte) of the IP address is converted into a two-digit hexadecimal value, making the address shorter and easier to read than its binary form. Uses base-16 digits (0–9 and A–F). Each byte (8 bits) is represented by two hexadecimal digits. An IPv4 address is written as four hexadecimal numbers, usually separated by dots. Provides a compact representation compared to binary notation. Less commonly used than dotted decimal notation in everyday networking. Hexadecimal Notation Need For Classful Addressing As the Internet grew, classful addressing led to significant IP wastage and routing inefficiencies Need for Classful Addressing Fixed classes (A, B, C) made assigning and managing IP addresses straightforward. Routers could quickly identify the class from the first few bits, speeding up routing. Supported different network sizes large (Class A/B) and small (Class C). Fixed address ranges ensured compatibility across devices and protocols. Reduced the need for complex subnetting, saving resources and simplifying management. Classes of IP Addressing The 32-bit IP address is divided into five sub-classes. These are given below Class A Class B Class C Class D Class E Classful Addressing\nNote: IP addresses are globally managed by the Internet Assigned Numbers Authority (IANA) and Regional Internet Registries (RIRs). While calculating the number of usable host IP addresses, two addresses are excluded from the total. The first IP address of a network is reserved as the network address. The last IP address of a network is reserved as the broadcast address. Occupation of The Address Space In Classful Addressing Class A Class A IP addresses are assigned to networks that require a very large number of hosts. The network ID in Class A is 8 bits long, while the host ID is 24 bits long. The most significant bit (MSB) of the first octet is always 0, and the remaining 7 bits are used to identify the network. The 24-bit host ID uniquely identifies hosts within the same network. The default subnet mask for Class A is 255.0.0.0. The total number of usable host addresses per network is 2 24 − 2 = 16,777,214 (excluding network and broadcast addresses). The IP address range for Class A is 0.0.0.0 to 127.255.255.255. Class A Class B Class B IP addresses are assigned to medium to large-sized networks. The network ID is 16 bits long, and the host ID is also 16 bits long. The first two bits of the first octet are always 10 , which identifies a Class B address. The remaining 14 bits are used to determine the network ID. The 16-bit host ID uniquely identifies hosts within the same network. The default subnet mask for Class B is 255.255.0.0. The total number of Class B networks is 2 14 = 16,384 networks. The total number of usable host addresses per network is 2 16 − 2 = 65,534 hosts. The IP address range for Class B is 128.0.0.0 to 191.255.255.255. Class B Class C Class C IP addresses are assigned to small-sized networks. The network ID is 24 bits long, while the host ID is 8 bits long. The first three bits of the first octet are always 110 , which identifies a Class C address. The remaining 21 bits are used to determine the network ID. The 8-bit host ID uniquely identifies hosts within the same network. The default subnet mask for Class C is 255.255.255.0. The total number of Class C networks is 2²¹ = 2,097,152 networks. The total number of usable host addresses per network is 2⁸ − 2 = 254 hosts. The IP address range for Class C is 192.0.0.0 to 223.255.255.255. Class C Class D Class D IP addresses are reserved for multicast communication. The first four bits of the first octet are always 1110 , which identifies a Class D address. The remaining 28 bits are used to represent the multicast group address that interested hosts can join. Class D addresses do not have a network ID or host ID division. No subnet mask is defined for Class D addressing. The IP address range for Class D is 224.0.0.0 to 239.255.255.255. Class D Class E Class E IP addresses are reserved for experimental and research purposes. The first four bits of the first octet are always 1111 , which identifies a Class E address. Class E addresses do not have network ID and host ID divisions. No subnet mask is defined for Class E addressing. The IP address range for Class E is 240.0.0.0 to 255.255.255.255. Class E Range of Special IP Addresses 169.254.0.0 – 169.254.255.255 Used as link-local addresses when a device cannot obtain an IP address from a DHCP server. 127.0.0.0 – 127.255.255.255 Reserved for loopback addresses, used to test network functionality on the local machine. 0.0.0.0 – 0.255.255.255 (0.0.0.0/8) Represents the current network and is used during initialization before a device is assigned a valid IP address. Rules for Assigning Host ID\nUniqueness: Each host ID must be unique within the same network.\nAll-zeros restriction: A host ID with all bits set to 0 is not allowed, as it represents the network address."
            },
            {
              "id": "classful-network-addressing--all-ones-restriction",
              "heading": "All-ones restriction",
              "explanation": "A host ID with all bits set to 1 is not allowed, as it is reserved for the broadcast address used to reach all hosts in the network. Rules for Assigning Network ID The network ID identifies the physical network to which hosts belong. All hosts on the same physical network share the same network ID and it must follow these rules:\nLoopback restriction: A network ID must not start with 127, as this range belongs to Class A and is reserved for loopback functions.\nAll-ones restriction: A network ID with all bits set to 1 is reserved for broadcast purposes and cannot be assigned to a network."
            },
            {
              "id": "classful-network-addressing--all-zeros-restriction",
              "heading": "All-zeros restriction",
              "explanation": "A network ID with all bits set to 0 represents the local network, is not routed, and therefore is not used for general network identification. Structure of Classful Addressing Class Leading Bits Net ID Bits Host ID Bits No. of Networks Usable Hosts / Network Start Address End Address A 0 8 24 2⁷- 1 = 127 2²⁴ − 2 = 16,777,214 0.0.0.0 127.255.255.255 B 10 16 2¹⁴ = 16,384 2¹⁶ − 2 = 65,534 128.0.0.0 191.255.255.255 C 110 24 8 2²¹ = 2,097,152 2⁸ − 2 = 254 192.0.0.0 223.255.255.255 D 1110 — 224.0.0.0 239.255.255.255 E 1111 — 240.0.0.0 255.255.255.255 In the above table No. of networks for class A should be 127. (Network ID with all 0 s is not considered) Problems With Classful Addressing Classful addressing resulted in inefficient IP address utilization due to fixed address classes. Problems With Classful Addressing There are these problems, Classful networking was replaced by Classless Inter-Domain Routing (CIDR). We will be discussing Classless addressing in the next post. The network ID is 24 bits long, and the host ID is 8 bits long. Total network addresses = 221=2,097,1522^{21} = 2,097,152221=2,097,152. Total host addresses per network = 28−2=2542^8 - 2 = 25428−2=254. The host ID must be unique within a network. Host ID with all 0s reserved for network ID. Host ID with all 1s reserved for broadcast address. Network IDs starting with 127 are reserved for loopback testing."
            }
          ],
          "quick_revision": [
            "Introduction of Classful IP Addressing Classful IP addressing was an early method (1981–1993) used to assign IP addresses and divide the IPv4 address space into fixed…",
            "All-ones restriction: A host ID with all bits set to 1 is not allowed, as it is reserved for the broadcast address used to reach all hosts in the network.",
            "All-zeros restriction: A network ID with all bits set to 0 represents the local network, is not routed, and therefore is not used for general network identification."
          ]
        },
        {
          "id": "classless-network-addressing",
          "title": "Classless Network Addressing",
          "summary": "Classless Addressing in IP Addressing The network address identifies a specific network on the Internet.  It is used to determine the range of IP addresses within that network and to calculate the total number of possible hosts that can exist in the network.",
          "sections": [
            {
              "id": "classless-network-addressing--overview",
              "heading": "Overview",
              "explanation": "Classless Addressing in IP Addressing The network address identifies a specific network on the Internet. It is used to determine the range of IP addresses within that network and to calculate the total number of possible hosts that can exist in the network. A subnet mask is a 32-bit binary value used to separate the network portion and host portion of an IP address. When a bitwise AND operation is performed between an IP address and the subnet mask, the resulting value represents the network address of that IP block. In classful addressing, each IP address class has a predefined default subnet mask that determines the boundary between the network and host portions of the address. Class A - 255.0.0.0 Class B - 255.255.0.0 Class C - 255.255.255.0\nQuestion: Given the IP address 132.6.17.85 and the default Class B subnet mask, find the network (beginning) address.\nSolution: The default subnet mask for a Class B address is 255.255.0.0, which means the first two bytes represent the network portion, while the last two bytes represent the host portion. By setting the host bits to zero, the network address is obtained. Therefore, the network address is 132.6.0.0. Subnetting Subnetting is the process of dividing a large block of IP addresses into smaller, contiguous sub-blocks and assigning them to smaller networks. It is widely used in classless addressing to efficiently manage and utilize IP address space. A subnet is a logical subdivision of a larger network. Subnetting improves network efficiency by reducing unnecessary traffic. It allows data to travel shorter paths within the network, minimizing the need to pass through multiple routers and improving overall performance. Classless Addressing Classless addressing is an improved IP addressing system designed to reduce IP address wastage by allowing flexible allocation of address blocks. Unlike classful addressing, it does not rely on fixed network classes. Instead, it uses some of the host bits as network bits to create subnets based on actual requirements. In classless addressing, an IP address is written along with a prefix length, usually indicated by a / symbol, such as 192.168.1.1/28. The prefix length specifies how many bits out of the 32-bit IP address are used for the network portion. The subnet mask is created by setting the specified number of bits to 1 and the remaining bits to 0. For example, a /28 prefix results in the subnet mask 255.255.255.240. CIDR also supports supernetting, where multiple contiguous Class C networks can be combined into a larger network, such as a /23 or /22. This allows efficient routing and better utilization of the IPv4 address space. In classless addressing, IP address blocks are assigned dynamically according to specific rules rather than fixed classes. Removes dependency on Class A, B, and C Uses host bits as additional network bits IP address is written with a prefix length (e.g., /28) Subnet mask is derived from the prefix Reduces IP address wastage Supports supernetting and route aggregation Improves scalability and routing efficiency"
            },
            {
              "id": "classless-network-addressing--number-of-subnets-2",
              "heading": "Number of subnets : 2",
              "explanation": "(Given bits for mask - No. of bits in default mask) 2. Subnet address : AND result of subnet mask and the given IP address 3. Broadcast address : By putting the host bits as 1 and retaining the network bits as in the IP address"
            },
            {
              "id": "classless-network-addressing--number-of-hosts-per-subnet-2",
              "heading": "Number of hosts per subnet : 2",
              "explanation": "(32 - Given bits for mask) - 2 5. First Host ID : Subnet address + 1 (adding one to the binary representation of the subnet address)\nExplanation: This program takes an IP address in classful notation as input (e.g. 192.168.0.0) and converts it to classless addressing (CIDR notation) by checking the Class of the IP address and setting the mask(number after '/') on that basis. The resulting CIDR notation is returned by the function ip_classless. Enter an IP address in classful notation: 192.168.0.0 Classless address: 192.168.0.0/24"
            },
            {
              "id": "classless-network-addressing--formulas-code",
              "heading": "Formulas & Code",
              "explanation": "6. Last Host ID : Subnet address + Number of Hosts C++ #include <bits/stdc++.h> using namespace std ; string ip_classless ( string ip ){ // Extract the first octet as a string and then convert it to an int using stoi function int first_octet = stoi ( ip . substr ( 0 , ip . find ( '.' ))); if ( first_octet >= 0 and first_octet <= 127 ){ // Means the IP Address in Class A return ip + \"/8\" ; } if ( first_octet >= 128 and first_octet <= 191 ){ // Means the IP Address is in Class B return ip + \"/16\" ; } if ( first_octet >= 192 and first_octet <= 223 ){ // Means the IP Address is in Class C return ip + \"/24\" ; } return \"Reserved IP Address. Invalid.\" ; } //Driver Code int main () { // Will store the ip address as an input in ip variable string ip ; cout << \"Enter the IP Address: \" ; cin >> ip ; cout << ip_classless ( ip ) << endl ; // This Code is contributed by Himesh Singh Chauhan return 0 ; } C #include <stdio.h> #include <stdlib.h> #include <string.h> char * ip_classless ( char * ip_address ) { int i , j , k ; int octets [ 4 ]; char * mask = ( char * ) malloc ( sizeof ( char ) * 16 ); int bits = 0 ; for ( i = 0 , j = 0 , k = 0 ; i < strlen ( ip_address ); i ++ ) { if ( ip_address [ i ] == '.' ) { octets [ j ++ ] = atoi ( ip_address + k ); k = i + 1 ; } octets [ j ] = atoi ( ip_address + k ); for ( i = 0 ; i < 4 ; i ++ ) { int octet = octets [ i ]; for ( j = 7 ; j >= 0 ; j -- ) { if ( octet >= ( 1 << j )) { bits ++ ; octet -= ( 1 << j ); } else if ( bits % 8 != 0 ) { break ; } sprintf ( mask , \"%s/%d\" , ip_address , bits ); return mask ; } int main () { char ip_address [ 16 ]; printf ( \"Enter an IP address in classful notation: \" ); scanf ( \"%s\" , ip_address ); printf ( \"Classless address: %s \\n \" , ip_classless ( ip_address )); return 0 ; } Python def ip_classless ( ipaddress ) ''' Will return the Classless IP Address ''' # Alongwith the info of the Default Subnet Mask, info like no. of bits used for NID and no. of bits used for HID can also be specified as they depend on the Class only # The no. of Hosts can also be specified on the basis of the Input IP Address # Gets the First Octet through String Slicing firstOctet = int ( ipaddress [ ipaddress . index ( '.' )]) if ( 0 <= firstOctet <= 127 ) # Means this is Class A IP Address return ipaddress + '/8' elif ( 128 <= firstOctet <= 191 ) # Means this is a Class B IP Address return ipaddress + '/16' elif ( 192 <= firstOctet <= 223 ) # Means this is a Class C IP Address return ipaddress + '/24' else print ( \"This is a reserved IP Address, INVALID!!\" ) ip = input ( \"Enter an IP Address in Classful Notation: \" ) print ( ip_classless ( ip )) # This code is contributed by Himesh Singh Chauhan C# using System ; class Program { static string IpClassless ( string ipAddress ) { // Initialize some variables int j = 0 , k = 0 ; int [] octets = new int [ 4 ]; int bits = 0 ; for ( int i = 0 ; i < ipAddress . Length ; i ++ ) { // If we encounter a '.', extract the octet if ( ipAddress [ i ] == '.' ) { octets [ j ++ ] = int . Parse ( ipAddress . Substring ( k , i - k )); // Convert the octet to an integer and store it k = i + 1 ; // Move the starting position of the next octet to the character after the '.' } // Extract the final octet octets [ j ] = int . Parse ( ipAddress . Substring ( k )); for ( int i = 0 ; i < 4 ; i ++ ) { int octet = octets [ i ]; for ( j = 7 ; j >= 0 ; j -- ) { if ( octet >= ( 1 << j )) { bits ++ ; octet -= ( 1 << j ); // Subtract the value of the bit from the octet } else if ( bits % 8 != 0 ) { break ; // If the current bit is 0 and the bit count is not a multiple of 8, stop counting bits } return ipAddress + \"/\" + bits ; // Return the input IP address with the bit count appended } static void Main ( string [] args ) { Console . WriteLine ( \"Enter an IP address in classful notation: \" ); string ipAddress = Console . ReadLine (); Console . WriteLine ( \"Classless address: \" + IpClassless ( ipAddress )); } //The code is contributed by snehalsalokhe"
            }
          ],
          "quick_revision": [
            "Classless Addressing in IP Addressing The network address identifies a specific network on the Internet.",
            "Number of subnets : 2: (Given bits for mask - No. of bits in default mask) 2.",
            "Number of hosts per subnet : 2: (32 - Given bits for mask) - 2 5.",
            "Formulas & Code: 6."
          ]
        },
        {
          "id": "ipv4-header-format",
          "title": "IPv4 Header Format",
          "summary": "IPv4 Datagram Header IP stands for Internet Protocol, and IPv4 refers to Internet Protocol Version 4.  IPv4 was the first widely deployed version of the Internet Protocol and was introduced for use in the ARPANET in 1983.",
          "sections": [
            {
              "id": "ipv4-header-format--overview",
              "heading": "Overview",
              "explanation": "IPv4 Datagram Header IP stands for Internet Protocol, and IPv4 refers to Internet Protocol Version 4. IPv4 was the first widely deployed version of the Internet Protocol and was introduced for use in the ARPANET in 1983. An IPv4 address is a 32-bit numeric value, which is represented in dotted decimal notation (for example, 192.168.1.1). IPv4 is responsible for logical addressing and routing of packets across networks. IPv4 Packet Structure Internet Protocol Version 4 (IPv4) is the fourth version of the Internet Protocol. It is a connectionless protocol used in packet-switched networks. IPv4 is widely used for data communication over different types of networks, such as Ethernet . It provides logical addressing to uniquely identify each device on a network. IPv4 can be configured in different ways, including manual (static) and automatic (dynamic) configuration, depending on the network type. IPv4 uses 32-bit (4-byte) addresses. A total of 2³² addresses are possible in IPv4. IPv4 addresses are written in dotted-decimal notation, consisting of four octets separated by dots (e.g., 192.168.1.5). Traditionally, IPv4 addresses are divided into five classes: A, B, C, D, and E. Classes A, B, and C are used for unicast addressing and differ in network and host bit lengths. Class D addresses are reserved for multicasting . Class E addresses are reserved for experimental purposes. Characteristics of IPv4 IPv4 could be a 32-Bit IP Address. IPv4 could be a numeric address, and its bits are separated by a dot. The number of header fields is twelve and the length of the header field is twenty. It has Unicast, broadcast, and multicast style of addresses. IPv4 supports VLSM (Virtual Length Subnet Mask). IPv4 uses the Post Address Resolution Protocol to map to the MAC address. RIP may be a routing protocol supported by the routed daemon. Networks ought to be designed either manually or with DHCP . Packet fragmentation permits from routers and causing host. IPv4 Datagram Header VERSION Version of the IP protocol (4 bits), which is 4 for IPv4\nHLEN: IP header length (4 bits), which is the number of 32 bit words in the header. The minimum value for this field is 5 and the maximum is 15.\nType of service: Low Delay, High Throughput, Reliability (8 bits)"
            },
            {
              "id": "ipv4-header-format--total-length",
              "heading": "Total Length",
              "explanation": "Length of header + Data (16 bits), which has a minimum value 20 bytes and the maximum is 65,535 bytes. Identification Unique Packet Id for identifying the group of fragments of a single IP datagram (16 bits) Flags 3 flags of 1 bit each : reserved bit (must be zero), do not fragment flag, more fragments flag (same order)"
            },
            {
              "id": "ipv4-header-format--fragment-offset",
              "heading": "Fragment Offset",
              "explanation": "Represents the number of Data Bytes ahead of the particular fragment in the particular Datagram. Specified in terms of number of 8 bytes, which has the maximum value of 65,528 bytes. Time to live Datagram’s lifetime (8 bits), It prevents the datagram to loop through the network by restricting the number of Hops taken by a Packet before delivering to the Destination.\nProtocol: Name of the protocol to which the data is to be passed (8 bits) Header Checksum 16 bits header checksum for checking errors in the datagram header Source IP address 32 bits IP address of the sender Destination IP address 32 bits IP address of the receiver\nOption: Optional information such as source route, record route. Used by the Network administrator to check whether a path is working or not. IPv4 Datagram Header Due to the presence of options, the size of the datagram header can be of variable length (20 bytes to 60 bytes)."
            }
          ],
          "quick_revision": [
            "IPv4 Datagram Header IP stands for Internet Protocol, and IPv4 refers to Internet Protocol Version 4.",
            "Total Length: Length of header + Data (16 bits), which has a minimum value 20 bytes and the maximum is 65,535 bytes.",
            "Fragment Offset: Represents the number of Data Bytes ahead of the particular fragment in the particular Datagram."
          ]
        },
        {
          "id": "ipv4-vs-ipv6",
          "title": "IPv4 vs IPv6",
          "summary": "Difference Between IPv4 and IPv6 The Internet Protocol (IP) assigns a unique address to each device, enabling communication over the internet.",
          "sections": [
            {
              "id": "ipv4-vs-ipv6--overview",
              "heading": "Overview",
              "explanation": "Difference Between IPv4 and IPv6 The Internet Protocol (IP) assigns a unique address to each device, enabling communication over the internet. IPv4, the earlier version, uses 32-bit addresses, providing about 4.3 billion unique addresses, which are now nearly exhausted due to the rapid growth of the internet and IoT devices. IPv6, the newer version, uses 128-bit addresses, offering a vastly larger address space to overcome IPv4 exhaustion and support future internet expansion. IPV4 Vs IPV6 Drawbacks of IPv4\nLimited address space: The 32-bit IPv4 address space is insufficient for the growing number of connected devices.\nComplex configuration: IPv4 relies on manual setup or DHCP, which can lead to configuration errors.\nInefficient routing: Variable and complex headers increase processing overhead.\nLack of built-in security: Security features are not inherent and require additional mechanisms.\nLimited QoS support: Traffic prioritization is weak, affecting real-time applications.\nRouter-based fragmentation: Packet fragmentation by routers reduces efficiency and may cause data loss."
            },
            {
              "id": "ipv4-vs-ipv6--broadcast-traffic-overhead",
              "heading": "Broadcast traffic overhead",
              "explanation": "Broadcast communication increases unnecessary network traffic and degrades performance. Benefits of IPv6 over IPv4 The recent Version of IP IPv6 has a greater advantage over IPv4. Here are some of the mentioned benefits:\nLarger Address Space: IPv6 uses 128-bit addresses (vs. 32-bit in IPv4), allowing many more devices to connect.\nImproved Security: IPv6 has built-in features like data authentication and encryption, making connections safer..\nSimpler Header: IPv6 has a streamlined header, improving speed and reducing processing cost.\nBetter QoS Support: IPv6 provides stronger Quality of Service, improving video, audio, and website performance.\nMobile-Friendly: IPv6 offers better, faster, and more secure support for mobile connections. Switching From IPv4 to IPv6 : To switch from IPv4 to IPv6, there are several strategies Dual Stacking : Devices can use both IPv4 and IPv6 at the same time. This way, they can talk to networks and devices using either version. Tunneling : This method allows IPv6 users to send data through an IPv4 network to reach other IPv6 users. Think of it as creating a \"tunnel\" for IPv6 traffic through the older IPv4 system. Network Address Translation (NAT) : NAT helps devices using different versions of IP addresses (IPv4 and IPv6) to communicate with each other by translating the addresses so they understand each other. IPv4 vs IPv6 The following table summarizes the key differences between IPv4 and IPv6 addressing IPv4 IPv6 Uses a 32-bit IP address. Uses a 128-bit IP address. Uses decimal dot-separated notation (e.g., 192.168.0.1 ). Uses hexadecimal colon-separated notation (e.g., 2001:db8::1 ). Provides a limited address space of about 4.3 billion addresses. Provides an extremely large address space for future growth. Supports manual configuration and DHCP. Supports SLAAC, DHCPv6, and manual configuration. End-to-end connectivity is often affected due to NAT. End-to-end connectivity is restored without NAT. IPsec support is optional. IPsec support is built into the protocol design. Fragmentation is performed by both sender and routers. Fragmentation is performed only by the sender. Does not support flow-based packet identification. Uses a Flow Label field for packet flow identification. Includes a header checksum. Does not include a header checksum. Supports broadcast communication. Uses multicast and anycast instead of broadcast. Header size is variable (20–60 bytes). Header size is fixed at 40 bytes. Uses address classes (A, B, C, D, and E). Does not use address classes. Supports Variable Length Subnet Masking (VLSM). Uses prefix-based addressing. Example address 66.94.29.13 . Example address 2001:db8::1 ."
            }
          ],
          "quick_revision": [
            "Difference Between IPv4 and IPv6 The Internet Protocol (IP) assigns a unique address to each device, enabling communication over the internet.",
            "Broadcast traffic overhead: Broadcast communication increases unnecessary network traffic and degrades performance."
          ]
        },
        {
          "id": "private-vs-public-ip-addresses",
          "title": "Private vs Public IP addresses",
          "summary": "Public and Private IP addresses IP addresses uniquely identify devices on a network, enabling reliable communication, traffic routing, and data delivery.",
          "sections": [
            {
              "id": "private-vs-public-ip-addresses--overview",
              "heading": "Overview",
              "explanation": "Public and Private IP addresses IP addresses uniquely identify devices on a network, enabling reliable communication, traffic routing, and data delivery. Based on their routing scope and accessibility, IP addresses are broadly classified into two types: Private IP Address A Private IP Address is used for communication within a local network (LAN). It enables devices such as computers, smartphones, and printers to exchange data internally. These addresses are typically assigned by a router or DHCP server, ensuring that each device on the network has a unique local identifier. Private IP addresses are not routable on the public internet, meaning they cannot be accessed directly from outside the local network. While this provides network isolation, private IP addresses are not inherently secure. Security depends on firewalls, NAT, and proper network configuration. Private IP Addresses Tracing a Private IP Address A private IP address can only be identified or traced within the local network where it is assigned. Devices connected to the same LAN can view and communicate using private IP addresses. Private IP addresses cannot be traced or accessed from the internet, as they are not visible or routable outside the local network. External networks only see the public IP address used by the router through Network Address Translation (NAT) . Key Features Private IP addresses are not directly reachable from the public internet, which helps reduce exposure to external attacks and unwanted traffic. They provide a large internal address space, allowing networks to scale easily as the number of devices and services increases. Organizations can freely use private IP addresses within their networks without purchasing additional public IP address blocks, making internal addressing cost-efficient. Integration with external services may require additional configuration, as private IP addresses are not globally routable. The use of NAT introduces processing overhead, added latency, and increased network complexity, especially in large-scale or high-traffic environments. Public IP Address A Public IP Address is an IP address used to communicate outside a local network over the internet. It is globally routable and allows devices or networks to send and receive data from external systems. These IP addresses are typically assigned by an Internet Service Provider (ISP). Public IP Addresses Types of Public IP Addresses Dynamic Public IP Address : These IP address is assigned by the ISP and may change over time, usually when the connection is reset or periodically according to the ISP’s policy. Most home and mobile internet connections use dynamic public IP addresses."
            },
            {
              "id": "private-vs-public-ip-addresses--static-public-ip-address",
              "heading": "Static Public IP Address",
              "explanation": "These IP address remains fixed and does not change and commonly used by servers and services such as web servers, mail servers, and DNS servers that need a consistent and reachable address. Tracing a Public IP Address A public IP address can be traced to the ISP that owns and assigns it, along with an approximate geographical location such as city or region. This information does not reveal an exact physical address, but it can be used for network management, content delivery, and basic location-based services. Public IP addresses may be visible to websites and online services, which is why privacy tools such as VPNs, proxy servers, or the Tor network are sometimes used to mask the original public IP address. A VPN works by routing traffic through another server, thereby hiding the user’s actual public IP from external websites. Key Features A public IP address allows a device or service to be directly reachable over the internet. It is commonly used for hosting services such as websites, application servers, game servers, and cloud-based resources. Devices with public IP addresses can communicate directly over the internet without requiring NAT or intermediate address translation. Public IP addresses are usually allocated by Internet Service Providers (ISPs) or cloud service providers and may involve additional cost. Due to IPv4 address exhaustion, public IPv4 addresses are increasingly limited and may be harder to obtain. Private vs Public IP Addresses Private IP Address Public IP Address Used within a local or private network Used for communication over the internet Not routable on the public internet Routable on the public internet Scope is limited to the local network Scope is global Assigned by router or DHCP server Assigned by ISP Unique within a local network Globally unique Requires NAT for internet access Does not require NAT Hidden from external networks Visible on the internet Uses reserved private IP ranges Uses globally assigned IP ranges Freely usable inside networks May involve additional ISP cost Example: 192.168.1.10 Example: 203.0.113.10"
            }
          ],
          "quick_revision": [
            "Public and Private IP addresses IP addresses uniquely identify devices on a network, enabling reliable communication, traffic routing, and data delivery.",
            "Static Public IP Address: These IP address remains fixed and does not change and commonly used by servers and services such as web servers, mail servers, and DNS servers that need a consistent…"
          ]
        },
        {
          "id": "introduction-to-subnetting",
          "title": "Introduction to Subnetting",
          "summary": "Subnetting is the process of dividing a large IP network into smaller logical networks called subnets.  Each subnet allows devices to communicate efficiently, improving network performance, security, and manageability.",
          "sections": [
            {
              "id": "introduction-to-subnetting--overview",
              "heading": "Overview",
              "explanation": "Subnetting is the process of dividing a large IP network into smaller logical networks called subnets. Each subnet allows devices to communicate efficiently, improving network performance, security, and manageability. Each department is assigned a separate subnet Devices within a department communicate using their own subnet Inter-department traffic is routed through a router Broadcast traffic is limited to each subnet Network performance, security, and management are improved Need for Subnetting Subnetting enables a single IP network to be divided into smaller, logical networks, allowing for efficient IP address usage, improved performance, and enhanced security control. Let's consider a company that follows classful addressing. It has a Class C network (192.168.1.0/24) with 256 IP addresses. It has three departments: Subnetting"
            },
            {
              "id": "introduction-to-subnetting--without-subnetting",
              "heading": "Without subnetting",
              "explanation": "All departments share the same network Only 80 IP addresses are used, leaving 176 unused Broadcast traffic floods the entire network Devices from different departments can access each other freely"
            },
            {
              "id": "introduction-to-subnetting--with-subnetting",
              "heading": "With subnetting",
              "explanation": "The network is divided into three smaller subnets Each department receives only the IPs it needs Traffic remains within each subnet, improving performance Departments are logically isolated, improving security IP addresses are used efficiently, with room for future growth Department Devices IPs Allocated (after subnetting) Sales 20 32 (192.168.1.0/27) HR 10 16 (192.168.1.32/28) IT 50 64 (192.168.1.64/26)"
            },
            {
              "id": "introduction-to-subnetting--by-subnetting-we",
              "heading": "By subnetting, we",
              "explanation": "Use IP addresses efficiently, allocating only what each department requires Improve network performance by containing traffic within each subnet Enhance security by isolating departments from one another Key Concept"
            },
            {
              "id": "introduction-to-subnetting--ip-addressing",
              "heading": "IP Addressing",
              "explanation": "An IP address uniquely identifies a device on a network and is divided into logical parts to support routing and communication. An IPv4 address is a 32-bit value written as four octets separated by dots (for example, 192.168.1.1).\nNetwork portion: Identifies the network to which the device belongs"
            },
            {
              "id": "introduction-to-subnetting--host-portion",
              "heading": "Host portion",
              "explanation": "Identifies the specific device within that network In classful IPv4 addressing, IP addresses are divided into classes based on how many bits are used for the network ID and host ID. Class A 8-bit network ID, 24-bit host ID Class B 16-bit network ID, 16-bit host ID\nClass C: 24-bit network ID, 8-bit host ID Classful Addressing Subnet Mask A subnet mask is a 32-bit number used in IP addressing to separate the network portion of an IP address from the host portion. It helps computers and devices determine which part of an IP address refers to the network they are present, And which part refers to their specific location or address within that network. Subnet mask CIDR Notation: A Simplified Approach to Subnetting Instead of using a long subnet mask (e.g., 255.255.255.0), CIDR uses a simple format like /24. The number after the slash (/n) represents the number of bits used for the network portion of the IP address. Working The working of subnets starts in such a way that firstly it divides the subnets into smaller subnets. For communicating between subnets, routers are used. Each subnet allows its linked devices to communicate with each other. Subnetting for a network should be done in such a way that it does not affect the network bits. In class C the first 3 octets are network bits so it remains as it is."
            },
            {
              "id": "introduction-to-subnetting--for-subnet-1",
              "heading": "For Subnet-1",
              "explanation": "The first bit which is chosen from the host id part is zero and the range will be from (193.1.2.00000000 till you get all 1's in the host ID part i.e, 193.1.2.01111111) except for the first bit which is chosen zero for subnet id part. Thus, the range of subnet 1 is: 193.1.2.0 to 193.1.2.127 Subnet id of Subnet 1 is: 193.1.2.0 The direct Broadcast id of Subnet-1 is: 193.1.2.127 The total number of hosts possible is: 126 (Out of 128, 2 id's are used for Subnet id & Direct Broadcast id) The subnet mask of Subnet- 1 is: 255.255.255.128"
            },
            {
              "id": "introduction-to-subnetting--for-subnet-2",
              "heading": "For Subnet-2",
              "explanation": "The first bit chosen from the host id part is one and the range will be from (193.1.2.100000000 till you get all 1's in the host ID part i.e, 193.1.2.11111111). Thus, the range of subnet-2 is: 193.1.2.128 to 193.1.2.255 Subnet id of Subnet 2 is : 193.1.2.128 The direct Broadcast id of Subnet-2 is: 193.1.2.255 The total number of hosts possible is: 126 (Out of 128, 2 id's are used for Subnet id & Direct Broadcast id) The subnet mask of Subnet- 2 is: 255.255.255.128 The best way to find out the subnet mask of a subnet is to set the fixed bit of host-id to 1 and the rest to 0. A /24 network has 254 usable hosts (2 addresses reserved). After dividing into two /25 subnets, each subnet reserves 2 addresses. So total usable hosts become 252 instead of 254 due to extra reserved addresses.\nNote: To divide a network into four (2 2 ) parts you need to choose two bits from the host id part for each subnet i.e, (00, 01, 10, 11). To divide a network into eight (2 3 ) parts you need to choose three bits from the host id part for each subnet i.e, (000, 001, 010, 011, 100, 101, 110, 111) and so on. We can say that if the total number of subnets in a network increases the total number of usable hosts decreases. The network can be divided into two parts: To divide a network into two parts, you need to choose one bit for each Subnet from the host ID part. Subnet In the above diagram, there are two Subnets. Note: It is a class C IP so, there are 24 bits in the network id part and 8 bits in the host id part. Advantages\nImproved Security: Subnets isolate departments, preventing unauthorized access (e.g., HR data hidden from Sales).\nTraffic Prioritization: Critical subnets (e.g., Sales hosting video conferences) can get higher priority.\nEasier Maintenance: Smaller, segmented networks are simpler to manage. Disadvantages\nExtra Overhead: Each subnet wastes 2 IP addresses (network ID and broadcast address).\nHigher Cost: Subnetting often requires additional devices like routers and switches, increasing expenses."
            },
            {
              "id": "introduction-to-subnetting--more-complexity",
              "heading": "More Complexity",
              "explanation": "Compared to a single flat network, subnetting adds extra steps in communication and requires careful planning."
            }
          ],
          "quick_revision": [
            "Subnetting is the process of dividing a large IP network into smaller logical networks called subnets.",
            "Without subnetting: All departments share the same network Only 80 IP addresses are used, leaving 176 unused Broadcast traffic floods the entire network Devices from different departments…",
            "With subnetting: The network is divided into three smaller subnets Each department receives only the IPs it needs Traffic remains within each subnet, improving performance Departments…",
            "By subnetting, we: Use IP addresses efficiently, allocating only what each department requires Improve network performance by containing traffic within each subnet Enhance security by…",
            "IP Addressing: An IP address uniquely identifies a device on a network and is divided into logical parts to support routing and communication.",
            "Host portion: Identifies the specific device within that network In classful IPv4 addressing, IP addresses are divided into classes based on how many bits are used for the network ID…",
            "For Subnet-1: The first bit which is chosen from the host id part is zero and the range will be from (193.1.2.00000000 till you get all 1's in the host ID part i.e, 193.1.2.01111111)…",
            "For Subnet-2: The first bit chosen from the host id part is one and the range will be from (193.1.2.100000000 till you get all 1's in the host ID part i.e, 193.1.2.11111111).",
            "More Complexity: Compared to a single flat network, subnetting adds extra steps in communication and requires careful planning."
          ]
        },
        {
          "id": "role-of-subnet-mask",
          "title": "Role of Subnet Mask",
          "summary": "Role of Subnet Mask A subnet mask is a 32-bit number used with an IP address to divide it into two parts the network ID, and the host ID.",
          "sections": [
            {
              "id": "role-of-subnet-mask--overview",
              "heading": "Overview",
              "explanation": "Role of Subnet Mask A subnet mask is a 32-bit number used with an IP address to divide it into two parts the network ID, and the host ID.\nIn a subnet mask: Binary 1s represent the network portion of the IP address. Binary 0s represent the host portion. The subnet mask helps a device determine whether another device is on the same local network or on a different network, which in turn decides whether communication is direct or must go through a router."
            },
            {
              "id": "role-of-subnet-mask--for-example",
              "heading": "For example",
              "explanation": "Role of Subnet Mask Subnet masks help divide a large network into smaller logical networks called subnets, which improves network efficiency, security, and performance by reducing broadcast traffic and enabling better network management. Function of Subnet Mask Separates an IP address into network ID and host ID. Divides a large network into smaller subnets for better organization. Improves network efficiency, security, and manageability by reducing unnecessary traffic. Helps routers determine whether a packet should be forwarded locally or to another network. Why Use a Subnet Mask? Consider a Class A network, which can support approximately 16 million hosts. Managing such a large network as a single unit is impractical and introduces several challenges: Maintenance becomes difficult due to the large number of connected devices. Security risks increase, as all devices share the same network. For example, in an organization with multiple departments, allowing every department access to the entire network is neither efficient nor secure. Solution: Subnetting Subnetting addresses these issues by dividing a large network into smaller, manageable sub-networks called subnets using a subnet mask. Each department can be assigned its own subnet, which: Improves security by isolating departments Enhances network efficiency by reducing unnecessary traffic Simplifies network management In a network without subnetting, identifying a device involves three steps Identification of the network Identification of the host Identification of the process When subnetting is applied, address identification becomes more structured and involves four steps Identification of the network Identification of the subnet Identification of the host Identification of the process Suppose we have a Class C network and we want to divide it into 4 subnets. To divide we need to choose 2 bits from the host part. As the first and last IP addresses are reserved for network ID and directed broadcast address in every subnet, we have to reserve 8 IP addresses in this case. Representation of Subnet Masks Class C Network: 200.1.2.0/24 i.e. divided into 4 subnets. Borrow 2 bits from the host part. Subnet mask: 255.255.255.192 Binary: 11111111.11111111.11111111.11000000"
            },
            {
              "id": "role-of-subnet-mask--subnet-matching-bitwise-and",
              "heading": "Subnet Matching (Bitwise AND)",
              "explanation": "IP Address: 200.1.2.20 → 11001000.00000001.00000010.00010100 Subnet Mask: 255.255.255.192 → 11111111.11111111.11111111.11000000 Result: 200.1.2.0 → 11001000.00000001.00000010.00000000 So, IP 200.1.2.20 belongs to subnet 200.1.2.0/26. Routing Table and Subnet Matching If the network id doesn’t matches with any of the subnet mask then the packet will be sent to default entry. Default entry has network id as 0.0.0.0. In some cases the network id may match with two entries in the routing table , so here the interface having the longest subnet mask (more 1’s) is selected. Network Classes The Internet Assigned Numbers Authority (IANA), through InterNIC, manages the allocation of IP addresses. Class A, B, C Commonly used by end users. Class D Reserved for multicast.\nClass E: Reserved for experimental purposes. Each class has a default subnet mask, and the first octet (first 8 bits) determines the class. Range of Classes classful IP addressing . Advantages of Subnetting\nReduces Congestion: Limits broadcast traffic, improving network performance.\nEfficient IP Usage: Allocates IPs based on need, avoiding wastage.\nEnhanced Security: Isolates sensitive data within specific subnets.\nDepartmental Segmentation: Prioritizes traffic for specific teams or services.\nScalable & Organized: Makes network expansion easier and manageable. Disadvantages of Subnetting\nFewer Usable Addresses: Network and broadcast IDs reduce host capacity.\nHigher Hardware Costs: Routers or Layer-3 devices are often required.\nComplex Setup: Needs careful planning and technical expertise.\nCompatibility Issues: Legacy devices may not support modern subnets."
            }
          ],
          "quick_revision": [
            "Role of Subnet Mask A subnet mask is a 32-bit number used with an IP address to divide it into two parts the network ID, and the host ID.",
            "For example: Role of Subnet Mask Subnet masks help divide a large network into smaller logical networks called subnets, which improves network efficiency, security, and performance…",
            "Subnet Matching (Bitwise AND): IP Address: 200.1.2.20 → 11001000.00000001.00000010.00010100 Subnet Mask: 255.255.255.192 → 11111111.11111111.11111111.11000000 Result: 200.1.2.0 →…"
          ]
        },
        {
          "id": "calculate-network-broadcast-and-host-addresses",
          "title": "Calculate network, broadcast and host addresses",
          "summary": "How to Calculate Number of Host in a Subnet? Subnetting is a crucial process in network design that involves dividing a larger network into smaller, manageable subnetworks.",
          "sections": [
            {
              "id": "calculate-network-broadcast-and-host-addresses--overview",
              "heading": "Overview",
              "explanation": "How to Calculate Number of Host in a Subnet? Subnetting is a crucial process in network design that involves dividing a larger network into smaller, manageable subnetworks. Determining the number of hosts that each subnet can accommodate is crucial for efficient IP address allocation, preventing waste, and optimizing overall network performance. Proper subnet planning also improves security by isolating network segments and controlling traffic flow. Subnetting and IP Addresses Subnetting and IP addressing are fundamental components of network design, essential for efficient network management, performance optimization, and security. An IP address is a unique identifier assigned to each device on a network, allowing it to communicate with other devices. IPv4 addresses consist of 32 bits divided into four octets, while IPv6 addresses use 128 bits, providing a much larger address space. Subnetting divides a larger network into smaller, manageable segments called subnets, helping organize network traffic and optimize IP address usage.\nSubnet Mask: Differentiates the network and host portions of an IP address, guiding proper routing of network traffic.\nReduces Broadcast Domains: Limits broadcast traffic within each subnet, improving overall network performance.\nEnhanced Security: Isolates subnet traffic, reducing exposure to unauthorized access or potential threats.\nEfficient IP Address Allocation: Prevents IP wastage by allocating addresses according to subnet size and need.\nBetter Traffic Management: Allows control over traffic flow and departmental segmentation.\nImproved Network Efficiency: Optimizes routing and performance through organized and structured subnetting.\nAdjusting the Subnet Mask: For example, changing from 255.255.255.0 to 255.255.255.192 allows administrators to create smaller, more manageable networks."
            },
            {
              "id": "calculate-network-broadcast-and-host-addresses--host-capacity-calculation",
              "heading": "Host Capacity Calculation",
              "explanation": "Uses formulas like 2 (32-n) −2 to calculate the number of usable hosts per subnet, where n represents the number of bits designated for the network and subnet parts. Subnet Mask CIDR Notation Total Subnets Usable Hosts per Subnet 255.255.255.0 /24 1 254 255.255.255.128 /25 2 126 255.255.255.192 /26 4 62 255.255.255.224 /27 8 30 255.255.255.240 /28 16 14 255.255.255.248 /29 32 6 255.255.255.252 /30 64 2\nNotes: Usable hosts per subnet = 2^(32−n) − 2 , where n = number of bits in the subnet mask. For /31 or /32 subnets, adjustments are needed since the standard -2 formula does not apply.\nSubnet Mask: This is the mask used to determine what portion of an IP address refers to the network and what part refers to the host.\nSubnet Notation: This is the CIDR (Classless Inter-Domain Routing) notation that also indicates the subnet mask.\nTotal Subnets: The number of distinct networks that can be created with the given subnet mask.\nUsable Hosts per Subnet: The number of devices that can be assigned IP addresses within each subnet, excluding the network and broadcast addresses. We use fundamental networking formulas that are based on the number of bits allocated for network and host parts in the subnet mask. Here’s a breakdown of the calculations:"
            },
            {
              "id": "calculate-network-broadcast-and-host-addresses--basic-formulas",
              "heading": "Basic Formulas",
              "explanation": "Number of Usable Hosts : Usable Hosts = 2 h - 2, Where h is the number of bits used for hosts in the subnet mask. The subtraction of 2 accounts for the network address and the broadcast address, which cannot be assigned to hosts. Number of Subnets : Total Subnets = 2 s Where s is the number of bits borrowed from the original host part to create more network bits in subnetting. Subnet Mask 255.255.255.128 or /25\nCIDR Notation: /25 indicates that 25 bits are used for the network part.\nApplying the Formulas to Different Masks: The same process applies to other subnet masks, adjusting the number of host bits (h) and the number of borrowed bits (s) accordingly:"
            },
            {
              "id": "calculate-network-broadcast-and-host-addresses--formulas-code",
              "heading": "Formulas & Code",
              "explanation": "Calculating Usable Hosts Total bits for IPv4 = 32 Network bits = 25 Host bits h = 32 - 25 = 7 Usable Hosts = 2 7 −2 = 126 Assuming we are subnetting within a larger block (e.g., a /24 block) Bits borrowed for subnetting s = 25 - 24 (original block) = 1 Total Subnets = 2 1 = 2 /26 Subnet Mask Network bits = 26, Host bits h = 6 Usable Hosts = 2 6 −2 = 62 Assuming subnetting within a /24, s = 2, Total Subnets = 2 2 = 4 /27 Subnet Mask Network bits = 27, Host bits h = 5 Usable Hosts = 2 5 −2 = 30 Assuming subnetting within a /24, s = 3, Total Subnets = 2 3 = 8 These calculations are essential for network engineers and administrators to efficiently plan and allocate IP addresses within a network, ensuring optimal utilization and avoiding address exhaustion. Steps to Find the Number of Computers Connected in the Given IP Address"
            },
            {
              "id": "calculate-network-broadcast-and-host-addresses--identify-the-class-of-the-ip-address",
              "heading": "Identify the Class of the IP address",
              "explanation": "To find the number of computers connected in the network first we need to identify the class of the IP address, there are 5 classes of IP addresses they are A, B, C, D, and E. Each IPv4 address consists of 32 bits, divided into 4 octets, 1 octet = 8 bits. Look at the first octet to find the class of the given IP address. The range of each class is given in the following table. IP Class First Octet Range Address Range Description Class A 1 – 126 1.0.0.0 – 126.255.255.255 Designed for very large networks Class B 128 – 191 128.0.0.0 – 191.255.255.255 Suitable for medium-sized networks Class C 192 – 223 192.0.0.0 – 223.255.255.255 Used for small networks Class D 224 – 239 224.0.0.0 – 239.255.255.255 Reserved for multicast groups Class E 240 – 255 240.0.0.0 – 255.255.255.255 Reserved for experimental use\nExample: If the IP address given is 64.19.23.0 then the first octet is 64 which is in the range of 0 to 127, so the given IP address belongs to class A ."
            },
            {
              "id": "calculate-network-broadcast-and-host-addresses--finding-the-network-ip-address",
              "heading": "Finding the Network IP address",
              "explanation": "Finding the network IP address involves determining the portion of an IP address that identifies the specific network to which a device belongs. This can be accomplished by using the subnet mask along with the device's IP address. Here's how you can find the network IP address: Understand IP Address and Subnet Mask : Every device on a network has an IP address and a corresponding subnet mask. The subnet mask helps in identifying how the IP address is divided into network and host parts. Binary Conversion : Convert both the IP address and the subnet mask into binary. An IP address is composed of four octets (e.g., 192.168.1.15), as is the subnet mask (e.g., 255.255.255.0). Perform a Binary AND Operation : Perform a bitwise AND operation between the binary form of the IP address and the subnet mask. This operation compares corresponding bits of the IP address and the subnet mask and applies the logical AND operation, which results in the network portion."
            },
            {
              "id": "calculate-network-broadcast-and-host-addresses--for-example",
              "heading": "For example",
              "explanation": "If the IP address is 192.168.1.10 (11000000.10101000.00000001.00001010 in binary ) and the subnet mask is 255.255.255.0 (11111111.11111111.11111111.00000000 in binary ) Then result of the AND operation would be 11000000.10101000.00000001.00000000, which corresponds to 192.168.1.0 . Convert Back to Decimal : Convert the result of the AND operation back to decimal format to get the network address. This is the part of the IP address that identifies the network to which the device is connected. Verification : You can use various network tools or command-line utilities like ipconfig (on Windows) or ifconfig (on Unix/Linux) to display the IP address, subnet mask, and network address for verification."
            },
            {
              "id": "calculate-network-broadcast-and-host-addresses--finding-the-number-of",
              "heading": "Finding the number of",
              "explanation": "Finding the number of hosts or number of computers connected to that network The class it belongs will tell the range of hosts that can connect to that network, it's given in the below table. Classes Number of networks possible Number of hosts possible in 1 network Number of usable hosts in 1 network A 126 2 24 2 24 - 2 B 16384 65536 65534 C 2 21 256 254 D no networks no hosts - E no networks no hosts - [Note Class D is reserved for Multicasting , group email/ broadcast, possible IP address in class D are 2 28 Class E is reserved for experimental and research / military purposes, possible IP addresses in class E is 2 28 ] In simple words, the Number of hosts in any network can be calculated with the formula = 2 x - 2, where x is the number of host ID bits in the IP address. Why do we subtract 2? Becausethe first and last addresses are not used for any hosts because the first IP is used to represent the whole network ID while the last IP is used as the broadcast address .\nExample: The given IP address is 192.168.254.1 it belongs to class C, when we perform AND operation on IP address with a default mask of class C, we get the network IP address as 192.168.254.0 this is the IP address used to represent the whole network and the broadcast address will be the last IP address of this network which is 192.168.254.255 Example 1: Find the Class, network IP address, number of hosts (computers), and broadcast address of 9.1.5.31\nAnswer: Finding the Class to which the given IP address belongs to The first octet has a value of 9 which is in the range of 0 to 127 so the given IP address belongs to Class A. Finding the Network IP address The default mask for class A as given in the table is 255.0.0.0 Perform the AND operation to get the network IP address 9.1.5.31 => 00001001.00000001.00000101.00011111 255.0.0.0 => 11111111.00000000.00000000.00000000 00001001.00000000.00000000.00000000 => 9.0.0.0 IP address = 9.1.5.31, Network address= 9.0.0.0 So, Network ID bits= 8 (first octet), Host ID bits = 24 (Last three octets) The network IP address of the given IP address is 9.0.0.0 The number of hosts in each network is 2 24 - 2 The broadcast IP address is 9.255.255.255 Example 2: Find the Class, network IP address, number of hosts (computers), and broadcast address of 201.20.30.40\nAnswer: Finding the Class to which the given IP address belongs to The first octet has a value of 201 which is in the range of 192 to 223 so the given IP address belongs to Class C. Finding the Network IP address The default mask for class C as given in the table is 255.255.255.0 Perform the AND operation to get the network IP address 201.20.30.40 => 11001001.00010100.00011110.00101000 255.255.255.0 => 11111111.11111111.11111111.00000000 11001001.00010100.00011110.00000000 => 201.20.30.0 IP address = 201.20.30.40, Network address= 201.20.30.0 So, Network ID bits= 24 (first three octets), Host ID bits= 8 (Last octet) The network IP address of the given IP address is 201.20.30.0 The number of hosts in each network is 2 8 - 2= 254 The broadcast IP address is 201.20.30.255"
            }
          ],
          "quick_revision": [
            "How to Calculate Number of Host in a Subnet? Subnetting is a crucial process in network design that involves dividing a larger network into smaller, manageable…",
            "Host Capacity Calculation: Uses formulas like 2 (32-n) −2 to calculate the number of usable hosts per subnet, where n represents the number of bits designated for the network and subnet parts.",
            "Basic Formulas: Number of Usable Hosts : Usable Hosts = 2 h - 2, Where h is the number of bits used for hosts in the subnet mask.",
            "Formulas & Code: Calculating Usable Hosts Total bits for IPv4 = 32 Network bits = 25 Host bits h = 32 - 25 = 7 Usable Hosts = 2 7 −2 = 126 Assuming we are subnetting within a larger…",
            "Identify the Class of the IP address: To find the number of computers connected in the network first we need to identify the class of the IP address, there are 5 classes of IP addresses they are A, B, C, D,…",
            "Finding the Network IP address: Finding the network IP address involves determining the portion of an IP address that identifies the specific network to which a device belongs.",
            "For example: If the IP address is 192.168.1.10 (11000000.10101000.00000001.00001010 in binary ) and the subnet mask is 255.255.255.0 (11111111.11111111.11111111.00000000 in binary )…",
            "Finding the number of: Finding the number of hosts or number of computers connected to that network The class it belongs will tell the range of hosts that can connect to that network, it's…"
          ]
        },
        {
          "id": "variable-length-subnet-masking-vlsm",
          "title": "Variable Length Subnet Masking (VLSM)",
          "summary": "Introduction of Variable Length Subnet Mask (VLSM) Variable Length Subnet Mask (VLSM) is a subnetting technique that allows network administrators to divide an IP network into subnets of different sizes . Instead of using one fixed subnet mask for all subnets (as in FLSM), VLSM allows you to apply…",
          "sections": [
            {
              "id": "variable-length-subnet-masking-vlsm--overview",
              "heading": "Overview",
              "explanation": "Introduction of Variable Length Subnet Mask (VLSM) Variable Length Subnet Mask (VLSM) is a subnetting technique that allows network administrators to divide an IP network into subnets of different sizes . Instead of using one fixed subnet mask for all subnets (as in FLSM), VLSM allows you to apply multiple subnet masks within the same network , based on the number of hosts each subnet requires. This flexibility makes VLSM one of the most efficient IP addressing methods used in modern networks. Why Do We Need VLSM? In traditional subnetting (Fixed Length Subnet Mask → FLSM), all subnets must have the same size . This often leads to wastage of IP addresses. Example of Wastage in FLSM If you use a /24 mask (255.255.255.0), each subnet gets 254 usable IP addresses .\nBut if: One department needs only 10 hosts Another needs 50 hosts Both still receive 254 IPs → huge wastage . VLSM solves this by allowing subnets with different masks , such as Smaller subnet mask → More hosts Larger subnet mask → Fewer hosts This ensures minimum IP wastage . What is VLSM? VLSM stands for Variable Length Subnet Mask ."
            },
            {
              "id": "variable-length-subnet-masking-vlsm--it-means",
              "heading": "It means",
              "explanation": "You can use more than one mask inside the same Class A/B/C network. You can create subnets of different sizes based on actual requirements. It is often described as subnetting the subnet . VLSM improves scalability, optimizes IP usage, and is widely used in real-world routing environments (like OSPF, EIGRP, BGP). How VLSM Works (Step-by-Step Procedure) A network administrator has the IP block 192.168.1.0/24 , and four departments Department Required Hosts Sales & Purchase 120 Development 50 Accounts 26 Management 5 Step 1: Determine Required Block Sizes\nEach subnet must provide enough hosts to cover: Network address Broadcast address Host IPs So, pick block sizes ≥ required hosts. Step 2: Sort Requirements in Descending Order\nLargest requirements first: Sales & Purchase → 120 hosts Development → 50 hosts Accounts → 26 hosts Management → 5 hosts Step 3: Start Assigning Subnets from Largest Block 1. Sales & Purchase (120 hosts) Nearest block size → /25 (126 hosts) Subnet 192.168.1.0/25 Mask 255.255.255.128"
            },
            {
              "id": "variable-length-subnet-masking-vlsm--development-50-hosts",
              "heading": "Development (50 hosts)",
              "explanation": "Nearest block size → /26 (62 hosts) Subnet 192.168.1.128/26 Mask 255.255.255.192 3. Accounts (26 hosts) Nearest block size → /27 (30 hosts) Subnet 192.168.1.192/27 Mask 255.255.255.224"
            },
            {
              "id": "variable-length-subnet-masking-vlsm--management-5-hosts",
              "heading": "Management (5 hosts)",
              "explanation": "Nearest block size → /29 (6 hosts) Subnet 192.168.1.224/29\nMask: 255.255.255.248 Although /28 (14 hosts) could also work, /29 is chosen to minimize wastage . Advantages of VLSM over FLSM"
            },
            {
              "id": "variable-length-subnet-masking-vlsm--efficient-ip-utilization",
              "heading": "Efficient IP Utilization",
              "explanation": "VLSM allows allocating small subnets for fewer hosts and larger ones for bigger departments, reducing overall IP wastage."
            },
            {
              "id": "variable-length-subnet-masking-vlsm--high-flexibility",
              "heading": "High Flexibility",
              "explanation": "Network administrators can design subnet sizes based on exact requirements, which is especially useful in complex networks.\nBetter Scalability: As the network grows, new subnets can be added without redesigning the entire IP plan.\nImproved Performance: Well-sized subnets reduce unnecessary broadcast traffic, improving network performance."
            },
            {
              "id": "variable-length-subnet-masking-vlsm--reduced-management-overhead",
              "heading": "Reduced Management Overhead",
              "explanation": "Optimized addressing makes it easier to track and maintain subnets—especially in large organizations."
            },
            {
              "id": "variable-length-subnet-masking-vlsm--essential-for-public-ip-allocation",
              "heading": "Essential for Public IP Allocation",
              "explanation": "VLSM is critical when using public IP addresses because wastage must be minimized. Disadvantages of VLSM\nIncreased Complexity: Requires advanced planning and knowledge of subnetting.\nHigher Management Overhead: More subnets mean more configurations and documentation.\nRisk of IP Fragmentation: Subnets can become scattered, making the IP space appear fragmented.\nCompatibility Limitations: Older hardware/protocols may not support VLSM.\nConfiguration Errors: Manual planning can lead to mistakes, causing IP conflicts or routing issues.\nPotential Reduced Performance: If poorly designed, too many small subnets can cause congestion.\nIncreased Training Requirements: Network staff must understand subnetting deeply.\nPossible Security Issues: Improperly isolated subnets may expose sensitive data.\nHigher Cost: Advanced routers and software are sometimes required, increasing overall network cost."
            }
          ],
          "quick_revision": [
            "Introduction of Variable Length Subnet Mask (VLSM) Variable Length Subnet Mask (VLSM) is a subnetting technique that allows network administrators to divide an IP…",
            "It means: You can use more than one mask inside the same Class A/B/C network.",
            "Development (50 hosts): Nearest block size → /26 (62 hosts) Subnet 192.168.1.128/26 Mask 255.255.255.192 3.",
            "Management (5 hosts): Nearest block size → /29 (6 hosts) Subnet 192.168.1.224/29",
            "Efficient IP Utilization: VLSM allows allocating small subnets for fewer hosts and larger ones for bigger departments, reducing overall IP wastage.",
            "High Flexibility: Network administrators can design subnet sizes based on exact requirements, which is especially useful in complex networks.",
            "Reduced Management Overhead: Optimized addressing makes it easier to track and maintain subnets—especially in large organizations.",
            "Essential for Public IP Allocation: VLSM is critical when using public IP addresses because wastage must be minimized."
          ]
        },
        {
          "id": "supernetting",
          "title": "Supernetting",
          "summary": "Supernetting in Network Layer Supernetting is the opposite of subnetting.  While subnetting splits a large network into smaller subnets, supernetting combines multiple smaller networks with similar prefixes into a larger network (supernet).",
          "sections": [
            {
              "id": "supernetting--overview",
              "heading": "Overview",
              "explanation": "Supernetting in Network Layer Supernetting is the opposite of subnetting. While subnetting splits a large network into smaller subnets, supernetting combines multiple smaller networks with similar prefixes into a larger network (supernet). It reduces routing table size, simplifies routing, and optimizes IP address usage, primarily through route summarization."
            },
            {
              "id": "supernetting--benefits-of-supernetting",
              "heading": "Benefits of Supernetting",
              "explanation": "Saves storage space in routing tables Reduces the number of routing updates Simplifies routing decisions Helps manage the growth of routing tables as the Internet expands Important Points for Supernetting All the Networks should be contiguous. The block size of every network should be equal and must be in form of 2 n . First Network id should be exactly divisible by whole size of supernet.\nExample: Combining Four Class C Networks\nConsider Networks: 200.1.0.0, 200.1.1.0, 200.1.2.0, 200.1.3.0\nOriginal Routing Table: Network Id Subnet Mask Interface 200.1.0.0 255.255.255.0 A 200.1.1.0 255.255.255.0 B 200.1.2.0 255.255.255.0 C 200.1.3.0 255.255.255.0 D"
            },
            {
              "id": "supernetting--contiguous-networks",
              "heading": "Contiguous Networks",
              "explanation": "All networks must be next to each other without gaps.\nExample: 200.1.0.0 – 200.1.0.255 is the first network. Add 1 to the last IP ( 200.1.0.255 + 1 = 200.1.1.0 ) to get the next network. Repeat to ensure all networks are contiguous."
            },
            {
              "id": "supernetting--equal-network-size",
              "heading": "Equal Network Size",
              "explanation": "All networks must have the same number of IP addresses . For Class C networks, each has 256 addresses ( /24 )."
            },
            {
              "id": "supernetting--first-ip-aligns-with-supernet-size",
              "heading": "First IP Aligns with Supernet Size",
              "explanation": "Total supernet size = sum of all networks (in powers of 2, e.g., 4 × 256 = 1024 addresses). Convert the first IP to binary. If the last n bits (where n = bits representing supernet size) are all 0, the first IP is correctly aligned for supernetting. In the given example first IP is 200.1.0.0 and whole size of supernet is 4*2 8 = 2 10 . If last 10 bits of first IP address are zero then IP will be divisible. Last 10 bits of first IP address are zero (highlighted by green color). All conditions are satisfied, so these four networks can be combined into one supernet . Advantages of Supernetting Control and reduce network traffic Helpful to solve the problem of lacking IP addresses Minimizes the routing table i.e, it cannot cover a different area of the network when combined and all the networks should be in the same class and all IP should be contiguous"
            }
          ],
          "quick_revision": [
            "Supernetting in Network Layer Supernetting is the opposite of subnetting.",
            "Benefits of Supernetting: Saves storage space in routing tables Reduces the number of routing updates Simplifies routing decisions Helps manage the growth of routing tables as the Internet…",
            "Contiguous Networks: All networks must be next to each other without gaps.",
            "Equal Network Size: All networks must have the same number of IP addresses . For Class C networks, each has 256 addresses ( /24 ).",
            "First IP Aligns with Supernet Size: Total supernet size = sum of all networks (in powers of 2, e.g., 4 × 256 = 1024 addresses)."
          ]
        },
        {
          "id": "what-is-routing",
          "title": "What is Routing?",
          "summary": "Routing Network routing is the process of selecting the best path for data to travel across one or more networks.  It plays a vital role in the internet by ensuring that data packets reach their correct destination efficiently.",
          "sections": [
            {
              "id": "what-is-routing--overview",
              "heading": "Overview",
              "explanation": "Routing Network routing is the process of selecting the best path for data to travel across one or more networks. It plays a vital role in the internet by ensuring that data packets reach their correct destination efficiently. Routing determines the path IP packets follow from source to destination. It is used in packet-switched networks like the Internet. Different routing methods are used to optimize speed, reliability, and performance. Router A router is a networking device that controls how data moves between different networks by checking destination IP addresses and choosing the best path. Forwards data packets between networks Works at Layer 3 (Network Layer) of the OSI model Selects the best route for data transfer Routing of a data packet is done by analyzing the destination IP Address of the packet. Look at the below image: The Source Node (Sender) sends the data packet on the network, embedding the IP in the header of the data packet. The nearest router receives the data packet, and based on some metrics, further routes the data packet to other routers. Step 2 occurs recursively till the data packet reaches its intended destination.\nNote: There are limits to how many hop counts a packet can do if it is exceeded, the packet is considered to be lost. Different Types of Routing Routing is typically of 3 types, each serving its purpose and offering different functionalities."
            },
            {
              "id": "what-is-routing--static-routing",
              "heading": "Static Routing",
              "explanation": "Static routing is a non-adaptive routing method where routes are configured manually by the network administrator. It provides complete control over routing decisions but is best suited for small networks. Routes are added manually Full control over packet routing Simple but hard to manage in large networks"
            },
            {
              "id": "what-is-routing--dynamic-routing",
              "heading": "Dynamic Routing",
              "explanation": "Dynamic routing is an automatic and adaptive routing method where routers choose paths using algorithms. It is widely used in modern networks due to its flexibility. Routes update automatically Adapts to network changes Suitable for large networks"
            },
            {
              "id": "what-is-routing--default-routing",
              "heading": "Default Routing",
              "explanation": "Default routing sends packets to a predefined gateway when no specific route is available. It is commonly used in networks with a single exit point. Used when no route is found Simple and efficient setup Default route: 0.0.0.0/0 Working Principle of Routing Routing works by finding the shortest path from the source node to the destination node across a network. Here's the step-by-step working of routing: Step 1: Communication Start - A device (client or server) starts communication using the HTTP protocol. Step 2: Data Packets : The data is broken into small packets. Each packet is tagged with the destination IP address. Step 3: Routing Table - Routers use a routing table to find the best and shortest path to the destination. Step 4: Hopping - Packets travel through multiple routers (hops) to reach the destination. There is a limit on the number of hops; if exceeded, the packet is dropped and retransmitted. Step 5: Destination - Packets reach the destination, are reassembled, and checked for errors. In the above image, we have 3 major components Sender Receiver Routers The shortest path is highlighted in red, the path with the least hop count. As we can see, there are multiple paths from source to node but if all the appropriate metrics are satisfied, the data packets will be transmitted through the shortest path (highlighted in red). Main Routing Protocols\nRIP (Routing Information Protocol): It is a distance-vector protocol that uses hop count as a metric.\nOSPF (Open Shortest Path First): OSPF is a link-state protocol that finds the shortest path using the Dijkstra algorithm.\nEIGRP (Enhanced Interior Gateway Routing Protocol): It is a hybrid protocol that combines features of distance-vector and link-state."
            },
            {
              "id": "what-is-routing--bgp-border-gateway-protocol",
              "heading": "BGP (Border Gateway Protocol)",
              "explanation": "It is a path-vector protocol that is used for routing between different autonomous systems on the internet."
            },
            {
              "id": "what-is-routing--is-is-intermediate-system-to-intermediate-system",
              "heading": "IS-IS (Intermediate System to Intermediate System)",
              "explanation": "It is a link-state protocol that is primarily used in large networks like ISPs. Different Routing Metrics The purpose of routing protocols is to learn about all the available paths to route data packets, build routing tables, and make routing decisions based on specified metrics. There are two primary types of routing protocols rest of them ideate from these two only."
            },
            {
              "id": "what-is-routing--distance-vector-routing",
              "heading": "Distance Vector Routing",
              "explanation": "In this type of routing protocol, all the nodes that are a part of the network advertise their routing table to their adjacent nodes (nodes that are directly connected) at regular intervals. With each router getting updated at regular intervals, it may take time for all the nodes to have the same accurate network view. Uses fixed length sub-net, not suitable for scaling.\nAlgorithm used: Bellman Ford Algorithm to find the shortest path."
            },
            {
              "id": "what-is-routing--link-state-routing",
              "heading": "Link State Routing",
              "explanation": "Link State Routing is a type of dynamic routing protocol where routers send updates only when there is a change in the network, saving bandwidth. Routers share information about links such as cost and hop count to find the best path. It uses Variable Length Subnet Mask (VLSM) for better and scalable addressing. It uses Dijkstra’s Algorithm to calculate the shortest path. The cost between nodes is measured using different routing metrics."
            },
            {
              "id": "what-is-routing--hop-count",
              "heading": "Hop Count",
              "explanation": "The number of nodes a data packet passes through to reach its destination. Fewer hops mean a shorter and faster path.\nBandwidth Consumption: Routing selects paths that use network bandwidth efficiently to avoid congestion.\nDelay: The time taken by a data packet to travel from source to destination. Routing aims to reduce delays.\nLoad: Refers to how busy a network path is. Packets are sent through less busy paths for faster delivery.\nReliability: Routing chooses stable and available paths to ensure data reaches its destination safely. Advantages of Routing\nRouting: Helps send data efficiently by choosing the best path.\nAutomated Routing: Uses algorithms to reduce manual work but gives less direct control.\nManual Routing: Provides better control but requires more effort to manage."
            },
            {
              "id": "what-is-routing--scalable-routing",
              "heading": "Scalable Routing",
              "explanation": "Works well for large networks and supports load balancing to reduce traffic and data loss. Disadvantages of Routing\nStatic Routing: Suitable only for small networks; difficult to manage and less secure in large networks.\nDynamic Routing: Offers less manual control and uses more bandwidth and system resources.\nDefault Routing: Easy to use but can cause issues if the default path is not properly configured."
            }
          ],
          "quick_revision": [
            "Routing Network routing is the process of selecting the best path for data to travel across one or more networks.",
            "Static Routing: Static routing is a non-adaptive routing method where routes are configured manually by the network administrator.",
            "Dynamic Routing: Dynamic routing is an automatic and adaptive routing method where routers choose paths using algorithms.",
            "Default Routing: Default routing sends packets to a predefined gateway when no specific route is available.",
            "BGP (Border Gateway Protocol): It is a path-vector protocol that is used for routing between different autonomous systems on the internet.",
            "IS-IS (Intermediate System to Intermediate System): It is a link-state protocol that is primarily used in large networks like ISPs.",
            "Distance Vector Routing: In this type of routing protocol, all the nodes that are a part of the network advertise their routing table to their adjacent nodes (nodes that are directly connected)…",
            "Link State Routing: Link State Routing is a type of dynamic routing protocol where routers send updates only when there is a change in the network, saving bandwidth.",
            "Hop Count: The number of nodes a data packet passes through to reach its destination.",
            "Scalable Routing: Works well for large networks and supports load balancing to reduce traffic and data loss."
          ]
        },
        {
          "id": "static-vs-dynamic-routing",
          "title": "Static vs Dynamic Routing",
          "summary": "Static and Dynamic Routing Routing controls how data packets move from source to destination, ensuring efficient and reliable delivery.",
          "sections": [
            {
              "id": "static-vs-dynamic-routing--overview",
              "heading": "Overview",
              "explanation": "Static and Dynamic Routing Routing controls how data packets move from source to destination, ensuring efficient and reliable delivery. It can be done in the following two ways, static and dynamic routing."
            },
            {
              "id": "static-vs-dynamic-routing--static-routing",
              "heading": "Static Routing",
              "explanation": "Static Routing is also known as non-adaptive routing, which doesn't change the routing table unless the network administrator changes or modifies it manually. It does not use complex routing algorithms. Provides higher or more security than dynamic routing. Advantages No CPU overhead on routers, cheaper routers can be used. More secure, only the administrator controls the allowed routes. No bandwidth is consumed between routers. Disadvantage Manually adding routes in large networks is time-consuming. It requires detailed knowledge of the network topology. New administrators must learn all routes to configure them correctly."
            },
            {
              "id": "static-vs-dynamic-routing--dynamic-routing",
              "heading": "Dynamic Routing",
              "explanation": "This routing is also known as adaptive routing, which automatically updates the routing table whenever there is a change in the network topology. It uses complex algorithms to calculate routes, but it is less secure compared to static routing. When a change occurs, routers exchange messages and recalculate the routes to ensure updated routing information is shared across the network. Advantages\nAutomatic Route Updates: Routes are updated automatically when network topology changes\nEfficient Path Selection: Chooses the best available path using metrics like hop count, cost, or delay\nScalability: Suitable for large and complex networks with multiple routers\nReduced Manual Configuration: Eliminates the need to manually configure and update routes\nFault Tolerance: Automatically reroutes traffic if a link or router fails Disadvantages\nHigher Bandwidth Usage: Consumes bandwidth for exchanging routing information between routers\nLess Secure: Vulnerable to attacks if routing updates are not properly secured\nComplex Configuration: Requires understanding of routing protocols and proper setup\nSlower Convergence: Takes time to update routes after a network change"
            },
            {
              "id": "static-vs-dynamic-routing--resource-intensive",
              "heading": "Resource Intensive",
              "explanation": "Uses more CPU and memory compared to static routing Static vs Dynamic Routing Static Routing Dynamic Routing Routes are manually configured by the administrator Routes are automatically updated based on network changes Does not use routing algorithms Uses routing protocols and algorithms More secure (no automatic updates) Less secure if not properly configured Suitable for small networks Suitable for large and complex networks Requires less bandwidth and resources Requires more bandwidth and processing power No automatic rerouting on failure Automatically adapts to network failures Also known as non-adaptive routing Also known as adaptive routing"
            }
          ],
          "quick_revision": [
            "Static and Dynamic Routing Routing controls how data packets move from source to destination, ensuring efficient and reliable delivery.",
            "Static Routing: Static Routing is also known as non-adaptive routing, which doesn't change the routing table unless the network administrator changes or modifies it manually.",
            "Dynamic Routing: This routing is also known as adaptive routing, which automatically updates the routing table whenever there is a change in the network topology.",
            "Resource Intensive: Uses more CPU and memory compared to static routing Static vs Dynamic Routing Static Routing Dynamic Routing Routes are manually configured by the administrator Routes…"
          ]
        },
        {
          "id": "link-state-routing",
          "title": "Link State Routing",
          "summary": "Unicast Communication and Link State Routing Unicast means the transmission from a single sender to a single receiver.  It is a point-to-point communication between the sender and receiver.",
          "sections": [
            {
              "id": "link-state-routing--overview",
              "heading": "Overview",
              "explanation": "Unicast Communication and Link State Routing Unicast means the transmission from a single sender to a single receiver. It is a point-to-point communication between the sender and receiver. There are various unicast protocols such as TCP, HTTP, etc. TCP (Transmission Control Protocol) is the most commonly used unicast protocol. It is a connection-oriented protocol that relies on acknowledgment from the receiver side. HTTP stands for HyperText Transfer Protocol. It is an object-oriented protocol for communication. Unicast Routing Major Protocols of Unicast Routing\nDistance Vector Routing: Distance-Vector routers use a distributed algorithm to compute their routing tables.\nLink-State Routing: Link-State routing uses link-state routers to exchange messages that allow each router to learn the entire network topology."
            },
            {
              "id": "link-state-routing--path-vector-routing",
              "heading": "Path-Vector Routing",
              "explanation": "It is a routing protocol that maintains the path that is updated dynamically. Link State Routing Link State Routing is a protocol where each router learns the entire network topology instead of just neighbor information. Using this knowledge, routers calculate the shortest path to every destination with Dijkstra’s algorithm.\nNeighborhood Knowledge: Each router shares information about its directly connected links (cost and identity) rather than the full routing table.\nFlooding: This information is broadcast to all routers in the network so that everyone has the same view of the topology.\nInformation Sharing: Updates are sent only when changes occur (not periodically).\nReliable Flooding: Every router eventually learns the complete network graph.\nRoute Calculation: Each router applies Dijkstra’s algorithm to compute the optimal path to every other node. Features\nLink State Packet: A small packet that contains routing information.\nLink-State Database: A collection of information gathered from the link-state packet.\nShortest Path First Algorithm (Dijkstra algorithm): A calculation performed on the database results in the shortest path"
            },
            {
              "id": "link-state-routing--routing-table",
              "heading": "Routing Table",
              "explanation": "A list of known paths and interfaces. Calculation of Shortest Path To find the shortest path, each node needs to run the famous Dijkstra algorithm . Let us understand how can we find the shortest path using an example.\nNote: We use a boolean array sptSet[] to represent the set of vertices included in SPT. If a value sptSet[v] is true, then vertex v is included in SPT, otherwise not. Array dist[] is used to store the shortest distance values of all vertices. Consider the below graph and src = 0. Shortest Path Calculation - Step 1 STEP 1 Initially, the shortest path tree set ( sptSet STEP 2 Pick the vertex with minimum distance value and not already included in SPT (not in sptSET). The vertex 1 is picked and added to sptSet. So sptSet now becomes {0, 1}. Update the distance values of adjacent vertices of 1. The distance value of vertex 2 becomes 12. Shortest Path Calculation - Step 3 STEP 3 Pick the vertex with minimum distance value and not already included in SPT (not in sptSET). Vertex 7 is picked. So sptSet now becomes {0, 1, 7}. Update the distance values of adjacent vertices of 7. The distance value of vertex 6 and 8 becomes finite (15 and 9 respectively). Shortest Path Calculation - Step 4 STEP 4 Pick the vertex with minimum distance value and not already included in SPT (not in sptSET). Vertex 6 is picked. So sptSet now becomes {0, 1, 7, 6}. Update the distance values of adjacent vertices of 6. The distance value of vertex 5 and 8 are updated. Shortest Path Calculation - Step 5 We repeat the above steps until sptSet includes all vertices of the given graph. Finally, we get the following Shortest Path Tree (SPT). Shortest Path Calculation - Step 6 Characteristics Requires a large amount of memory. Shortest path computations need more CPU cycles. Quickly reacts to topology changes. Authentication mechanisms can be used. No split horizon techniques are needed/possible. Example protocol: OSPF (Open Shortest Path First). Protocols of Link State Routing Open Shortest Path First (OSPF) Intermediate System to Intermediate System (IS-IS) Open Shortest Path First (OSPF) Type: Link-state, intradomain (interior) routing protocol developed by IETF. Nature: Open standard, classless (supports VLSM and CIDR). Updates: Multicast to 224.0.0.5 (all OSPF routers) and 224.0.0.6 (designated routers). Implementation: Runs at the network layer over IP, using protocol number 89. Algorithm: Uses Shortest Path First (SPF), i.e., Dijkstra’s algorithm. Advantage: Supports subnetting flexibility, fast convergence, and secure neighbor authentication. Intermediate System to Intermediate System (IS-IS) Type: Standardized link-state routing protocol for the OSI model. Identification: Routers are identified by a System ID. Updates: Sent via CLNS (Connectionless Network Service), so IS-IS does not require IP connectivity between routers. Use Case: Widely used in large service provider networks due to scalability."
            },
            {
              "id": "link-state-routing--formulas-code",
              "heading": "Formulas & Code",
              "explanation": ") is empty, and the distances are {0, ∞, ∞, ∞, ∞, ∞, ∞, ∞} (where ∞ = infinity). The vertex with the minimum distance is chosen vertex 0 . Add vertex 0 to sptSet i.e sptSet = {0} . Update distances of vertices adjacent to 0 Distance to vertex 1 becomes 4 . Distance to vertex 7 becomes 8 . So, the distance array is updated to {0, 4, ∞, ∞, ∞, ∞, ∞, 8} The following subgraph shows vertices and their distance values. Vertices included in SPT are included in GREEN color. Shortest Path Calculation - Step 2"
            }
          ],
          "quick_revision": [
            "Unicast Communication and Link State Routing Unicast means the transmission from a single sender to a single receiver.",
            "Path-Vector Routing: It is a routing protocol that maintains the path that is updated dynamically.",
            "Routing Table: A list of known paths and interfaces.",
            "Formulas & Code: ) is empty, and the distances are {0, ∞, ∞, ∞, ∞, ∞, ∞, ∞} (where ∞ = infinity)."
          ]
        },
        {
          "id": "distance-vector-routing",
          "title": "Distance Vector Routing",
          "summary": "Distance Vector Routing (DVR) Protocol Distance Vector Routing (DVR) is a protocol where each router keeps a table showing the distance (in hops) to all other routers.",
          "sections": [
            {
              "id": "distance-vector-routing--overview",
              "heading": "Overview",
              "explanation": "Distance Vector Routing (DVR) Protocol Distance Vector Routing (DVR) is a protocol where each router keeps a table showing the distance (in hops) to all other routers. Routers regularly share these tables with neighbors, so they can update routes and always find the shortest, most efficient paths for data. The Distance Vector Routing Algorithm is based on the Bellman-Ford Algorithm . It was first used in the old ARPANET. Each router tells its neighbors about changes in the network topology (like new links or failures). Each router uses this information to recalculate the shortest paths to every destination. Bellman-Ford Basics Each router maintains a distance vector table that shows the shortest known distance to every other router.\nInformation stored in a DV router includes: A unique Router ID Link cost for each connection (can be static or dynamic) Number of intermediate hops needed to reach other routers\nInitialization: Distance to itself = 0 Distance to all other routers = infinity Working"
            },
            {
              "id": "distance-vector-routing--routers-share-information",
              "heading": "Routers share information",
              "explanation": "Each router sends its distance vector to all its neighbors. When a router receives a neighbor’s table, it saves it. If new information changes the shortest path, the router updates its own table. Updates also occur if a link goes down. D x ( y ) = min ⁡ { C ( x , v ) + D v ( y ) } D_x(y) = \\min \\{ C(x,v) + D_v(y) \\} D x ( y ) = min { C ( x , v ) + D v ( y )}\nWhere: D x (y) = cost from router x to destination y C(x,v) = cost from router x to neighbor v D v (y)= cost from neighbor v to destination y\nExample: Consider 3-routers X, Y and Z as shown in figure. Each router have their routing table. Every routing table will contain distance to the destination nodes. Consider router X , X will share it routing table to neighbors and neighbors will share it routing table to it to X and distance from node X to destination will be calculated using bellmen- ford equation. Dx(y) = min { C(x,v) + Dv(y)} for each node y ? N As we can see that distance will be less going from X to Z when Y is intermediate node(hop) so it will be update in routing table X."
            },
            {
              "id": "distance-vector-routing--finally-the-routing-table-for-all",
              "heading": "Finally the routing table for all",
              "explanation": "Applications Computer Networking : It helps route data packets in networks. Telephone Systems : It's used in some telephone switching systems. Military Applications : It has been used to route missiles. Advantages Shortest Path Finds the best route for data. Wide Usage Works in LANs, MANs, and WANs.\nEasy to Implement: Simple setup with low resource requirements. Disadvantages Slow Convergence Takes time to adapt to changes.\nCount-to-Infinity Problem: Can keep increasing hop counts endlessly in some failure cases.\nMore Traffic: Routers share updates periodically, even if nothing changes, which wastes bandwidth.\nScalability Issues: Large networks mean larger routing tables, which can cause congestion on WAN links."
            }
          ],
          "quick_revision": [
            "Distance Vector Routing (DVR) Protocol Distance Vector Routing (DVR) is a protocol where each router keeps a table showing the distance (in hops) to all other routers.",
            "Routers share information: Each router sends its distance vector to all its neighbors.",
            "Finally the routing table for all: Applications Computer Networking : It helps route data packets in networks."
          ]
        },
        {
          "id": "network-address-translation-nat",
          "title": "Network Address Translation(NAT)",
          "summary": "Network Address Translation (NAT) Network Address Translation (NAT) allows multiple devices in a private network to access the internet using a single public IP address.",
          "sections": [
            {
              "id": "network-address-translation-nat--overview",
              "heading": "Overview",
              "explanation": "Network Address Translation (NAT) Network Address Translation (NAT) allows multiple devices in a private network to access the internet using a single public IP address. It helps conserve IPv4 addresses and hides internal systems for added security. Translates private IP addresses into public IP addresses and vice versa. Reduces IPv4 shortage by allowing multiple devices to share one public IP Hides internal network addresses from external networks. Uses port mapping (PAT) to manage multiple device connections simultaneously Network Address Translation\nNote: IPv4 provides only 2³² (about 4.3 billion) addresses, which is insufficient considering the massive number of devices connected to the Internet. NAT prevents IP exhaustion by enabling thousands of private devices to share a limited number of public IP addresses. Working"
            },
            {
              "id": "network-address-translation-nat--nat-ways-to-function-is-listed-as-below",
              "heading": "NAT ways to function is listed as below",
              "explanation": "A device sends a request, reaches the NAT enabled router. Router replaces the private IP with its public IP and assigns a unique port. NAT stores this mapping in the NAT table. When the server responds, NAT uses the stored entry to send the packet to the correct internal device. Reason This Works Many devices can share one public IP Port numbers separate device traffic Internal IPs stay hidden from the internet Examples Connecting Private Networks to the Internet : A NAT enabled router translates all private IPs to a single public IP, allowing internal devices to access the Internet securely. Linking Multiple Office Locations : Organizations use NAT to translate IPs between branches, enabling communication across locations while maintaining private IP schemes internally.\nNote: When the response arrives from the external server, NAT uses the stored entry to identify the correct internal device. It then replaces the public IP and port with the original private IP and forwards the packet back to the device. Port Number Masking in NAT Port number masking is required when multiple internal devices use the same port number to communicate with the same external destination. Modifies both the private IP address and the source port number Creates a unique mapping entry in the NAT table Distinguishes traffic from different internal devices Ensures that returning packets are delivered to the correct device NAT Inside and Outside Addresses In NAT terminology, inside and outside describe the location of devices relative to the local network and define which addresses are subject to translation. NAT Inside & Outside Address Inside addresses belong to the internal network and are typically translated by NAT. Outside addresses belong to external networks and are generally not controlled by the organization. Translation usually occurs when inside addresses communicate with outside networks. These terms help identify the source and destination addresses during NAT processing. Types of NAT There are three main types of NAT based on address mapping methods. Types of NAT"
            },
            {
              "id": "network-address-translation-nat--static-nat",
              "heading": "Static NAT",
              "explanation": "Static NAT creates a one-to-one mapping between a private IP address and a public IP address. Each private IP is permanently mapped to one public IP Used for hosting servers that must be accessible from the Internet Simple and predictable configuration Not cost-effective for large networks Requires a separate public IP for each internal device"
            },
            {
              "id": "network-address-translation-nat--dynamic-nat",
              "heading": "Dynamic NAT",
              "explanation": "Dynamic NAT maps private IP addresses to public IP addresses from a predefined pool. Public IPs are assigned temporarily as needed Mapping changes when sessions end If the public IP pool is exhausted, new requests are denied Suitable for networks with limited simultaneous users Still requires multiple public IP addresses"
            },
            {
              "id": "network-address-translation-nat--port-address-translation-pat",
              "heading": "Port Address Translation (PAT)",
              "explanation": "PAT, also known as NAT Overload, allows multiple private IPs to share a single public IP using different port numbers. Uses port numbers to distinguish device traffic Enables many devices to access the Internet with one public IP Most commonly used NAT type Highly cost-effective Supports large networks with thousands of users NAT Techniques Static Mapping : Maps a specific private IP to a fixed public IP. IP Masquerading : Hides an entire private network behind a single public IP. Translation Table Mapping : Uses a NAT table to track multiple private - public mappings. PAT (Port Address Translation) : Adds port - level translation for efficient IP usage. Round - Robin Mapping : Distributes incoming connections from a single public IP to multiple private IPs in sequence. Advantages Conserves public IPv4 addresses Allows multiple devices to share a single public IP Hides internal IP addresses from external networks Improves privacy by masking internal network structure Disadvantages Breaks end-to-end connectivity Can cause issues with VoIP, gaming, and peer-to-peer applications Adds processing overhead on the router Makes direct peer-to-peer communication more complex"
            }
          ],
          "quick_revision": [
            "Network Address Translation (NAT) Network Address Translation (NAT) allows multiple devices in a private network to access the internet using a single public IP address.",
            "NAT ways to function is listed as below: A device sends a request, reaches the NAT enabled router.",
            "Static NAT: Static NAT creates a one-to-one mapping between a private IP address and a public IP address.",
            "Dynamic NAT: Dynamic NAT maps private IP addresses to public IP addresses from a predefined pool.",
            "Port Address Translation (PAT): PAT, also known as NAT Overload, allows multiple private IPs to share a single public IP using different port numbers."
          ]
        },
        {
          "id": "address-resolution-protocol",
          "title": "Address Resolution Protocol",
          "summary": "ARP ARP (Address Resolution Protocol) maps an IPv4 address to the corresponding MAC address on a local network so frames can be delivered to the correct device.",
          "sections": [
            {
              "id": "address-resolution-protocol--overview",
              "heading": "Overview",
              "explanation": "ARP ARP (Address Resolution Protocol) maps an IPv4 address to the corresponding MAC address on a local network so frames can be delivered to the correct device. Resolves IP addresses to MAC addresses for local communication Works only within the same broadcast domain (LAN) Operates directly over link-layer technologies such as Ethernet Essential for delivering frames to the correct device Important ARP Terms ARP Cache A temporary storage table maintained by a device. Stores recently resolved IP-to-MAC address mappings. Reduces network overhead by avoiding repeated ARP requests. ARP Cache Timeout The time duration for which an entry remains valid in the ARP cache. After expiration, the entry is removed to prevent the use of outdated mappings. ARP Request A broadcast message sent to all devices in the local network. Asks: “Who has this IP address?” Used when the MAC address for a given IP is not present in the ARP cache. ARP Reply (ARP Response) A unicast message sent by the device that owns the requested IP address. Contains the corresponding MAC address. Allows the sender to update its ARP cache and proceed with data transmission. Types of ARP"
            },
            {
              "id": "address-resolution-protocol--proxy-arp",
              "heading": "Proxy ARP",
              "explanation": "Proxy ARP allows a networking device, typically a router, to respond to ARP requests on behalf of another host that resides on a different network segment. When a host sends an ARP request for an IP address outside its local subnet, the router replies with its own MAC address instead of the destination host’s MAC. The sending host believes the destination is on the same local network and forwards the frame to the router. The router then forwards the packet to the actual destination. Proxy ARP is useful for hiding network topology, supporting legacy hosts, or connecting subnets without modifying host configurations. Excessive use of Proxy ARP can increase ARP traffic and complicate network troubleshooting."
            },
            {
              "id": "address-resolution-protocol--gratuitous-arp",
              "heading": "Gratuitous ARP",
              "explanation": "Gratuitous ARP is an ARP message sent by a device to announce or verify its own IP-to-MAC address mapping. A host broadcasts an ARP request or reply for its own IP address, even though no device has asked for it. It is commonly used to detect duplicate IP addresses on the network. Helps update ARP caches of other hosts when a device’s MAC address changes (for example, after a NIC replacement). Switches use Gratuitous ARP to update their MAC address tables. Often used during system startup, IP address reassignment, or failover scenarios in high-availability systems."
            },
            {
              "id": "address-resolution-protocol--reverse-arp-rarp",
              "heading": "Reverse ARP (RARP)",
              "explanation": "Reverse Address Resolution Protocol (RARP) enables a device to obtain its IP address when only its physical MAC address is known. The device broadcasts a RARP request containing its MAC address on the local network. A RARP server checks its database and replies with the corresponding IP address. RARP was primarily used by diskless workstations during system startup to acquire network configuration information. It requires the presence of a dedicated RARP server within the same local network segment. RARP is now obsolete and has been replaced by more efficient and scalable protocols such as BOOTP and DHCP."
            },
            {
              "id": "address-resolution-protocol--inverse-arp-inarp",
              "heading": "Inverse ARP (InARP)",
              "explanation": "Inverse Address Resolution Protocol (InARP) is used to determine the IP address of a remote device when its data link–layer address is already known. Unlike standard ARP, InARP operates in networks that use virtual circuits instead of broadcast communication. It is commonly implemented in Frame Relay and ATM networks. A device sends an InARP request over an already established virtual circuit. The remote device responds with its IP address. InARP supports dynamic IP address discovery in non-broadcast, multi-access (NBMA) networks. How ARP Works The working of ARP can be explained in the following steps ARP Protocol ARP Cache Lookup The sender first checks its ARP cache for an existing entry corresponding to the destination IP address. If a valid entry is found, the MAC address is used immediately and data transmission begins. ARP Request Broadcast If no cache entry exists, the sender generates an ARP request. This request is broadcast to all devices on the local network. Request Processing by Hosts Every device on the LAN receives the ARP request. Each device compares the requested IP address with its own IP address. ARP Reply Transmission The device whose IP address matches the request sends an ARP reply. The reply is sent as a unicast message and contains the device’s MAC address. ARP Cache Update Upon receiving the reply, the sender stores the IP–MAC mapping in its ARP cache. This cached entry is used for future communication until it expires. ARP Message Format"
            },
            {
              "id": "address-resolution-protocol--an-arp-message-consists-of-several-fields",
              "heading": "An ARP message consists of several fields",
              "explanation": "Message format of ARP Hardware Type (HTYPE) – 2 bytes Identifies the type of hardware used at the data link layer. For Ethernet, the value is 1. Protocol Type (PTYPE) – 2 bytes Specifies the network layer protocol whose address is being resolved. For IPv4, the value is 0x0800. Hardware Address Length (HLEN) – 1 byte Indicates the length of the hardware (MAC) address. For Ethernet MAC addresses, the length is 6 bytes. Protocol Address Length (PLEN) – 1 byte Indicates the length of the protocol (IP) address. For IPv4 addresses, the length is 4 bytes. Operation Code (OPER) – 2 bytes Defines the type of ARP operation. Value 1 represents an ARP request, and value 2 represents an ARP reply. Sender Hardware Address (SHA) Contains the MAC address of the device sending the ARP message. Sender Protocol Address (SPA) Contains the IP address of the device sending the ARP message. Target Hardware Address (THA) Contains the MAC address of the target device. This field is unknown (set to zeros) in an ARP request and filled in an ARP reply. Target Protocol Address (TPA) Contains the IP address of the target device whose MAC address is being resolved. Advantages ARP dynamically resolves IP addresses into MAC addresses without requiring manual configuration. It provides seamless communication in a local area network by rapidly finding the destination hardware address. ARP is run in the background and does not need user or applications assistance. It supports multiple ARP variants such as Proxy ARP, Gratuitous ARP, Reverse ARP, and Inverse ARP to meet different networking requirements. By storing resolved addresses in the ARP cache, ARP minimizes repeated broadcasts and improves overall network performance. ARP is widely supported across IPv4-based networks and works seamlessly with common link-layer technologies such as Ethernet. ARP automatically adapts to changes in IP–MAC mappings, ensuring continued communication even when network configurations change."
            }
          ],
          "quick_revision": [
            "ARP ARP (Address Resolution Protocol) maps an IPv4 address to the corresponding MAC address on a local network so frames can be delivered to the correct device.",
            "Proxy ARP: Proxy ARP allows a networking device, typically a router, to respond to ARP requests on behalf of another host that resides on a different network segment.",
            "Gratuitous ARP: Gratuitous ARP is an ARP message sent by a device to announce or verify its own IP-to-MAC address mapping.",
            "Reverse ARP (RARP): Reverse Address Resolution Protocol (RARP) enables a device to obtain its IP address when only its physical MAC address is known.",
            "Inverse ARP (InARP): Inverse Address Resolution Protocol (InARP) is used to determine the IP address of a remote device when its data link–layer address is already known.",
            "An ARP message consists of several fields: Message format of ARP Hardware Type (HTYPE) – 2 bytes Identifies the type of hardware used at the data link layer."
          ]
        },
        {
          "id": "reverse-address-resolution-protocol",
          "title": "Reverse Address Resolution Protocol",
          "summary": "RARP Reverse Address Resolution Protocol (RARP) is a network protocol that allows a device to discover its IP address when only its MAC (Media Access Control) address is known.",
          "sections": [
            {
              "id": "reverse-address-resolution-protocol--overview",
              "heading": "Overview",
              "explanation": "RARP Reverse Address Resolution Protocol (RARP) is a network protocol that allows a device to discover its IP address when only its MAC (Media Access Control) address is known. It was designed for systems such as diskless workstations, which do not have permanent storage to save their IP addresses. These devices boot from ROM and must request their IP address dynamically from a RARP server on the local network. RARP\nNote: RARP was standardized in RFC 903 (1984) but is now considered obsolete, replaced by more flexible protocols like BOOTP and DHCP. Components of RARP\nIP Address Assignment: Normally, a machine stores its IP address in a configuration file. Diskless systems cannot do this and rely on RARP for IP assignment.\nPhysical Address: Every network device has a unique MAC address, stored in its Network Interface Card (NIC). RARP Request : A device broadcasts a request containing its MAC address to ask for the corresponding IP address."
            },
            {
              "id": "reverse-address-resolution-protocol--rarp-server",
              "heading": "RARP Server",
              "explanation": "The server maintains a mapping of MAC addresses to IP addresses. On receiving a request, it replies with the correct IP address. Working of RARP Reverse ARP (RARP) is a network protocol used by a client machine in a local area network ( LAN ) to obtain its Internet Protocol ( IP ) address from the gateway router's ARP (Address Resolution Protocol) table. When a machine doesn't have the memory to store its IP address, such as diskless machines or newly configured systems, it uses RARP to request an IP address. RARP RARP Request : A client broadcasts a RARP request containing its MAC address. Server Lookup : A RARP server (or gateway router with ARP table) checks its mapping of MAC -> IP. RARP Reply : If a match is found, the server responds with the client’s IP address. Client Configuration : The client configures itself with the provided IP and can now communicate on the network. RARP Packet Format & Encapsulation"
            },
            {
              "id": "reverse-address-resolution-protocol--packet-format",
              "heading": "Packet Format",
              "explanation": "The format of the RARP packet is identical to the ARP packet format. The key difference lies in the Operation field. For a RARP Request message, the value of the Operation field is 3. For a RARP Reply message, the value of the Operation field is 4. RARP Packet Encapsulation : RARP packets are encapsulated directly into data-link layer frames (e.g., Ethernet frames) so they can be transmitted over the LAN. Difference Between RARP and ARP RARP ARP A protocol used to map a physical (MAC) address to an IP address A protocol used to map an IP address to a physical (MAC) address To obtain the IP address of a network device when only its MAC address is known To obtain the MAC address of a network device when only its IP address is known Client broadcasts its MAC address and requests an IP address and the server responds with the corresponding IP address Client broadcasts its IP address and requests a MAC address and the server responds with the corresponding MAC address Rarely used in modern networks as most devices have a pre-assigned IP address Widely used in modern networks to resolve IP addresses to MAC addresses RFC 903 Standardization RFC 826 Standardization It uses the value 3 for requests and 4 for responses It uses the value 1 for requests and 2 for responses Is RARP Obsolete? Yes. RARP is obsolete and rarely used in modern networks because of its limitations. It has been replaced by:\nBOOTP (Bootstrap Protocol): Provides IP along with gateway, DNS and configuration."
            },
            {
              "id": "reverse-address-resolution-protocol--dhcp-dynamic-host-configuration-protocol",
              "heading": "DHCP (Dynamic Host Configuration Protocol)",
              "explanation": "Extension of BOOTP, most widely used today for dynamic IP assignment and full configuration support. Issues in RARP Limited scalability Lack of security No subnetting support Router incompatibility Compatibility issues with modern networks Pros of RARP Simplifies configuration for diskless machines. Automatic IP assignment reduces manual errors. Prevents conflicts by uniquely mapping MAC to IP. Legacy support for older devices."
            }
          ],
          "quick_revision": [
            "RARP Reverse Address Resolution Protocol (RARP) is a network protocol that allows a device to discover its IP address when only its MAC (Media Access Control) address is…",
            "RARP Server: The server maintains a mapping of MAC addresses to IP addresses.",
            "Packet Format: The format of the RARP packet is identical to the ARP packet format.",
            "DHCP (Dynamic Host Configuration Protocol): Extension of BOOTP, most widely used today for dynamic IP assignment and full configuration support."
          ]
        },
        {
          "id": "dynamic-host-configuration-protocol",
          "title": "Dynamic Host Configuration Protocol",
          "summary": "Dynamic Host Configuration Protocol (DHCP) Seamless network connectivity is achieved by automatically assigning IP addresses and configuration settings to devices using the Dynamic Host Configuration Protocol (DHCP).",
          "sections": [
            {
              "id": "dynamic-host-configuration-protocol--overview",
              "heading": "Overview",
              "explanation": "Dynamic Host Configuration Protocol (DHCP) Seamless network connectivity is achieved by automatically assigning IP addresses and configuration settings to devices using the Dynamic Host Configuration Protocol (DHCP). Assigns a unique IP address to each device. Provides the subnet mask to define the local network range. Configures the default gateway for communication outside the local network. Supplies DNS server addresses for domain name resolution. Components DHCP works using a client–server model where the client requests network setting, the server allocates them from an address pool, and the settings are delivered as options for a fixed lease time.\nDHCP Server: The device (router/server) that manages the DHCP service, keeps the IP pool, and assigns IP addresses + configuration to clients."
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-relay",
              "heading": "DHCP Relay",
              "explanation": "A router/switch feature that forwards DHCP requests and replies between clients and the server when they are in different networks (different subnets).\nDHCP Client: Any device (PC, mobile, printer, IoT) that requests an IP address and settings from the DHCP server.\nIP Address Pool: The range of IP addresses available for allocation to clients (often with exclusions/reservations).\nLease: The time period for which an assigned IP address is valid; the client must renew the lease to keep using it."
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-options",
              "heading": "DHCP Options",
              "explanation": "Additional configuration parameters provided by the DHCP server along with the IP address, such as DNS servers, domain name, NTP servers, and other network-specific settings.\nDefault Gateway: The router IP given to the client so it can communicate outside the local network (reach the internet/other networks).\nDNS Servers: DNS addresses provided to the client so it can convert domain names (like google.com) into IP addresses. DHCP Renewal: Lease renewal process\nFailover: Two DHCP servers share leasing; if one fails, the other continues service.\nDynamic Updates: DHCP auto-updates DNS (A/PTR) when a client IP is assigned or changes.\nAudit Logging: Logs lease events (assign/renew/release) for tracking, troubleshooting, and audits. Packet Format DHCP Packet Format\nHardware Length (8 bits): Length of MAC address (e.g., 6 for Ethernet).\nHop Count: Maximum number of hops the packet can travel.\nTransaction ID (32 bits): Set by client, used to match requests and replies.\nNumber of Seconds (16 bits): Time elapsed since the client started booting. Flags (16 bits) Leftmost bit indicates broadcast reply requirement.\nClient IP Address (4 bytes): Filled if the client already has an IP, else 0. Your IP Address (4 bytes) Client IP assigned by the server.\nServer IP Address (4 bytes): IP address of the responding DHCP server.\nGateway IP Address (4 bytes): Stores the IP of the DHCP relay agent, not the client’s default gateway. Client Hardware Address The device’s MAC address. Server Name (64 bytes) Optional server hostname. Boot Filename (128 bytes) Pathname of boot file (for diskless clients)."
            },
            {
              "id": "dynamic-host-configuration-protocol--options-variable",
              "heading": "Options (variable)",
              "explanation": "Vendor-specific or additional configuration. Working DHCP operates at the Application Layer and uses UDP ports 67 (server) and 68 (client) to automatically assign network configuration through a client-server communication process called DORA (Discover, Offer, Request, Acknowledge). The process involves the following steps:"
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-discover-message",
              "heading": "DHCP Discover Message",
              "explanation": "DHCP Discover is the first message sent by a DHCP client to check whether any DHCP server is available on the network and to start getting an IP address. Client broadcasts to discover available DHCP servers on the network.\nTriggered when: A device connects to a network or boots up with no valid IP configuration.\nTransmission type: Broadcast, because the client does not know the DHCP server’s address.\nPurpose: Identify DHCP server(s) capable of assigning an IP and network parameters."
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-offer-message",
              "heading": "DHCP Offer Message",
              "explanation": "A DHCP server replies with an offer that includes an available IP address and configuration options (like subnet mask, gateway, DNS, and lease time). DHCP Offer: Server offers an IP address to the client. Can be broadcast or unicast (depends on client/network behavior) Includes Server Identifier so the client knows which server sent the offer The offered IP is carried in yiaddr (“your IP address” field)"
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-request-message",
              "heading": "DHCP Request Message",
              "explanation": "DHCP Request is the message where the client confirms one chosen offer and asks the selected DHCP server to allocate that IP officially. It also tells other DHCP servers not to keep their offered IP reserved. Client requests a specific IP address from the DHCP server. Sent by DHCP client"
            },
            {
              "id": "dynamic-host-configuration-protocol--when-it-is-sent",
              "heading": "When it is sent",
              "explanation": "After the client receives one or more DHCP Offe r messages It accepts one offered IP address and identify the selected server Prevent multiple servers from assigning different IPs to the same client"
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-acknowledgment-message",
              "heading": "DHCP Acknowledgment Message",
              "explanation": "DHCP ACK is the final confirmation sent by the selected DHCP server after it receives the client’s DHCP Request. This message officially assigns the IP address to the client and provides the full set of network configuration parameters. DHCP ACK: Server confirms and assigns the IP address. Sent by DHCP server\nWhen it is sent: After the server accepts the client’s DHCP Request\nPurpose: Confirm the lease and deliver final configuration so the client can start network communication."
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-negative-acknowledgment-message",
              "heading": "DHCP Negative Acknowledgment Message",
              "explanation": "DHCP NAK is sent by the server to notify the client that the requested IP configuration is invalid and cannot be assigned. Sent by DHCP server\nPurpose: Reject the client’s DHCP Request Requested IP is outside the configured scope IP is already allocated to another device Client has moved to a different network Client must restart the DHCP process from Discover"
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-decline",
              "heading": "DHCP Decline",
              "explanation": "DHCP Decline is sent by the client when it detects that the offered IP address is already in use on the network. Sent by DHCP client\nPurpose: Inform the server that the offered IP is not safe to use\nTypical trigger: Client detects an IP conflict using an ARP probe / gratuitous ARP\nResult: Server marks the IP as unavailable and selects another address for future allocation."
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-release",
              "heading": "DHCP Release",
              "explanation": "DHCP Release allows a client to return its assigned IP address to the server before the lease expires. Sent by DHCP client\nPurpose: Free the IP for reuse Occurs when a device disconnects, shuts down, or disables the interface Helps maintain efficient IP address utilization"
            },
            {
              "id": "dynamic-host-configuration-protocol--dhcp-inform",
              "heading": "DHCP Inform",
              "explanation": "DHCP Inform is used when a client already has a manually configured (static) IP but needs additional network settings from the DHCP server. Sent by DHCP client\nPurpose: Request configuration parameters like DNS, domain name, NTP, etc., without obtaining a new IP.\nServer response: Sends a DHCP ACK containing only configuration options.\nDelivery: Typically unicast , since the client already has a valid IP. Security Concerns with DHCP DHCP has no built-in authentication, so attackers on the same LAN can misuse it to disrupt service or redirect traffic.\nDHCP Starvation (IP Pool Exhaustion): Floods DHCP requests with spoofed MACs to consume all available leases, blocking legitimate clients.\nRogue DHCP Server: A fake server gives clients incorrect IP settings (gateway/DNS), taking control of their network path.\nMan-in-the-Middle: Done by pushing attacker-controlled gateway/DNS via rogue DHCP to intercept or alter traffic."
            },
            {
              "id": "dynamic-host-configuration-protocol--dns-misuse",
              "heading": "DNS Misuse",
              "explanation": "Malicious DHCP options can point clients to unauthorized DNS servers for redirection/phishing. Protection Against DHCP Attacks Enable DHCP Snooping on switches and allow DHCP replies only on trusted ports. Apply Port Security or rate-limiting to reduce spoofed requests and prevent starvation. Use IP/MAC filtering + monitoring/log analysis to detect and block abnormal lease activity."
            }
          ],
          "quick_revision": [
            "Dynamic Host Configuration Protocol (DHCP) Seamless network connectivity is achieved by automatically assigning IP addresses and configuration settings to devices using…",
            "DHCP Relay: A router/switch feature that forwards DHCP requests and replies between clients and the server when they are in different networks (different subnets).",
            "DHCP Options: Additional configuration parameters provided by the DHCP server along with the IP address, such as DNS servers, domain name, NTP servers, and other network-specific…",
            "Options (variable): Vendor-specific or additional configuration.",
            "DHCP Discover Message: DHCP Discover is the first message sent by a DHCP client to check whether any DHCP server is available on the network and to start getting an IP address.",
            "DHCP Offer Message: A DHCP server replies with an offer that includes an available IP address and configuration options (like subnet mask, gateway, DNS, and lease time).",
            "DHCP Request Message: DHCP Request is the message where the client confirms one chosen offer and asks the selected DHCP server to allocate that IP officially.",
            "When it is sent: After the client receives one or more DHCP Offe r messages It accepts one offered IP address and identify the selected server Prevent multiple servers from assigning…",
            "DHCP Acknowledgment Message: DHCP ACK is the final confirmation sent by the selected DHCP server after it receives the client’s DHCP Request.",
            "DHCP Negative Acknowledgment Message: DHCP NAK is sent by the server to notify the client that the requested IP configuration is invalid and cannot be assigned.",
            "DHCP Decline: DHCP Decline is sent by the client when it detects that the offered IP address is already in use on the network.",
            "DHCP Release: DHCP Release allows a client to return its assigned IP address to the server before the lease expires.",
            "DHCP Inform: DHCP Inform is used when a client already has a manually configured (static) IP but needs additional network settings from the DHCP server.",
            "DNS Misuse: Malicious DHCP options can point clients to unauthorized DNS servers for redirection/phishing."
          ]
        },
        {
          "id": "internet-control-message-protocol-icmp",
          "title": "Internet Control Message Protocol(ICMP)",
          "summary": "Internet Control Message Protocol (ICMP) Internet Control Message Protocol (ICMP) is a network layer protocol widely used by network devices such as routers, gateways and hosts to send error messages and operational information.",
          "sections": [
            {
              "id": "internet-control-message-protocol-icmp--overview",
              "heading": "Overview",
              "explanation": "Internet Control Message Protocol (ICMP) Internet Control Message Protocol (ICMP) is a network layer protocol widely used by network devices such as routers, gateways and hosts to send error messages and operational information. Since the Internet Protocol (IP) itself does not have an inbuilt error-reporting or correction mechanism, ICMP is a supporting protocol within the IP suite that helps in reporting errors and sending diagnostic messages. It is primarily used for: Error reporting : When data packets cannot reach their destination due to issues such as unreachable hosts, timeouts or fragmentation errors. Operational queries : For example, echo requests and replies used in tools like ping.\nNote: Without ICMP, devices would not be able to inform the sender about delivery failures, congestion or misrouting, making network troubleshooting almost impossible. Uses of ICMP Error Reporting If a message cannot be delivered, ICMP informs the source about the failure. Example: If a packet is too large and cannot be forwarded, the receiver drops the packet and sends an ICMP error message to the sender. Network Diagnostics Traceroute : Used to determine the path packets take across routers to reach the destination. Ping : Sends echo-request and echo-reply messages to measure round-trip time and test connectivity. How ICMP Works ICMP is connectionless (unlike TCP) and does not require a handshake. Messages are encapsulated within IP datagrams, consisting of an IP header followed by an ICMP header and payload. Devices send ICMP packets when encountering errors such as unreachable hosts, expired time-to-live (TTL) or routing issues. ICMP Packet Format ICMP header comes after IPv4 and IPv6 packet header. In the ICMP packet format, the first 32 bits of the packet contain three fields: ICMPv4 Packet Format Type (8-bit) The initial 8-bit of the packet is for message type, it provides a brief description of the message so that receiving network would know what kind of message it is receiving and how to respond to it. Some common message types are as follows: Type 0 - Echo reply Type 3 - Destination unreachable Type 5 - Redirect Message Type 8 - Echo Request Type 11 - Time Exceeded Type 12 - Parameter problem Code (8-bit) Code is the next 8 bits of the ICMP packet format, this field carries some additional information about the error message and type. Checksum (16-bit) Last 16 bits are for the checksum field in the ICMP packet header. The checksum is used to check the number of bits of the complete message and enable the ICMP tool to ensure that complete data is delivered. The next 32 bits of the ICMP Header are Extended Header which has the work of pointing out the problem in IP Message. Byte locations are identified by the pointer which causes the problem message and receiving device looks here for pointing to the problem. The last part of the ICMP packet is Data or Payload of variable length. The bytes included in IPv4 are 576 bytes and in IPv6, 1280 bytes. ICMP in DDoS Attacks In Distributed DOS (DDoS) attacks, attackers provide so much extra traffic to the target, so that it cannot provide service to users. There are so many ways through which an attacker executes these attacks, which are described below."
            },
            {
              "id": "internet-control-message-protocol-icmp--ping-of-death-attack",
              "heading": "Ping of Death Attack",
              "explanation": "Whenever an attacker sends a ping, whose size is greater than the maximum allowable size, oversized packets are broken into smaller parts. When the sender re-assembles it, the size exceeds the limit which causes a buffer overflow and makes the machine freeze. This is simply called a Ping of Death Attack . Newer devices have protection from this attack, but older devices did not have protection from this attack."
            },
            {
              "id": "internet-control-message-protocol-icmp--icmp-flood-attack",
              "heading": "ICMP Flood Attack",
              "explanation": "Whenever the sender sends so many pings that the device on whom the target is done is unable to handle the echo request. This type of attack is called an ICMP Flood Attack . This attack is also called a ping flood attack. It stops the target computer's resources and causes a denial of service for the target computer."
            },
            {
              "id": "internet-control-message-protocol-icmp--smurf-attack",
              "heading": "Smurf Attack",
              "explanation": "Smurf Attack is a type of attack in which the attacker sends an ICMP packet with a spoofed source IP address. These type of attacks generally works on older devices like the ping of death attack. Types of ICMP Messages Type Code Description 0 - Echo Reply 0 Echo reply 3 - Destination Unreachable 0 Destination network unreachable 1 Destination host unreachable 2 Destination protocol unreachable 3 Destination port unreachable 4 Fragmentation is needed and the DF flag set 5 Source route failed 5 - Redirect Message 0 Redirect the datagram for the network 1 Redirect datagram for the host 2 Redirect the datagram for the Type of Service and Network 3 Redirect datagram for the Service and Host 8 - Echo Request 0 Echo request 9 - Router Advertisement 0 Use to discover the addresses of operational routers 10 - Router Solicitation 0 11 - Time Exceeded 0 Time to live exceeded in transit 1 Fragment reassembly time exceeded. 12 - Parameter Problem 0 The pointer indicates an error. 1 Missing required option 2 Bad length 13 - Timestamp 0 Used for time synchronization 14 - Timestamp Reply 0 Reply to Timestamp message"
            },
            {
              "id": "internet-control-message-protocol-icmp--source-quench-message",
              "heading": "Source Quench Message",
              "explanation": "A source quench message is a request to decrease the traffic rate for messages sent to the host destination) . Or we can say when receiving host detects that the rate of sending packets (traffic rate) to it is too fast it sends the source quench message to the source to slow the pace down so that no packet can be lost. Source Quench Message ICMP will take the source IP from the discarded packet and inform the source by sending a source quench message. The source will reduce the speed of transmission so that router will be free from congestion. Source Quench Message with Reduced Speed\nNote: When the congestion router is far away from the source the ICMP will send a hop-by-hop source quench message so that every router will reduce the speed of transmission."
            },
            {
              "id": "internet-control-message-protocol-icmp--parameter-problem",
              "heading": "Parameter Problem",
              "explanation": "Parameter Problem Whenever packets come to the router then the calculated header checksum should be equal to the received header checksum then only the packet is accepted by the router. If there is a mismatch packet will be dropped by the router. ICMP will take the source IP from the discarded packet and inform the source by sending a parameter problem message."
            },
            {
              "id": "internet-control-message-protocol-icmp--time-exceeded-message",
              "heading": "Time Exceeded Message",
              "explanation": "Time Exceeded Message A notification with the subject line \"Time Exceeded\" is typically generated by routers or gateways. You need to know what an IP header is in a packet in order to comprehend this ICMP message in its entirety. The IP protocol structure is covered in great detail in the section on IP Protocol, which is freely available to our readers."
            },
            {
              "id": "internet-control-message-protocol-icmp--destination-un-reachable",
              "heading": "Destination Un-reachable",
              "explanation": "Destination Unreachable Message The destination is unreachable and is generated by the host or its inbound gateway to inform the client that the destination is unreachable for some reason. There is no necessary condition that only the router gives the ICMP error message time the destination host sends an ICMP error message when any type of failure (link failure, hardware failure, port failure, etc) happens in the network."
            },
            {
              "id": "internet-control-message-protocol-icmp--redirection-message",
              "heading": "Redirection Message",
              "explanation": "Redirect requests data packets are sent on an alternate route. The message informs a host to update its routing information (to send packets on an alternate route).\nExample: If the host tries to send data through a router R1 and R1 sends data on a router R2 and there is a direct way from the host to R2. Then R1 will send a redirect message to inform the host that there is the best way to the destination directly through R2 available. The host then sends data packets for the destination directly to R2. Redirection Message The router R2 will send the original datagram to the intended destination. But if the datagram contains routing information then this message will not be sent even if a better route is available as redirects should only be sent by gateways and should not be sent by Internet hosts. Whenever a packet is forwarded in the wrong direction later it is re-directed in a current direction then ICMP will send a re-directed message. Related Posts Types of ICMP (Internet Control Message Protocol) Messages ."
            }
          ],
          "quick_revision": [
            "Internet Control Message Protocol (ICMP) Internet Control Message Protocol (ICMP) is a network layer protocol widely used by network devices such as routers, gateways…",
            "Ping of Death Attack: Whenever an attacker sends a ping, whose size is greater than the maximum allowable size, oversized packets are broken into smaller parts.",
            "ICMP Flood Attack: Whenever the sender sends so many pings that the device on whom the target is done is unable to handle the echo request.",
            "Smurf Attack: Smurf Attack is a type of attack in which the attacker sends an ICMP packet with a spoofed source IP address.",
            "Source Quench Message: A source quench message is a request to decrease the traffic rate for messages sent to the host destination) . Or we can say when receiving host detects that the rate of…",
            "Parameter Problem: Parameter Problem Whenever packets come to the router then the calculated header checksum should be equal to the received header checksum then only the packet is…",
            "Time Exceeded Message: Time Exceeded Message A notification with the subject line \"Time Exceeded\" is typically generated by routers or gateways.",
            "Destination Un-reachable: Destination Unreachable Message The destination is unreachable and is generated by the host or its inbound gateway to inform the client that the destination is…",
            "Redirection Message: Redirect requests data packets are sent on an alternate route."
          ]
        },
        {
          "id": "internet-group-management-protocol-igmp",
          "title": "Internet Group Management Protocol(IGMP)",
          "summary": "Internet Group Management Protocol - IGMP Internet Group Management Protocol (IGMP) is a network layer communication protocol used by hosts and adjacent routers to manage multicast group memberships in IPv4 networks.",
          "sections": [
            {
              "id": "internet-group-management-protocol-igmp--overview",
              "heading": "Overview",
              "explanation": "Internet Group Management Protocol - IGMP Internet Group Management Protocol (IGMP) is a network layer communication protocol used by hosts and adjacent routers to manage multicast group memberships in IPv4 networks. IGMP enables communication between hosts and local routers to identify multicast group members within a LAN. Unlike unicast (one-to-one) or broadcast (one-to-all), IGMP supports multicast (one-to-many) communication. Unicast : One sender -> One receiver. Multicast : One sender -> Multiple specific receivers. Anycast : One sender -> Nearest member of a group of receivers.\nNote: In IPv6, IGMP is replaced by Multicast Listener Discovery (MLD) protocol. Applications of IGMP Streaming Media : Efficient one-to-many or many-to-many delivery of video/audio streams. Online Gaming : Enables multiple players to exchange game state updates in real-time. Web Conferencing : Supports group communication for video meetings and collaboration tools. Types of IGMP Messages"
            },
            {
              "id": "internet-group-management-protocol-igmp--igmp-uses-different-message-types-to-manage-multicast-member",
              "heading": "IGMP uses different message types to manage multicast memberships",
              "explanation": "Membership Query : Sent by routers to discover which multicast groups have active members on a network segment. Membership Report : Sent by hosts to indicate interest in joining a multicast group. Leave Group : Sent by hosts when they no longer wish to receive traffic for a multicast group. IGMPv3 Membership Report : Allows hosts to specify exact multicast addresses and sources (supports SSM). Working of IGMP Host–Router Interaction : Hosts send reports to join or leave multicast groups; routers maintain group membership tables. Multicast Addressing : Multicast groups use Class D IP addresses (224.0.0.0 to 239.255.255.255). IGMP Snooping : Switches listen to IGMP messages to maintain a mapping of multicast groups to ports, preventing unnecessary flooding. Multicast Routing : Routers use Protocol Independent Multicast (PIM) to forward multicast traffic between networks. IGMP Snooping IGMP snooping is a feature in network switches that listens to IGMP messages exchanged between hosts and routers. Prevents multicast traffic from being broadcast to all ports. Forwards multicast traffic only to ports with interested members. Improves network efficiency and bandwidth usage. IGMP Versions and Packet Formats"
            },
            {
              "id": "internet-group-management-protocol-igmp--igmpv1",
              "heading": "IGMPv1",
              "explanation": "IGMPv1 Packet Format Hosts join multicast groups using membership requests. No explicit leave option — hosts wait for timeout. Fields: Version, Type, Unused, Checksum, Group Address."
            },
            {
              "id": "internet-group-management-protocol-igmp--igmpv2",
              "heading": "IGMPv2",
              "explanation": "Adds Leave Group message for faster group exit. Supports General, Group-specific and Source-specific queries. Fields: Type, Max Response Time, Checksum, Group Address. IGMPv2 Packet Format\nType: 0x11 for Membership Query 0x12 for IGMPv1 Membership Report 0x16 for IGMPv2 Membership Report 0x22 for IGMPv3 Membership Report 0x17 for Leave Group"
            },
            {
              "id": "internet-group-management-protocol-igmp--igmpv3",
              "heading": "IGMPv3",
              "explanation": "IGMPv3 Packet Format Adds Source-Specific Multicast (SSM) and report aggregation. Hosts can specify inclusion (receive from specific sources) or exclusion (block specific sources). Fields: Max Response Time, Checksum, Group Address, Flags (S, QRV), QQIC, Source Address list. Multicasting Multicasting is a method where a sender transmits packets once and the network delivers them to all interested receivers. More efficient than sending individual unicast streams. Commonly used in IPTV, financial trading updates and real-time applications. Is IGMP a Layer 3 Protocol? Yes, IGMP operates at Layer 3 of the OSI model which is the Network layer. It is used to the manage the membership of the multicast groups within IP networks facilitating the efficient distribution of the multicast traffic across the network segments. History of IGMP Versions IGMPv1 (1989) : Developed at Stanford University; allowed hosts to join multicast groups but could not explicitly leave. IGMPv2 (1997) : Introduced leave group messages, reducing timeout delays. IGMPv3 (2002) : Added Source-Specific Multicast (SSM), allowing hosts to specify sources they want to receive traffic from."
            }
          ],
          "quick_revision": [
            "Internet Group Management Protocol - IGMP Internet Group Management Protocol (IGMP) is a network layer communication protocol used by hosts and adjacent routers to…",
            "IGMP uses different message types to manage multicast memberships: Membership Query : Sent by routers to discover which multicast groups have active members on a network segment.",
            "IGMPv1: IGMPv1 Packet Format Hosts join multicast groups using membership requests.",
            "IGMPv2: Adds Leave Group message for faster group exit.",
            "IGMPv3: IGMPv3 Packet Format Adds Source-Specific Multicast (SSM) and report aggregation."
          ]
        },
        {
          "id": "routing-information-protocol-rip",
          "title": "Routing Information Protocol(RIP)",
          "summary": "Routing Information Protocol (RIP) The Routing Information Protocol (RIP) is designed to help routers determine the best path for sending data packets across a network.",
          "sections": [
            {
              "id": "routing-information-protocol-rip--overview",
              "heading": "Overview",
              "explanation": "Routing Information Protocol (RIP) The Routing Information Protocol (RIP) is designed to help routers determine the best path for sending data packets across a network. It uses hop count as its routing metric and is primarily used in small to medium-sized networks due to its scalability limitations. RIP operates at the Network Layer (Layer 3) of the OSI model and maintains routing tables on each router. Every 30 seconds, routers exchange their complete routing tables with neighbours using periodic updates. The hop count metric defines the number of routers a packet must pass through to reach its destination.\nNote: RIP supports a maximum hop count of 15, which limits its use in larger networks. A hop count of 16 is considered unreachable. Hop Count Hop count is a routing metric that represents the total number of routers a data packet must pass through to travel from the source device to the destination device. Each router crossed by a packet is counted as one hop. Used by routing protocols like RIP to determine the best path. RIP selects the route with the lowest hop count as the optimal route. The maximum hop count in RIP is 15; a hop count of 16 is considered unreachable. Limiting the hop count helps prevent routing loops. This limitation reduces RIP’s scalability, making it unsuitable for large networks. Features of RIP Exchanges updates periodically (every 30 seconds). Broadcasts (RIPv1) or multicasts (RIPv2/RIPng) routing information. Sends entire routing tables in updates. Works on the principle of routing by rumour (trusting neighbours’ information). Uses route poisoning and split horizon to avoid routing loops. How RIP Works Routing Information Protocol (RIP) is a distance-vector routing protocol that determines the best path to a destination network based on hop count. Each router maintains a routing table containing distances to all known networks. Routers periodically exchange routing information with neighboring routers. Every 30 seconds, routers broadcast or multicast their entire routing table. If a router learns a shorter path, it updates its routing table accordingly. If a route is not updated within 180 seconds, it is marked as invalid. If the route remains unused for 240 seconds, it is removed (flushed) from the routing table. These timers help maintain accurate routing information and prevent stale routes. Types of RIP Versions Feature RIPv1 (1988) RIPv2 (1993) RIPng (1997) for IPv6 Updates sent via Broadcast (255.255.255.255) Multicast (224.0.0.9) Multicast (FF02::9) Addressing Classful (no subnet info) Classless (includes subnet mask) Classless (IPv6 only) Authentication Not supported Supported IP version supported IPv4 only IPv6 only RIP Timers Update Timer : Default 30 seconds (interval between updates). Invalid Timer : 180 seconds (route not updated = marked invalid). Hold-down Timer : 180 seconds (time to suppress unstable routes). Flush Timer : 240 seconds (time before removing invalid routes).\nNote: Adjustable using the timers basic command. RIP Configuration Example Consider three routers (R1, R2, R3) connected in a network. Configuration on each router RIP Configuration For R1 R2(config)# router rip R2(config-router)# version 2 R2(config-router)# no auto-summary R2(config-router)# network 192.168.10.0 R2(config-router)# network 172.16.10.0 For R2 R2(config)# router rip R2(config-router)# version 2 R2(config-router)# no auto-summary R2(config-router)# network 192.168.10.0 R2(config-router)# network 172.16.10.0 For R3 R3(config)# router rip R3(config-router)# version 2 R3(config-router)# no auto-summary R3(config-router)# network 10.10.10.0 R3(config-router)# network 172.16.10.0 R3(config-router)# network 172.16.10.4 Useful Commands debug ip rip -> Monitor RIP updates in real time. show ip route -> Display the routing table. show ip protocols -> Display routing protocols in use. Where is RIP Used? Small to medium-sized networks with simple routing needs. Legacy networks that were built before OSPF/EIGRP became standard. Educational labs for training and learning routing basics. Backup routing protocol in case the primary protocol fails."
            }
          ],
          "quick_revision": [
            "Routing Information Protocol (RIP) The Routing Information Protocol (RIP) is designed to help routers determine the best path for sending data packets across a network."
          ]
        },
        {
          "id": "open-shortest-path-first-ospf",
          "title": "Open Shortest Path First(OSPF)",
          "summary": "Open Shortest Path First (OSPF) Protocol States Open Shortest Path First (OSPF) is a link-state routing protocol used to find the best path between routers within an Autonomous System (AS).",
          "sections": [
            {
              "id": "open-shortest-path-first-ospf--overview",
              "heading": "Overview",
              "explanation": "Open Shortest Path First (OSPF) Protocol States Open Shortest Path First (OSPF) is a link-state routing protocol used to find the best path between routers within an Autonomous System (AS). OSPF routers establish neighbor relationships to exchange routing information, and these relationships play a crucial role in the formation of OSPF adjacencies. Understanding the transitions between OSPF protocol states is essential for optimizing network performance and troubleshooting. OSPF uses Hello packets for neighbor discovery and to establish communication between routers. Neighbor states are key in forming OSPF adjacencies, enabling efficient routing. The main focus of this article is to understand OSPF state transitions and their significance in the network. OSPF requires specific parameters like matching Area IDs, authentication, MTU, and timers for adjacencies to form. Distinguishing between OSPF neighbors and adjacent routers is critical for proper network operation. Proper management of OSPF states ensures stable and optimized packet routing. Open Shortest Path First (OSPF) Terms\nRouter ID: The Router ID is the highest active IP address on the router. The process first considers the highest loopback address . If no loopback address is configured, the highest active IP address on the router's interfaces is used as the Router ID.\nRouter Priority: The router priority is an 8-bit value assigned to a router running OSPF , which is used during the election of the Designated Router (DR) and Backup Designated Router (BDR) in a broadcast network.\nDesignated Router (DR): The Designated Router (DR) is elected to minimize the number of OSPF adjacencies in a network. It is responsible for distributing Link State Advertisements (LSAs) to all other routers. In a broadcast network, the DR handles LSR (Link State Request) messages and responds with updates.\nBackup Designated Router (BDR): The Backup Designated Router (BDR) serves as a backup to the DR in a broadcast network. If the DR fails, the BDR assumes the role of DR and takes over its responsibilities."
            },
            {
              "id": "open-shortest-path-first-ospf--dr-and-bdr-election",
              "heading": "DR and BDR Election",
              "explanation": "The election of the DR and BDR occurs in broadcast or multi-access networks. The following criteria are used for the election: The router with the highest priority is elected as the DR. If there is a tie in the router priority, the router with the highest Router ID is chosen. The Router ID is first determined by the highest loopback address, and if no loopback is configured, the highest active IP address on the router’s interfaces is considered. Open Shortest Path First (OSPF) States The device operating OSPF goes through certain states. These states are Down State No Hello packets have been received on the interface. This is the initial state before communication begins between routers. The OSPF adjacency process has not started yet.\nNote: The Down state does not imply that the interface is physically down; it simply means that the OSPF router has not started the process of forming adjacencies. Init State The router receives a Hello packet from another router but is not yet listed in the neighbor’s Hello packet. The router has begun communication, but no bidirectional communication has been established yet. Two-Way State Bi-directional communication is confirmed when each router sees itself in the other's Hello packet. In broadcast or multi-access networks, this is the point at which the Designated Router (DR) and Backup Designated Router (BDR) election takes place. ExStart State The Master/Slave relationship is established for Database Description (DBD) exchange. Routers exchange initial DBD packets, which contain the sequence numbers, indicating the beginning of the exchange phase. The router with the higher Router ID becomes the master, while the other becomes the slave. Exchange State In this state, routers exchange full Database Description (DBD) packets, which contain the headers of Link State Advertisements (LSAs). Routers create Link-State Request (LSR) lists to request missing LSAs that are not present in their own Link-State Database (LSDB). Loading State Routers send Link-State Request (LSR) packets to request missing LSAs. The routers respond with Link-State Update (LSU) packets, which contain the requested LSAs.\nNote: If a router receives a DBD from another router and finds that the received DBD is more up-to-date than its own, it will send an LSR to request missing links. The other router will reply with an LSU containing the missing updates, and a Link State Acknowledgment (LSA) is sent in return. Full State The adjacency between routers is fully established. The Link-State Databases (LSDB) are synchronized, meaning both routers have identical databases. Routers can now compute the shortest paths using the Shortest Path First (SPF) algorithm, marking the point where routing decisions can be made."
            }
          ],
          "quick_revision": [
            "Open Shortest Path First (OSPF) Protocol States Open Shortest Path First (OSPF) is a link-state routing protocol used to find the best path between routers within an…",
            "DR and BDR Election: The election of the DR and BDR occurs in broadcast or multi-access networks."
          ]
        },
        {
          "id": "intermediate-system-to-intermediate-system-is-is",
          "title": "Intermediate System to Intermediate System(IS-IS)",
          "summary": "Difference between OSPF and IS-IS 1.  OSPF It was developed because of in demand in the internet society to launch a high functionality non-proprietary IGP for the TCP/IP protocol community.",
          "sections": [
            {
              "id": "intermediate-system-to-intermediate-system-is-is--overview",
              "heading": "Overview",
              "explanation": "Difference between OSPF and IS-IS 1. OSPF It was developed because of in demand in the internet society to launch a high functionality non-proprietary IGP for the TCP/IP protocol community. The OSPF is an intradomain routing protocol and is based on link state routing technology. It has introduced some new concepts that are authentication of routing updates, variable length Subnet masks (VLSM), root summarizations etc."
            },
            {
              "id": "intermediate-system-to-intermediate-system-is-is--is-is",
              "heading": "IS-IS",
              "explanation": "Intermediate System to Intermediate System is a standardized link-state protocol that was developed to the definitive routing protocol for the OSI Model . IS-IS is a Link-state IGP. Link-state protocols are distinguished by the circulation of the information required to build a complete network connectivity map on each participating router. This map is then used to calculate the shortest path to destinations. Predominantly used in ISP environment."
            },
            {
              "id": "intermediate-system-to-intermediate-system-is-is--difference-between-ospf-and-is-is",
              "heading": "Difference between OSPF and IS-IS",
              "explanation": "S.No. Parameter OSPF IS-IS 1. Administrative Distance 110 115 2. Standard RFC 2328 (OSPFv2). ISO 10589, RFC 1195. 3. Operating OSI Layer OSPF operates on the top of IP layer. IS-IS operates over L2. 4. Virtual Links Supported Yes No 5. DR/BDR Election OSPF elects a BDR and DR on broadcast networks. IS-IS elects a single DIS on broadcast networks. 6. IP Connectivity OSPF Requires the IP Connectivity between the routers to share the routing information. IS-IS doesn't require IP connectivity between the routers as updates are sent via CLNS instead of IP. 7. Support OSPF supports NBMA and point to multipoint links. IS-IS doesn't support. 8. Router Area OSPF router can belong to multiple areas. IS-IS router can belong to only one area. 9. Area/Level Types Backbone Area Standard Area (Non Backbone Area) Level 1 Level 2 Level 1/2 Areas 10. Security Prone to attack and hence requires more security overheads for protection. Since, IS-IS runs on level2, hence every unlikely possibility of attack. 11. Identification OSPF uses Router id to identify a router on network. IS-IS uses System ID to identify a router on the network. 12. Flexibility Less Flexible than IS-IS. More Flexible to use than OSPF especially in provider domain. 13. Table Refresh OSPF refreshes the entire routing table after 30 minutes. IS-IS doesn't refresh the entire SPF Table Periodically like OSPF. 14. Related Terms Area, Non Backbone Area, Backbone Area, ABR, ASBR, Host. IS, Level 1, Level 2, L1/L2, Subdomain, ES."
            }
          ],
          "quick_revision": [
            "Difference between OSPF and IS-IS 1.",
            "IS-IS: Intermediate System to Intermediate System is a standardized link-state protocol that was developed to the definitive routing protocol for the OSI Model . IS-IS is a…",
            "Difference between OSPF and IS-IS: S.No."
          ]
        },
        {
          "id": "enhanced-interior-gateway-routing-protocol-eigrp",
          "title": "Enhanced Interior Gateway Routing Protocol(EIGRP)",
          "summary": "EIGRP fundamentals Enhanced Interior Gateway Routing Protocol (EIGRP) is an advanced distance-vector routing protocol that uses characteristics of both distance-vector and link-state protocols, making it a hybrid routing protocol.",
          "sections": [
            {
              "id": "enhanced-interior-gateway-routing-protocol-eigrp--overview",
              "heading": "Overview",
              "explanation": "EIGRP fundamentals Enhanced Interior Gateway Routing Protocol (EIGRP) is an advanced distance-vector routing protocol that uses characteristics of both distance-vector and link-state protocols, making it a hybrid routing protocol. It operates at the Network Layer (Layer 3) of the OSI model and uses protocol number 88 for communication.\nNote: EIGRP helps routers or Layer 3 switches dynamically discover and maintain the best paths for forwarding packets within an Autonomous System (AS). Administrative Distance (AD) in EIGRP Administrative Distance defines the trustworthiness of routing information. Lower AD values indicate higher trust. EIGRP assigns the following AD values: EIGRP Routes AD Value Summary Routes 5 Internal Routes 90 External Routes 170 Key EIGRP Messages EIGRP uses multiple message types for neighbor communication and routing updates. These messages can be multicast (224.0.0.10) or unicast, depending on the purpose: Hello Message : Used for neighbor discovery and keep-alives. Sent every 5 seconds (Hello timer). If no hello is received within 15 seconds (Dead timer), the neighbor is declared dead. Full Update : Sent after neighbor adjacency is formed. Contains all known best routes. Partial Update : Triggered by topology changes. Contains only the new or changed routes. Query Message : Sent when a destination is no longer reachable. Multicast to neighbors requesting alternative routes. Reply Message : Sent in response to a query. Provides alternate route information. Acknowledgement Message : A hello packet with no data, used to acknowledge updates, queries or replies.\nNULL Update: Used for calculating timers like SRTT (Smooth Round Trip Time) and RTO (Retransmission Timeout).\nNote: Hello and Acknowledgement packets do not require acknowledgment. However, Query, Reply and Update messages are reliable and require acknowledgment. Composite Metric in EIGRP For two routers to form an EIGRP neighbor relationship, the following conditions must be satisfied K values must match. Autonomous System (AS) number must be the same. Subnet mask must be identical. Authentication (if enabled) must match -> EIGRP supports MD5 authentication only. EIGRP Timers"
            },
            {
              "id": "enhanced-interior-gateway-routing-protocol-eigrp--formulas-code",
              "heading": "Formulas & Code",
              "explanation": "EIGRP calculates its routing decision using a composite metric, which can include five variables K1 -> Bandwidth K2 -> Load K3 -> Delay K4 -> Reliability K5 -> MTU Note By default, only K1 (bandwidth) and K3 (delay) are used. The default K values are (K1=1, K2=0, K3=1, K4=0, K5=0). This allows EIGRP to select the path with the lowest composite metric, ensuring efficient routing. Neighbor Adjacency Requirements"
            },
            {
              "id": "enhanced-interior-gateway-routing-protocol-eigrp--eigrp-relies-on-timers-for-maintaining-neighbor-relationship",
              "heading": "EIGRP relies on timers for maintaining neighbor relationships",
              "explanation": "Hello Timer : 5 seconds (interval between hello messages). Dead Timer (Hold Time) : 15 seconds (neighbor declared dead if no hello received).\nNote: These timers ensure stable communication and quick detection of failures. Pros of EIGRP Fast convergence using the Diffusing Update Algorithm (DUAL). Supports VLSM and CIDR for efficient IP address usage. Efficient bandwidth usage with partial updates instead of full table exchanges. Scalability across large enterprise networks. Unequal-cost load balancing supported."
            }
          ],
          "quick_revision": [
            "EIGRP fundamentals Enhanced Interior Gateway Routing Protocol (EIGRP) is an advanced distance-vector routing protocol that uses characteristics of both distance-vector…",
            "Formulas & Code: EIGRP calculates its routing decision using a composite metric, which can include five variables K1 -> Bandwidth K2 -> Load K3 -> Delay K4 -> Reliability K5 -> MTU Note…",
            "EIGRP relies on timers for maintaining neighbor relationships: Hello Timer : 5 seconds (interval between hello messages)."
          ]
        },
        {
          "id": "border-gateway-protocol-bgp",
          "title": "Border Gateway Protocol(BGP)",
          "summary": "Border Gateway Protocol (BGP) Border Gateway Protocol (BGP) is an Exterior Gateway Protocol (EGP) used to connect autonomous systems (AS) in any topology.",
          "sections": [
            {
              "id": "border-gateway-protocol-bgp--overview",
              "heading": "Overview",
              "explanation": "Border Gateway Protocol (BGP) Border Gateway Protocol (BGP) is an Exterior Gateway Protocol (EGP) used to connect autonomous systems (AS) in any topology. Each AS must have at least one BGP-enabled router connected to another AS’s BGP router. Its primary function is to exchange network reachability information between BGP systems. It is a path-vector routing protocol (unlike distance-vector or link-state protocols).\nNote: Border Gateway Protocol constructs an autonomous systems graph based on the information exchanged between BGP routers. Characteristics of Border Gateway Protocol (BGP)"
            },
            {
              "id": "border-gateway-protocol-bgp--inter-autonomous-system-configuration",
              "heading": "Inter-Autonomous System Configuration",
              "explanation": "The main role of BGP is to provide communication between two autonomous systems. BGP supports the Next-Hop Paradigm. Coordination among multiple BGP speakers within the AS (Autonomous System). Path Information : BGP advertisements also include path information, along with the reachable destination and next destination pair. Policy Support : BGP can implement policies that can be configured by the administrator. Runs Over TCP. BGP conserves network Bandwidth. BGP supports CIDR. BGP also supports Security.\nExample: A router running BGP can be configured to distinguish between the routes that are known within the AS and that which are known from outside the AS. Functionality of Border Gateway Protocol (BGP)"
            },
            {
              "id": "border-gateway-protocol-bgp--bgp-peers-perform-3-functions-which-are-given-below",
              "heading": "BGP peers perform 3 functions, which are given below",
              "explanation": "The first function consists of initial peer acquisition and authentication. Both the peers established a TCP connection and perform message exchange that guarantees both sides have agreed to communicate. The second function mainly focuses on sending negative or positive reach-ability information. The third function verifies that the peers and the network connection between them are functioning correctly. Importance of Border Gateway Protocol(BGP)\nSecurity: BGP is highly secure because it authenticates messages between routers using preconfigured passwords through which unauthorized traffic is filtered out.\nScalability: BGP is more scalable because it manages a vast number of routes and networks present on the internet.\nSupports Multihoming: BGP allows multihoming means an organization can connect to multiple networks simultaneously.\nCalculate the Best Path: As we know data packets is traveled across the internet from source to destination every system in between the source and destination has to decide where the data packet should go next\nTCP/IP Model: BGP is based on the TCP/IP model and it is used to control the network layer by using transport layer protocol. Types of Border Gateway Protocol"
            },
            {
              "id": "border-gateway-protocol-bgp--external-bgp",
              "heading": "External BGP",
              "explanation": "It is used to interchange routing information between the routers in different autonomous systems, it is also known as eBGP(External Border Gateway Protocol). The below image shows how eBGP interchange routing information. External BGP"
            },
            {
              "id": "border-gateway-protocol-bgp--internal-bgp",
              "heading": "Internal BGP",
              "explanation": "It is used to interchange routing information between the routers in the same autonomous system, it is also known as iBGP(Internal Border Gateway Protocol). Internal routers also ensure consistency among routers for sharing routing information. The below image shows how iBGP interchange routing information. Internal BGP Elements of BGP Some elements of BGP are assigned to each path and these elements help routers to select a path from multiple paths. Here below are some elements of BGP:\nWeight: Weight is defined as a Cisco-specific attribute that tells a router which path is preferred. The weight having a higher value is preferred.\nOriginate: This tells how a router choose routes and adds to BGP itself.\nLocal Preference: Local Preference is an element used to select the outbound routing path. Greater local preference is preferred.\nAutonomous System Path: This element tells the router to select a path having a shorter length.\nNext Hop: To reach the destination the next hop elements specify the IP address that should be used as the next hop. BGP Route Information Management Functions\nRoute Storage: Each BGP stores information about how to reach other networks.\nRoute Update: In this task, Special techniques are used to determine when and how to use the information received from peers to properly update the routes.\nRoute Selection: Each BGP uses the information in its route databases to select good routes to each network on the internet network."
            },
            {
              "id": "border-gateway-protocol-bgp--route-advertisement",
              "heading": "Route advertisement",
              "explanation": "Each BGP speaker regularly tells their peer what is known about various networks and methods to reach them. Difference Between BGP and OSPF BGP OSPF It follows the Path Vector Routing Algorithm It follows the Link State Routing Algorithm The speed of convergence is very slow in BGP The speed of convergence is fast in the case of OSPF BGP is also called inter-domain routing protocol OSPF is also called intra-domain routing protocol In BGP routing operation is performed between two AS In OSPF routing operation is performed inside an AS In BGP, TCP protocol is used In OSPF, IP protocol is used"
            }
          ],
          "quick_revision": [
            "Border Gateway Protocol (BGP) Border Gateway Protocol (BGP) is an Exterior Gateway Protocol (EGP) used to connect autonomous systems (AS) in any topology.",
            "Inter-Autonomous System Configuration: The main role of BGP is to provide communication between two autonomous systems.",
            "BGP peers perform 3 functions, which are given below: The first function consists of initial peer acquisition and authentication.",
            "External BGP: It is used to interchange routing information between the routers in different autonomous systems, it is also known as eBGP(External Border Gateway Protocol).",
            "Internal BGP: It is used to interchange routing information between the routers in the same autonomous system, it is also known as iBGP(Internal Border Gateway Protocol).",
            "Route advertisement: Each BGP speaker regularly tells their peer what is known about various networks and methods to reach them."
          ]
        },
        {
          "id": "multiprotocol-label-switching-mpls",
          "title": "Multiprotocol Label Switching(MPLS)",
          "summary": "Multi Protocol Label Switching (MPLS) Multi-Protocol Label Switching (MPLS) is an advanced packet-forwarding technique used in modern networks.",
          "sections": [
            {
              "id": "multiprotocol-label-switching-mpls--overview",
              "heading": "Overview",
              "explanation": "Multi Protocol Label Switching (MPLS) Multi-Protocol Label Switching (MPLS) is an advanced packet-forwarding technique used in modern networks. Instead of making routers look into complex Layer 3 routing tables for every IP packet, MPLS uses labels for forwarding decisions. These labels create pre-defined, efficient paths across the network, which enhances speed, scalability and traffic management. Multi Protocol Label Switching\nNote: MPLS lies between Layer 2 (Data Link) and Layer 3 (Network Layer) of the OSI model, which is why it is often referred to as a Layer 2.5 protocol. Why MPLS Traditional IP routing involves a long lookup process in routing tables. MPLS simplifies forwarding by assigning a short fixed-length label to each packet. This ensures: Faster packet delivery, better support for Quality of Service (QoS) & easier traffic engineering and Virtual Private Networks (VPNs). MPLS Header The MPLS header is 32 bits long and is inserted between the Layer 2 and Layer 3 headers. It contains the following fields: MPLS Header Field Size Description Label 20 bits Identifier used to make forwarding decisions (range: 0 to 2 ²⁰ – 1). Experimental (Exp) 3 bits Used for Quality of Service (QoS) and traffic prioritization. Bottom of Stack (S) 1 bit Indicates whether this label is the last in the stack (1 = last label). Time to Live (TTL) 8 bits Prevents loops; decrements by 1 at every hop.\nNote: Multiple labels can be stacked to form a label stack, enabling hierarchical routing. Key Terminologies in MPLS Provider Edge (PE) Router : Router at the edge of the MPLS provider’s network; adds/removes labels from packets. Customer Edge (CE) Router : Router at the customer’s network edge that communicates with PE routers. Label Switch Router (LSR) : Router inside the MPLS core that understands and processes labels. Ingress LSR : First router that receives the packet from CE and pushes (adds) the MPLS header. Intermediate LSR : Routers that swap labels as packets move across the MPLS path. Egress LSR : The last router in the MPLS domain that pops (removes) the MPLS header before sending the packet to the CE. Push, Pop, Swap : Push -> Add a label, Pop -> Remove a label. & Swap -> Replace an existing label with a new one. Working of MPLS (Forwarding Process) Ingress Stage (Push) : CE sends an IP packet to the PE (Ingress LSR). Ingress PE assigns a label based on the destination and attaches an MPLS header. Core Stage (Swap) : Intermediate LSRs forward the packet based only on the label. They swap the label with a new one as defined in their Label Forwarding Information Base (LFIB). Egress Stage (Pop) : The Egress PE removes the MPLS header and forwards the original IP packet to the CE router.\nNote: Labels are distributed using the Label Distribution Protocol (LDP). MPLS and VPN MPLS can separate traffic of different customers similar to VPNs. Unlike regular VPNs, MPLS does not encrypt data. Instead, it ensures traffic isolation by keeping each customer’s traffic within its label-switched path (LSP). Difference between VPN and MPLS Advantages of MPLS Faster packet forwarding (label-based). Supports multiple protocols (hence “multi-protocol”). Enables Traffic Engineering (efficient use of resources). Facilitates Quality of Service (QoS). Provides scalable support for Layer 3 VPNs. Reliable with loop prevention (via TTL). Disadvantages of MPLS Expensive to implement compared to IP routing. Complexity in configuration and management. Security is weaker than encrypted VPN solutions. Less suitable for small-scale networks. Multiprotocol Label Switching (MPLS) Routing."
            }
          ],
          "quick_revision": [
            "Multi Protocol Label Switching (MPLS) Multi-Protocol Label Switching (MPLS) is an advanced packet-forwarding technique used in modern networks."
          ]
        },
        {
          "id": "internet-protocol-ip",
          "title": "Internet Protocol(IP)",
          "summary": "What is Internet Protocol (IP)? The Internet Protocol (IP) is a set of rules that allows computers and other devices to communicate over the Internet.",
          "sections": [
            {
              "id": "internet-protocol-ip--overview",
              "heading": "Overview",
              "explanation": "What is Internet Protocol (IP)? The Internet Protocol (IP) is a set of rules that allows computers and other devices to communicate over the Internet. It ensures that information sent from one device reaches the correct destination by using a unique set of numbers known as IP addresses. Whether you're browsing websites, sending emails, or watching videos, the Internet Protocol helps manage how information travels, making sure everything works smoothly and efficiently. Why is Internet Protocol Important? The Internet Protocol is a fundamental component of the Internet and computer networks, responsible for delivering packets of data from the source host to the destination host based on their IP addresses. It ensures that packets of data get to the right destination from the source device. Each device connected to a network is assigned an IP address, which serves as a \" home address \" for the device, enabling other devices to locate and send messages to it and providing the addressing and routing mechanisms the devices require for their communications. IP works in conjunction with the Internet Control Message Protocol (ICMP) to send error messages and operational information (e.g., destination unreachable, echo requests), which inform senders about issues in packet delivery. Unlike some protocols, IP does not establish a connection before transmitting data, making it a connectionless protocol that allows for more flexible and efficient data transmission These terms form the foundation for understanding how devices communicate and exchange data efficiently across a network."
            },
            {
              "id": "internet-protocol-ip--ip-address",
              "heading": "IP Address",
              "explanation": "IP address is referred as a number sticker given to each device that belongs to the network which utilizes Internet Protocol to communicate. It serves two main purposes: host or network interface recognition, identifier or location addressing.\nPacket: A packet is a parcel of data that is switched between an origin and a destination via the Internet or some other network that is based on the packet switching mechanism . This component mainly has a header and a payload.\nRouter: A router is a network device that (serves as) a forwarding point for data packets between computer networks. Routers carry out the traffic routing functions through the Internet.\nIPv4: Internet Protocol version 4 (IPv4) is a protocol that tends to provide connectivity between the desktop computers online and that application layer is the wider application one that covers most of the Internet communications nowadays\nIPv6: Internet Protocol version 6 (IPv6), the final iteration in the series of the upgrades to the Internet Protocol, is used for the purpose of identifying, locating and routing of various computers so that traffic through Internet can be transferred properly. TOP 20 Essential Protocols These protocols and ports are fundamental for network communication, troubleshooting, and securing services. Port Protocol Common Service Use Case 20 TCP FTP (Data) File transfers (active mode) 21 TCP FTP (Control) File transfer control 22 TCP SSH Secure remote login, SFTP 23 TCP Telnet Remote login (insecure) 25 TCP SMTP Sending email 53 TCP/UDP DNS Domain name resolution 67 UDP DHCP (Server) Assigning IP addresses 68 UDP DHCP (Client) Receiving IP addresses 80 TCP HTTP Web traffic 110 TCP POP3 Receiving email 123 UDP NTP Time synchronization 135 TCP Microsoft RPC DCOM services on Windows 137 UDP NetBIOS Name Service Windows file sharing 138 UDP NetBIOS Datagram Windows file sharing 139 TCP NetBIOS Session Windows SMB traffic 143 TCP IMAP Email retrieval 161 UDP SNMP Network management 443 TCP HTTPS Secure web traffic 445 TCP Microsoft-DS (SMB) File and printer sharing 3389 TCP RDP Remote Desktop Protocol How Does IP Addressing Work? Every device connected to a network (such as the internet or a local network) needs a unique identifier so it can be located and communicated with other devices. So, the IP address serves this purpose. IP addresses are used by routers to determine how to forward data packets across the internet or a local network. This is essential for the delivery of data between devices located in different geographical regions or network segments. IP addressing uniquely identifies each device on a network using IPv4 or IPv6 addresses, assigned either statically or dynamically through DHCP . DNS translates human-readable domain names into these IP addresses, while protocols like ARP (for IPv4) or NDP (for IPv6) map IPs to physical MAC addresses locally. Data is encapsulated into IP packets containing source and destination addresses, which are routed through network devices using routing tables and protocols such as OSPF or BGP to reach their target. In private networks, NAT allows multiple devices to share a single public IP, conserving address space and enhancing security by hiding internal addresses. Upon reaching the destination, packets are decapsulated and processed by the appropriate applications. This comprehensive system ensures accurate, secure, and reliable data delivery across interconnected networks. What is an IP Packet? An IP packets is the basic unit of data transmission in an IP network. It consists of a header and a payload Header : The header contains essential control information, such as the source and destination IP addresses, that helps routers determine where to send the packet. Payload : The payload contains the actual data being transmitted. Once the packet reaches its destination, the data in the payload is delivered to the appropriate application or protocol TRouters examine the IP header and use the destination IP address to determine the best route for the packet. The packet may pass through multiple routers before reaching its destination. Upon arrival, the packet is decapsulated, and the payload is passed to the relevant application on the receiving device. IP Packet How Does the IP Routing Work? IP routing is a procedure of routing the information from the source to the recipient to enable its direction to the final destination. As we also know that the data is broken into several pieces, and then each piece will almost definitely go through several routers until these data ends up in the final destination. The path that the set of data package follows is determined by the routing algorithm . Besides the size of packet and the header length, the design of the routing algorithm takes into account other factors related to determining the most suitable route for the data from the sender to the destination. At the arrival of the datagram at some router, then source address and destination address fields are employed with a routing table to decide the subsequent hop's address. IP Routing Considering that it runs until it ultimately arrives at its desired point. The data which is getting distributed into multiple packages will be reached destination by travelling through different independent packets.\nExample: The TCP layer in an email server carries out this service by means of dividing the data into packets, providing numbers to each of the packets as well as to send these packets to the IP layer. This IP layer later resends the packet to the email server becoming the destination. On the recipient server, other way around, the TCP layer separates the data packets from the IP layer and remains its original text. This command goes to the mail application."
            }
          ],
          "quick_revision": [
            "What is Internet Protocol (IP)? The Internet Protocol (IP) is a set of rules that allows computers and other devices to communicate over the Internet.",
            "IP Address: IP address is referred as a number sticker given to each device that belongs to the network which utilizes Internet Protocol to communicate."
          ]
        },
        {
          "id": "generic-routing-encapsulation-gre",
          "title": "Generic Routing Encapsulation(GRE)",
          "summary": "Generic Routing Encapsulation (GRE) Tunnel Generic Routing Encapsulation (GRE) is a tunneling protocol developed by Cisco that encapsulates one network protocol inside another.",
          "sections": [
            {
              "id": "generic-routing-encapsulation-gre--overview",
              "heading": "Overview",
              "explanation": "Generic Routing Encapsulation (GRE) Tunnel Generic Routing Encapsulation (GRE) is a tunneling protocol developed by Cisco that encapsulates one network protocol inside another. It is primarily used to transport packets from one network to another securely and efficiently. GRE creates a virtual point-to-point connection between routers, allowing different network segments or protocols to communicate as if they were directly connected. Generic Routing Encapsulation GRE Encapsulation Process When GRE is configured between routers, the original IP packet is encapsulated with two additional headers:\nGRE Header: Provides information for the tunnel, effectively acting as a new IP header.\nDelivery Header: Contains the new source and destination IP addresses of the tunnel endpoints.\nNote: Generic Routing Encapsulation process hides the original IP packet during transit. Only the routers configured with GRE can encrypt, decrypt and interpret these headers. The original packet enters the GRE-enabled router. A GRE header is added, followed by a delivery header with tunnel interface IPs. The packet traverses the network in encapsulated form. At the destination router, the GRE and delivery headers are removed and the original IP packet is forwarded.\nNote: This mechanism simulates a tunnel between routers, hence the term GRE tunneling. Routing Over GRE Tunnel Without GRE, routers forward traffic based on their physical interfaces and normal IP routing. However, when GRE is configured: Routers use virtual interfaces (tunnel interfaces) instead of standard physical interfaces. Tunnel interfaces are assigned IP addresses from the organization’s IP pool, different from the physical interface addresses. GRE-enabled routers forward packets through these tunnels, encapsulating them with delivery and GRE headers. Example Scenario Network with GRE IP Routing PC1 sends data to a server in subnet 10.20.2.0/24. Router R1 receives the original packet and encapsulates it with -> GRE Header & Delivery Header (Source = 10.40.20.1, Destination = 10.40.20.2) The encapsulated GRE packet traverses the intermediate network based on routing protocols. Router R2 receives the GRE packet, removes both headers and forwards the original packet to the server.\nNote: GRE creates a transparent communication tunnel between R1 and R2, ensuring end-to-end connectivity across different or separated networks. GRE Tunnel Benefits Supports multiprotocol traffic (IPv4, IPv6, multicast, etc.). Transparent communication across different networks. Simplifies routing by creating logical point-to-point links. Can work with other routing protocols (EIGRP, OSPF, BGP). Limitations of GRE No encryption : GRE provides encapsulation but not security. It is often paired with IPsec for secure tunneling. Overhead : Additional headers increase packet size, which can impact performance. Scalability : In large networks, managing multiple tunnels can become complex."
            }
          ],
          "quick_revision": [
            "Generic Routing Encapsulation (GRE) Tunnel Generic Routing Encapsulation (GRE) is a tunneling protocol developed by Cisco that encapsulates one network protocol inside…"
          ]
        }
      ]
    },
    {
      "title": "Transport Layer",
      "subsections": [
        {
          "id": "transport-layer",
          "title": "Transport Layer",
          "summary": "Transport Layer in OSI Model The Transport Layer is the OSI Layer 4 responsible for providing reliable, efficient, and ordered end-to-end communication between applications on different hosts.",
          "sections": [
            {
              "id": "transport-layer--overview",
              "heading": "Overview",
              "explanation": "Transport Layer in OSI Model The Transport Layer is the OSI Layer 4 responsible for providing reliable, efficient, and ordered end-to-end communication between applications on different hosts. Operates at Layer 4 (Transport Layer) of the OSI model Enables process-to-process communication using port numbers Ensures reliability through error control, sequencing, and retransmission Supports flow control to prevent receiver overload Uses protocols like TCP, UDP, and SCTP for different application needs Transport Layer in OSI Model Functions of Transport Layer The Transport Layer is responsible for end-to-end communication of data packets. It provides a number of important functions that are responsible for reliable, efficient, and organized data transfer between host systems in a networked environment."
            },
            {
              "id": "transport-layer--the-primary-functions-of-the-transport-layer-are",
              "heading": "The primary functions of the Transport Layer are",
              "explanation": "Provides end-to-end data delivery Ensures reliable and ordered data transfer Performs error detection and recovery Controls data flow to prevent receiver overload Supports multiplexing and demultiplexing using port numbers To read in detail about services offered by transport layer, refer to Transport Layer Services Working of Transport Layer The Transport Layer provides logical communication between processes on different hosts meaning that even though data travels across various physical networks, the communicating applications perceive a direct, reliable link. Implemented only in end systems, not in intermediate routers. Uses port numbers to identify sending and receiving applications. Supports process-to-process delivery, enabling multiple applications to share a single network connection. Performs multiplexing and demultiplexing using port numbers to direct data to the correct process. Divides data from upper layers into segments (TCP) or datagrams (UDP) and adds necessary headers. Handles error detection, retransmission, and sequencing to maintain reliable communication. Coordinates flow control to ensure the receiver is not overloaded. Communicates with the Network Layer, which handles addressing and routing, to send data across networks. At the receiving end, it removes headers, reassembles data, and passes it to the appropriate application. 3-Way Handshake The 3-Way Handshake ensures both client and server are ready before data transmission begins Step 1: SYN (Client -> Server) Client sends a TCP segment with SYN=1, including its ISN (Initial Sequence Number). Marks the request to initiate a connection Step 2 : SYN‑ACK (Server -> Client) Server replies with SYN=1 & ACK=1, containing its own ISN and ACK = client_ISN + 1. Confirms receipt of client’s SYN and initiates its own sync Step 3: ACK (Client -> Server) Client sends an ACK=1 segment with ACK = server_ISN + 1. Completes synchronization; connection enters ESTABLISHED state Why not just two steps? With only SYN and SYN-ACK, neither the client nor the server can be sure that the other has successfully received the messages. The third ACK provides mutual confirmation, ensuring both sides are ready before data transfer begins. Transport Layer Protocols Transport Layer Protocol uses different protocol for the better communication between two ends uses of protocol may differ from specifications. Below mention are some protocols used in Transport Layer"
            },
            {
              "id": "transport-layer--transmission-control-protocol-tcp",
              "heading": "Transmission Control Protocol(TCP)",
              "explanation": "TCP is connection-oriented Protocol. TCP is reliable protocol. As TCP is connection-oriented protocol, so first the connection is established between two ends and then data is transferred and then the connection is terminated after all data being sent."
            },
            {
              "id": "transport-layer--user-datagram-protocol-udp",
              "heading": "User Datagram Protocol (UDP)",
              "explanation": "UDP is not reliable protocol The protocol UDP is connectionless. When speed and size are more important than security and dependability, this kind of protocol is employed. The data from the higher layer is supplemented with transport-level addresses, checksum error control, and length information by UDP, an end-to-end transport level protocol. A user datagram is the packet that the UDP protocol generates."
            },
            {
              "id": "transport-layer--stream-control-transmission-protocol-sctp",
              "heading": "Stream Control Transmission Protocol (SCTP)",
              "explanation": "Many Internet applications use SCTP to perform transport layer duties, similar to User Datagram Protocol (UDP) and Transmission Control Protocol (TCP). On top of a connectionless packet network like IP, SCTP is a dependable transport protocol that facilitates data transfer over the network in scenarios involving one or more IP addresses. Difference Between TCP and UDP at Transport Layer Choosing between TCP and UDP depends on the application's need for reliability versus speed and efficiency. TCP vs UDP TCP UDP TCP is a connection-oriented protocol UDP is the connection-less protocol TCP supports error-checking mechanisms. UDP has only the basic error-checking mechanism using checksums. An acknowledgment segment is present. No acknowledgment segment. TCP is slower than UDP UDP is faster, simpler, and more efficient than TCP. Retransmission of lost packets is possible in TCP, but not in UDP. There is no retransmission of lost packets in the User Datagram Protocol (UDP) TCP has a (20-60) bytes variable length header. The header length is fixed of 8 bytes."
            }
          ],
          "quick_revision": [
            "Transport Layer in OSI Model The Transport Layer is the OSI Layer 4 responsible for providing reliable, efficient, and ordered end-to-end communication between…",
            "The primary functions of the Transport Layer are: Provides end-to-end data delivery Ensures reliable and ordered data transfer Performs error detection and recovery Controls data flow to prevent receiver overload…",
            "Transmission Control Protocol(TCP): TCP is connection-oriented Protocol.",
            "User Datagram Protocol (UDP): UDP is not reliable protocol The protocol UDP is connectionless.",
            "Stream Control Transmission Protocol (SCTP): Many Internet applications use SCTP to perform transport layer duties, similar to User Datagram Protocol (UDP) and Transmission Control Protocol (TCP)."
          ]
        },
        {
          "id": "tcp-protocol",
          "title": "TCP Protocol",
          "summary": "Transmission Control Protocol (TCP) TCP (Transmission Control Protocol) is a protocol that allows devices to communicate reliably over a network.",
          "sections": [
            {
              "id": "tcp-protocol--overview",
              "heading": "Overview",
              "explanation": "Transmission Control Protocol (TCP) TCP (Transmission Control Protocol) is a protocol that allows devices to communicate reliably over a network. It ensures that data reaches the destination correctly and in the right order, even if parts of the network are slow or unreliable. It works at the Transport Layer (Layer 4) of the OSI model and is an essential part of the TCP/IP protocol suite used for Internet communication. TCP establishes a logical connection between the sender and receiver before data transmission begins. It ensures that data is delivered accurately and in the same order in which it was sent using acknowledgements and sequence numbers. TCP detects errors using checksums and retransmits lost or corrupted packets to maintain data integrity. It controls the data transmission rate to avoid overwhelming the receiver and adapts to network congestion for efficient communication. Connection Establishment and Termination Connection establishment and termination describe how two devices start and end a reliable communication session (mainly in TCP)."
            },
            {
              "id": "tcp-protocol--connection-establishment-three-way-handshake",
              "heading": "Connection Establishment (Three-Way Handshake)",
              "explanation": "TCP is connection-orientated, meaning a connection must be established before any data is sent. This is done using a three-way handshake:\nSYN (Synchronize): The sender sends a SYN segment to the receiver to request a connection."
            },
            {
              "id": "tcp-protocol--syn-ack-synchronize-acknowledge",
              "heading": "SYN-ACK (Synchronize-Acknowledge)",
              "explanation": "The receiver responds with a SYN-ACK segment, acknowledging the request and agreeing to the connection."
            },
            {
              "id": "tcp-protocol--ack-acknowledge",
              "heading": "ACK (Acknowledge)",
              "explanation": "The sender replies with an ACK, confirming the connection is established. This process ensures both sender and receiver are ready and synchronized, preventing lost or misordered data at the start."
            },
            {
              "id": "tcp-protocol--connection-termination-four-way-handshake",
              "heading": "Connection Termination (Four-Way Handshake)",
              "explanation": "Closing a TCP connection requires a four-step handshake to ensure both sides finish transmitting data safely:\nFIN (Finish): The sender who wants to close the connection sends a FIN segment to the receiver.\nACK (Acknowledge): The receiver acknowledges the FIN with an ACK.\nFIN (Finish) from Receiver: The receiver then sends its own FIN when it is ready to close the connection."
            },
            {
              "id": "tcp-protocol--ack-acknowledge-2",
              "heading": "ACK (Acknowledge)",
              "explanation": "The sender responds with an ACK, completing the termination. This ensures that all remaining data is transmitted before the connection is fully closed. Working 1. Segmenting When an application sends data (like an email or file), TCP breaks the data into smaller chunks called segments. Each segment has a header containing information like sequence numbers, ports, and flags. This makes it easier to send large amounts of data over the network reliably. 2. Routing via IP Once TCP creates segments, they are handed to IP (Internet Protocol). IP is responsible for delivering the segments from the sender to the receiver, possibly through multiple routers. TCP doesn’t care about the path—IP handles routing and addressing."
            },
            {
              "id": "tcp-protocol--reassembly-at-receiver",
              "heading": "Reassembly at Receiver",
              "explanation": "Segments may arrive out of order because they can take different paths through the network. TCP at the receiver uses sequence numbers to reassemble the segments into the correct order to reconstruct the original message."
            },
            {
              "id": "tcp-protocol--acknowledgments-acks",
              "heading": "Acknowledgments (ACKs)",
              "explanation": "The receiver sends an ACK for every segment (or group of segments) it receives correctly. This tells the sender that the data has arrived safely. If an ACK is not received, TCP assumes the segment was lost and triggers retransmission."
            },
            {
              "id": "tcp-protocol--retransmission",
              "heading": "Retransmission",
              "explanation": "If the sender does not receive an acknowledgment within a certain time, it resends the missing segment. This ensures no data is lost, making TCP reliable."
            },
            {
              "id": "tcp-protocol--flow-control",
              "heading": "Flow Control",
              "explanation": "TCP prevents the sender from sending too much data too quickly for the receiver to handle, using a sliding window mechanism."
            },
            {
              "id": "tcp-protocol--error-control",
              "heading": "Error Control",
              "explanation": "TCP checks for corrupted segments using checksums and requests retransmission if needed. Together, these mechanisms ensure data is delivered reliably and efficiently, without overloading the network or the receiver. Applications 1. Web Browsing (HTTP/HTTPS) Websites send and receive data in small chunks called packets. TCP ensures these packets arrive in order and completely, so pages load correctly without missing images or broken content. HTTPS adds encryption, but TCP still handles reliability under the hood. 2. Email (SMTP, IMAP, POP3) Sending and receiving emails requires all message data to arrive intact. TCP ensures no part of the email is lost or corrupted, so attachments and text are received correctly. 3. File Transfer (FTP, SFTP) Transferring files over a network involves large amounts of data. TCP divides files into segments, reorders them at the destination, and retransmits lost segments, ensuring the file is received exactly as sent. 4. Remote Terminal Access (SSH, Telnet ) When you connect to a remote computer, you send commands and receive responses in real time. TCP ensures that every keystroke or command is reliably transmitted and arrives in order, maintaining a stable connection for remote management. Advantages"
            },
            {
              "id": "tcp-protocol--error-free-data-transfer",
              "heading": "Error-Free Data Transfer",
              "explanation": "TCP detects errors during transmission and retransmits lost or corrupted data, ensuring accurate delivery."
            },
            {
              "id": "tcp-protocol--ordered-delivery",
              "heading": "Ordered Delivery",
              "explanation": "Data packets are received in the same sequence in which they were sent, maintaining data consistency.\nFlow Control: Prevents the sender from overwhelming the receiver by controlling the rate of data transmission.\nCongestion Control: Adjusts the sending speed based on network traffic conditions to reduce packet loss and congestion.\nReliable Communication: Ensures complete and dependable data transfer, making it suitable for critical applications.\nWidely Supported and Standardized: TCP is a globally accepted protocol, supported by all major operating systems and network devices."
            }
          ],
          "quick_revision": [
            "Transmission Control Protocol (TCP) TCP (Transmission Control Protocol) is a protocol that allows devices to communicate reliably over a network.",
            "Connection Establishment (Three-Way Handshake): TCP is connection-orientated, meaning a connection must be established before any data is sent.",
            "SYN-ACK (Synchronize-Acknowledge): The receiver responds with a SYN-ACK segment, acknowledging the request and agreeing to the connection.",
            "ACK (Acknowledge): The sender replies with an ACK, confirming the connection is established.",
            "Connection Termination (Four-Way Handshake): Closing a TCP connection requires a four-step handshake to ensure both sides finish transmitting data safely:",
            "ACK (Acknowledge): The sender responds with an ACK, completing the termination.",
            "Reassembly at Receiver: Segments may arrive out of order because they can take different paths through the network.",
            "Acknowledgments (ACKs): The receiver sends an ACK for every segment (or group of segments) it receives correctly.",
            "Retransmission: If the sender does not receive an acknowledgment within a certain time, it resends the missing segment.",
            "Flow Control: TCP prevents the sender from sending too much data too quickly for the receiver to handle, using a sliding window mechanism.",
            "Error Control: TCP checks for corrupted segments using checksums and requests retransmission if needed.",
            "Error-Free Data Transfer: TCP detects errors during transmission and retransmits lost or corrupted data, ensuring accurate delivery.",
            "Ordered Delivery: Data packets are received in the same sequence in which they were sent, maintaining data consistency."
          ]
        },
        {
          "id": "tcp-3-way-handshake-process",
          "title": "TCP 3-Way Handshake Process",
          "summary": "The TCP 3-Way Handshake is the process used by the Transmission Control Protocol (TCP) to establish a reliable connection between a client and a server before data transmission begins.",
          "sections": [
            {
              "id": "tcp-3-way-handshake-process--overview",
              "heading": "Overview",
              "explanation": "The TCP 3-Way Handshake is the process used by the Transmission Control Protocol (TCP) to establish a reliable connection between a client and a server before data transmission begins. It synchronises sequence numbers and ensures that both the client and server are ready to exchange data reliably. TCP Flags Used in Handshake Flag Purpose SYN (Synchronize) Initiates a TCP connection by sending the client's Initial Sequence Number (ISN). ACK (Acknowledgment) Acknowledges the received sequence number and confirms successful receipt of the segment. SYN + ACK (Combination of SYN and ACK Flags) Acknowledges the client's ISN while sending the server's own Initial Sequence Number (ISN). TCP 3-way Handshake Process Step 1 (SYN) In the first step, the client wants to establish a connection with a server, so it sends a segment with SYN(Synchronize Sequence Number) which informs the server that the client is likely to start communication and with what sequence number it starts segments with Step 2 (SYN + ACK) Server responds to the client request with SYN-ACK signal bits set. Acknowledgement(ACK) signifies the response of the segment it received and SYN signifies with what sequence number it is likely to start the segments with Step 3 (ACK) In the final part client acknowledges the response of the server and they both establish a reliable connection with which they will start the actual data transfer. Numerical Example of Sequence and Acknowledgment Numbers\nAssume: Client Initial Sequence Number (ISN) = 1000 Server Initial Sequence Number (ISN) = 5000 Step 1: Client -> Server (SYN) Sequence Number = 1000 SYN flag = 1 No acknowledgment number (since this is the first segment) The client proposes its starting sequence value. Step 2: Server -> Client (SYN-ACK) Sequence Number = 5000 Acknowledgment Number = 1001 (1000 + 1) The server acknowledges the client’s SYN by adding 1 to the client’s sequence number. The value increases by 1 because the SYN consumes one sequence number. Step 3: Client -> Server (ACK) Sequence Number = 1001 Acknowledgment Number = 5001 (5000 + 1) The client acknowledges the server’s SYN by adding 1 to the server’s sequence number. How Synchronization Happens Each side shares its Initial Sequence Number. Each side confirms the other’s sequence number using acknowledgment. After both acknowledgments are verified, the connection enters the ESTABLISHED state. This ensures both endpoints agree on starting sequence values before actual data transmission begins."
            }
          ],
          "quick_revision": [
            "The TCP 3-Way Handshake is the process used by the Transmission Control Protocol (TCP) to establish a reliable connection between a client and a server before data…"
          ]
        },
        {
          "id": "services-and-segment-structure-in-tcp",
          "title": "Services and Segment structure in TCP",
          "summary": "The Transmission Control Protocol is the most common transport layer protocol.  It works together with IP and provides a reliable transport service between processes using the network layer service provided by the IP protocol.",
          "sections": [
            {
              "id": "services-and-segment-structure-in-tcp--overview",
              "heading": "Overview",
              "explanation": "The Transmission Control Protocol is the most common transport layer protocol. It works together with IP and provides a reliable transport service between processes using the network layer service provided by the IP protocol. The various services provided by the TCP to the application layer are as follows:"
            },
            {
              "id": "services-and-segment-structure-in-tcp--process-to-process-communication",
              "heading": "Process-to-Process Communication",
              "explanation": "TCP enables process-to-process communication using 16-bit port numbers to identify the sending and receiving processes."
            },
            {
              "id": "services-and-segment-structure-in-tcp--stream-oriented",
              "heading": "Stream oriented",
              "explanation": "TCP sends data as a byte stream, grouping it into segments with headers, which are then encapsulated into IP packets."
            },
            {
              "id": "services-and-segment-structure-in-tcp--full-duplex-service",
              "heading": "Full-duplex service",
              "explanation": "This means that the communication can take place in both directions at the same time. 4. Unlike UDP, TCP provides a connection-oriented service. It defines 3 different phases Connection establishment Data transfer Connection termination"
            },
            {
              "id": "services-and-segment-structure-in-tcp--reliability",
              "heading": "Reliability",
              "explanation": "TCP ensures reliability through checksums, retransmissions, acknowledgements, sequencing, and congestion control."
            },
            {
              "id": "services-and-segment-structure-in-tcp--multiplexing",
              "heading": "Multiplexing",
              "explanation": "TCP does multiplexing and de-multiplexing at the sender and receiver ends respectively as a number of logical connections can be established between port numbers over a physical connection. Components of TCP Header"
            },
            {
              "id": "services-and-segment-structure-in-tcp--byte-number",
              "heading": "Byte Number",
              "explanation": "Every byte in a TCP connection is assigned a unique number. Numbering starts from an arbitrary initial value chosen at the start of the connection."
            },
            {
              "id": "services-and-segment-structure-in-tcp--sequence-number",
              "heading": "Sequence Number",
              "explanation": "Represents the byte number of the first byte in the current segment. Helps the receiver correctly reassemble data, even if segments arrive out of order."
            },
            {
              "id": "services-and-segment-structure-in-tcp--acknowledgement-number",
              "heading": "Acknowledgement Number",
              "explanation": "Indicates the next expected byte number from the sender. Confirms that all bytes up to this number have been successfully received. In the above image, if A sends ACK 1001, it means it received bytes up to 1000 and expects 1001 next. Likewise, B sends ACK 13002 after receiving bytes up to 13001. TCP Segment structure A TCP segment consists of data bytes to be sent and a header that is added to the data by TCP as shown: The header of a TCP segment can range from 20-60 bytes. 40 bytes are for options. If there are no options, a header is 20 bytes else it can be of upmost 60 bytes. Header fields\nSource Port Address: A 16-bit field that holds the port address of the application that is sending the data segment.\nDestination Port Address: A 16-bit field that holds the port address of the application in the host that is receiving the data segment."
            },
            {
              "id": "services-and-segment-structure-in-tcp--sequence-number-2",
              "heading": "Sequence Number",
              "explanation": "A 32-bit field that holds the sequence number, i.e, the byte number of the first byte that is sent in that particular segment. It is used to reassemble the message at the receiving end of the segments that are received out of order."
            },
            {
              "id": "services-and-segment-structure-in-tcp--acknowledgement-number-2",
              "heading": "Acknowledgement Number",
              "explanation": "A 32-bit field that holds the acknowledgement number, i.e, the byte number that the receiver expects to receive next. It is an acknowledgement for the previous bytes being received successfully."
            },
            {
              "id": "services-and-segment-structure-in-tcp--header-length-hlen",
              "heading": "Header Length (HLEN)",
              "explanation": "This is a 4-bit field that indicates the length of the TCP header by a number of 4-byte words in the header, i.e if the header is 20 bytes(min length of TCP header), then this field will hold 5 (because 5 x 4 = 20) and the maximum length: 60 bytes, then it'll hold the value 15(because 15 x 4 = 60). Hence, the value of this field is always between 5 and 15."
            },
            {
              "id": "services-and-segment-structure-in-tcp--control-flags",
              "heading": "Control flags",
              "explanation": "These are 6 1-bit control bits that control connection establishment, connection termination, connection abortion, flow control, mode of transfer etc. Their function is: URG Urgent pointer is valid\nACK: Acknowledgement number is valid( used in case of cumulative acknowledgement) PSH Request for push RST Reset the connection SYN Synchronize sequence numbers FIN Terminate the connection\nWindow size: This field tells the window size of the sending TCP in bytes.\nChecksum: This field holds the checksum for error control. It is mandatory in TCP as opposed to UDP."
            },
            {
              "id": "services-and-segment-structure-in-tcp--urgent-pointer",
              "heading": "Urgent pointer",
              "explanation": "This field (valid only if the URG control flag is set) is used to point to data that is urgently required that needs to reach the receiving process at the earliest. The value of this field is added to the sequence number to get the byte number of the last urgent byte.\nNote: TCP is connection-oriented. A TCP connection is established by a 3-way handshake ."
            }
          ],
          "quick_revision": [
            "The Transmission Control Protocol is the most common transport layer protocol.",
            "Process-to-Process Communication: TCP enables process-to-process communication using 16-bit port numbers to identify the sending and receiving processes.",
            "Stream oriented: TCP sends data as a byte stream, grouping it into segments with headers, which are then encapsulated into IP packets.",
            "Full-duplex service: This means that the communication can take place in both directions at the same time. 4.",
            "Reliability: TCP ensures reliability through checksums, retransmissions, acknowledgements, sequencing, and congestion control.",
            "Multiplexing: TCP does multiplexing and de-multiplexing at the sender and receiver ends respectively as a number of logical connections can be established between port numbers over a…",
            "Byte Number: Every byte in a TCP connection is assigned a unique number.",
            "Sequence Number: Represents the byte number of the first byte in the current segment.",
            "Acknowledgement Number: Indicates the next expected byte number from the sender.",
            "Sequence Number: A 32-bit field that holds the sequence number, i.e, the byte number of the first byte that is sent in that particular segment.",
            "Acknowledgement Number: A 32-bit field that holds the acknowledgement number, i.e, the byte number that the receiver expects to receive next.",
            "Header Length (HLEN): This is a 4-bit field that indicates the length of the TCP header by a number of 4-byte words in the header, i.e if the header is 20 bytes(min length of TCP header),…",
            "Control flags: These are 6 1-bit control bits that control connection establishment, connection termination, connection abortion, flow control, mode of transfer etc.",
            "Urgent pointer: This field (valid only if the URG control flag is set) is used to point to data that is urgently required that needs to reach the receiving process at the earliest."
          ]
        },
        {
          "id": "tcp-connection-establishment",
          "title": "TCP Connection Establishment",
          "summary": "TCP (Transmission Control Protocol) is a connection-oriented transport layer protocol that provides reliable, ordered, and error-checked data delivery between devices.",
          "sections": [
            {
              "id": "tcp-connection-establishment--overview",
              "heading": "Overview",
              "explanation": "TCP (Transmission Control Protocol) is a connection-oriented transport layer protocol that provides reliable, ordered, and error-checked data delivery between devices. Uses a three-way handshake to initiate communication. Assigns sequence numbers to maintain data order. Detects transmission errors using a checksum. Controls data flow using the sliding window mechanism. TCP Connection Establishment TCP establishes a connection using a three-way handshake, where both sender and receiver synchronize sequence numbers and exchange communication parameters before data transfer begins. Step 1 – SYN (Client -> Server) The sender initiates the connection by sending a SYN segment. Sequence Number (Seq = 521) Random Initial Sequence Number (ISN) generated by sender. SYN = 1 Requests synchronization of sequence numbers. Maximum Segment Size (MSS = 1460 bytes) Declares the maximum data size it can receive without fragmentation (stored in TCP Options field). Window Size (14600 bytes) Advertises its receiving buffer capacity. Step 2 – SYN + ACK (Server -> Client) The receiver responds with a SYN-ACK segment, since TCP is full-duplex and both sides must synchronize. Sequence Number (Seq = 2000) Receiver’s random ISN. SYN = 1 Requests synchronization from sender. ACK = 1 Acknowledgment field is valid. Acknowledgment Number (Ack = 522) Acknowledges sender’s Seq 521 (SYN consumes one sequence number). MSS = 500 bytes Receiver’s maximum acceptable segment size. Window Size (10000 bytes) Receiver’s buffer capacity. Since MSS(receiver) < MSS(sender), both agree on the smaller MSS (500 bytes) to avoid fragmentation. Receiver sending window = 14600 / 500 = 29 segments Sender sending window = 10000 / 500 = 20 segments Step 3 – ACK (Client ->Server) The sender sends the final acknowledgment to complete synchronization. Sequence Number (Seq = 522) Next sequence number after SYN (521 + 1). Acknowledgment Number (Ack = 2001) Acknowledges receiver’s Seq 2000 (SYN consumes one sequence number). ACK = 1 Confirms acknowledgment field is valid. After this third segment, the connection enters the ESTABLISHED state. Because three segments are exchanged (SYN -> SYN+ACK -> ACK), this process is called the Three-Way Handshake. CP Flags Used TCP uses specific control flags in the header to manage connection setup and termination.\nSYN (Synchronize): Initiates a new connection and synchronizes initial sequence numbers.\nACK (Acknowledge): Confirms receipt of a segment and validates the acknowledgment number.\nRST (Reset): Immediately terminates a connection due to errors or invalid requests."
            },
            {
              "id": "tcp-connection-establishment--fin-finish",
              "heading": "FIN (Finish)",
              "explanation": "Gracefully closes an established connection after data transfer is complete. Common Issues Certain problems may affect the handshake process and delay or prevent connection setup.\nSYN Flood Attack: Large number of incomplete SYN requests exhaust server resources.\nConnection Timeout: Handshake fails if a response is not received within a specified time."
            },
            {
              "id": "tcp-connection-establishment--packet-loss",
              "heading": "Packet Loss",
              "explanation": "Lost SYN or ACK segments require retransmission, increasing delay. Methods to Optimize TCP Connection Performance of connection setup can be improved using optimization techniques.\nTCP Fast Open (TFO): Allows data transmission during the initial SYN, reducing handshake latency.\nKeep-Alive Mechanism: Maintains active connections to avoid repeated handshakes.\nLoad Balancing: Distributes incoming connections across multiple servers for efficient handling."
            }
          ],
          "quick_revision": [
            "TCP (Transmission Control Protocol) is a connection-oriented transport layer protocol that provides reliable, ordered, and error-checked data delivery between devices.",
            "FIN (Finish): Gracefully closes an established connection after data transfer is complete.",
            "Packet Loss: Lost SYN or ACK segments require retransmission, increasing delay."
          ]
        },
        {
          "id": "tcp-termination",
          "title": "TCP Termination",
          "summary": "TCP Connection Termination TCP connection termination is the process of closing an established TCP connection between two devices in an orderly way.",
          "sections": [
            {
              "id": "tcp-termination--overview",
              "heading": "Overview",
              "explanation": "TCP Connection Termination TCP connection termination is the process of closing an established TCP connection between two devices in an orderly way. It uses a four-step handshake (FIN-ACK exchange) to ensure that both sides have finished sending and receiving all data before the connection is fully closed. Types of TCP Connection Release\nAbrupt connection release: In an Abrupt connection release, either one TCP entity is forced to close the connection or one user closes both directions of data transfer.\nGraceful connection release: In the Graceful connection release, the connection is open until both parties have closed their sides of the connection."
            },
            {
              "id": "tcp-termination--abrupt-connection-release",
              "heading": "Abrupt connection release",
              "explanation": "An abrupt connection release is carried out when an RST segment is sent. An RST segment can be sent for the below reasons: 1. When a non-SYN segment was received for a non-existing TCP connection. 2. In an open connection, some TCP implementations send an RST segment when a segment with an invalid header is received. This will prevent attacks by closing the corresponding connection. 3. When some implementations need to close an existing TCP connection, they send an RST segment. They will close an existing TCP connection for the following reasons: Lack of resources to support the connection The remote host is now unreachable and has stopped responding.\nNote: When a TCP entity sends an RST segment, it should contain 00 if it does not belong to any existing connection else it should contain the current value of the sequence number for the connection and the acknowledgment number should be set to the next expected in sequence number on this connection."
            },
            {
              "id": "tcp-termination--graceful-connection-release",
              "heading": "Graceful Connection Release",
              "explanation": "The common way of terminating a TCP connection is by using the TCP header’s FIN flag. This mechanism allows each host to release its own side of the connection individually.\nStep 1 (FIN from Client): The client sends a FIN to the server to start closing and enters the FIN_WAIT_1 state.\nStep 2 (ACK from Server): The server acknowledges the FIN and the client moves to FIN_WAIT_2.\nStep 3 (Client Waiting): The client waits for the server’s FIN while in the FIN_WAIT_2 state.\nStep 4 (FIN from Server): The server sends its FIN after completing its closing tasks."
            },
            {
              "id": "tcp-termination--step-5-ack-from-client",
              "heading": "Step 5 (ACK from Client)",
              "explanation": "The client acknowledges the server’s FIN, enters TIME_WAIT, and after a set delay, the connection closes fully. TCP States Visited TCP connections follow a state machine on both the client and server sides. These states represent the progress of a connection from establishment to termination. The following explains the states visited during a normal TCP connection teardown when the client initiates the closure."
            },
            {
              "id": "tcp-termination--tcp-states-visited-by-client-side",
              "heading": "TCP states visited by Client Side",
              "explanation": "The accompanying figures illustrate the state transitions for both the client and server, assuming that the client initiates the connection teardown. These state-transition diagrams focus on the normal process of connection establishment and termination in TCP. They do not cover exceptional or simultaneous close scenarios, which involve more complex state interactions. 2. T CP states visited by Server Side When closing a TCP connection, the server first enters CLOSE_WAIT upon receiving the client’s FIN and acknowledges it, then sends its own FIN and moves to LAST_ACK, waiting for the client’s final acknowledgment before fully closing the connection. This ensures an orderly and graceful termination."
            }
          ],
          "quick_revision": [
            "TCP Connection Termination TCP connection termination is the process of closing an established TCP connection between two devices in an orderly way.",
            "Abrupt connection release: An abrupt connection release is carried out when an RST segment is sent.",
            "Graceful Connection Release: The common way of terminating a TCP connection is by using the TCP header’s FIN flag.",
            "Step 5 (ACK from Client): The client acknowledges the server’s FIN, enters TIME_WAIT, and after a set delay, the connection closes fully.",
            "TCP states visited by Client Side: The accompanying figures illustrate the state transitions for both the client and server, assuming that the client initiates the connection teardown."
          ]
        },
        {
          "id": "congestion-control-in-tcp",
          "title": "Congestion Control in TCP",
          "summary": "Congestion Control in Computer Networks In computer networks, congestion occurs when too much data is sent through the network at the same time, causing delays, packet loss, or even network collapse.",
          "sections": [
            {
              "id": "congestion-control-in-tcp--overview",
              "heading": "Overview",
              "explanation": "Congestion Control in Computer Networks In computer networks, congestion occurs when too much data is sent through the network at the same time, causing delays, packet loss, or even network collapse. This is similar to a traffic jam on a highway - when too many cars try to move at once, everything slows down. Congestion control is the set of techniques and mechanisms used to prevent, detect, and manage congestion. Its main goal is to maintain smooth data flow, fair bandwidth allocation, and efficient utilization of network resources, ensuring a stable and reliable network performance. Effects of Congestion Control\nImproved Network Stability: Prevents overload and keeps the network running smoothly.\nReduced Latency and Packet Loss: Ensures data is delivered faster with fewer retransmissions.\nEnhanced Throughput: Maximizes the volume of data successfully transferred in a given time.\nFairness in Resource Allocation: Distributes bandwidth evenly so no user monopolizes resources.\nBetter User Experience: Provides faster access to websites, applications, and services.\nPrevention of Congestion Collapse: Avoids severe breakdowns where the network becomes nearly unusable. Congestion Control Algorithms"
            },
            {
              "id": "congestion-control-in-tcp--leaky-bucket-algorithm",
              "heading": "Leaky Bucket Algorithm",
              "explanation": "The leaky bucket algorithm controls the flow of packets by sending them out at a constant, fixed rate, regardless of incoming burst traffic. Packets are placed into a bucket (queue), and if the bucket overflows, excess packets are discarded. This ensures smooth traffic but wastes bandwidth during idle times. Leaky Bucket Steps Packets arrive -> placed into the bucket. Bucket leaks (transmits) at a constant rate. Bursty traffic is smoothed into uniform traffic. Limitation : Too rigid, wastes available bandwidth if traffic is bursty."
            },
            {
              "id": "congestion-control-in-tcp--token-bucket-algorithm",
              "heading": "Token Bucket Algorithm",
              "explanation": "The token bucket algorithm allows more flexibility by generating tokens at a fixed rate. A packet can only be transmitted if a token is available, and each packet consumes one token. If enough tokens accumulate, burst traffic can be sent quickly, making it better for handling variable traffic patterns without unnecessary drops. Token Bucket Steps Tokens are added to the bucket at regular intervals. Each token permits sending one packet. If tokens exist -> packets can be transmitted immediately. If no tokens -> packets must wait. Advantage : Handles bursty traffic efficiently without unnecessary data loss. Leaky Bucket vs Token Bucket Parameter Leaky Bucket Token Bucket Output Fixed, constant rate Variable, allows bursts Flexibility Rigid Flexible Packet Loss Possible during bursts Avoids loss if tokens available"
            },
            {
              "id": "congestion-control-in-tcp--need-of-token-bucket",
              "heading": "Need of Token Bucket",
              "explanation": "The leaky bucket algorithm enforces output pattern at the average rate, no matter how bursty the traffic is. So in order to deal with the bursty traffic we need a flexible algorithm so that the data is not lost. Advantages of Congestion Control Ensures stable and reliable operation of networks. Reduces delays and retransmissions. Minimizes data loss. Optimizes resource utilization. Scales well with growing networks. Adapts to changing traffic conditions. Disadvantages of Congestion Control Adds complexity to network design. May introduce overhead in processing. Can be sensitive to network conditions. May struggle with resource prioritization in critical scenarios. Effectiveness depends on modern infrastructure."
            }
          ],
          "quick_revision": [
            "Congestion Control in Computer Networks In computer networks, congestion occurs when too much data is sent through the network at the same time, causing delays, packet…",
            "Leaky Bucket Algorithm: The leaky bucket algorithm controls the flow of packets by sending them out at a constant, fixed rate, regardless of incoming burst traffic.",
            "Token Bucket Algorithm: The token bucket algorithm allows more flexibility by generating tokens at a fixed rate.",
            "Need of Token Bucket: The leaky bucket algorithm enforces output pattern at the average rate, no matter how bursty the traffic is."
          ]
        },
        {
          "id": "udp-protocol",
          "title": "UDP Protocol",
          "summary": "User Datagram Protocol UDP is a transport layer protocol that provides fast, connectionless, and lightweight communication between processes.",
          "sections": [
            {
              "id": "udp-protocol--overview",
              "heading": "Overview",
              "explanation": "User Datagram Protocol UDP is a transport layer protocol that provides fast, connectionless, and lightweight communication between processes. It skips delivery guarantees, ordering, and error correction, making it ideal for real-time and time-sensitive applications. UDP provides fast, connectionless, lightweight communication with no handshake, no acknowledgements, and no retransmission; data is sent and forgotten, minimising overhead. It's ideal for latency-sensitive traffic like video streaming, DNS lookups, VoIP, and online gaming, where speed matters more than guaranteed delivery. UDP Header The UDP header is a fixed 8 bytes, followed by the data payload. It contains just enough information to route and validate a packet. UDP Header Field Size Description Source Port 16 bits Identifies the sender’s port number. Destination Port 16 bits Identifies the receiver’s port number. Length 16 bits Specifies the total length of UDP header and data. Checksum 16 bits Used for error detection (optional in IPv4, mandatory in IPv6).\nNote: Unlike TCP, UDP's checksum is optional and it performs no flow or error control - it relies on higher layers (IP/ICMP) for error reporting. Port numbers alone are used to distinguish between different processes/requests. UDP Pseudo Header To improve checksum accuracy, UDP uses a pseudo header computed during checksum calculation but never actually transmitted. It includes: Source and destination IP address (from the IP header) Zero (padding field) Protocol number UDP length UDP pseudo header This ensures the packet reaches the correct host and protocol, and lets the receiver verify integrity using the same pseudo header before accepting the packet. Use of UDP in DDoS Attacks A UDP flood attack exploits UDP's connectionless nature attackers send massive volumes of packets to a target, often with spoofed IP addresses. Attack Process Attacker sends UDP packets with spoofed IPs to random target ports. Target checks each port for an active application — usually finds none. Target responds with ICMP \"Destination Unreachable\" messages, exhausting its own resources.\nMitigation: Monitor for abnormal UDP traffic spikes. Apply rate limiting, firewalls, and intrusion prevention systems (IPS). Use dedicated DDoS protection services for large-scale attacks. How UDP Interacts with IP UDP rides on top of IP to move data between applications The application hands off data + destination details to UDP. UDP attaches its header (source port, destination port, length, checksum). The datagram passes to IP for addressing and routing. IP adds its own header and forwards the packet. At the receiver, UDP strips its header and delivers the payload to the target application. Applications of UDP\nDNS: Fast query/response lookups for small, quick-turnaround requests.\nDHCP: Dynamically assigns IP addresses using small control messages.\nVoIP: Real-time voice - tolerates some packet loss but not delay.\nRIP: Sends periodic routing updates between routers.\nNTP: Synchronizes system clocks with minimal overhead."
            }
          ],
          "quick_revision": [
            "User Datagram Protocol UDP is a transport layer protocol that provides fast, connectionless, and lightweight communication between processes."
          ]
        },
        {
          "id": "tcp-vs-udp-protocol",
          "title": "TCP vs UDP Protocol",
          "summary": "TCP vs.  UDP TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two core protocols of the Transport Layer of the OSI and TCP/IP models.",
          "sections": [
            {
              "id": "tcp-vs-udp-protocol--overview",
              "heading": "Overview",
              "explanation": "TCP vs. UDP TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two core protocols of the Transport Layer of the OSI and TCP/IP models. Both are responsible for end-to-end communication between applications, but they differ significantly in terms of reliability, speed, and use cases. Understanding the difference between TCP and UDP is essential for designing efficient and reliable networked systems. Transmission Control Protocol (TCP) TCP is a reliable, connection-oriented transport protocol that ensures accurate and ordered data delivery. It uses control mechanisms to guarantee data correctness, which makes it slower but dependable. Connection-oriented protocol Reliable and ordered data delivery Higher overhead but high accuracy User Datagram Protocol (UDP) UDP is a fast, connectionless transport protocol that sends data without reliability guarantees. It is efficient for applications where speed is more important than accuracy. Connectionless and lightweight No guarantee of delivery or order Low overhead and high speed Differences between TCP and UDP TCP (Transmission Control Protocol) UDP (User Datagram Protocol) Connection-oriented; uses a three-way handshake Connectionless; no handshake Guarantees reliable data delivery Does not guarantee delivery Uses acknowledgements (ACKs) No acknowledgements Supports retransmission of lost packets No retransmission support Ensures packets are delivered in order Does not ensure ordering Provides flow control and congestion control No flow or congestion control Slower due to higher overhead Faster with minimal overhead Variable header size (20–60 bytes) Fixed header size (8 bytes) Treats data as a continuous byte stream Treats data as independent messages Does not support broadcasting or multicasting Supports broadcasting and multicasting Used by HTTP, HTTPS, FTP, SMTP Used by DNS, DHCP, VoIP, Streaming"
            }
          ],
          "quick_revision": [
            "TCP vs."
          ]
        },
        {
          "id": "stream-control-transmission-protocol-sctp",
          "title": "Stream Control Transmission Protocol(SCTP)",
          "summary": "Stream Control Transmission Protocol (SCTP) Stream Control Transmission Protocol (SCTP) is a connection-oriented transport layer protocol that supports reliable, message-oriented communication using multiple independent streams between two endpoints.",
          "sections": [
            {
              "id": "stream-control-transmission-protocol-sctp--overview",
              "heading": "Overview",
              "explanation": "Stream Control Transmission Protocol (SCTP) Stream Control Transmission Protocol (SCTP) is a connection-oriented transport layer protocol that supports reliable, message-oriented communication using multiple independent streams between two endpoints. It combines TCP's reliability and congestion control with UDP's message-oriented communication. Ideal for applications like telephony over the Internet and signaling in mobile networks. Application Telephony Communication VoIP signaling and telecom networks.\nMobile Networks: Transports SS7 messages for 3G/4G/5G via M3UA, M2UA, SUA.\nRoaming & RAN Security: LTE/5G core network signaling and roaming infrastructure."
            },
            {
              "id": "stream-control-transmission-protocol-sctp--reliable-transport",
              "heading": "Reliable Transport",
              "explanation": "Suitable for applications needing high reliability and low delay. SCTP Packet Structure An SCTP packet consists of a Common Header followed by one or more Chunks. The Header is common but the Payload has variable chunks. The Common SCTP header is 12 bytes long and made up of the 4 parts: Port Number (Source) shows the sending port Port Number (Destination) shows the receiving port Verification tag a 32 bit random value which differentiate the packets from the previous connection Checksum a CRC32 algorithm for detection of error. Multihoming Allows a host to connect through multiple IP addresses simultaneously. If the primary path fails, data automatically switches to an alternate path, ensuring continuous communication. Each path’s Round Trip Time (RTT) is monitored for reliability. This configuration increases network reliability and fault tolerance. Enables traffic to be distributed across multiple connections maximizing throughput. Ensures continuous operations during infrastructure disruptions. Security Provides certain security features related to transport such as resistance against blind DOS attack (Denial of Service), masquerades and monopolization of any type of service during operation. SIGTRAN (Signaling Transport) protocols does not define any type of new security mechanism. Current available security protocols provide necessary steps for securing the transmission of SS7 message over IP networks Advantages Full duplex (send & receive simultaneously). Independent, ordered delivery per stream. Supports multiple IP paths (multihoming). Provides fault tolerance and congestion control. Message-oriented, unlike TCP’s byte-oriented approach."
            }
          ],
          "quick_revision": [
            "Stream Control Transmission Protocol (SCTP) Stream Control Transmission Protocol (SCTP) is a connection-oriented transport layer protocol that supports reliable,…",
            "Reliable Transport: Suitable for applications needing high reliability and low delay."
          ]
        },
        {
          "id": "datagram-congestion-control-protocol-dccp",
          "title": "Datagram Congestion Control Protocol(DCCP)",
          "summary": "Datagram Congestion Control Protocol - DCCP Congestion in networks occurs when routers, CPUs, or buffers are overloaded, leading to packet delays or even total delivery failure.",
          "sections": [
            {
              "id": "datagram-congestion-control-protocol-dccp--overview",
              "heading": "Overview",
              "explanation": "Datagram Congestion Control Protocol - DCCP Congestion in networks occurs when routers, CPUs, or buffers are overloaded, leading to packet delays or even total delivery failure. To handle such issues, the Datagram Congestion Control Protocol (DCCP) was introduced. DCCP is a message-based transport layer protocol that provides congestion control, secure connection setup/closure, and feature negotiation, without needing to implement these at the application level. DCCP Connection setup Key Features of DCCP Message-based transport (like UDP, not byte-stream like TCP). Provides congestion control and ECN (Explicit Congestion Notification) . Supports secure handshake for setup and closure. Includes acknowledgment mechanisms to track packet loss, ECN marks, or corruption. Allows negotiation of suitable congestion control algorithms . Supports multiple concurrent streams with data prioritization for Quality of Service (QoS) . Works with both IPv4 and IPv6 . Supports both connection-oriented and connectionless modes. DCCP’s generic header adapts to the size of the Extended Sequence Number (X) field Let X = 1, the Sequence Number field is 48 bits long, and the generic header takes 16 bytes, which is clearly explained in the below image. DCCP generic header when X=1 If we change the value of X = 0, only the low 24 bits of the Sequence Number are transmitted, and the generic header is 12 bytes long which is shown in the below image: DCCP generic header when X=0 Advantages\nCongestion control: Unlike UDP, DCCP prevents network overload with built-in algorithms.\nQoS support: Prioritizes important traffic (e.g., voice, video).\nFlexibility: Multiple congestion control mechanisms available.\nCompatibility: Works with existing IP networks and coexists with TCP/UDP. Real-World Applications\nStreaming Media (audio/video, conferencing): Handles real-time data with low latency.\nOnline Gaming: Ensures fast, reliable delivery of game data.\nTelemetry: Reliable transmission of large datasets from remote devices.\nRemote Access: Secure and efficient access to servers/resources."
            }
          ],
          "quick_revision": [
            "Datagram Congestion Control Protocol - DCCP Congestion in networks occurs when routers, CPUs, or buffers are overloaded, leading to packet delays or even total delivery…"
          ]
        },
        {
          "id": "reliable-user-datagram-protocol-rudp",
          "title": "Reliable User Datagram Protocol(RUDP)",
          "summary": "Reliable User Datagram Protocol - RUDP Reliable UDP (RUDP) is a protocol built on top of UDP that adds reliability features like acknowledgments, retransmissions and ordered delivery - all while keeping UDP’s low-latency benefits.",
          "sections": [
            {
              "id": "reliable-user-datagram-protocol-rudp--overview",
              "heading": "Overview",
              "explanation": "Reliable User Datagram Protocol - RUDP Reliable UDP (RUDP) is a protocol built on top of UDP that adds reliability features like acknowledgments, retransmissions and ordered delivery - all while keeping UDP’s low-latency benefits. When it comes to sending data across the internet, we often face a trade-off between speed and reliability. UDP (User Datagram Protocol) is fast but unreliable. TCP (Transmission Control Protocol) is reliable but slower due to its connection setup and acknowledgment mechanisms.\nNote: Think of it as \"UDP + reliability layer\", making it suitable for high-speed, real-time applications (like gaming, streaming and VoIP) that can’t afford TCP’s connection overhead but still need dependable delivery. Why UDP Alone Isn’t Enough UDP sends data packets (called datagrams) directly from sender to receiver without any handshake or confirmation. This means: Packets can be lost, duplicated or arrive out of order. There’s no acknowledgment from the receiver. The sender doesn’t know whether data arrived.\nNote: RUDP fixes these issues by introducing a reliability layer on top of UDP - a smart middle ground. RUDP Architecture - How It Works RUDP sits in the application layer, built over UDP. Both the sender and receiver maintain a window of packets - a fixed-size range that controls how many packets can be sent or received at a time. Here’s how it flows: RUDP Protocol Architecture Sender breaks the message into smaller segments. Each segment is assigned a sequence number and checksum (to verify data integrity). Packets are sent through the RUDP protocol over UDP. The receiver checks for errors and order, sends ACKs (acknowledgments) and buffers packets until all are received correctly. If an ACK isn’t received within a timeout, the sender retransmits that packet.\nNote: This system ensures reliability - but without TCP’s heavy connection setup. Key Components of RUDP"
            },
            {
              "id": "reliable-user-datagram-protocol-rudp--thread-safe-buffers",
              "heading": "Thread-Safe Buffers",
              "explanation": "Both sender and receiver use synchronized shared buffers protected by semaphores to prevent multiple threads from accessing data simultaneously - avoiding deadlocks and corruption. Two important counters manage the flow base - the sequence number of the earliest unacknowledged packet next - the sequence number of the next packet to send\nNote: This allows efficient tracking of which packets are \"in-flight\" and which are confirmed."
            },
            {
              "id": "reliable-user-datagram-protocol-rudp--timeout-and-retransmission",
              "heading": "Timeout and Retransmission",
              "explanation": "Each sent packet starts a timer. If an acknowledgment doesn’t arrive before the timer expires, the sender automatically resends that packet. This guarantees that no data is permanently lost."
            },
            {
              "id": "reliable-user-datagram-protocol-rudp--network-simulation-queuing",
              "heading": "Network Simulation & Queuing",
              "explanation": "RUDP can simulate network delays, losses and out-of-order packets during testing. Each packet is queued with a timestamp (current_time + delay) to mimic real-world conditions. Sliding Window Protocol - The Core of RUDP Reliability The Sliding Window Protocol (SWP) is the heart of RUDP. It ensures that Packets are sent in a controlled, continuous flow. Acknowledgments shift the \"window\" forward as packets are received. Duplicates and out-of-order packets are discarded or reordered.\nTypes: One-Bit Sliding Window Protocol – simplest, only one packet in transit. Go-Back-N Protocol – retransmits all packets after a loss. Selective Repeat Protocol – retransmits only the lost packet (most efficient, used in RUDP). Piggybacking Technique Instead of sending separate acknowledgment packets, RUDP uses piggybacking - attaching ACKs to outgoing data packets. This reduces network overhead and improves performance, especially in bidirectional communication. Mathematical View of Window Updates Each time a packet is acknowledged, the window’s upper edge moves forward. When all outstanding packets are acknowledged, the sender knows all data was received - and the connection can safely close. This math-driven management helps RUDP balance speed (via windowing) and reliability (via acknowledgments). Internal Classes in RUDP Class Purpose RUDP Core class managing send/receive, window setup and timer control. Buffer_RUDP Shared buffer with thread-safe access (semaphores). Thread_Receiver Thread that listens for incoming packets and ACKs simultaneously. Segment_RUDP Defines structure for RUDP packets (sequence number, checksum, etc.). Timeout_Handler Handles retransmissions when ACKs are delayed or lost. Support_RUDP Handles network-level tasks like sending UDP packets, simulating delay/loss. Client/Server Interfaces for sending and receiving data using the RUDP layer. RUDP Work Flow Client Side Client Side Code Architecture Data is divided into segments. Each segment gets a frame (sequence number + checksum). Sent using Support_RUDP.send_udp(). Timer starts for each segment. If ACK is received - mark as delivered. If timeout occurs - resend packet. Server Side Server-Side Code Architecture Listens for incoming packets. Validates checksum and sequence number. Sends ACK for each valid packet. Reorders any out-of-sequence packets. Delivers final data to the application once all are received. Pseudo Code for RUDP Class Class RUDP{ //setting up the window sizes set Receiver Window size set Sender Window size start receiver thread that receives the aka(Acknowledgment) and data for both the receiver and the sender //sender calls sent_data(byte[] data_gram, int size) { //process flow => data -> segments -> store into sender buffer -> send -> start timer //breaking into segments and sending along with frames Divide into the segments. put every segment into the sender's buffer segment sending using sent_udp() of support_RUDP class timeout scheduling for the data that is divided into segments using frames } //receiver calls receive_data(byte[] buffer, int size) { //receiving of the segments of the data packets segment receiving once at a time including the frames } //call by both the sender and receiver close() { //creation of flag for the indication creation of a flag segment to indicate the data transfer status //verification of the data //if data receiving completed -> close once the complete data is received close the segment } //RUDP class ends here Pseudo Code of Thread_receiver Class Class Thread_receiver { while(true) { //waiting for the packet -> received Receive the packet from socket //numberize or make checksum of the data individualize a segment from the packet that is received //verification of the data checksum verification that is sent along the frames if segment contains acknowledgment process -> remove segments from the sender's buffer if segment contains data put data->receiver's buffer send acknowledgment } //end of Thread_receiver Class Pseudo Code for Support_RUDP Class Class Support_RUDP { //simulate over the conditions that can cause the segments not received completely random network delay network loss any other potential that can effect the packet //process packets from the segments received processing //sent sent the data packet over the socket } //end of Support_RUDP class Pseudo Code for Client-Server Class //Sender Class Client{ RUDP rudp = new RUDP(Host_name, Port, Local); //send the data rudp.send(); //close rudp.close(); } //client class end //Receiver Class start Class Server{ RUDP rudp = new RUDP(Host_name, Port, Local); //receive the data rudp.receive(); //close rudp.close(); } Use Cases of RUDP Online gaming where latency must be minimal but some reliability is needed. VoIP and video streaming where real-time communication is key, but lost packets can degrade quality."
            },
            {
              "id": "reliable-user-datagram-protocol-rudp--iot-systems",
              "heading": "IoT systems",
              "explanation": "IoT systems where lightweight and resilient communication is necessary. RUDP vs UDP vs TCP Feature UDP TCP RUDP Connection setup No Yes (3-way handshake) No Reliability No Yes Acknowledgment No Yes Packet ordering Not guaranteed Guaranteed Speed Very fast Moderate Near UDP speed Use cases Streaming, gaming File transfer, web Real-time reliable systems"
            }
          ],
          "quick_revision": [
            "Reliable User Datagram Protocol - RUDP Reliable UDP (RUDP) is a protocol built on top of UDP that adds reliability features like acknowledgments, retransmissions and…",
            "Thread-Safe Buffers: Both sender and receiver use synchronized shared buffers protected by semaphores to prevent multiple threads from accessing data simultaneously - avoiding deadlocks and…",
            "Timeout and Retransmission: Each sent packet starts a timer.",
            "Network Simulation & Queuing: RUDP can simulate network delays, losses and out-of-order packets during testing.",
            "IoT systems: IoT systems where lightweight and resilient communication is necessary."
          ]
        }
      ]
    },
    {
      "title": "Session Layer",
      "subsections": [
        {
          "id": "session-layer",
          "title": "Session Layer",
          "summary": "Session Layer in OSI model The Session Layer is the 5th layer of the OSI model that establishes, manages, synchronizes, and terminates communication sessions between applications on different devices.",
          "sections": [
            {
              "id": "session-layer--overview",
              "heading": "Overview",
              "explanation": "Session Layer in OSI model The Session Layer is the 5th layer of the OSI model that establishes, manages, synchronizes, and terminates communication sessions between applications on different devices. Operates at Layer 5 (Session Layer) of the OSI model Manages session setup, maintenance, and termination Controls dialogue (who sends/receives and when) Provides synchronization and recovery mechanisms Many of its functions are integrated into Transport or Application layers in modern TCP/IP networks Session Layer Role of the Session Layer The Session Layer ensures that two communicating devices can establish a meaningful dialogue, exchange data in an organized manner and properly close the session when communication is complete. It provides mechanisms for session setup, management and termination. It ensures that communication remains synchronized and reliable, even during long or complex data transfers. It handles dialogue control, deciding whose turn it is to send or receive data.\nNote: In modern TCP/IP networks, some of its functions (like session release and dialogue control) are handled at the Transport Layer (TCP) or Application Layer, reducing the Session Layer’s independent role. Key Functions of the Session Layer\nSession Establishment: Initiates and negotiates communication parameters (e.g., authentication, duplex mode).\nCommunication Synchronization: Keeps data streams in order using checkpoints.\nActivity & Dialog Management: Controls turns, prevents collisions, and avoids duplication.\nResynchronization & Recovery: Recovers from failures using synchronization points."
            },
            {
              "id": "session-layer--session-termination",
              "heading": "Session Termination",
              "explanation": "Gracefully ends communication after all data is exchanged. Working of the Session Layer Working of Session Layer Establishes and negotiates session parameters (e.g., authentication, duplex mode). Manages token-based dialogue control to avoid collisions. Inserts synchronization checkpoints for recovery from failures. Ensures data integrity by reducing duplication or message loss. Gracefully terminates sessions after confirming all data has been exchanged. Session Layer Protocols\nAppleTalk Data Stream Protocol (ADSP): Developed by Apple for LAN communication with self-configuration support.\nReal-time Transport Control Protocol (RTCP): Provides QoS feedback for RTP-based multimedia sessions.\nPoint-to-Point Tunnelling Protocol (PPTP): Enables Virtual Private Networks (VPNs) over TCP/IP.\nPassword Authentication Protocol (PAP): Provides password-based user authentication in PPP connections.\nRemote Procedure Call Protocol (RPCP): Allows a program to execute procedures in another address space (client-server interaction).\nSockets Direct Protocol (SDP): Supports socket communication over RDMA-enabled networks. Devices Associated with the Session Layer\nFirewalls: Monitor and control sessions for security.\nProxy Servers: Act as intermediaries, managing sessions between clients and servers. Session Border Controllers (SBCs) Secure and manage VoIP sessions.\nApplication Servers: Create and maintain user sessions for applications."
            }
          ],
          "quick_revision": [
            "Session Layer in OSI model The Session Layer is the 5th layer of the OSI model that establishes, manages, synchronizes, and terminates communication sessions between…",
            "Session Termination: Gracefully ends communication after all data is exchanged."
          ]
        },
        {
          "id": "functions-of-session-layer",
          "title": "Functions of Session Layer",
          "summary": "The Session Layer (OSI Layer 5) establishes, manages, and terminates communication sessions between applications, providing dialog control and synchronization so data exchange stays organized and recoverable.",
          "sections": [
            {
              "id": "functions-of-session-layer--overview",
              "heading": "Overview",
              "explanation": "The Session Layer (OSI Layer 5) establishes, manages, and terminates communication sessions between applications, providing dialog control and synchronization so data exchange stays organized and recoverable. Acts as a dialog controller by managing who communicates when (sequencing). Maintains session state and supports synchronization points (checkpoints) for recovery. Receives data from the Presentation Layer and coordinates with the Transport Layer for end-to-end delivery. Ensures sessions can be resumed or restarted cleanly after interruptions."
            },
            {
              "id": "functions-of-session-layer--session-establishment",
              "heading": "Session Establishment",
              "explanation": "The most important role of the Session Layer is to establish and manage communication sessions between devices. These sessions can be connection-oriented or connectionless. Sessions can be mapped to transport connections in three ways: One-to-One Mapping : One session uses a single transport connection. Many-to-One Mapping : Multiple sessions share a single transport connection. One-to-Many Mapping : A single session uses multiple transport connections.\nNote: Once a session is released, the associated transport connection is also released."
            },
            {
              "id": "functions-of-session-layer--communication-synchronization",
              "heading": "Communication Synchronization",
              "explanation": "The Session Layer ensures proper synchronization during data transfer. To achieve this, it uses synchronization bits and checkpoints: Checkpoints are inserted into the data stream to allow recovery in case of failure. If an error occurs, retransmission begins from the last checkpoint rather than restarting the entire communication.\nNote: This functionality is crucial in long and complex communications, as the Transport Layer can only handle communication errors, not application-level synchronization."
            },
            {
              "id": "functions-of-session-layer--activity-management",
              "heading": "Activity Management",
              "explanation": "The Session Layer divides a continuous stream of communication into logical units called activities. Each activity is treated independently, which allows better management of operations performed during a session. This makes it easier to differentiate between tasks within a single communication stream."
            },
            {
              "id": "functions-of-session-layer--dialog-management",
              "heading": "Dialog Management",
              "explanation": "The Session Layer manages dialogues (conversations) between communicating devices. This involves deciding who will send data and when. Two modes of communication are supported: Half-duplex Mode : Only one party can transmit at a time. A token mechanism is used, where the device holding the token has the right to send data. Full-duplex Mode : Both devices can transmit data simultaneously, eliminating the need for tokens.\nNote: This ensures efficiency and prevents data collisions during communication."
            },
            {
              "id": "functions-of-session-layer--data-transfer",
              "heading": "Data Transfer",
              "explanation": "Data transfer is a fundamental function of the Session Layer. It manages the exchange of information between two systems by maintaining the mode of communication: Half-duplex : One device transmits while the other listens. Full-duplex : Both devices can send and receive data at the same time.\nNote: By organizing data flow, the Session Layer ensures reliable and orderly communication."
            },
            {
              "id": "functions-of-session-layer--resynchronization",
              "heading": "Resynchronization",
              "explanation": "Resynchronization (or backward synchronization) allows a session to be restored to a previously defined state after an error or failure. There are three options for resynchronization: Set : Assigns a new synchronization point serial number chosen by the user. Abandon : Discards the current synchronization point serial number and sets it to an unused value. Restart : Assigns a synchronization point serial number greater than the last acknowledged major synchronization point.\nNote: This process ensures that sessions can recover from disruptions without restarting entirely."
            }
          ],
          "quick_revision": [
            "The Session Layer (OSI Layer 5) establishes, manages, and terminates communication sessions between applications, providing dialog control and synchronization so data…",
            "Session Establishment: The most important role of the Session Layer is to establish and manage communication sessions between devices.",
            "Communication Synchronization: The Session Layer ensures proper synchronization during data transfer.",
            "Activity Management: The Session Layer divides a continuous stream of communication into logical units called activities.",
            "Dialog Management: The Session Layer manages dialogues (conversations) between communicating devices.",
            "Data Transfer: Data transfer is a fundamental function of the Session Layer.",
            "Resynchronization: Resynchronization (or backward synchronization) allows a session to be restored to a previously defined state after an error or failure."
          ]
        },
        {
          "id": "remote-procedure-call-rpc",
          "title": "Remote Procedure Call (RPC)",
          "summary": "Remote Procedural Call (RPC) Mechanism A Remote Procedure Call (RPC) is a communication protocol that enables a program to request a service or execute a procedure on a remote server as though it were a local function call.",
          "sections": [
            {
              "id": "remote-procedure-call-rpc--overview",
              "heading": "Overview",
              "explanation": "Remote Procedural Call (RPC) Mechanism A Remote Procedure Call (RPC) is a communication protocol that enables a program to request a service or execute a procedure on a remote server as though it were a local function call. Remote Procedural Call (RPC) The client invokes a function on the server located in a different address space. The RPC framework handles the details of network communication, serialization, and response management. This makes remote communication transparent to developers, promoting cleaner and more modular distributed applications. Importance of RPC in Distributed Systems Simplified Communication\nAbstraction of complexity: Developers call remote services as if they were local methods.\nConsistent interface: Uniform way of invoking services across the system. Enhanced Modularity and Reusability\nDecoupling: System components interact without being tightly coupled.\nReusability: Remote services can be reused across multiple applications. Facilitates Distributed Computing\nInter-Process Communication (IPC): Enables different processes on different machines to collaborate.\nResource Sharing: Allows sharing of resources like databases, computing power, or specialized services. RPC Architecture in Distributed Systems RPC follows a client-server model, where the client requests execution of a remote procedure and the server responds.\nClient: Initiates the request using a local stub.\nServer: Hosts the actual implementation of the remote procedure.\nClient Stub: Packs (marshals) arguments, sends request, and receives results.\nServer Stub: Unpacks (unmarshals) arguments, executes the procedure, and sends results back.\nMarshalling: Converts data/arguments into transmittable byte streams.\nUnmarshalling: Converts byte streams back into usable data."
            },
            {
              "id": "remote-procedure-call-rpc--communication-layer",
              "heading": "Communication Layer",
              "explanation": "Uses transport protocols (TCP/UDP). Manages message routing, buffering, and error handling.\nIDL (Interface Definition Language): Defines procedures, parameters, and return types independent of programming language.\nRPC Protocol: Specifies communication rules, request-response format, and error handling. Timeouts and Retries To handle failures and delays. Exception Handling Reports errors to clients.\nAuthentication/Authorization: Ensures only valid clients can access services.\nEncryption: Protects data during transmission (e.g., SSL/TLS). Types of RPC"
            },
            {
              "id": "remote-procedure-call-rpc--synchronous-rpc",
              "heading": "Synchronous RPC",
              "explanation": "Client waits for server response. Simple design but blocking in nature. Used when immediate response is required."
            },
            {
              "id": "remote-procedure-call-rpc--asynchronous-rpc",
              "heading": "Asynchronous RPC",
              "explanation": "Client sends request and continues execution without waiting. More complex but improves responsiveness. Used in concurrent applications."
            },
            {
              "id": "remote-procedure-call-rpc--one-way-rpc",
              "heading": "One-Way RPC",
              "explanation": "Client sends request without expecting any response. \"Fire-and-forget\" style. Used in logging or notification services.\nCallback RPC: Server invokes a client-provided callback after processing. Useful for long-running operations.\nBatch RPC: Multiple requests are bundled into one batch. Reduces network round trips and overhead."
            }
          ],
          "quick_revision": [
            "Remote Procedural Call (RPC) Mechanism A Remote Procedure Call (RPC) is a communication protocol that enables a program to request a service or execute a procedure on a…",
            "Communication Layer: Uses transport protocols (TCP/UDP).",
            "Synchronous RPC: Client waits for server response.",
            "Asynchronous RPC: Client sends request and continues execution without waiting.",
            "One-Way RPC: Client sends request without expecting any response. \"Fire-and-forget\" style."
          ]
        },
        {
          "id": "point-to-point-tunneling-protocol",
          "title": "Point-to-Point Tunneling Protocol",
          "summary": "PPTP Point-to-Point Tunneling Protocol (PPTP) is a VPN protocol that creates a secure tunnel by encapsulating Point-to-Point Protocol (PPP) frames inside IP packets, enabling remote users to access a private network over the Internet.",
          "sections": [
            {
              "id": "point-to-point-tunneling-protocol--overview",
              "heading": "Overview",
              "explanation": "PPTP Point-to-Point Tunneling Protocol (PPTP) is a VPN protocol that creates a secure tunnel by encapsulating Point-to-Point Protocol (PPP) frames inside IP packets, enabling remote users to access a private network over the Internet. Uses TCP port 1723 for control communication Encapsulates data using GRE (Generic Routing Encapsulation) Establishes a logical tunnel between client and VPN server Point-to-Point Tunneling Protocol Key Concepts of PPTP\nPoint-to-Point Communication: Establishes a direct logical connection between a client and a VPN server.\nTunneling: Encapsulates PPP packets inside IP packets so data can travel securely across the Internet.\nEncapsulation: Wraps original data with additional headers to ensure proper transmission through the tunnel.\nAuthentication: Verifies user identity before allowing access to the private network.\nEncryption: Protects transmitted data from unauthorized access, though PPTP encryption is considered weak by modern security standards. Working It is called a Layer 2 tunneling protocol because it carries PPP frames, but it operates over an IP (Layer 3) network using TCP and GRE. Working of PPTP Client–Server Communication The VPN client initiates the connection request to the PPTP server. The PPTP server receives the request and authenticates the user before allowing tunnel access. Types of Information Flow\nControl Messages: Establish, manage, and terminate the VPN tunnel."
            },
            {
              "id": "point-to-point-tunneling-protocol--data-packets",
              "heading": "Data Packets",
              "explanation": "Carry user traffic through the tunnel after it is set up. Technical Details Uses GRE (Generic Routing Encapsulation) to transport PPP frames through the tunnel. Uses TCP port 1723 for control communication and IP protocol 47 for GRE traffic. Supports MPPE encryption (commonly up to 128-bit) for protecting data in transit. Common authentication includes MS-CHAPv2. Types of Tunneling"
            },
            {
              "id": "point-to-point-tunneling-protocol--voluntary-tunneling",
              "heading": "Voluntary Tunneling",
              "explanation": "It is a client-initiated VPN method where the user device starts the PPTP tunnel to reach a private network securely over the Internet. The VPN client software runs on the user’s device (laptop/PC/mobile). The client initiates the tunnel directly to the PPTP server using TCP 1723 and GRE. User authentication happens between the client and the PPTP server."
            },
            {
              "id": "point-to-point-tunneling-protocol--compulsory-tunneling",
              "heading": "Compulsory Tunneling",
              "explanation": "This is a network-initiated method where a device in the access network automatically creates the tunnel on behalf of the user. The tunnel is established by a network device such as a Network Access Server (NAS), not by the client. The client may not need to run VPN software explicitly (the access network enforces tunneling). The NAS forwards user traffic into a PPTP tunnel toward the PPTP server. Advantages Setup is straightforward on many operating systems and network devices. Uses relatively lightweight encapsulation, so it can perform well on low-end systems. Typically provides better speed than heavier VPN protocols due to simpler encryption/processing. Supported by many legacy clients, servers, and older network environments. Can be used where basic tunneling is needed and strong security is not a requirement. Disadvantages PPTP has known vulnerabilities in authentication and encryption, so it is not recommended for sensitive data. Common PPTP authentication (MS-CHAPv2) can be attacked if passwords are weak, making credential compromise easier. Even with 128-bit MPPE, PPTP does not provide the same level of protection as modern protocols. PPTP relies on GRE (IP protocol 47), which is often blocked by firewalls/NAT environments, causing connection failures. Many organizations have replaced PPTP with more secure VPN protocols (like L2TP/IPsec, IKEv2, or OpenVPN/WireGuard)."
            }
          ],
          "quick_revision": [
            "PPTP Point-to-Point Tunneling Protocol (PPTP) is a VPN protocol that creates a secure tunnel by encapsulating Point-to-Point Protocol (PPP) frames inside IP packets,…",
            "Data Packets: Carry user traffic through the tunnel after it is set up.",
            "Voluntary Tunneling: It is a client-initiated VPN method where the user device starts the PPTP tunnel to reach a private network securely over the Internet.",
            "Compulsory Tunneling: This is a network-initiated method where a device in the access network automatically creates the tunnel on behalf of the user."
          ]
        }
      ]
    },
    {
      "title": "Presentation Layer",
      "subsections": [
        {
          "id": "presentation-layer",
          "title": "Presentation Layer",
          "summary": "Presentation Layer in OSI model The Presentation Layer is the 6th layer of the OSI model that translates, encrypts, compresses, and formats data so that communicating systems can correctly understand each other.",
          "sections": [
            {
              "id": "presentation-layer--overview",
              "heading": "Overview",
              "explanation": "Presentation Layer in OSI model The Presentation Layer is the 6th layer of the OSI model that translates, encrypts, compresses, and formats data so that communicating systems can correctly understand each other. Operates at Layer 6 (Presentation Layer) of the OSI model Also called the Translation Layer or Syntax Layer Ensures proper data format, syntax, and semantics Provides encryption/decryption for security Applies compression to optimize bandwidth Presentation Layer in OSI Model Role of the Presentation Layer When the Application Layer generates data, the Presentation Layer converts it into a standard form that can be transmitted across the network. Similarly, when data is received, it translates it into a format the receiving system can process. Maintains proper syntax and semantics of the data. Provides encryption and decryption for secure communication. Applies compression techniques to optimize bandwidth usage. Ensures compatibility between different systems and devices. Functions of the Presentation Layer"
            },
            {
              "id": "presentation-layer--below-are-the-functions-of-presentation-layer",
              "heading": "Below are the functions of presentation layer",
              "explanation": "Data Translation : Converts data from the application’s format into a standard network format (e.g., character encoding like ASCII ↔ Unicode) so different systems can understand each other. Data Compression : Reduces the size of data before transmission using compression techniques, which saves bandwidth and improves transmission speed. Data Encryption/Decryption : Encrypts data at the sender’s side to protect it from unauthorized access and decrypts it at the receiver’s side to restore readable information. Syntax and Semantics Management : Ensures that data structure (syntax) and meaning (semantics) remain consistent between communicating systems, preventing misinterpretation. Transfer Syntax Negotiation : Agrees on common data representation rules (format, encoding, compression method) before communication begins to ensure compatibility. Interoperability : Enables communication between heterogeneous systems by handling differences in operating systems, data formats, and architectures. Services Provided by the Presentation Layer The Presentation Layer ensures smooth and secure data exchange by providing the following services Compression : Reduces data size for faster transmission. Encryption/Decryption : Protects data from unauthorized access. Format Translation : Converts application-specific data into a standard format. Compatibility : Makes communication possible between different operating systems and platforms. Working of the Presentation Layer The Presentation Layer works as an intermediary between the Application Layer (Layer 7) and the Session Layer (Layer 5). At the sender’s end, it formats, encrypts and compresses data received from the Application Layer before sending it to the Session Layer. At the receiver’s end, it decrypts, decompresses and translates the data into a readable form before delivering it to the Application Layer. Presentation Layer Protocols Apple Filing Protocol (AFP) File services protocol for macOS.\nLightweight Presentation Protocol (LPP): Provides ISO presentation services over TCP/IP stacks.\nNetWare Core Protocol (NCP): Used in Novell NetWare for file and print services.\nNetwork Data Representation (NDR): Defines data types and representations for network communication.\nExternal Data Representation (XDR): Standard for describing and encoding data across different architectures.\nSecure Socket Layer (SSL): Provides encryption and secure communication between web browsers and servers."
            },
            {
              "id": "presentation-layer--transport-layer-security-tls",
              "heading": "Transport Layer Security (TLS)",
              "explanation": "The modern, more secure successor to SSL. Presentation Layer Attacks Since this layer deals with data formatting, compression and encryption, it is often targeted by attackers. Common attacks include:\nMan-in-the-Middle (MITM) Attacks: Interception of communication to steal sensitive data. SSL/TLS Downgrade Attacks Forcing weaker encryption protocols.\nCertificate Spoofing: Using fake certificates to impersonate trusted entities.\nCode Injection: Exploiting vulnerabilities in data parsing or formatting."
            }
          ],
          "quick_revision": [
            "Presentation Layer in OSI model The Presentation Layer is the 6th layer of the OSI model that translates, encrypts, compresses, and formats data so that communicating…",
            "Below are the functions of presentation layer: Data Translation : Converts data from the application’s format into a standard network format (e.g., character encoding like ASCII ↔ Unicode) so different systems can…",
            "Transport Layer Security (TLS): The modern, more secure successor to SSL. Presentation Layer Attacks Since this layer deals with data formatting, compression and encryption, it is often targeted by…"
          ]
        },
        {
          "id": "services-provided-by-presentation-layer",
          "title": "Services Provided by Presentation Layer",
          "summary": "Presentation Layer Services The Presentation Layer is the 6th layer in the Open System Interconnection (OSI) model.  It acts as the translator between the Application layer (Layer 7) and the lower layers of the OSI model.",
          "sections": [
            {
              "id": "services-provided-by-presentation-layer--overview",
              "heading": "Overview",
              "explanation": "Presentation Layer Services The Presentation Layer is the 6th layer in the Open System Interconnection (OSI) model. It acts as the translator between the Application layer (Layer 7) and the lower layers of the OSI model. Its main purpose is to ensure that the data sent from the sender’s system Can be understood by the receiver’s system, regardless of differences in encoding, encryption or compression.\nNote: This is why the presentation layer is often referred to as the Translation Layer. In short, the presentation layer plays a vital supporting role in the OSI model, bridging the gap between application-level data and lower-level transmission mechanisms. Core Services Offered by the Presentation Layer The presentation layer provides several essential services that prepare, secure and optimize data for transmission across networks. These include:"
            },
            {
              "id": "services-provided-by-presentation-layer--data-translation",
              "heading": "Data Translation",
              "explanation": "Different systems may use different encoding formats for data representation. The presentation layer translates data into a format that the receiving system can interpret correctly.\nCharacter coding systems: ASCII (American Standard Code for Information Interchange) EBCDIC (Extended Binary Coded Decimal Interchange Code)\nExample: If the sender’s system uses ASCII and the receiver only supports EBCDIC, the presentation layer converts ASCII-encoded data into EBCDIC."
            },
            {
              "id": "services-provided-by-presentation-layer--data-compression",
              "heading": "Data Compression",
              "explanation": "Data compression reduces the size of transmitted data, optimizing bandwidth usage and improving transmission speed. The presentation layer compresses data at the sender’s side and decompresses it at the receiver’s end. Types of compression Types of Data Compression\nLossless compression: Ensures no data is lost. The decompressed data is identical to the original (e.g., ZIP files for text).\nLossy compression: Sacrifices some data accuracy for higher compression efficiency (e.g., JPEG for images)."
            },
            {
              "id": "services-provided-by-presentation-layer--data-encryption-and-decryption",
              "heading": "Data Encryption and Decryption",
              "explanation": "To maintain data security, the presentation layer provides encryption before transmission and decryption upon reception. Data Encryption and Decryption\nEncryption: Converts plaintext into ciphertext, making it unreadable to unauthorized users.\nDecryption: Converts ciphertext back into plaintext at the receiver’s side.\nExample: Protocols like SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are used to secure sensitive data such as passwords and banking details."
            },
            {
              "id": "services-provided-by-presentation-layer--syntax-and-semantics-management",
              "heading": "Syntax and Semantics Management",
              "explanation": "The presentation layer ensures that data is both correctly structured (syntax) and meaningful (semantics) for the receiving system.\nSyntax management: Validates the structure or format of the transmitted data.\nSemantics management: Ensures that the meaning of the transmitted data remains intact.\nExample: Conversion between structured formats like XML and JSON so that applications can correctly interpret shared information. Limitations\nLimited error handling: Relies on the Transport Layer for error detection and correction.\nProtocol dependency: Communication may fail if incompatible protocols or unsupported formats are used.\nProcessing overhead: Extra workload due to encryption, compression and translation.\nNo direct communication control: Depends on lower layers for physical data transfer. Lossless vs Lossy Compression . and Data Encryption and Decryption ."
            }
          ],
          "quick_revision": [
            "Presentation Layer Services The Presentation Layer is the 6th layer in the Open System Interconnection (OSI) model.",
            "Data Translation: Different systems may use different encoding formats for data representation.",
            "Data Compression: Data compression reduces the size of transmitted data, optimizing bandwidth usage and improving transmission speed.",
            "Data Encryption and Decryption: To maintain data security, the presentation layer provides encryption before transmission and decryption upon reception.",
            "Syntax and Semantics Management: The presentation layer ensures that data is both correctly structured (syntax) and meaningful (semantics) for the receiving system."
          ]
        },
        {
          "id": "application-filing-protocol-afp",
          "title": "Application Filing Protocol(AFP)",
          "summary": "AFP Fullform AFP stands for Apple Filing Protocol . It is a Mac OS network protocol that is used for sharing files among servers and clients.",
          "sections": [
            {
              "id": "application-filing-protocol-afp--overview",
              "heading": "Overview",
              "explanation": "AFP Fullform AFP stands for Apple Filing Protocol . It is a Mac OS network protocol that is used for sharing files among servers and clients. It permits users to access files that belong to external systems. It is an application and session layer protocol.\nFeatures: It supports Unicode file names. It provides a Portable Operating System Interface (POSIX). It also provides Access Control List (ACL) permissions that specify which system processes and users are allowed to access the objects and perform the necessary operations. It offers a storage facility for structured data using Resource Fork and unstructured data using Data Fork. It supports both TCP/IP and AppleTalk for communication and to provide various services. Commands like create directory, close directory, copy file, delete file and close volume can be executed in AFP protocol.\nAdvantages: It offers security features to the system that limits the users to access hazardous files using advanced file locking mechanisms. It also includes named extended attributes that can be used by the users to map un-interpreted computer files with metadata. Along with local file access, it also supports Server file access by building a remote file server connection. It provides 100% compatibility with the Mac file system (HFS+) and is also the native file-sharing protocol. It provides built-in features such as Spotlight Search, Time Machine, Mac Aliases, and Bonjour Services.\nDisadvantages: It is not compatible with storage devices formatted using the Apple File System (APFS). Its sequential read and write speed is less than the Server Message Block (SMB) protocol."
            }
          ],
          "quick_revision": [
            "AFP Fullform AFP stands for Apple Filing Protocol . It is a Mac OS network protocol that is used for sharing files among servers and clients."
          ]
        },
        {
          "id": "netware-core-protocol-ncp",
          "title": "NetWare Core Protocol (NCP)",
          "summary": "Introduction of Novell NetWare Novell NetWare is type of Network Operating System.  It provides wide networking services ranging from easy and simple file to network user, data, security, and even resource management.",
          "sections": [
            {
              "id": "netware-core-protocol-ncp--overview",
              "heading": "Overview",
              "explanation": "Introduction of Novell NetWare Novell NetWare is type of Network Operating System. It provides wide networking services ranging from easy and simple file to network user, data, security, and even resource management. It is generally designed for networks or Local Area Network (LAN) operating system. Novell NetWare is most popular and widely used network system in PC world. Novell NetWare is simply designed to get used by various companies downsizing from mainframe to network of PCs. It only needs low hardware requirements and has memory protection. It keeps safe and protects single processes from each other. Novell NetWare is discontinued network operating system basically developed by Novell, Inc. In today’s market, it is one of most powerful networks operating systems. It generally uses proprietary protocol stack as shown in below diagram. Novell NetWare 6.5 is one of Novell’s most current network operating system used nowadays."
            },
            {
              "id": "netware-core-protocol-ncp--protocols-in-novell-netware",
              "heading": "Protocols in Novell Netware",
              "explanation": "Internet Package Exchange (IPX) - Network layer generally runs unreliable connectionless internetwork protocol. It is called Internet Package Exchange (IPX) protocol. This protocol is simply used for routing and showing path to packets to move from one network node to another network throughout internetwork."
            },
            {
              "id": "netware-core-protocol-ncp--format-of-ipx-is-shown-below",
              "heading": "Format of IPX is shown below",
              "explanation": "NetWare Core Protocol (NCP) - NCP is type of network protocol that is used in many products from Novell, Inc. It is actually Novell client-server protocol used for mainly Local Area Network (LAN). It is generally connected to NetWare Operating systems (OS). It also works with alternating operating systems along with UNIX, Linux, and Windows NT. Sequenced Packet Exchange (SPX) - SPX is also type of network protocol that is used by Novell Netware. SPX is also supported by other operating systems. It is nowadays considered legacy protocol as it has largely been replaced by TCP/IP. This protocol is simply used for handling packet sequencing in Novell Netware network."
            },
            {
              "id": "netware-core-protocol-ncp--most-important-features-of-netware-are-following",
              "heading": "Most important features of Netware are following",
              "explanation": "Directory Service - Novell Directory Service (NDS) is distributed directory service mainly used for managing network resources such as users, servers, and peripherals. It is originally known as NetWare Directory Services. It uses NDS for resource access and authentication. Directory service of networking operating system allows and enables users to identify and find network resources that are required. There are basically three types of Directory services of Novell Netware such as Bindery, NDS, EDirectory. User Interface - It contains simple user interface by which user and computer system can interact in easy way. Hardware requirements - This network operating system does not require or needs many hardware devices. It needs very minimal hardware devices. Interoperability - Using this networking operating system, ability of computer systems or software to simply exchange and make use of information with many types of computer systems is increased."
            }
          ],
          "quick_revision": [
            "Introduction of Novell NetWare Novell NetWare is type of Network Operating System.",
            "Protocols in Novell Netware: Internet Package Exchange (IPX) - Network layer generally runs unreliable connectionless internetwork protocol.",
            "Format of IPX is shown below: NetWare Core Protocol (NCP) - NCP is type of network protocol that is used in many products from Novell, Inc.",
            "Most important features of Netware are following: Directory Service - Novell Directory Service (NDS) is distributed directory service mainly used for managing network resources such as users, servers, and peripherals."
          ]
        },
        {
          "id": "secure-socket-layer-ssl",
          "title": "Secure Socket Layer (SSL)",
          "summary": "Secure Sockets Layer (SSL) is an Internet security protocol that encrypts data to ensure secure communication between devices over a network.",
          "sections": [
            {
              "id": "secure-socket-layer-ssl--overview",
              "heading": "Overview",
              "explanation": "Secure Sockets Layer (SSL) is an Internet security protocol that encrypts data to ensure secure communication between devices over a network. Developed by Netscape in 1995, SSL provides privacy, authentication and data integrity for online communications. It is the predecessor of TLS (Transport Layer Security), which is now the standard protocol for secure communications on the Internet. Secure Socket Layer (SSL) Note : Websites using SSL/TLS display \"HTTPS\" in their URLs instead of \"HTTP,\" indicating that communications are encrypted and secure. Working of SSL\nEncryption: Data transmitted over the network is encrypted, preventing unauthorized parties from reading it. If intercepted, encrypted data appears as an unreadable jumble of characters.\nAuthentication: SSL uses a handshake process to authenticate both the client and server, ensuring each party is legitimate and not an imposter."
            },
            {
              "id": "secure-socket-layer-ssl--data-integrity",
              "heading": "Data Integrity",
              "explanation": "SSL digitally signs transmitted data to detect any tampering, ensuring that the data received is exactly what was sent. Importance of SSL Before SSL, web data was transmitted in plaintext, making it vulnerable to interception. SSL solves this by: Encrypting sensitive information such as login credentials, financial transactions and personal data. Authenticating web servers to prevent users from connecting to fraudulent websites. Ensuring data integrity so transmitted information cannot be modified during transit.\nNote: SSL protects against cyber threats by providing confidentiality, authentication and integrity for online communications. SSL Protocols SSL consists of several protocols, each handling a different aspect of secure communication"
            },
            {
              "id": "secure-socket-layer-ssl--ssl-record-protocol",
              "heading": "SSL Record Protocol",
              "explanation": "SSL Record Protocol Provides confidentiality and message integrity. Application data is divided into fragments, optionally compressed and appended with a Message Authentication Code (MAC). The data is then encrypted and transmitted with an SSL header."
            },
            {
              "id": "secure-socket-layer-ssl--handshake-protocol",
              "heading": "Handshake Protocol",
              "explanation": "Establishes SSL sessions and authenticates clients and servers. SSL Handshake Protocol Phases diagrammatic representation"
            },
            {
              "id": "secure-socket-layer-ssl--four-phases",
              "heading": "Four phases",
              "explanation": "Client and server exchange hello packets, protocol versions and cipher suites. Server sends its certificate and server key information. Client responds with its certificate and key exchange. Change Cipher Spec finalizes the handshake, activating secure communication. 3. Change-Cipher Spec Protocol. Change Cipher Spec Protocol Signals that pending cryptographic parameters from the handshake should now become active. Consists of a single 1-byte message."
            },
            {
              "id": "secure-socket-layer-ssl--alert-protocol",
              "heading": "Alert Protocol",
              "explanation": "Alert Protocol Communicates SSL-related warnings or errors.\nWarning alerts (level 1): Non-critical issues, such as expired or unsupported certificates."
            },
            {
              "id": "secure-socket-layer-ssl--fatal-alerts-level-2",
              "heading": "Fatal alerts (level 2)",
              "explanation": "Critical errors, such as handshake failures, bad record MAC or illegal parameters, which terminate the connection. Versions of SSL/TLS Version Release Year Notes SSL 1 Never released Insecure SSL 2 1995 First public release SSL 3 1996 Improved security TLS 1.0 1999 Successor to SSL 3.0 TLS 1.1 2006 Improved encryption and security TLS 1.2 2008 Widely adopted, strong encryption TLS 1.3 2018 Modern, efficient, secure protocol Note : Today, TLS has replaced SSL, but the term \"SSL\" is still commonly used. SSL Certificates SSL certificates are digital certificates issued by trusted Certificate Authorities (CAs) to secure and verify websites. Key Features\nEncryption: Protects sensitive information during transmission.\nAuthentication: Confirms the identity of the website or service.\nIntegrity: Ensures transmitted data is not altered.\nNon-repudiation: Prevents denial of transmitted messages. Public-key cryptography Facilitates secure key exchange.\nSession management: Allows resumption of secure sessions after interruptions. Types of SSL Certificates Single-Domain Secures one domain.\nWildcard: Secures one domain and all its subdomains.\nMulti-Domain: Secures multiple unrelated domains in one certificate. Validation Levels Domain Validation (DV) Confirms domain ownership. Organization Validation (OV) Confirms the organization's identity.\nExtended Validation (EV): Rigorous verification, highest trust level, often indicated by a green address bar. SSL vs TLS\nSSL: Older protocol, no longer considered secure.\nTLS: Updated and more secure version of SSL. Despite TLS being the standard, the term \"SSL\" is still widely used in marketing and casual references."
            }
          ],
          "quick_revision": [
            "Secure Sockets Layer (SSL) is an Internet security protocol that encrypts data to ensure secure communication between devices over a network.",
            "Data Integrity: SSL digitally signs transmitted data to detect any tampering, ensuring that the data received is exactly what was sent.",
            "SSL Record Protocol: SSL Record Protocol Provides confidentiality and message integrity.",
            "Handshake Protocol: Establishes SSL sessions and authenticates clients and servers.",
            "Four phases: Client and server exchange hello packets, protocol versions and cipher suites.",
            "Alert Protocol: Alert Protocol Communicates SSL-related warnings or errors.",
            "Fatal alerts (level 2): Critical errors, such as handshake failures, bad record MAC or illegal parameters, which terminate the connection."
          ]
        },
        {
          "id": "remote-procedure-call-rpc-2",
          "title": "Remote Procedure Call(RPC)",
          "summary": "RPC Message Protocol The distributed information system is defined as “a number of interdependent computers linked by a network for sharing information among them”. A distributed information system consists of multiple autonomous computers that communicate or exchange information through a computer…",
          "sections": [
            {
              "id": "remote-procedure-call-rpc-2--overview",
              "heading": "Overview",
              "explanation": "RPC Message Protocol The distributed information system is defined as “a number of interdependent computers linked by a network for sharing information among them”. A distributed information system consists of multiple autonomous computers that communicate or exchange information through a computer network. There are three ways by which entities in the distributed systems communicate: Interprocess Communication: It is a low-level communication paradigm. Examples are: Distributed shared memory like a mailbox Remote Invocation: It is a high-level and direct communication paradigm. Examples are: RPC, RMI, etc Indirect Communication: It is a high-level indirect communication paradigm. Examples are: Group communication, Publish/Subscribe model, etc RPC stands for Remote Procedure Call. In RPC, a computer program causes a procedure to operate in a different address space, and it is programmed as if it were a normal procedure call. Whether the subroutine is local to the current program or remote, the programmer writes essentially the same code. A request-response message-passing mechanism is generally used to accomplish this type of client-server interaction. It's preferable to think of it as a generic structure for distributed systems. RPC is popular because it is built on the semantics of a local procedure call: the application software makes a call to a procedure, regardless of whether it is local or remote, and waits for it to return. RPCs are represented via remote method invocation in the object-oriented programming paradigm. Theoretical suggestions of remote procedure calls as the paradigm of network operations come from the 1970s, while actual implementations emerge from the early 1980s. In 1981, Bruce Jay Nelson is credited with coining the term 'Remote procedure call'. It is widely used in: Protobufs (Google) Thrift on Facebook Finagle on Twitter RPC aims to make network communication appear as if it were a function call. An application developer's job can be considerably simplified if he is entirely unaware of whether an operation is local or remote. When the procedures being called are methods of objects in an object-oriented language, RPC is known as a remote method invocation. While the RPC concept is simple, it has some flaws listed below: The network between the calling and called processes is prone to limit message sizes and has a proclivity for losing and reordering messages. The calling and called processes may operate on machines with vastly different architectures and data representation types."
            },
            {
              "id": "remote-procedure-call-rpc-2--rpc-mechanism-consists-of-two-key-components",
              "heading": "RPC mechanism consists of two key components",
              "explanation": "A protocol that controls the messages delivered between the client and server processes and deals with the underlying network's possibly unfavorable characteristics. The arguments are packaged into a request message on the client computer, which is then translated back into the arguments on the server machine, and the return value is translated back into the parameters. A stub compiler is a name given to this part of the RPC system. Client-server request lost Server-client reply lost Server crashes after receiving a request Client crashes after delivering the request The fundamental algorithm is easy to understand. The client sends a request message, which is acknowledged by the server. The server then sends a reply message after completing the operation, which the client acknowledges. RPC timeline"
            },
            {
              "id": "remote-procedure-call-rpc-2--following-steps-are-followed-in-the-rpc-mechanism",
              "heading": "Following steps are followed in the RPC mechanism",
              "explanation": "Each RPC takes place within a thread. A thread is a single control flow that has just one point of execution at any one time. An application thread is a thread that is generated and maintained by application code. Both RPCs and RPC run-time calls are issued by RPC apps using application threads. One or more client application threads, each of which can conduct one or more RPCs, make up an RPC client. In addition, an RPC server employs one or more call threads provided by the RPC run-time framework to execute called remote operations. The server application thread sets the maximum number of concurrent calls it will execute when it starts listening. There is only one call thread in single-threaded programs. In multi-threaded applications, the maximum number of call threads is determined by the application's architecture and RPC implementation policies. The call threads are created in the server execution context by the RPC run-time mechanism. An RPC can be used in both client and server environments. As a result, when a client application thread contacts a remote procedure, it becomes part of an RPC thread, which is a logical thread of execution. An RPC thread is a conceptual construct that extends over real execution threads and the network to include the different phases of an RPC. The calling client application thread joins the RPC thread after making an RPC. Until the call returns, the RPC thread usually retains execution control. The RPC thread of a successful RPC passes through the execution stages depicted in RPC Thread Execution Phases."
            },
            {
              "id": "remote-procedure-call-rpc-2--the-following-items-are-included-in-the-execution-phase",
              "heading": "The following items are included in the execution phase",
              "explanation": "The RPC thread starts in the client process when a client application thread makes an RPC to its stub; the client thread then joins the RPC thread. The RPC thread connects to the server across the network. The RPC thread becomes a calling thread, which runs the remote procedure. The calling thread becomes part of the RPC thread when a called remote operation is running. When the call completes, the calling thread is no longer part of the RPC thread. The RPC thread then returns to the client via the network. When the RPC thread reaches the calling client application thread, it delivers any call results, and the client application +thread exits the RPC thread."
            },
            {
              "id": "remote-procedure-call-rpc-2--getting-around-network-limitations",
              "heading": "Getting Around Network Limitations",
              "explanation": "To deal with the reality that networks aren't ideal conduits, RPC protocols frequently perform extra duties. There are two such functions: Deliver messages in a timely manner. Fragmentation and reassembly are used to support huge message sizes. In most situations, the RCP protocol builds its own reliable message delivery layer on top of an unreliable substrate (e.g., UDP/IP). Similar to TCP, such an RPC protocol would most likely implement dependability using acknowledgements and timeouts."
            },
            {
              "id": "remote-procedure-call-rpc-2--benefits-of-rpc",
              "heading": "Benefits of RPC",
              "explanation": "Process-oriented and thread-oriented architectures are both supported by remote procedure calls. Remote procedure calls can be utilized in both a distributed and a local context. The user is not aware of RPC's underlying message transmission method. To enhance performance, RPC skips several of the protocol layers. In remote procedure calls, the work required to rewrite and develop the code is minimal.\nDrawbacks of RPC: The notion of a remote procedure call can be implemented in a variety of ways. It isn't a set of rules. RPC does not allow for hardware architectural flexibility. It is solely dependent on interaction. Costs have increased as a result of the remote procedure call."
            }
          ],
          "quick_revision": [
            "RPC Message Protocol The distributed information system is defined as “a number of interdependent computers linked by a network for sharing information among them”. A…",
            "RPC mechanism consists of two key components: A protocol that controls the messages delivered between the client and server processes and deals with the underlying network's possibly unfavorable characteristics.",
            "Following steps are followed in the RPC mechanism: Each RPC takes place within a thread.",
            "The following items are included in the execution phase: The RPC thread starts in the client process when a client application thread makes an RPC to its stub; the client thread then joins the RPC thread.",
            "Getting Around Network Limitations: To deal with the reality that networks aren't ideal conduits, RPC protocols frequently perform extra duties.",
            "Benefits of RPC: Process-oriented and thread-oriented architectures are both supported by remote procedure calls."
          ]
        },
        {
          "id": "point-to-point-tunneling-protocol-pptp",
          "title": "Point-to-Point Tunneling Protocol(PPTP)",
          "summary": "Point-to-Point Tunneling Protocol - PPTP Point-to-Point Tunneling Protocol (PPTP) is a VPN protocol that creates a secure tunnel by encapsulating Point-to-Point Protocol (PPP) frames inside IP packets, enabling remote users to access a private network over the Internet.",
          "sections": [
            {
              "id": "point-to-point-tunneling-protocol-pptp--overview",
              "heading": "Overview",
              "explanation": "Point-to-Point Tunneling Protocol - PPTP Point-to-Point Tunneling Protocol (PPTP) is a VPN protocol that creates a secure tunnel by encapsulating Point-to-Point Protocol (PPP) frames inside IP packets, enabling remote users to access a private network over the Internet. Uses TCP port 1723 for control communication Encapsulates data using GRE (Generic Routing Encapsulation) Establishes a logical tunnel between client and VPN server Point-to-Point Tunneling Protocol Key Concepts of PPTP\nPoint-to-Point Communication: Establishes a direct logical connection between a client and a VPN server.\nTunneling: Encapsulates PPP packets inside IP packets so data can travel securely across the Internet.\nEncapsulation: Wraps original data with additional headers to ensure proper transmission through the tunnel.\nAuthentication: Verifies user identity before allowing access to the private network.\nEncryption: Protects transmitted data from unauthorized access, though PPTP encryption is considered weak by modern security standards. Working It is called a Layer 2 tunneling protocol because it carries PPP frames, but it operates over an IP (Layer 3) network using TCP and GRE. Working of PPTP Client–Server Communication The VPN client initiates the connection request to the PPTP server. The PPTP server receives the request and authenticates the user before allowing tunnel access. Types of Information Flow\nControl Messages: Establish, manage, and terminate the VPN tunnel."
            },
            {
              "id": "point-to-point-tunneling-protocol-pptp--data-packets",
              "heading": "Data Packets",
              "explanation": "Carry user traffic through the tunnel after it is set up. Technical Details Uses GRE (Generic Routing Encapsulation) to transport PPP frames through the tunnel. Uses TCP port 1723 for control communication and IP protocol 47 for GRE traffic. Supports MPPE encryption (commonly up to 128-bit) for protecting data in transit. Common authentication includes MS-CHAPv2. Types of Tunneling"
            },
            {
              "id": "point-to-point-tunneling-protocol-pptp--voluntary-tunneling",
              "heading": "Voluntary Tunneling",
              "explanation": "It is a client-initiated VPN method where the user device starts the PPTP tunnel to reach a private network securely over the Internet. The VPN client software runs on the user’s device (laptop/PC/mobile). The client initiates the tunnel directly to the PPTP server using TCP 1723 and GRE. User authentication happens between the client and the PPTP server."
            },
            {
              "id": "point-to-point-tunneling-protocol-pptp--compulsory-tunneling",
              "heading": "Compulsory Tunneling",
              "explanation": "This is a network-initiated method where a device in the access network automatically creates the tunnel on behalf of the user. The tunnel is established by a network device such as a Network Access Server (NAS), not by the client. The client may not need to run VPN software explicitly (the access network enforces tunneling). The NAS forwards user traffic into a PPTP tunnel toward the PPTP server. Advantages Setup is straightforward on many operating systems and network devices. Uses relatively lightweight encapsulation, so it can perform well on low-end systems. Typically provides better speed than heavier VPN protocols due to simpler encryption/processing. Supported by many legacy clients, servers, and older network environments. Can be used where basic tunneling is needed and strong security is not a requirement. Disadvantages PPTP has known vulnerabilities in authentication and encryption, so it is not recommended for sensitive data. Common PPTP authentication (MS-CHAPv2) can be attacked if passwords are weak, making credential compromise easier. Even with 128-bit MPPE, PPTP does not provide the same level of protection as modern protocols. PPTP relies on GRE (IP protocol 47), which is often blocked by firewalls/NAT environments, causing connection failures. Many organizations have replaced PPTP with more secure VPN protocols (like L2TP/IPsec, IKEv2, or OpenVPN/WireGuard)."
            }
          ],
          "quick_revision": [
            "Point-to-Point Tunneling Protocol - PPTP Point-to-Point Tunneling Protocol (PPTP) is a VPN protocol that creates a secure tunnel by encapsulating Point-to-Point Protocol…",
            "Data Packets: Carry user traffic through the tunnel after it is set up.",
            "Voluntary Tunneling: It is a client-initiated VPN method where the user device starts the PPTP tunnel to reach a private network securely over the Internet.",
            "Compulsory Tunneling: This is a network-initiated method where a device in the access network automatically creates the tunnel on behalf of the user."
          ]
        },
        {
          "id": "multipurpose-internet-mail-extensions-mime",
          "title": "Multipurpose Internet Mail Extensions(MIME)",
          "summary": "Multipurpose Internet Mail Extension (MIME) Protocol MIME (Multipurpose Internet Mail Extensions) is a standard designed to extend the format of email messages, allowing them to include more than just plain text.",
          "sections": [
            {
              "id": "multipurpose-internet-mail-extensions-mime--overview",
              "heading": "Overview",
              "explanation": "Multipurpose Internet Mail Extension (MIME) Protocol MIME (Multipurpose Internet Mail Extensions) is a standard designed to extend the format of email messages, allowing them to include more than just plain text. It enables the transmission of multimedia content such as images, audio, video and attachments, as well as other types of content, across email systems that traditionally only supported plain ASCII text. MIME allows email messages to carry diverse types of data by encoding them into a format that can safely travel over protocols like SMTP (Simple Mail Transfer Protocol) without data loss or corruption. It also provides metadata to help the receiving client identify and process the content correctly\nNote: In essence, MIME makes email messages more versatile and multimedia-friendly. Characteristics of MIME\nText Encoding: Supports character sets beyond ASCII, such as UTF-8, enabling multilingual emails.\nAttachments: Allows emails to include multimedia files like images, audio, video and documents."
            },
            {
              "id": "multipurpose-internet-mail-extensions-mime--multipart-messages",
              "heading": "Multipart Messages",
              "explanation": "Supports messages divided into multiple parts, such as plain text, HTML content and media attachments."
            },
            {
              "id": "multipurpose-internet-mail-extensions-mime--header-fields",
              "heading": "Header Fields",
              "explanation": "Introduces special headers like Content-Type, Content-Disposition and Content-Transfer-Encoding to manage content interpretation. MIME Structure\nMIME-Version: Specifies the MIME version used (commonly 1.0).\nContent-Type: Indicates the type of content, such as text/plain , text/html , image/jpeg or audio/mpeg .\nContent-Transfer-Encoding: Shows how content is encoded for safe transmission (e.g., base64, quoted-printable).\nContent-Disposition: Determines whether content is inline or an attachment.\nContent-ID: Provides a unique identifier for referencing embedded objects like inline images.\nContent-Description: Offers a short description of the content (e.g., \"PDF Document\" or \"Image File\"). How MIME Works When a user sends an email in a non-ASCII format MIME working\nEncoding: The message content is converted into a 7-bit ASCII format for safe transmission.\nTransmission: The encoded message travels through the email system using SMTP.\nDecoding: The receiving client decodes the message back into its original format.\nInterpretation: The recipient’s email client reads the MIME headers to correctly display content and attachments.\nNote: MIME can also handle multipart messages, using boundary separators to distinguish between different parts of the email (e.g., text, images, attachments). Pros of MIME\nSupports Multiple Data Types: Text, audio, video, images and application files can all be sent via email.\nMultilingual Compatibility: Allows emails in various languages like Hindi, French, Japanese or Chinese.\nRich Formatting with HTML/CSS: Enables customized emails with enhanced styling.\nHandles Long Messages: Capable of transmitting large or lengthy content without corruption.\nUnique Identification: Each MIME part can have a unique Content-ID , helpful for managing embedded media. Cons of MIME\nInconsistent Interpretation: The recipient’s system may not always correctly interpret MIME types.\nIncreased Overhead: Adds extra headers and encoding, increasing email size and transmission time.\nComplexity for Users: Multiple media types and headers may be confusing for non-technical users.\nCompatibility Issues: Older or limited email systems may not support MIME, potentially causing errors or data loss."
            }
          ],
          "quick_revision": [
            "Multipurpose Internet Mail Extension (MIME) Protocol MIME (Multipurpose Internet Mail Extensions) is a standard designed to extend the format of email messages, allowing…",
            "Multipart Messages: Supports messages divided into multiple parts, such as plain text, HTML content and media attachments.",
            "Header Fields: Introduces special headers like Content-Type, Content-Disposition and Content-Transfer-Encoding to manage content interpretation."
          ]
        }
      ]
    },
    {
      "title": "Application Layer",
      "subsections": [
        {
          "id": "application-layer",
          "title": "Application Layer",
          "summary": "Application Layer in OSI Model The Application Layer is the topmost layer (Layer 7) of the OSI Model that enables direct interaction between end-user applications and the network.",
          "sections": [
            {
              "id": "application-layer--overview",
              "heading": "Overview",
              "explanation": "Application Layer in OSI Model The Application Layer is the topmost layer (Layer 7) of the OSI Model that enables direct interaction between end-user applications and the network. Closest layer to the end user Provides network services to applications Enables file transfer, email, web access, and remote login Acts as an interface between the user software and the network Application Layer in OSI Model Functions As the highest layer, the Application Layer performs several functions to ensure smooth communication between applications and systems:"
            },
            {
              "id": "application-layer--data-representation",
              "heading": "Data Representation",
              "explanation": "Converts user-entered information into a standard format before transmission and interprets received data back into a user-friendly form.\nExample: Converting text, images or files into network-compatible formats like ASCII, JPEG or HTML."
            },
            {
              "id": "application-layer--network-service-access",
              "heading": "Network Service Access",
              "explanation": "Provides access to various network services directly to the user. Allows applications like email, file transfer and remote login to interact with the underlying network.\nExample: Using email clients (Outlook, Gmail) to access mail services or using FTP to download/upload files."
            },
            {
              "id": "application-layer--application-protocols",
              "heading": "Application Protocols",
              "explanation": "Defines a set of rules and procedures that applications use to communicate over a network. These protocols handle message formatting, data exchange and service requests.\nExample: HTTP for web browsing, FTP for file transfer, SMTP for emails, DNS for domain name resolution."
            },
            {
              "id": "application-layer--session-management",
              "heading": "Session Management",
              "explanation": "Establishes, manages and terminates communication sessions between applications. Maintains synchronization during data exchange and ensures a proper connection is closed after the communication ends. Example : Logging into a remote server using Telnet or SSH, where a session is created and terminated after logout. Working Once the data exchange is complete, the client or server can terminate the session and the connection is closed gracefully. Working of Application Layer At first, the client sends a command to the server and when server receives that command, it allocates a port number to client. Thereafter, the client sends an initiation connection request to server and when server receives request, it gives acknowledgement (ACK) to client through client has successfully established a connection with the server. Therefore, now client has access to server through which it may either ask server to send any types of files or other documents or it may upload some files or documents on server itself. Key Concepts of the Application Layer Client-Server Model : Enables clients to request services or resources from a server over a network. World Wide Web (WWW) : Provides access to interconnected web pages and resources over the internet. E-Mail : Enables users to send and receive electronic messages over a network. Content Distribution Network(CDN) : Distributes web content through geographically distributed servers to improve delivery speed and reduce latency. Services Provided : Lists the key services offered by the system, application, or protocol. Define the communication rules followed by participating entities. Specify the format and type of messages exchanged between source and destination. Establish the structure and syntax of application-level data. Determine how requests are initiated and how responses are handled. Manage interaction between the application layer and lower network layers. Protocols HyperText Transfer Protocol(HTTP) : Used for web communication (Port 80). Domain Name System (DNS) : Translates domain names into IP addresses (Port 53). TELNET : Provides remote login services (Port 23). Dynamic Host Configuration Protocol (DHCP) : Assigns IP addresses to hosts dynamically (Ports 67 & 68). File Transfer Protocol (FTP) : Facilitates file transfer between systems (Ports 20 for data, 21 for control). Simple Mail Transfer Protocol (SMTP) : Handles sending of emails (Ports 25 & 587). Network File System (NFS) : Enables remote access to files as if they were local (Port 2049). Simple Network Management Protocol (SNMP) : Manages and monitors devices in a network (Ports 161 & 162). HyperText Transfer Protocol Secure(HTTPS) : Provides secure web communication (Port 443). Post Office Protocol v3 (POP3) : Retrieves emails from a mail server (Port 110). Internet Message Access Protocol(IMAP) : Retrieves and manages emails on a mail server (Port 143). Lightweight Directory Access Protocol(LDAP) : Provides access to and manages directory services (Port 389). Network Time Protocol(NTP) : Synchronizes clocks across networked systems (Port 123). Trivial File Transfer Protocol(TFTP) : Provides simple file transfer without authentication (Port 69). Network News Transfer Protocol(NNTP) : Transfers and distributes Usenet news articles (Port 119). Message Queuing Telemetry Transport(MQTT) : Enables lightweight messaging for IoT devices (Port 1883). Session Initiation Protocol(SIP) : Establishes and manages communication sessions (Port 5060). Server Message Block(SMB) : Provides file and printer sharing over a network (Port 445)."
            }
          ],
          "quick_revision": [
            "Application Layer in OSI Model The Application Layer is the topmost layer (Layer 7) of the OSI Model that enables direct interaction between end-user applications and…",
            "Data Representation: Converts user-entered information into a standard format before transmission and interprets received data back into a user-friendly form.",
            "Network Service Access: Provides access to various network services directly to the user.",
            "Application Protocols: Defines a set of rules and procedures that applications use to communicate over a network.",
            "Session Management: Establishes, manages and terminates communication sessions between applications."
          ]
        },
        {
          "id": "world-wide-web-www",
          "title": "World Wide Web (WWW)",
          "summary": "The World Wide Web (WWW), often called the Web, is a system of interconnected webpages and information that you can access using the Internet.",
          "sections": [
            {
              "id": "world-wide-web-www--overview",
              "heading": "Overview",
              "explanation": "The World Wide Web (WWW), often called the Web, is a system of interconnected webpages and information that you can access using the Internet. It was created to help people share and find information easily, using links that connect different pages together. The Web allows us to browse websites, watch videos, shop online, and connect with others around the world through our computers and phones. All public websites or web pages that people may access on their local computers and other devices through the internet are collectively known as the World Wide Web or W3. Users can get further information by navigating to the links interconnecting these pages and documents. This data may be presented in text, picture, audio, or video formats on the internet.\nFact: Today, it connects over 63% of the world’s population, making it one of the most powerful tools for communication and information sharing. Key Parts of the Web The Web has three main building blocks that make it work URL (Uniform Resource Locator) This is the address of a webpage, like https://www.example.com./ It tells your browser exactly where to find the page. HTTP (Hypertext Transfer Protocol) This is the set of rules that lets your browser and the server talk to each other to send and receive webpages. HTML (Hypertext Markup Language) This is the code that tells browsers how to display a webpage, including where to put text, pictures, and links. Working of World Wide Web(WWW) A Web browser is used to access web pages. Web browsers can be defined as programs which display text, data, pictures, animation and video on the Internet. Hyperlinked resources on the World Wide Web can be accessed using software interfaces provided by Web browsers. Initially, Web browsers were used only for surfing the Web but now they have become more universal. The below diagram indicates how the Web operates just like client-server architecture of the internet. When users request web pages or other information, then the web browser of your system request to the server for the information and then the web server provide requested services to web browser back and finally the requested service is utilized by the user who made the request. World Wide Web Web browsers can be used for several tasks, including conducting searches, mailing, transferring files, and much more. Some of the commonly used browsers are Internet Explorer, Opera Mini, and Google Chrome. World Wide Web (WWW) Vs Internet It’s easy to mix up the Web and the Internet, but they’re different World Wide Web Internet A collection of webpages and websites you access with a browser. A global network connecting computers. 1989 by Tim Berners-Lee at CERN. 1960s as ARPANET. To share and explore information like text, images, and videos. To connect devices and share data. Through browsers like Chrome or Firefox. Through any connected device for email, apps, etc. Visiting a website like Wikipedia. Sending an email or streaming a video.\nNote: In short, the Web is just one part of the Internet, like a library is one part of a city. Challenges of the Web The Web is amazing, but it has some problems that you should know about Privacy : Some websites collect information about you, like what you search for, and might share it without asking. Safety : Hackers can try to steal your information or send viruses through fake links or ads. False Information : Not everything on the Web is true, so you need to check if a website is trustworthy. Bullying : Some people use the Web to be mean or bully others, which can hurt feelings. Too Much Screen Time : Spending too much time online can make it hard to focus on school or sleep well. Access Issues : Not everyone has fast Internet, especially in some countries, which makes it harder to use the Web. History of the WWW It is a project created, by Tim Berner Lee in 1989, for researchers to work together effectively at CERN. It is an organization, named the World Wide Web Consortium (W3C) , which was developed for further development of the web. How Web Evolves? Web Evolution World Wide Web(WWW) Evolved so much from web 1.0 to web 4.0 (Future of WWW) as follows Web 1.0 (1990–2000) Introduced static websites , while Web 2.0 (2000–2010) brought interactive and social platforms. Web 3.0 (2010–2020) focused on the semantic web, enabling machines to understand data and offer personalized experiences. Looking ahead, Web 4.0 (2020–2030) is expected to be a fully intelligent web ecosystem powered by AI and integrated web operating systems . Some Facts About the Web The first website ever is still online! You can visit it at \" http://info.cern.ch/ \" There are over 1.5 billion websites in the world, and that number grows every day. Google Chrome is used by more than 60% of people browsing the Web. The Web is available in over 150 languages, so you can explore in your language or learn a new one!"
            }
          ],
          "quick_revision": [
            "The World Wide Web (WWW), often called the Web, is a system of interconnected webpages and information that you can access using the Internet."
          ]
        },
        {
          "id": "content-distribution-network-cdn",
          "title": "Content Distribution Network(CDN)",
          "summary": "Content Distribution Network (CDN) A Content Delivery Network (CDN) is a network of geographically distributed servers that deliver content from a location closer to the user, rather than only from the main origin server.",
          "sections": [
            {
              "id": "content-distribution-network-cdn--overview",
              "heading": "Overview",
              "explanation": "Content Distribution Network (CDN) A Content Delivery Network (CDN) is a network of geographically distributed servers that deliver content from a location closer to the user, rather than only from the main origin server. Delivers content quicker by serving from a closer edge location. Reduces latency by shortening the network path between the user and the content. Lowers traffic and load on the origin server by offloading delivery to edge servers. Increases availability during traffic spikes by distributing requests across multiple servers. Key Components A CDN is built around a few core parts that work together to store, route, and serve content efficiently to users.\nOrigin Server: The primary server where the original website/app files are hosted and updated.\nPoP (Point of Presence): A physical CDN location (data center site) that hosts CDN servers in a region or city.\nEdge Server: The CDN server inside a PoP that directly serves user requests and reduces latency.\nCache: The temporarily stored copy of content on edge servers so repeated requests are served quickly without going back to the origin."
            },
            {
              "id": "content-distribution-network-cdn--cdn-dns-request-routing",
              "heading": "CDN DNS / Request Routing",
              "explanation": "The mechanism that maps a user to the nearest or best PoP server based on location, latency, and server health. Need of CDN Without a CDN, every request goes to the origin server, even if it is located on another continent. Without CDN Longer physical distance increases latency. More network hops lead to slower page loads. High traffic can overload the origin server. With a CDN, user requests are routed to a nearby edge server, which delivers content much faster. With CDN Shorter data path improves response time. Traffic is distributed across multiple servers. Websites remain stable even during traffic spikes. Provides a faster and smoother user experience globally. Working A CDN speeds up delivery by keeping cached copies of your content on edge servers inside multiple Points of Presence worldwide, so users are served from a nearby location instead of always reaching the origin server."
            },
            {
              "id": "content-distribution-network-cdn--cache-distribution",
              "heading": "Cache distribution",
              "explanation": "Your content is copied (cached) to many PoPs, each PoP has multiple edge/cache servers for nearby users.\nUser request starts: A user (e.g., in India) requests a video from your website.\nDNS routing chain: The request goes to the Local DNS resolver, then to your site’s Authoritative DNS."
            },
            {
              "id": "content-distribution-network-cdn--cdn-selection",
              "heading": "CDN selection",
              "explanation": "The Authoritative DNS redirects the DNS query to the CDN provider’s DNS (e.g., XYZ), which chooses the nearest/best edge server for that user.\nEdge delivery: The selected edge server delivers the video to the user (fast because it’s geographically close)."
            },
            {
              "id": "content-distribution-network-cdn--resolver-remembers-dns-caching",
              "heading": "Resolver remembers (DNS caching)",
              "explanation": "The Local DNS caches the edge server mapping for some time (TTL), so future requests from that network go directly to the same/nearest edge.\nFewer hops, lower latency: Because PoPs are near users, the path is shorter → less delay and faster load ."
            },
            {
              "id": "content-distribution-network-cdn--if-content-isn-t-cached-cache-miss",
              "heading": "If content isn’t cached (cache miss)",
              "explanation": "The edge fetches the video from the origin server, serves it, and stores it for next time. Advantages\nFaster load time: Content is delivered from a closer edge server, so pages/videos load quicker.\nLower latency: Reduces delay because data travels fewer network hops.\nReduced origin server load: Repeated requests are served from cache, so the main server handles less traffic.\nBetter availability: If one edge/PoP is busy or down, traffic can be routed to another nearby location.\nHandles traffic spikes: Distributes high user demand across many servers, preventing overload.\nLower bandwidth cost: Cached delivery reduces repeated data transfer from the origin server.\nImproved user experience: Faster and smoother browsing/streaming, especially for global users. Limitations\nExtra cost: CDN services add recurring cost (bandwidth, requests, premium features).\nCache inconsistency: Users may see old content if cache isn’t refreshed properly (TTL/purge issues).\nLess control at the edge: Debugging issues is harder because delivery happens on CDN servers, not your origin.\nDynamic content complexity: Personalized/real-time data is harder to cache, so benefits reduce for fully dynamic pages.\nRegional gaps: If the CDN has weak PoP coverage in some areas, speed improvement may be limited there."
            },
            {
              "id": "content-distribution-network-cdn--security-configuration-risk",
              "heading": "Security/configuration risk",
              "explanation": "Wrong CDN rules (cache policy, headers, access rules) can expose data or break content delivery. Applications\nVideo streaming: Faster start time and less buffering for platforms like OTT and live streaming.\nWebsite acceleration: Speeds up delivery of static assets like images, CSS, JS, and HTML for faster page loads.\nSoftware/app downloads: Delivers large files (apps, updates, installers) efficiently from nearby edge servers.\nGaming: Faster game patch downloads and lower latency for game assets and updates.\nE-commerce: Handles peak sale traffic and improves product page load speed to reduce drop-offs.\nAPIs and microservices: Improves API response time globally using edge routing and caching where possible.\nSecurity at edge (common use): Helps reduce DDoS impact and protects origin by absorbing traffic at CDN edge."
            }
          ],
          "quick_revision": [
            "Content Distribution Network (CDN) A Content Delivery Network (CDN) is a network of geographically distributed servers that deliver content from a location closer to the…",
            "CDN DNS / Request Routing: The mechanism that maps a user to the nearest or best PoP server based on location, latency, and server health.",
            "Cache distribution: Your content is copied (cached) to many PoPs, each PoP has multiple edge/cache servers for nearby users.",
            "CDN selection: The Authoritative DNS redirects the DNS query to the CDN provider’s DNS (e.g., XYZ), which chooses the nearest/best edge server for that user.",
            "Resolver remembers (DNS caching): The Local DNS caches the edge server mapping for some time (TTL), so future requests from that network go directly to the same/nearest edge.",
            "If content isn’t cached (cache miss): The edge fetches the video from the origin server, serves it, and stores it for next time.",
            "Security/configuration risk: Wrong CDN rules (cache policy, headers, access rules) can expose data or break content delivery."
          ]
        },
        {
          "id": "domain-name-system-dns",
          "title": "Domain Name System (DNS)",
          "summary": "Translation of human-readable domain names into IP addresses enables computers to communicate over the internet, a function performed by the Domain Name System (DNS), which operates in a hierarchical and distributed manner while improving performance through caching.",
          "sections": [
            {
              "id": "domain-name-system-dns--overview",
              "heading": "Overview",
              "explanation": "Translation of human-readable domain names into IP addresses enables computers to communicate over the internet, a function performed by the Domain Name System (DNS), which operates in a hierarchical and distributed manner while improving performance through caching. Provides name-to-address resolution using a hierarchical system (Root, TLD, Authoritative servers) to locate domain information. Improves performance by using caching mechanisms, reducing lookup time for repeated requests.\nExample: When you enter a website name like google.com in your browser, the system does not understand the name directly. DNS translates it into an IP address of the server hosting the website. This allows your browser to connect to the correct server and load the webpage. Working DNS process can be broken down into several steps, ensuring that users can access websites by simply typing a domain name into their browser.\nUser Input: The user enters a domain name (e.g., www.geeksforgeeks.org ) in the browser.\nLocal Cache Check: The browser or OS checks its cache for a stored IP address.\nDNS Resolver Query: If not found, the request is sent to a DNS resolver (usually by ISP).\nRoot Server Query: The resolver queries a root server, which points to the correct TLD server.\nTLD Server Response: The TLD server directs the resolver to the domain’s authoritative server.\nAuthoritative Server Response: The authoritative server returns the actual IP address.\nFinal Response: The resolver sends the IP back to the user, and the browser connects to the server. Structure of DNS The structure of DNS is hierarchical in nature, enabling scalable and organized domain name resolution across the global Internet."
            },
            {
              "id": "domain-name-system-dns--root",
              "heading": "Root",
              "explanation": "The topmost level of the DNS hierarchy. Represented by a dot (.) at the end of a domain name Acts as the starting point of domain resolution"
            },
            {
              "id": "domain-name-system-dns--top-level-domains-tlds",
              "heading": "Top-Level Domains (TLDs)",
              "explanation": "The level directly below the root that defines domain extensions. Includes extensions like .com, .org, .net, .edu Helps categorize domains by purpose or region"
            },
            {
              "id": "domain-name-system-dns--second-level-domains",
              "heading": "Second-Level Domains",
              "explanation": "The main domain name registered by an organization. Appears before the TLD (e.g., \"example\" in example.com) Uniquely identifies a domain under a TLD\nSubdomains: Extensions of the main domain used for organization. Examples: www, mail, blog Helps structure different parts of a website"
            },
            {
              "id": "domain-name-system-dns--hostnames",
              "heading": "Hostnames",
              "explanation": "Identifies specific servers or devices within a domain. Examples: web1, mailserver, ftp Maps to actual IP addresses using DNS records Types of Domains DNS categorizes domain names into different types to organize the global naming system and support both forward and reverse resolution. Types of Domains"
            },
            {
              "id": "domain-name-system-dns--generic-domains-gtlds",
              "heading": "Generic Domains (gTLDs)",
              "explanation": "These domains are used for general purposes and are not tied to any country. Include extensions like .com, .org, .net. Not restricted to any specific country Used for commercial, organizational, and educational purposes"
            },
            {
              "id": "domain-name-system-dns--country-code-domains-cctlds",
              "heading": "Country Code Domains (ccTLDs)",
              "explanation": "These domains represent specific countries or geographic regions. Examples: .in (India), .us (USA), .uk (UK), .jp (Japan) Managed by respective national authorities"
            },
            {
              "id": "domain-name-system-dns--reverse-dns",
              "heading": "Reverse DNS",
              "explanation": "These domains are used to map IP addresses back to domain names. Used for reverse lookup (IP address -> domain name) IPv4 uses in-addr.arpa IPv6 uses ip6.arpa Uses PTR (Pointer) records Domain Name Server Responsible for storing DNS records and answering queries to resolve domain names into IP addresses, this function is performed by a Domain Name Server. Stores DNS records such as A, AAAA, MX, CNAME, NS, and PTR. Responds to queries from clients or other DNS servers. Operates within the hierarchical DNS structure. Can perform either recursive or authoritative functions. Enables communication between users and web servers by supplying necessary DNS data. DNS Lookup Also known as DNS Resolution, is the process of converting a domain name into its corresponding IP address so that a device can establish communication with the target server. Key Components The key components of DNS work together to resolve domain names into IP addresses efficiently."
            },
            {
              "id": "domain-name-system-dns--dns-resolver",
              "heading": "DNS Resolver",
              "explanation": "Starts the DNS lookup process and acts as an intermediary between client and DNS servers. Initiates the DNS query from the client side. Forwards requests to appropriate DNS servers to get the IP address."
            },
            {
              "id": "domain-name-system-dns--recursive-query",
              "heading": "Recursive Query",
              "explanation": "A query where the resolver fetches the complete answer on behalf of the client. Resolver performs full lookup across multiple DNS servers if needed. Returns the final IP address or an error to the client."
            },
            {
              "id": "domain-name-system-dns--iterative-query",
              "heading": "Iterative Query",
              "explanation": "A query where the server provides the best information it has or a referral. Returns partial response or points to another DNS server. Helps the resolver move step-by-step toward the final answer."
            },
            {
              "id": "domain-name-system-dns--non-recursive-query",
              "heading": "Non-Recursive Query",
              "explanation": "A query where the answer is already available in cache or authoritative server. Response is returned immediately without further lookup. No additional DNS server communication is required. DNS Caching Technique that temporarily stores DNS records to reduce repeated queries and improve resolution efficiency. Stores previously resolved domain records locally. Reduces response time for future requests. Minimizes load on external DNS servers. Improves overall network performance. TTL (Time-to-Live) TTL defines the duration for which a DNS record is considered valid in cache. Specifies how long a DNS record remains stored in cache. Defined by the authoritative DNS server. Measured in seconds. After expiration, a new DNS lookup is required.\nExample: If the TTL value is 3600 seconds, the record remains cached for one hour before it must be refreshed. Reverse DNS Lookup Reverse DNS Lookup is the process of resolving an IP address to its associated domain name, performing the opposite function of standard DNS resolution. Converts an IP address into a domain name. Uses special domains such as in-addr.arpa (IPv4) and ip6.arpa (IPv6). Relies on PTR (Pointer) records for mapping. Reverse DNS Lookup"
            },
            {
              "id": "domain-name-system-dns--network-diagnostics",
              "heading": "Network Diagnostics",
              "explanation": "Helps in analyzing and troubleshooting network issues. Helps administrators identify the domain linked to a specific IP address. Assists in traffic analysis and troubleshooting."
            },
            {
              "id": "domain-name-system-dns--email-security",
              "heading": "Email Security",
              "explanation": "Ensures emails are sent from legitimate sources. Used by mail servers to verify sender authenticity. Helps reduce spam and fraudulent email activity. DNS Record Types Different DNS record types are used to store specific information about a domain.\nA Record: Maps a domain name to its corresponding IPv4 address.\nCNAME Record: Creates an alias that points one domain name to another domain name.\nMX Record: Specifies the mail server responsible for receiving emails for a domain.\nTXT Record: Stores text information used for verification and email authentication purposes."
            }
          ],
          "quick_revision": [
            "Translation of human-readable domain names into IP addresses enables computers to communicate over the internet, a function performed by the Domain Name System (DNS),…",
            "Root: The topmost level of the DNS hierarchy.",
            "Top-Level Domains (TLDs): The level directly below the root that defines domain extensions.",
            "Second-Level Domains: The main domain name registered by an organization.",
            "Hostnames: Identifies specific servers or devices within a domain.",
            "Generic Domains (gTLDs): These domains are used for general purposes and are not tied to any country.",
            "Country Code Domains (ccTLDs): These domains represent specific countries or geographic regions.",
            "Reverse DNS: These domains are used to map IP addresses back to domain names.",
            "DNS Resolver: Starts the DNS lookup process and acts as an intermediary between client and DNS servers.",
            "Recursive Query: A query where the resolver fetches the complete answer on behalf of the client.",
            "Iterative Query: A query where the server provides the best information it has or a referral.",
            "Non-Recursive Query: A query where the answer is already available in cache or authoritative server.",
            "Network Diagnostics: Helps in analyzing and troubleshooting network issues.",
            "Email Security: Ensures emails are sent from legitimate sources."
          ]
        },
        {
          "id": "file-transfer-protocol-ftp",
          "title": "File Transfer Protocol (FTP)",
          "summary": "File Transfer Protocol (FTP) in Application Layer File Transfer Protocol (FTP) is an application-layer protocol that is used to transfer files between a client and a server over a TCP/IP network.",
          "sections": [
            {
              "id": "file-transfer-protocol-ftp--overview",
              "heading": "Overview",
              "explanation": "File Transfer Protocol (FTP) in Application Layer File Transfer Protocol (FTP) is an application-layer protocol that is used to transfer files between a client and a server over a TCP/IP network. It provides a standardized method for file exchange across different systems. Supports text, binary, image, and program files. Enables uploading, downloading, and remote file management. Uses TCP to ensure reliable communication. FTP Working and Uses"
            },
            {
              "id": "file-transfer-protocol-ftp--ftp-follows-a-client-server-model-and-uses-two-connections",
              "heading": "FTP follows a client–server model and uses two connections",
              "explanation": "Control connection (Port 21) for commands Data connection (Port 20) for file transfer Users connect to the server using login credentials. Users navigate directories using commands ls and cd. For transferring files, it uses get and put. Supports both active and passive modes for communication. Types of Connection FTP uses two separate TCP connections to handle communication—one dedicated to control information and another dedicated to actual data transfer. This separation makes FTP an out-of-band protocol."
            },
            {
              "id": "file-transfer-protocol-ftp--control-connection",
              "heading": "Control Connection",
              "explanation": "This connection is used to exchange commands and responses between the client and server. Established on TCP port 21. Transfers user authentication details (username and password). Sends commands for directory navigation and file operations. Remains active for the entire FTP session."
            },
            {
              "id": "file-transfer-protocol-ftp--data-connection",
              "heading": "Data Connection",
              "explanation": "This is used to transfer the actual file content and directory listings. Traditionally uses TCP port 20 (in active mode). Created separately for each file transfer. Transfers files and directory information. Closes automatically after data transmission completes. FTP Data Types FTP data types define how file contents are represented and transmitted between the client and server during file transfer.\nASCII: This data type is used for transferring text files with character encoding based on the ASCII standard.\nEBCDIC: This data type is used for transferring text files encoded in IBM’s Extended Binary Coded Decimal Interchange Code.\nImage (Binary): This data type transfers files as a continuous stream of bytes without any modification.\nLocal: This data type is used for transferring files that contain data stored in logical bytes of a specified bit length. FTP Clients An FTP client is a software application that enables a user to connect to an FTP server, authenticate, and perform file transfer operations over a network using the client–server model. Establishes a connection with the FTP server. Sends commands to retrieve or store files. Provides either command-line or graphical user interface (GUI) support. Common FTP Commands get filename – Downloads a single file from the server. mget filename – Downloads multiple files from the server. ls – Displays the list of files in the current server directory. FTP Replies These are the three-digit status codes sent by the server to inform the client about the result of a command. 200 – Command executed successfully. 221 – Service closing control connection. 331 – Username accepted; password required. 502 – Command not implemented. 503 – Incorrect sequence of commands. 504 – Command not supported for that parameter. 530 – User not logged in (authentication failed). 551 – Requested action aborted: page type unknown. Characteristics FTP is a connection-oriented file transfer protocol that operates over TCP and supports reliable data transmission. Uses TCP as its transport layer protocol. Establishes separate control and data connections. Suitable for general-purpose file transfer over networks. Provides authentication-based access control. Types of FTP There are different ways through which a server and a client do a file transfer using FTP. Some of them are mentioned below:"
            },
            {
              "id": "file-transfer-protocol-ftp--anonymous-ftp",
              "heading": "Anonymous FTP",
              "explanation": "It is a file transfer method that allows users to access publicly available files on a server without requiring a personal user account. Users log in using the username “anonymous”. Usually provides read-only access. Does not allow modification of server directories. Commonly used for distributing public software and documents."
            },
            {
              "id": "file-transfer-protocol-ftp--password-protected-ftp",
              "heading": "Password-Protected FTP",
              "explanation": "This is a secure access method that requires valid user credentials to access and manage files on an FTP server. Requires username and password authentication. Access permissions are controlled by the administrator. Supports file upload, download, and modification. Suitable for private or organizational file sharing."
            },
            {
              "id": "file-transfer-protocol-ftp--ftps-ftp-secure",
              "heading": "FTPS (FTP Secure)",
              "explanation": "FTPS is an extension of FTP that adds SSL/TLS encryption to secure data transmission between client and server. Encrypts login credentials and transfers data. Operates over TCP (commonly port 21). Supports implicit and explicit encryption modes. Maintains compatibility with standard FTP commands."
            },
            {
              "id": "file-transfer-protocol-ftp--sftp-ssh-file-transfer-protocol",
              "heading": "SFTP (SSH File Transfer Protocol)",
              "explanation": "This is a secure file transfer protocol that operates over the SSH protocol and provides encrypted communication for file management. Uses port 22 for communication. Encrypts both authentication and file data. Uses a single secure connection (no separate data channel). Provides secure remote file access and management. Security Issues Transmits data and credentials in plain text, making interception easy. Vulnerable to attacks such as sniffing, spoofing, brute force, and port scanning. Does not provide built-in encryption for secure communication. If intercepted, attackers can read or modify transferred data. Major Security Weakness Passwords are sent in clear text (e.g., Jerry1992 appears exactly as typed). No hashing or encryption is applied during transmission. Attackers monitoring network traffic can capture login credentials. More secure alternatives include FTPS and SFTP, which use encryption protocols. Configuration of FTP Port Numbers Access Server Configuration – Open the FTP server control panel or configuration file. Modify Port Settings – Change the default control port (21) and data port (20, if applicable). Restart FTP Service – Restart the server to apply new port settings. Update Client Configuration – Inform users to connect using the updated port number. FTP vs SFTP FTP SFTP Does not provide built-in encryption. Provides encrypted communication. Operates on Port 21. Operates on Port 22. Transfers data in plain text. Encrypts both data and credentials. Uses separate control and data connections. Uses a single secure connection. Works directly over TCP. Operates over SSH (which runs over TCP)."
            }
          ],
          "quick_revision": [
            "File Transfer Protocol (FTP) in Application Layer File Transfer Protocol (FTP) is an application-layer protocol that is used to transfer files between a client and a…",
            "FTP follows a client–server model and uses two connections: Control connection (Port 21) for commands Data connection (Port 20) for file transfer Users connect to the server using login credentials.",
            "Control Connection: This connection is used to exchange commands and responses between the client and server.",
            "Data Connection: This is used to transfer the actual file content and directory listings.",
            "Anonymous FTP: It is a file transfer method that allows users to access publicly available files on a server without requiring a personal user account.",
            "Password-Protected FTP: This is a secure access method that requires valid user credentials to access and manage files on an FTP server.",
            "FTPS (FTP Secure): FTPS is an extension of FTP that adds SSL/TLS encryption to secure data transmission between client and server.",
            "SFTP (SSH File Transfer Protocol): This is a secure file transfer protocol that operates over the SSH protocol and provides encrypted communication for file management."
          ]
        },
        {
          "id": "simple-mail-transfer-protocol-smtp",
          "title": "Simple Mail Transfer Protocol (SMTP)",
          "summary": "SMTP is an application-layer protocol used to send and transfer email between servers.  It relies on a TCP connection to port 25 to reliably deliver messages from a client to an email server.",
          "sections": [
            {
              "id": "simple-mail-transfer-protocol-smtp--overview",
              "heading": "Overview",
              "explanation": "SMTP is an application-layer protocol used to send and transfer email between servers. It relies on a TCP connection to port 25 to reliably deliver messages from a client to an email server. Uses TCP for reliable message transmission Servers listen on port 25 for incoming email Client establishes a TCP connection before sending mail Core protocol for email delivery between mail servers SMTP Types of SMTP Protocol"
            },
            {
              "id": "simple-mail-transfer-protocol-smtp--the-smtp-model-supports-two-types-of-email-delivery-methods",
              "heading": "The SMTP model supports two types of email delivery methods",
              "explanation": "The SMTP model supports two types of email delivery methods end-to-end and store-and-forward . End-to-end delivery is used between organizations. In this method, the email is sent directly from the sender's SMTP client to the recipient's SMTP server without passing through intermediate servers. Store-and-forward is used within organizations that have TCP/IP and SMTP-based networks. In this method, the email may pass through several intermediate servers (Message Transfer Agents, or MTAs) before reaching the recipient. SMTP SMTP.com : Platform providing transaction email, relay, and delivery services at affordable prices. Industry Trust : Regarded as the most trusted sender by ISPs with decades of experience. Customer Base : Trusted by over 100,000 customers over the years. User-Friendly : Extremely intuitive and easy to set up for seamless integration. Business Integration : Seamlessly integrates into existing business systems. Easy Migration : Effortless migration from other email providers. Features\nDedicated IP: Provides a unique sending IP to improve deliverability and maintain a strong sender reputation.\nEmail API: Enables fast and seamless integration with detailed documentation, allowing businesses to connect in just minutes. 24/7 Customer Support Offers round-the-clock human support across all plans, including website assistance and live chat for quick, reliable solutions.\nHigh-Volume Sending Solutions: Ideal for enterprises sending over 250 million emails monthly, with customized quotes and tailored infrastructure.\nReputation Defender: An add-on service that automatically scans, cleans, and monitors email lists to maintain healthy sender reputation—no integration required. Model of SMTP System SMTP Model\nUser at a Terminal (Sender): The person composing the email using a mail application (e.g., Outlook, Thunderbird, webmail).\nUser Agent (Sender): The email client software that allows the sender to create, edit, and send emails. It hands the outgoing email to the system’s mail queue.\nQueue of Mail to Be Sent: A temporary storage area where outgoing emails wait before being processed by the mail server (Message Transfer Agent).\nMessage Transfer Agent (Client Side): The software responsible for sending emails across the network. It retrieves messages from the outgoing queue and communicates with the receiving server.\nTCP Connection (Port 25): The client’s MTA opens a TCP connection to the server’s MTA on port 25. SMTP commands, responses, and mail data are exchanged over this connection.\nMessage Transfer Agent (Server Side): The receiving email server accepts the incoming SMTP connection. It processes the incoming email and stores it for the user.\nUser Mailboxes: The server stores the received messages in individual user mailboxes.\nUser Agent (Receiver): The email application used by the recipient to access the mailbox. It retrieves emails using protocols like POP3 or IMAP.\nUser at a Terminal (Receiver): The person reading the received email on their device. Components of SMTP\nMail User Agent (MUA): It is a computer application that helps you in sending and retrieving mail. It is responsible for creating email messages for transfer to the mail transfer agent(MTA).\nMail Submission Agent (MSA): It is a computer program that receives mail from a Mail User Agent(MUA) and interacts with the Mail Transfer Agent(MTA) for the transfer of the mail.\nMail Transfer Agent (MTA): It is software that has the work to transfer mail from one system to another with the help of SMTP.\nMail Delivery Agent (MDA): A mail Delivery agent or Local Delivery Agent is basically a system that helps in the delivery of mail to the local system. How does SMTP Work? SMTP"
            },
            {
              "id": "simple-mail-transfer-protocol-smtp--sending-email",
              "heading": "Sending Email",
              "explanation": "When a user wants to send an email, they use a User Agent (UA), like Outlook or Gmail. The email is handed over to the MTA, which is responsible for transferring the email to the recipient’s mail server."
            },
            {
              "id": "simple-mail-transfer-protocol-smtp--smtp-client-and-server",
              "heading": "SMTP Client and Server",
              "explanation": "Sender-SMTP (Client) : The email sender’s MTA initiates the connection to the recipient’s MTA (Receiver-SMTP). Receiver-SMTP (Server) : The receiving MTA listens for incoming connections and receives the email from the sender-SMTP. This communication happens over TCP port 25."
            },
            {
              "id": "simple-mail-transfer-protocol-smtp--relays-and-gateways",
              "heading": "Relays and Gateways",
              "explanation": "Relays : In some cases, the email may pass through several intermediate MTAs before reaching the destination server. These MTAs act as relays . Gateways : If the sending and receiving systems use different email protocols (e.g., SMTP and non-SMTP), an email gateway can convert the email to the appropriate format for delivery."
            },
            {
              "id": "simple-mail-transfer-protocol-smtp--email-delivery",
              "heading": "Email Delivery",
              "explanation": "The sender’s MTA sends the email to the receiver’s MTA, either directly or through relays. The MTA uses the SMTP protocol to transfer the message. Once it’s delivered to the destination MTA, the email is placed in the recipient’s mailbox. The recipient’s User Agent (UA) can then download the email. SMTP Envelope Purpose The SMTP envelope contains information that guides email delivery between servers. It is distinct from the email headers and body and is not visible to the email recipient. Contents of the SMTP Envelope Sender Address : Specifies where the email originates. Recipient Addresses : Indicates where the email should be delivered. Routing Information : Helps servers determine the path for email delivery. Comparison to Regular Mail Think of the SMTP envelope as the address on a physical envelope for regular mail. Just like an envelope guides postal delivery, the SMTP envelope directs email servers on where to send the email. SMTP Commands S.No. Keywor Command form Description Usage 1. HELO HELO<SP><domain><CRLF> It provides the identification of the sender i.e. the host name. Mandatory 2. MAIL MAIL<SP>FROM : <reverse-path><CRLF> It specifies the originator of the mail. Mandatory 3. RCPT RCPT<SP>TO : <forward-path><CRLF> It specifies the recipient of mail. Mandatory 4. DATA DATA<CRLF> It specifies the beginning of the mail. Mandatory 5. QUIT QUIT<CRLF> It closes the TCP connection. Mandatory 6. RSET RSET<CRLF> It aborts the current mail transaction but the TCP connection remains open. Highly recommended 7. VRFY VRFY<SP><string><CRLF> It is use to confirm or verify the user name. Highly recommended 8. NOOP NOOP<CRLF> No operation Highly recommended 9. TURN TURN<CRLF> It reverses the role of sender and receiver. Seldom used 10. EXPN EXPN<SP><string><CRLF> It specifies the mailing list to be expanded. Seldom used 11. HELP HELP<SP><string><CRLF> It send some specific documentation to the system. Seldom used 12. SEND SEND<SP>FROM : <reverse-path><CRLF> It send mail to the terminal. Seldom used 13. SOML SOML<SP>FROM : <reverse-path><CRLF> It send mail to the terminal if possible; otherwise to mailbox. Seldom used 14. SAML SAML<SP>FROM : <reverse-path><CRLF> It send mail to the terminal and mailbox. Seldom used SMTP Ports These ports play a important role in defining how email clients and servers communicate securely and efficiently across the internet using the SMTP protocol. Port 587 : This is the most commonly used port for secure SMTP submission using TLS (Transport Layer Security) . It is recommended for client-to-server communication, as it ensures the security of the email transmission. Port 465 : Previously used for secure SMTP (SMTPS), this port is no longer considered an official standard and is generally not recommended anymore. Many email providers have moved away from port 465 in favor of port 587. Port 25 : This port is traditionally used for SMTP relay between mail servers, not for email submission from clients. It is often blocked by ISPs for outgoing mail due to its frequent use for spam and malicious activities. Port 2525 : Although not an official SMTP port , it is sometimes used as an alternative for SMTP submission, especially in cases where port 25 is blocked or restricted. Many email providers support this port as an alternative for secure communication. Difference Between SMTP and Extended SMTP SMTP Extended SMTP Users were not verified in SMTP as a result of massive-scale scam emails being sent. In Extended SMTP, authentication of the sender is done. We cannot attach a Multimedia file in SMTP directly without the help of MMIE. We can directly attach Multimedia FIle in ESMTP. We cannot reduce the size of the email in SMTP. We can reduce the size of the email in Extended SMTP. SMTP clients open transmission with the command HELO. The main identification feature for ESMTP clients is to open a transmission with the command EHLO (Extended HELLO). Advantages of SMTP If necessary, the users can have a dedicated server. It allows for bulk mailing. Low cost and wide coverage area. Offer choices for email tracking. Reliable and prompt email delivery. Disadvantages of SMTP SMTP's common port can be blocked by several firewalls . SMTP security is a bigger problem. Its simplicity restricts how useful it can be. Just 7-bit ASCII characters can be used. If a message is longer than a certain length, SMTP servers may reject the entire message. Delivering your message will typically involve additional back-and-forth processing between servers, which will delay sending and raise the likelihood that it won't be sent. SMTP vs POP vs IMAP SMTP POP IMAP Stands for Simple mail transfer protocol Stands for Post Office Protocol. Stands for Internet Message Access Protocol. Used for sending mail. Used for retrieving mail. it is push protocol . it is pull protocol. It work between sender’s mail server to receiver’s mail server and sender and sender’s mail server. It work between receiver and receiver’s mail server. It works between receiver and receiver’s mail server. It does not store mail on server it just send the mail. It download all the mail when it connected to internet. It store all mail on server and download when it get request to download. Works on TCP port number 25. Works on TCP port number 110. Works on TCP port number 143. Connection oriented protocol. It has persistence TCP connection. Stateless protocol. Stateful protocol. It is in band protocol. Not used at receiver side. Used at receiver side."
            }
          ],
          "quick_revision": [
            "SMTP is an application-layer protocol used to send and transfer email between servers.",
            "The SMTP model supports two types of email delivery methods: The SMTP model supports two types of email delivery methods end-to-end and store-and-forward . End-to-end delivery is used between organizations.",
            "Sending Email: When a user wants to send an email, they use a User Agent (UA), like Outlook or Gmail.",
            "SMTP Client and Server: Sender-SMTP (Client) : The email sender’s MTA initiates the connection to the recipient’s MTA (Receiver-SMTP).",
            "Relays and Gateways: Relays : In some cases, the email may pass through several intermediate MTAs before reaching the destination server.",
            "Email Delivery: The sender’s MTA sends the email to the receiver’s MTA, either directly or through relays."
          ]
        },
        {
          "id": "simple-network-management-protocol-snmp",
          "title": "Simple Network Management Protocol (SNMP)",
          "summary": "Simple Network Management Protocol (SNMP) is a widely used protocol for network management that provides a standardized framework for monitoring and managing network devices such as routers, switches, servers, printers,firewalls, and load balancer.",
          "sections": [
            {
              "id": "simple-network-management-protocol-snmp--overview",
              "heading": "Overview",
              "explanation": "Simple Network Management Protocol (SNMP) is a widely used protocol for network management that provides a standardized framework for monitoring and managing network devices such as routers, switches, servers, printers,firewalls, and load balancer. It operates within the application layer of the Internet protocol suite and allows network administrators to manage network performance, find and solve network problems, and plan for network growth.In this article we will see SNMP protocol in detail. What is Simple Network Management Protocol (SNMP)? Simple Network Management Protocol (SNMP) is an Internet Standard protocol used for managing and monitoring network-connected devices in IP networks. SNMP is an application layer protocol that uses UDP port number 161/162. SNMP is used to monitor the network, detect network faults, and sometimes even to configure remote devices. Architecture of SNMP\nSNMP Manager: It is a centralized system used to monitor the network. It is also known as a Network Management Station (NMS). A router that runs the SNMP server program is called an agent, while a host that runs the SNMP client program is called a manager."
            },
            {
              "id": "simple-network-management-protocol-snmp--snmp-agent",
              "heading": "SNMP agent",
              "explanation": "It is a software management software module installed on a managed device. The manager accesses the values stored in the database, whereas the agent maintains the information in the database. To ascertain if the router is congested or not, for instance, a manager can examine the relevant variables that a router stores, such as the quantity of packets received and transmitted."
            },
            {
              "id": "simple-network-management-protocol-snmp--management-information-base",
              "heading": "Management Information Base",
              "explanation": "MIB consists of information on resources that are to be managed. This information is organized hierarchically. It consists of objects instances which are essentially variables. A MIB, or collection of all the objects under management by the manager, is unique to each agent. System, interface, address translation, IP, UDP , and EGP , ICMP , TCP are the eight categories that make up MIB. The MIB object is home to these groups. SNMP Messages GetRequest : It is simply used to retrieve data from SNMP agents. In response to this, the SNMP agent responds with the requested value through a response message.\nGetNextRequest: To get the value of a variable, the manager sends the agent the GetNextRequest message. The values of the entries in a table are retrieved using this kind of communication. The manager won't be able to access the values if it doesn't know the entries' indices. The GetNextRequest message is used to define an object in certain circumstances.\nSetRequest: It is used by the SNMP manager to set the value of an object instance on the SNMP agent.\nResponse: When sent in response to the Set message, it will contain the newly set value as confirmation that the value has been set.\nTrap: These are the message sent by the agent without being requested by the manager. It is sent when a fault has occurred.\nInformRequest: It was added to SNMPv2c and is used to determine if the manager has received the trap message or not. It is the same as a trap but adds an acknowledgement that the trap doesn't provide. SNMP Security Levels noAuthNoPriv This (no authentication, no privacy) security level uses a community string for authentication and no encryption for privacy. authNopriv This security level ( authentication , no privacy) uses HMAC with Md5 for authentication and no encryption is used for privacy. authPriv This security level (authentication, privacy) uses HMAC with MD5 or SHA for authentication and encryption uses the DES-56 algorithm. Versions of SNMP\nSNMPv1: It uses community strings for authentication and uses UDP only. SNMPv1 is the first version of the protocol. It is described in RFCs 1155 and 1157 and is simple to set up.\nSNMPv2c: It uses community strings for authentication. It uses UDP but can be configured to use TCP. Improved MIB structure elements, transport mappings, and protocol packet types are all included in this updated version. However, it also makes use of the current \"community-based\" SNMPv1 administrative structure, which is why the version is called SNMPv2c. RFC 1901, RFC 1905, and RFC 1906 all describe it.\nSNMPv3: It uses Hash-based MAC with MD5 or SHA for authentication and DES-56 for privacy. This version uses TCP. Therefore, the conclusion is the higher the version of SNMP, the more secure it will be. NMPv3 provides the remote configuration of SNMP entities. This is the most secure version to date because it also includes authentication and encryption, which may be used alone or in combination. RFC 1905, RFC 1906, RFC 2571, RFC 2572, RFC 2574, and RFC 2575.6 are the RFCs for SNMPv3. Characteristics of SNMP SNMP is used to monitor network. It detects any network faults. It can also be used to configure remote devices. It allows a standardized way of collecting information about all kinds of devices from various manufacturers among the networking industry. Advantages of SNMP It is easy to implement. Agents are widely implemented. Agent level overhead is minimal. It is robust and extensible. Polling approach is good for LAN based managed object. It offers the best direct manager agent interface. Limitation of SNMP It does not scale well. There is no object orietned data view. It has no standard control definition. It has many implementation specific (private MIB) extensions. It has high communication overhead due to polling Conclusion The Simple Network Management Protocol (SNMP) is an important protocol for managing and monitoring network-connected devices in IP networks . It enables administrators to effectively monitor network performance, discover and address errors, and configure remote devices. While SNMP's simplicity and popularity provide significant advantages, it also has drawbacks, such as scalability concerns and high communication costs. Despite its drawbacks, SNMP remains an important in network management."
            }
          ],
          "quick_revision": [
            "Simple Network Management Protocol (SNMP) is a widely used protocol for network management that provides a standardized framework for monitoring and managing network…",
            "SNMP agent: It is a software management software module installed on a managed device.",
            "Management Information Base: MIB consists of information on resources that are to be managed."
          ]
        },
        {
          "id": "post-office-protocol-v3-pop3",
          "title": "Post Office Protocol v3(POP3)",
          "summary": "What is POP3 (Post Office Protocol Version 3)? Today email is the most widely used platform for personal and professional business communication.",
          "sections": [
            {
              "id": "post-office-protocol-v3-pop3--overview",
              "heading": "Overview",
              "explanation": "What is POP3 (Post Office Protocol Version 3)? Today email is the most widely used platform for personal and professional business communication. Email protocol is defined as a set of rules for the secure transmission of emails over the Internet. SMTP, IMAP, POP, and POP3 are some of the email protocols. Each type of protocol used has a specific mechanism. The below article covers in detail the POP3 protocol. Introduction to POP POP stands for Post Office Protocol. The POP protocol was published in the year 1984. POP has been updated two times namely \"POP2\" and \"POP3\". The POP protocol is an Internet Standard Protocol that works on the application layer. It is used to get an access email from the mail server. The need for POP mainly arises when the user or client does not have a continuous internet connection and wants to receive email messages. The Pop client makes use of POP to pull email messages from the POP server. POP3 is the updated version of POP. What is POP3? POP 3 stands for Post Office Protocol Version 3. POP3 protocol is used to provide access to the mail inbox that is stored in the email server. POP3 protocol can download and delete messages. Once the POP3 client has established a connection with the mail server it can easily retrieve all the messages from the server. The user can access the messages locally even if the user is offline. The protocol does not inherently support real-time synchronization or automatic checking for new messages, users can configure their email clients to check for new messages at intervals or manually. Many email programs, including Apple Mail, Gmail, and Microsoft Outlook, support the POP3 protocol, although IMAP is often preferred for its synchronization features. When a message is sent, SMPT is used to transfer it from the client to the server and ultimately to the server of the recipient. However, the Message Access Agent facilitates the transmission of the message from the receiving server to the host server. POP3 and IMAP are the two types of protocols that are included in the Message Access Agent. POP3 Email Protocol POP3 Ports Port 110 Port 110 is a default TCP port used by POP3. But It has a disadvantage that it does not support encrypted communication. Port 995 Port 995 is majorly used for more secure applications. Port 995 is a TLS or SSL port used to provide more security. History of POP3 In 1984, the Internet Engineering Task Force published RFC 918, the initial version of post office protocol. The POP3 protocol was created by the engineers as a straightforward and efficient email protocol that is used to retrieve emails from the server. Instead of accessing the mailbox offline, this offers the option to access the mails offline. RFC 937 introduced the post office protocol version 2, which was superseded by RFC 1081 in 1988, which introduced the post office protocol version 3. Before POP3 was released, it underwent ten more years of revisions. After it was fully polished, it was released in 1996. The POP3 protocol was developed with the fundamental idea that when a client and a server retrieve mail, it goes through three stages. This is true even if the protocol has experienced many improvements. They made an effort to keep this protocol as simple as possible, and because of its simplicity, it is now widely used. Working of POP3 Initially POP3 needs to establish a connection between the POP client and the POP server. Once a secure connection is established several commands are exchanged between them to perform the task. Once a connection is established client requests available email messages. The Server sends the available messages along with their size and unique identifier number. Once the client receives the message, it makes a request to the server for downloading the messages. The user marks such messages and sends them to the server. Upon receiving from the client-server sends the messages selected by the client and accordingly marks them as read or unread. The client if want sends a request for deleting the messages. Once the tasks are completed the client sends a close connection request to the server The server then sends an acknowledgment to the client and closes the connection. Advantages of POP3 The message can be read offline also. POP3 requires less storage space. POP3 is easy to use and configure. POP3 is supported by many email applications. Since our PC already has the emails stored there, accessing them is quick and simple. The size of emails we send and receive is unrestricted. Since all emails are kept locally, less server storage space is needed. Disadvantages of POP3 POP3 does not provide the feature of real-time synchronization. If an email consists of virus attachments it can affect the system easily. POP3 does not support accessing the same email at the same time on different systems. At a time entire email folder can be discarded. It is also possible for the email folder that is downloaded from the mail server to get corrupted. Since the emails are kept locally, anyone using your computer can access the email folder. Difference Between POP3 and IMAP POP3 IMAP POP is a simple protocol that only allows downloading messages from your Inbox to your local computer. IMAP (Internet Message Access Protocol) is much more advanced and allows the user to see all the folders on the mail server. The POP server listens on port 110, and the POP with SSL secure (POP3DS) server listens on port 995 The IMAP server listens on port 143, and the IMAP with SSL secure (IMAPDS) server listens on port 993. In POP3 the mail can only be accessed from a single device at a time. Messages can be accessed across multiple devices. To read the mail it has to be downloaded on the local system. The mail content can be read partially before downloading The user can not create, delete or rename email on the mail server. The user can create, delete or rename an email on the mail server. Difference between IMAP and POP3"
            }
          ],
          "quick_revision": [
            "What is POP3 (Post Office Protocol Version 3)? Today email is the most widely used platform for personal and professional business communication."
          ]
        },
        {
          "id": "internet-message-access-protocol-imap",
          "title": "Internet Message Access Protocol(IMAP)",
          "summary": "Internet Message Access Protocol (IMAP) Internet Message Access Protocol (IMAP) is an application-layer protocol that operates as a contract for receiving emails from the mail server.",
          "sections": [
            {
              "id": "internet-message-access-protocol-imap--overview",
              "heading": "Overview",
              "explanation": "Internet Message Access Protocol (IMAP) Internet Message Access Protocol (IMAP) is an application-layer protocol that operates as a contract for receiving emails from the mail server. It was designed by Mark Crispin in 1986 as a remote access mailbox protocol; the current version of IMAP is IMAP4. It is used as the most commonly used protocol for retrieving emails. This term is also known as Internet mail access protocol, Interactive mail access protocol, and Interim mail access protocol. It retrieves messages from your email provider to your email client (such as on your Mac or PC). Importantly, it does not delete messages from the email service after you download them until the user explicitly deletes them. It allows you to view and manage your emails across multiple devices because it synchronizes the emails between your email client and the server. This synchronization ensures that changes such as read status, deletions, and folder organization are reflected consistently across all devices connected to the same email account. Features of IMAP There are some basic features in IMAP Multi-Mailbox Management : It supports the management of multiple mailboxes, allowing users to organize their emails into various categories or folders. Message Flags : It provides the ability to add message flags, helping users keep track of the status of emails, such as whether they have been read. Selective Email Retrieval : It allows users to decide whether to download the full content of an email or just retrieve the headers and decide later. Efficient Media Management : When multiple files are attached to an email, IMAP simplifies the process of downloading media files by handling attachments efficiently. Working of IMAP IMAP follows Client-server Architecture and is the most commonly used email protocol. It is a combination of client and server process running on other computers that are connected through a network. This protocol resides over the TCP/IP protocol for communication. Once the communication is set up the server listens on port 143 by default which is non-encrypted. For the secure encrypted communication port, 993 is used. Port 143 : Default non encrypted IMAP communication. Port 993 : Secure IMAP communication with encryption (SSL/TLS). The following steps are taken for the working of the IMAP Email client Gmail establishes a connection with Gmail's SMTP server. By approving the sender's and recipient's email addresses, the SMTP server verifies (authenticates) that the email can be sent. The email is sent to the Outlook SMTP server by Gmail's SMTP server. The recipient's email address is authenticated by the Outlook SMTP server. IMAP or POP3 is used by the Outlook SMTP server to deliver the email to the Outlook email client. The following figure shows the working of the IMAP. IMAP Working Architecture of IMAP The Internet Message Access Protocol (IMAP) is a client–server model that allows users to access and view email messages stored on remote servers. Here is a summary of the events:"
            },
            {
              "id": "internet-message-access-protocol-imap--imap-clients",
              "heading": "IMAP Clients",
              "explanation": "An IMAP client is an email application or software that users use to communicate with their email accounts. Examples include Microsoft Outlook, Mozilla Thunderbird, Apple Mail, and mobile email applications. The client communicates with the server to receive, manage, and send email messages."
            },
            {
              "id": "internet-message-access-protocol-imap--imap-server",
              "heading": "IMAP Server",
              "explanation": "The IMAP server stores email messages and manages user mailboxes. It responds to requests from IMAP clients and provides access to email folders and messages. The server stores emails in a structured format, usually organized in user-defined folders or mailboxes. Common IMAP server software includes Dovecot, Courier IMAP, Cyrus IMAP, and Microsoft Exchange Server."
            },
            {
              "id": "internet-message-access-protocol-imap--network-protocols",
              "heading": "Network Protocols",
              "explanation": "It works over TCP/IP (Transmission Control Protocol/Internet Protocol) networks, and allows an client to connect to a server over the Internet or local area networks. IMAP Steps Involved in IMAP Operation An email client, like Microsoft Outlook, connects to the server via IMAP when a user signs in. Specific ports are used for establishing the connection. The email client displays only the headers of each email initially. Attachments are not downloaded automatically; messages and attachments are downloaded to the client only when the user taps on them. Compared to alternative email retrieval protocols like Post Office Protocol 3, users can check their mail more quickly with IMAP ( POP3) . Emails remain on the server until they are specifically deleted by the user. The IMAP server listens on port 143, while IMAP over Secure Sockets Layer (SSL)/Transport Layer Security (TLS) uses port 993."
            }
          ],
          "quick_revision": [
            "Internet Message Access Protocol (IMAP) Internet Message Access Protocol (IMAP) is an application-layer protocol that operates as a contract for receiving emails from…",
            "IMAP Clients: An IMAP client is an email application or software that users use to communicate with their email accounts.",
            "IMAP Server: The IMAP server stores email messages and manages user mailboxes.",
            "Network Protocols: It works over TCP/IP (Transmission Control Protocol/Internet Protocol) networks, and allows an client to connect to a server over the Internet or local area networks."
          ]
        },
        {
          "id": "lightweight-directory-access-protocol-ldap",
          "title": "Lightweight Directory Access Protocol(LDAP)",
          "summary": "Lightweight Directory Access Protocol (LDAP) Lightweight Directory Access Protocol (LDAP) is an internet protocol works on TCP/IP, used to access information from directories.",
          "sections": [
            {
              "id": "lightweight-directory-access-protocol-ldap--overview",
              "heading": "Overview",
              "explanation": "Lightweight Directory Access Protocol (LDAP) Lightweight Directory Access Protocol (LDAP) is an internet protocol works on TCP/IP, used to access information from directories. LDAP protocol is basically used to access an active directory."
            },
            {
              "id": "lightweight-directory-access-protocol-ldap--features-of-ldap",
              "heading": "Features of LDAP",
              "explanation": "Functional model of LDAP is simpler due to this it omits duplicate, rarely used and esoteric feature. It is easier to understand and implement. It uses strings to represent data\nDirectories: Directories are set of object with similar attributes, organised in a logical and hierarchical manner. For example, Telephonic Directories. It is a distributed database application used to manage attributes in a directory. LDAP defines operations for accessing and modifying directory entries such as Searching for user specified criteria Adding an entry Deleting an entry Modifying an entry Modifying the distinguished name or relative distinguished name of an entry Comparing an entry"
            },
            {
              "id": "lightweight-directory-access-protocol-ldap--information-model",
              "heading": "Information Model",
              "explanation": "This model describes structure of information stored in an LDAP Directory.In this basic information is stored in directory is called an entity. Entries here represents object of interest in real world such as people, server, organization, etc. Entries contain collection of attributes that contain information about object.Every attribute has a type and one or more values. Here types of attribute is associated with syntax and syntax specifies what kind of values can be stored"
            },
            {
              "id": "lightweight-directory-access-protocol-ldap--naming-model",
              "heading": "Naming Model",
              "explanation": "This model describes how information in an LDAP Directory is organized and identified. In this entries are organized in a Tree-Like structure called Directory Information Tree (DIT). Entries are arranged within DIT based on their distinguished name DN. DN is a unique name that unambiguously identifies a single entry."
            },
            {
              "id": "lightweight-directory-access-protocol-ldap--functional-model",
              "heading": "Functional Model",
              "explanation": "LDAP defines operations for accessing and modifying directory entries . In this we discuss about LDAP operations in a programming language independent manner LDAP operations can be divided into following categories: • Query • Update • Authentication"
            },
            {
              "id": "lightweight-directory-access-protocol-ldap--security-model",
              "heading": "Security Model",
              "explanation": "This model describes how information in LDAP directory can be protected from unauthorized access. It is based on BIND operation. There are several bind operation can be performed."
            },
            {
              "id": "lightweight-directory-access-protocol-ldap--ldap-client-and-server-interaction",
              "heading": "LDAP Client and Server Interaction",
              "explanation": "It is quite similar to any other client-server interaction. In this client performs protocol functions against server.The interaction takes place as follows:- A protocol request is send to server by client. Server perform operations on directory such as search, update, delete, etc. The response is sent back to the client. Microsoft, Open LDAP, Sun, etc can easily be made an LDAP server. if the user don't want to install directory service but want to use LDAP instruction for available LDAP server then user can use four11, bigfoot etc. Making an LDAP client is quite simple as there are SDK's in many programming languages such as C, C++, Perl, Java, etc.\nUser has to perform certain task to be LDAP client: (i) Go get SDK for your language (ii) Use function of SDK to connect to LDAP (iii) Operate on LDAP (a) For Authentication It includes bind, unbind and abandon operations used to connect and disconnect to and from an LDAP server, establish access rights and protect information. In authentication, client session is established and ended using the functions -> BIND/UNBIND -> Abandon (b) For Query It includes search and compare operations used to retrieve information from a directory. In query, server performs action using function -> Search -> Compare Entry (c) For Update It includes add, delete, modify and modify RDN operations used to update stored information in a directory. In update, we can make changes in directories by using function -> Add an entry -> Delete an entry -> Modify an entry Client establishes session with server (BIND) using Hostname/IP/and Port Number. For security purposes, user set USER-ID and Password based authentication. Server perform operations such as read, update, search, etc. Client end session using UNBIND or Abandon function."
            },
            {
              "id": "lightweight-directory-access-protocol-ldap--advantages-of-ldap",
              "heading": "Advantages of LDAP",
              "explanation": "Data present in LDAP is available to many clients and libraries. LDAP support many types of application. LDAP is very general and has basic security.\nDisadvantages in LDAP: It does not handle well relational database."
            }
          ],
          "quick_revision": [
            "Lightweight Directory Access Protocol (LDAP) Lightweight Directory Access Protocol (LDAP) is an internet protocol works on TCP/IP, used to access information from…",
            "Features of LDAP: Functional model of LDAP is simpler due to this it omits duplicate, rarely used and esoteric feature.",
            "Information Model: This model describes structure of information stored in an LDAP Directory.In this basic information is stored in directory is called an entity.",
            "Naming Model: This model describes how information in an LDAP Directory is organized and identified.",
            "Functional Model: LDAP defines operations for accessing and modifying directory entries . In this we discuss about LDAP operations in a programming language independent manner LDAP…",
            "Security Model: This model describes how information in LDAP directory can be protected from unauthorized access.",
            "LDAP Client and Server Interaction: It is quite similar to any other client-server interaction.",
            "Advantages of LDAP: Data present in LDAP is available to many clients and libraries."
          ]
        },
        {
          "id": "network-time-protocol-ntp",
          "title": "Network Time Protocol(NTP)",
          "summary": "Network Time Protocol (NTP) is an application-layer protocol that synchronizes the clocks of computers across a network. Developed by David Mills in 1981, it ensures accurate and consistent time for all devices on a TCP/IP network. Synchronizes computer clocks to ensure accurate time across the network.",
          "sections": [
            {
              "id": "network-time-protocol-ntp--overview",
              "heading": "Overview",
              "explanation": "Network Time Protocol (NTP)\nPrerequisite: Protocols in Application Layer Network Time Protocol (NTP) is an application-layer protocol that synchronizes the clocks of computers across a network. Developed by David Mills in 1981, it ensures accurate and consistent time for all devices on a TCP/IP network. Synchronizes computer clocks to ensure accurate time across the network. Essential for seamless communication and coordination between devices. Operates at the application layer of the TCP/IP model. Uses NTP servers as reference clocks to update client devices. Widely used in systems requiring precise time, such as logging, security, and scheduling tasks. Working of Network Time Protocol NTP operates at the application layer of the TCP/IP model. It uses a hierarchical time synchronization system known as stratum levels. At the highest level are highly accurate time sources such as atomic clocks or GPS clocks. These primary time sources are referred to as Stratum 0 devices. Stratum 0 devices are directly connected to Stratum 1 NTP servers. Stratum 1 servers distribute accurate time information to Stratum 2 servers, which may further pass it to Stratum 3 servers, and so on. Each lower stratum receives time information from a higher stratum to maintain accuracy. Client systems (hosts) synchronize their clocks by requesting time updates from nearby NTP servers. This hierarchical structure ensures that all devices in the network maintain consistent and synchronized time. Applications of NTP Used in a production system where the live sound is recorded. Used in the development of Broadcasting infrastructures. Used where file system updates needed to be carried out across multiple computers depending on synchronized clock times. Used to implement security mechanism which depend on consistent time keeping over the network. Used in network acceleration systems which rely on timestamp accuracy to calculate performance. Advantages of NTP It provides internet synchronization between the devices. It provides enhanced security within the premises. It is used in the authentication systems like Kerberos. It provides network acceleration which helps in troubleshooting problems. Used in file systems that are difficult in network synchronization. Disadvantages of NTP When the servers are down the sync time is affected across a running communication. Servers are prone to error due to various time zones and conflict may occur. Minimal reduction of time accuracy. When NTP packets are increased synchronization is conflicted. Manipulation can be done in synchronization"
            }
          ],
          "quick_revision": [
            "Network Time Protocol (NTP)"
          ]
        },
        {
          "id": "trivial-file-transfer-protocol-tftp",
          "title": "Trivial File Transfer Protocol(TFTP)",
          "summary": "Trivial File Transfer Protocol - TFTP TFTP stands for Trivial File Transfer Protocol.  TFTP is defined as a protocol that is used to transfer a file from a client to a server and vice versa.",
          "sections": [
            {
              "id": "trivial-file-transfer-protocol-tftp--overview",
              "heading": "Overview",
              "explanation": "Trivial File Transfer Protocol - TFTP TFTP stands for Trivial File Transfer Protocol. TFTP is defined as a protocol that is used to transfer a file from a client to a server and vice versa. TFTP is majorly used when no complex interactions are required by the client and server. The service of TFTP is provided by UDP (User Datagram Protocol) and works on port number 69. TFTP Protocol\nNote: TFTP does not provide security features therefore it is not used in communications that take place over the Internet. Therefore it is used only for the systems that are set up on the local internet. TFTP requires less amount of memory. TFTP Message Formats There are four types of TFTP Message formats. They are as follows"
            },
            {
              "id": "trivial-file-transfer-protocol-tftp--read-request",
              "heading": "Read Request",
              "explanation": "Read Request is also known as Type 1. A read request is used by the client to get a copy of a file from the server. Below is the format of the Read Request Read Request (1) (2 Octets) File Name (variable) 0 (1 Octet) Mode (Variable) 0 (1 Octet)"
            },
            {
              "id": "trivial-file-transfer-protocol-tftp--write-request",
              "heading": "Write Request",
              "explanation": "Write Request is also known as Type 2. Write Request is being used by the client for writing a file into the server. Below is the format of the Write Request. Write Request(2) (2 Octets) File Name (variable) 0 (1 Octet) Mode (Variable) 0 (1 Octet)"
            },
            {
              "id": "trivial-file-transfer-protocol-tftp--data",
              "heading": "Data",
              "explanation": "Data is also known as Type 3. Data consists of a portion of a file that is being copied. The data block is of fixed size that is 512 octets. Below is the format of the Data. Data (3) (2 Octets) Sequence Number (2 Octets) Data (Upto 512 octets)"
            },
            {
              "id": "trivial-file-transfer-protocol-tftp--acknowledgement",
              "heading": "Acknowledgement",
              "explanation": "Acknowledgment is also known as Type 4. The data present at the last in the message consists of the End of File(EOF) where the size is less than 512 octets. This acknowledgment is used by both client and server for acknowledging the received data. Ack(4) (2 Octets) Sequence Number (2 Octets) Working of TFTP TFTP makes use of port number 69 as it uses User Datagram Protocol (UDP). When the connection is established successfully between client and server, the client makes a Read Request (RRQ) or Write Request( WRQ). If a client wants to only read the file it requests RRQ and if the client wants to write some data into a server then it requests for WRQ. Once the connection is established and a request is made communication of files takes place in the form of small packets. These packets are 512 bytes each. The server then communicates the packet back to the client and waits until it receives an acknowledgment from the client that the packet has been received. When the acknowledgment is received from the client side, the server again sends the next packet which is 512 bytes each. The same steps as mentioned above continue until the last packet is sent by the server to the client. Comparison of TFTP with FTP Feature TFTP FTP Protocol UDP-based TCP-based Authentication None Username & password required Reliability Less reliable Reliable (TCP error handling) File Size Small files Can handle large files Use Case Simple transfers, firmware General-purpose file transfer Read related articles Introduction to Microsoft SMB, A network file sharing protocol"
            }
          ],
          "quick_revision": [
            "Trivial File Transfer Protocol - TFTP TFTP stands for Trivial File Transfer Protocol.",
            "Read Request: Read Request is also known as Type 1.",
            "Write Request: Write Request is also known as Type 2.",
            "Data: Data is also known as Type 3.",
            "Acknowledgement: Acknowledgment is also known as Type 4."
          ]
        },
        {
          "id": "network-news-transfer-protocol-nntp",
          "title": "Network News Transfer Protocol(NNTP)",
          "summary": "Network News Transfer Protocol (NNTP) Network News Transfer Protocol (NNTP) is the underlying protocol of UseNet, which is a worldwide discussion system which contains posts or articles which are known as news.",
          "sections": [
            {
              "id": "network-news-transfer-protocol-nntp--overview",
              "heading": "Overview",
              "explanation": "Network News Transfer Protocol (NNTP) Network News Transfer Protocol (NNTP) is the underlying protocol of UseNet, which is a worldwide discussion system which contains posts or articles which are known as news. Network News Transfer Protocol is used to transfer news from one network to another. It is designed specifically to transfer news/articles. A NNTP client is included in browsers like Netscape, Opera and Internet Explorer or a special application named newsreader can be used as a NNTP client. NNTP servers manages the global network of news groups.\nHistory: Usenet originally used the Unix to Unix Copy Protocol (UUCP). In this protocol, servers copied all news on their local disks, posters and readers logged in to these servers to access articles directly from the local disk. It was necessary to make UseNet accessible for personal computers with increase in use of the Internet. Hence NNTP was designed on similar lines to that of Simple Mail Transfer Protocol (SMTP) . It was made by multiple contributors which included Brain Kantor, Phil Lapsley, Sant.O.Barber, Erik Fair. Brain Kantor and Phil Lapsley wrote the RFC 977, \"Network News Transfer Protocol\" in March 1986.\nWorking: NNTP is a set of rules for clients/newsreaders to interact with servers to retrieve newsgroups. NNTP client communicates with a server using commands like \"ARTICLE\" to retrieve an article or \"NEWS\" to retrieve a whole newsgroup etc. Mostly these commands are interpreted directly by newsreader software which sends and receives signals from the servers. Port 563 or 119 is used by NNTP clients/newsreaders. Post 433 is used by Servers hence it is also called NNSP. The newsgroups are hosted by multiple servers. The servers in this distributed network are simple peers which have information about other peers with whom they share articles. A new article is added to a server, the server periodically sends added articles to it's peer servers. A server need not store all the newsgroups on the network, it can choose which newsgroups it will store, provided it's peer has those newsgroups.And if the peer doesn't, then it can find new peers which have those newsgroups.Anyone can setup personal newsgroups using software like Apache James and Leaf node."
            }
          ],
          "quick_revision": [
            "Network News Transfer Protocol (NNTP) Network News Transfer Protocol (NNTP) is the underlying protocol of UseNet, which is a worldwide discussion system which contains…"
          ]
        },
        {
          "id": "message-queuing-telemetry-transport-mqtt",
          "title": "Message Queuing Telemetry Transport(MQTT)",
          "summary": "Introduction of Message Queue Telemetry Transport Protocol (MQTT) Message Queuing Telemetry Transport, or MQTT, is a communications protocol designed for Internet of Things devices with extremely high latency and restricted low bandwidth.",
          "sections": [
            {
              "id": "message-queuing-telemetry-transport-mqtt--overview",
              "heading": "Overview",
              "explanation": "Introduction of Message Queue Telemetry Transport Protocol (MQTT) Message Queuing Telemetry Transport, or MQTT, is a communications protocol designed for Internet of Things devices with extremely high latency and restricted low bandwidth. Message Queuing Telemetry Transport is a perfect protocol for machine-to-machine (M2M) communication since it is designed specifically for low-bandwidth, high-latency settings. What is Message Queue Telemetry Transport Protocol(MQTT)? MQTT is a simple, lightweight messaging protocol used to establish communication between multiple devices. It is a TCP-based protocol relying on the publish-subscribe model. This communication protocol is suitable for transmitting data between resource-constrained devices having low bandwidth and low power requirements. Hence this messaging protocol is widely used for communication in the IoT Framework. Publish-Subscribe Model This model involves multiple clients interacting with each other, without having any direct connection established between them. All clients communicate with other clients only via a third party known as a Broker. MQTT Client and Broker Clients publish messages on different topics to brokers. The broker is the central server that receives these messages and filters them based on their topics. It then sends these messages to respective clients that have subscribed to those different topics. The heart of any publish/subscribe protocol is the MQTT broker. A broker can handle up to thousands of concurrently connected MQTT customers, depending on how it is implemented. All communications must be received by the broker, who will then sort them, ascertain who subscribed to each one, and deliver the messages to the clients who have subscribed. All persistent customers' sessions, including missed messages and subscriptions, are likewise kept by the Broker. Publish-Subscribe Model Hence client that has subscribed to a specific topic receives all messages published on that topic. Here the broker is central hub that receives messages, filters them, and distributes them to appropriate clients, such that both message publishers, as well as subscribers, are clients. Working of MQTT MQTT's publish/subscribe (pub/sub) communication style, which aims to maximise available bandwidth, is an alternative to conventional client-server architecture that communicates directly with an endpoint. In contrast, the client who transmits the message (the publisher) and the client or clients who receive it (the subscribers) are not connected in the pub/sub paradigm. Third parties—the brokers—manage the relationships between the publishers and subscribers because they don't communicate with one another directly. Publishers and subscribers, which denote whether a client is publishing messages or has subscribed to receive messages, are examples of MQTT clients. The same MQTT client can be used to accomplish these two features. A publish occurs when a client or device want to submit data to a server or broker. The term \"subscribe\" refers to the reversal of the procedure. Several clients can connect to a broker under the pub/sub paradigm and subscribe to subjects that interest them. MQTT When a broker and a subscribing client lose contact, the broker will store messages in a buffer and send them to the subscriber whenever the broker is back up and running. The broker has the right to cut off communication with subscribers and send them a cached message containing publisher instructions if the publishing client abruptly disconnects from the broker. \"Publishers send the messages, subscribers receive the messages they are interested in, and brokers pass the messages from the publishers to the subscribers,\" reads an IBM write-up describing the pub/sub paradigm. MQTT clients, such as publishers and subscribers, can only speak with MQTT brokers. Any device or programme that runs a MQTT library can be a MQTT client, ranging from microcontrollers like the Arduino to entire application servers housed in the cloud. Characterstics of MQTT\nLightweight: MQTT is designed to be lightweight, making it suitable for use in aid-restrained environments inclusive of embedded systems and low-strength devices. The protocol minimizes bandwidth and processing overhead, enabling green communication even on restricted networks."
            },
            {
              "id": "message-queuing-telemetry-transport-mqtt--publish-subscribe-model",
              "heading": "Publish-Subscribe Model",
              "explanation": "In the publish-subscribe version, clients (publishers) send messages to subjects, and different clients (subscribers) acquire messages from subjects of interest. This decoupling of producers and purchasers permits for flexible and dynamic conversation styles."
            },
            {
              "id": "message-queuing-telemetry-transport-mqtt--quality-of-service-qos-levels",
              "heading": "Quality of Service (QoS) Levels",
              "explanation": "MQTT supports exclusive stages of message delivery warranty, referred to as Quality of Service (QoS) . QoS levels range from 0 to 2, providing various stages of reliability and message transport guarantees, relying at the utility necessities."
            },
            {
              "id": "message-queuing-telemetry-transport-mqtt--retained-messages",
              "heading": "Retained Messages",
              "explanation": "MQTT lets in agents to store retained messages on topics, making sure that new subscribers acquire the maximum latest message posted on a subject right now after subscribing. This characteristic is beneficial for fame updates and configuration settings."
            },
            {
              "id": "message-queuing-telemetry-transport-mqtt--last-will-and-testament-lwt",
              "heading": "Last Will and Testament (LWT)",
              "explanation": "MQTT clients can specify a Last Will and Testament message to be posted by way of the broker in the occasion of an sudden consumer disconnect. This function affords a mechanism for detecting patron failures and dealing with them gracefully.\nSecurity: MQTT helps various protection mechanisms, consisting of Transport Layer Security (TLS) encryption and authentication mechanisms which include username/password and consumer certificates. These capabilities make certain the confidentiality, integrity, and authenticity of messages exchanged over MQTT connections. Advantages of MQTT This model is not restricted to one-to-one communication between clients. Although the publisher client sends a single message on specific topic, broker sends multiple messages to all different clients subscribed to that topic. Similarly, messages sent by multiple such publisher clients on multiple different topics will be sent to all multiple clients subscribed to those topics. Hence one-to-many, many-to-one, as well as many-to-many communication is possible using this model. Also, clients can publish data and at the same time receive data due to this two-way communication protocol. Hence MQTT is considered to be bi-directional protocol. The default unencrypted MQTT port used for data transmission is 1883. The encrypted port for secure transmission is 8883. Lightweight protocol that is quick to create and allows for efficient data transport Minimal data packet usage, resulting in low network usage Effective data dispersion The effective use of remote sensing and control Prompt and effective message delivery Minimises power consumption, which is beneficial for the linked devices, and maximises network capacity. Data transmission is quick, efficient, and lightweight because MQTT messages have small code footprint. These control messages have a fixed header of size 2 bytes and payload message up to size 256 megabytes. Disadvantages of MQTT When compared to Constrained Application Protocol (CoAP), MQTT has slower send cycles. Resource discovery in MQTT is based on flexible topic subscription, while resource discovery in CoAP is based on a reliable system. MQTT lacks encryption. Rather, security encryption is accomplished by TLS/SSL (Transport Layer Security/Secure Sockets Layer). Building an internationally scalable MQTT network is challenging. What is Topic? In MQTT, topic is UTF-8 string that the broker uses to filter messages for each individual connected client. Each topic consists of one or more different topic levels. Each topic level is separated by forward slash also called topic level separator. Both topics and levels are case-sensitive. Example of topic - home/kitchen/table Here, \"home\", \"kitchen\" and \"table\" are different levels of topic. Wildcard is an additional feature used in MQTT to make topics and their levels more flexible and user-friendly. 1. Single Level: “+” Single-level wildcard represented by “+” symbol can replace single level in topic. Example - If the client wants information about all tables present inside the house, it will subscribe to the topic : home/+/table Hence any information published related to tables, inside the kitchen, living room, bedroom, etc, can be obtained on this topic. Figure - Single-Level Topics in MQTT 2. Multi-Level: “#” Multi-level wildcard represented by “#” symbol can replace multiple levels in topic. Example - If a client wants information about all objects present inside the kitchen, living room, bedroom, or any other room on ground floor, it will subscribe to topic: home/groundfloor/# Hence any information published on topics related to kitchen items, bedroom items, living room items can be obtained on this topic. Information up to multiple levels can be obtained in this case. The following program illustrates how MQTT can be implemented in javascript. JavaScript //JavaScript Program for publish-subscribe model /* jshint esversion : 6 */ \"use strict\" ; //Importing MQTT var mqtt = require ( 'mqtt' ); //Creating an instance of the client var client = mqtt . connect ({ clientId"
            },
            {
              "id": "message-queuing-telemetry-transport-mqtt--formulas-code",
              "heading": "Formulas & Code",
              "explanation": "\"001\" }); //Definiting constants var topic = \"home/kitchen/table\" ; var message = \"Table inside the kitchen\" ; var options = { retain false , qos 1 }; //On successful connection client . on ( 'connect' , function () { console . log ( \" After successful connection: \" , client . connected ); //If client is connected, then publish on the topic if ( client . connected ) { console . log ( \" Publishing on topic: \" , topic ); client . publish ( topic , message , options ); } }); //On connectivity error client . on ( 'error' , function ( error ) { console . log ( \" Connection error: \" , error ); }); //On receiving message client . on ( 'message' , function ( topic , message ) { console . log ( \" Received message: \" , message . toString (), \"on topic: \" , topic ); client . end (); }); function init () { //Subscribing to the topic console . log ( \"\\n Subscribing to topic\" ); client . subscribe ( topic , { qos 1 }); } //Start of the program init (); \"use strict\" ; var mqtt = require ( 'mqtt' ); var client = mqtt . connect ({ clientId \"001\" }); var topic = \"home/kitchen/table\" ; var message = \"Table inside the kitchen\" ; var options = { retain false , qos 1 }; client . on ( 'connect' , function () { console . log ( \" After successful connection: \" , client . connected ); if ( client . connected ) { console . log ( \" Publishing on topic: \" , topic ); client . publish ( topic , message , options ); } }); client . on ( 'error' , function ( error ) { console . log ( \" Connection error: \" , error ); }); client . on ( 'message' , function ( topic , message ) { console . log ( \" Received message: \" , message . toString (), \"on topic: \" , topic ); client . end (); }); function init () { console . log ( \"\\n Subscribing to topic\" ); client . subscribe ( topic , { qos 1 }); } init ();"
            }
          ],
          "quick_revision": [
            "Introduction of Message Queue Telemetry Transport Protocol (MQTT) Message Queuing Telemetry Transport, or MQTT, is a communications protocol designed for Internet of…",
            "Publish-Subscribe Model: In the publish-subscribe version, clients (publishers) send messages to subjects, and different clients (subscribers) acquire messages from subjects of interest.",
            "Quality of Service (QoS) Levels: MQTT supports exclusive stages of message delivery warranty, referred to as Quality of Service (QoS) . QoS levels range from 0 to 2, providing various stages of…",
            "Retained Messages: MQTT lets in agents to store retained messages on topics, making sure that new subscribers acquire the maximum latest message posted on a subject right now after…",
            "Last Will and Testament (LWT): MQTT clients can specify a Last Will and Testament message to be posted by way of the broker in the occasion of an sudden consumer disconnect.",
            "Formulas & Code: \"001\" }); //Definiting constants var topic = \"home/kitchen/table\" ; var message = \"Table inside the kitchen\" ; var options = { retain false , qos 1 }; //On successful…"
          ]
        },
        {
          "id": "session-initiation-protocol-sip",
          "title": "Session Initiation Protocol(SIP)",
          "summary": "Session Initiation Protocol Session Initiation Protocol (SIP) is an application-layer signaling protocol used to establish, modify, manage, and terminate multimedia communication sessions over IP networks.",
          "sections": [
            {
              "id": "session-initiation-protocol-sip--overview",
              "heading": "Overview",
              "explanation": "Session Initiation Protocol Session Initiation Protocol (SIP) is an application-layer signaling protocol used to establish, modify, manage, and terminate multimedia communication sessions over IP networks. Supports voice, video, and instant messaging over IP networks. Designed for packet-switched networks rather than traditional circuit-switched telephone systems. Scalable and suitable for large, distributed communication environments. SIP Architecture SIP architecture includes endpoints and signaling servers that handle registration, routing, and session delivery.\nUser Agent (UA): Endpoint that sends and receives SIP messages (UAC = requester, UAS = responder).\nProxy Server: Forwards requests/responses and applies routing rules, policies, and authentication.\nRegistrar Server: Processes REGISTER and stores user-to-contact bindings (SIP URI → current contact).\nRedirect Server: Returns the next reachable address and tells the client to contact it directly (no forwarding)."
            },
            {
              "id": "session-initiation-protocol-sip--location-service",
              "heading": "Location Service",
              "explanation": "Database used to resolve where a user is currently reachable. Working SIP establishes and controls a communication session using structured signaling exchanges.\nREGISTER (optional): Endpoint registers its current contact address with the registrar.\nINVITE: Caller requests session setup with the callee (directly or via a proxy).\nRouting: Proxy uses location information to forward the INVITE to the callee’s reachable address. 1xx responses Progress updates such as trying/ringing. 200 OK Callee accepts and confirms session establishment.\nACK: Caller confirms the final response and the dialog becomes active.\nMid-call control (if needed): Session state can be updated using signaling (e.g., hold/resume/transfer). BYE + 200 OK Either side ends the session; the other acknowledges termination. SIP Messages SIP messages are the signaling units used to control a session. They are exchanged in a request–response pattern, where a device sends a request method and the other side returns a status response. INVITE Initiates a session.\nACK: Confirms the final response to an INVITE. BYE Terminates an active session.\nCANCEL: Cancels a pending request before completion.\nREGISTER: Updates the user’s current contact address in the network.\nOPTIONS: Queries capabilities of an endpoint/server. 1xx Informational / in progress 2xx Success 3xx Redirection 4xx Client error 5xx Server error 6xx Global failure Applications\nVoIP: Call setup and control for Internet voice calling.\nVideo conferencing: Signaling for multi-party video meetings.\nUnified Communications (UC): Connects voice, video, messaging, and presence in one platform.\nIP telephony: Supports desk phones and softphones for call handling over data networks.\nMessaging & presence: Enables chat sessions and user availability/online status. Advantages\nInteroperability: Works across different vendors and VoIP platforms using a common signaling standard.\nScalability: Supports large enterprise and service-provider deployments with many concurrent users.\nMobility support: Keeps users reachable even when they switch networks or IP addresses.\nAdvanced call features: Enables services like transfer, forwarding, conferencing, and call waiting.\nEasy integration: Fits well with PBX/UC systems and cloud communication infrastructure. Disadvantages\nSecurity risks: Without TLS/authentication, signaling can be targeted (spoofing, eavesdropping, DoS).\nNAT traversal problems: Devices behind NAT may need STUN/TURN to maintain reliable reachability.\nNeeds companion protocols: SIP controls signaling; media and session details rely on RTP and SDP.\nConfiguration complexity: Routing, server setup, and security policies require careful implementation.\nNetwork dependency: High latency, jitter, or packet loss can degrade call stability and user experience."
            }
          ],
          "quick_revision": [
            "Session Initiation Protocol Session Initiation Protocol (SIP) is an application-layer signaling protocol used to establish, modify, manage, and terminate multimedia…",
            "Location Service: Database used to resolve where a user is currently reachable."
          ]
        }
      ]
    },
    {
      "title": "Network Performance and Quality",
      "subsections": [
        {
          "id": "congestion-control",
          "title": "Congestion Control",
          "summary": "Techniques in Computer Networks Congestion control is a mechanism that controls a sender’s data transmission rate so the network remains stable under varying traffic loads.",
          "sections": [
            {
              "id": "congestion-control--overview",
              "heading": "Overview",
              "explanation": "Techniques in Computer Networks Congestion control is a mechanism that controls a sender’s data transmission rate so the network remains stable under varying traffic loads. It keeps network delay under control by limiting how much data builds up in router queues. It reduces jitter by preventing queues from growing and shrinking unpredictably during traffic bursts. It lowers packet loss by avoiding buffer overflow in routers and switches. It improves fairness by ensuring that multiple connections share available bandwidth more evenly. It maintains stable throughput by reducing retransmissions and avoiding repeated overload cycles. Types of Congestion Control These techniques are broadly classified into two categories: Open-Loop (preventive) methods and Closed-Loop (reactive) methods. 1. Open-loop congestion control Open-loop congestion control prevents congestion by using predefined rules and design-time policies, instead of relying on real-time feedback from the network during transmission. Open Loop Congestion Control Policies"
            },
            {
              "id": "congestion-control--window-policy",
              "heading": "Window Policy",
              "explanation": "Retransmission Policy: Lost or corrupted packets are retransmitted by the sender. To prevent congestion, retransmission timers must be carefully set to avoid excessive retries, which could worsen network load.\nThe type of sliding window protocol affects congestion. In Go-Back-N ARQ, multiple packets may be retransmitted for a single loss, increasing network load. Selective Repeat ARQ is preferred, as it retransmits only the missing packets, reducing unnecessary congestion."
            },
            {
              "id": "congestion-control--discarding-policy",
              "heading": "Discarding Policy",
              "explanation": "Routers can selectively discard less important, damaged, or delayed packets to prevent congestion. This is useful in multimedia applications like audio or video streaming, where losing some packets may not noticeably affect quality."
            },
            {
              "id": "congestion-control--acknowledgment-policy",
              "heading": "Acknowledgment Policy",
              "explanation": "Acknowledgment traffic adds load to the network. Congestion can be reduced by employing strategies such as sending a single acknowledgement for multiple packets or delaying acknowledgements until a packet is ready to be sent or a timer expires."
            },
            {
              "id": "congestion-control--admission-policy",
              "heading": "Admission Policy",
              "explanation": "Admission control allows new connections only if sufficient network resources are available. Before establishing a connection, routers or switches check bandwidth and buffer availability. If adding a new flow would risk congestion, the request is denied to protect existing traffic."
            },
            {
              "id": "congestion-control--traffic-shaping-and-rate-control-additional",
              "heading": "Traffic Shaping and Rate Control (Additional)",
              "explanation": "Open loop systems may also include traffic shaping, where sources limit the rate of packet transmission, and rate control, ensuring that traffic conforms to agreed limits before entering the network.\nClosed-loop congestion control: Closed-loop congestion control detects congestion during communication using feedback from the network and then reacts by adjusting the sending rate or network behavior to reduce overload."
            },
            {
              "id": "congestion-control--backpressure",
              "heading": "Backpressure",
              "explanation": "A congested node temporarily stops accepting packets from its upstream neighbors, slowing traffic back toward the source. This method propagates congestion signals backward through the network. It works primarily in virtual circuit networks, where nodes know their upstream neighbors. For example, if the 3rd node is congested, it stops receiving packets, causing congestion at the 2nd node, which then affects the 1st node and eventually informs the source to slow down. In above diagram the 3rd node is congested and stops receiving packets as a result 2nd node may be get congested due to slowing down of the output data flow. Similarly 1st node may get congested and inform the source to slow down."
            },
            {
              "id": "congestion-control--choke-packet-technique",
              "heading": "Choke Packet Technique",
              "explanation": "When a router experiences congestion, it sends a special choke packet directly to the source, instructing it to reduce its transmission rate. The router monitors its resource usage and triggers the choke packet when utilization exceeds a threshold. Only the source is notified, while intermediate nodes remain unaware of the congestion.\nImplicit Signaling: In this method, no explicit congestion message is sent. Instead, the source infers congestion from network behavior, such as delayed or missing acknowledgments, and adjusts its sending rate accordingly."
            },
            {
              "id": "congestion-control--explicit-signaling",
              "heading": "Explicit Signaling",
              "explanation": "A congested node directly informs the source or destination about congestion by embedding congestion information inside data packets. This differs from choke packets, which are separate control packets.\nForward Signaling: Congestion information is sent to the destination, which then takes measures to handle or avoid congestion."
            },
            {
              "id": "congestion-control--backward-signaling",
              "heading": "Backward Signaling",
              "explanation": "Congestion information is sent to the source, instructing it to slow down its transmission rate. N etwork-assisted Congestion Control Network-assisted congestion control is a method where routers actively support congestion handling by signaling congestion early or controlling queue buildup, instead of leaving everything to the sender’s loss-based guessing. Network-assisted Techniques"
            },
            {
              "id": "congestion-control--ecn-explicit-congestion-notification",
              "heading": "ECN (Explicit Congestion Notification)",
              "explanation": "ECN allows routers to mark packets instead of dropping them when congestion is starting. The receiver echoes this mark back to the sender, and the sender reduces its sending rate, which helps control congestion without waiting for packet loss to occur."
            },
            {
              "id": "congestion-control--aqm-active-queue-management",
              "heading": "AQM (Active Queue Management)",
              "explanation": "AQM is a queue management approach where routers start dropping or marking packets before the buffer becomes full. This prevents long queues from building up, which reduces queueing delay and makes network performance smoother during peak traffic."
            },
            {
              "id": "congestion-control--codel-controlled-delay",
              "heading": "CoDel (Controlled Delay)",
              "explanation": "CoDel is an AQM technique that focuses on controlling delay rather than just buffer size. It monitors how long packets stay in the queue, and if the delay remains high for a sustained time, it drops or marks packets to force senders to slow down and bring the queue delay back to a healthy level."
            },
            {
              "id": "congestion-control--why-it-is-useful",
              "heading": "Why it is useful",
              "explanation": "Network-assisted methods reduce the chance of buffer overflow and reduce sudden bursts of packet loss, because congestion is handled earlier through marks or controlled drops.\nKey benefit for real networks: These methods keep latency-sensitive applications like voice and video more stable, because they prevent queues from becoming excessively long during heavy load."
            }
          ],
          "quick_revision": [
            "Techniques in Computer Networks Congestion control is a mechanism that controls a sender’s data transmission rate so the network remains stable under varying traffic…",
            "Window Policy: Retransmission Policy: Lost or corrupted packets are retransmitted by the sender.",
            "Discarding Policy: Routers can selectively discard less important, damaged, or delayed packets to prevent congestion.",
            "Acknowledgment Policy: Acknowledgment traffic adds load to the network.",
            "Admission Policy: Admission control allows new connections only if sufficient network resources are available.",
            "Traffic Shaping and Rate Control (Additional): Open loop systems may also include traffic shaping, where sources limit the rate of packet transmission, and rate control, ensuring that traffic conforms to agreed…",
            "Backpressure: A congested node temporarily stops accepting packets from its upstream neighbors, slowing traffic back toward the source.",
            "Choke Packet Technique: When a router experiences congestion, it sends a special choke packet directly to the source, instructing it to reduce its transmission rate.",
            "Explicit Signaling: A congested node directly informs the source or destination about congestion by embedding congestion information inside data packets.",
            "Backward Signaling: Congestion information is sent to the source, instructing it to slow down its transmission rate.",
            "ECN (Explicit Congestion Notification): ECN allows routers to mark packets instead of dropping them when congestion is starting.",
            "AQM (Active Queue Management): AQM is a queue management approach where routers start dropping or marking packets before the buffer becomes full.",
            "CoDel (Controlled Delay): CoDel is an AQM technique that focuses on controlling delay rather than just buffer size.",
            "Why it is useful: Network-assisted methods reduce the chance of buffer overflow and reduce sudden bursts of packet loss, because congestion is handled earlier through marks or controlled…"
          ]
        },
        {
          "id": "qos-and-multimedia",
          "title": "QoS and Multimedia",
          "summary": "Quality of Service and Multimedia Quality of Service (QoS) refers to a set of traffic management and control mechanisms used in computer networks to prioritize and regulate data transmission based on the requirements of applications.",
          "sections": [
            {
              "id": "qos-and-multimedia--overview",
              "heading": "Overview",
              "explanation": "Quality of Service and Multimedia Quality of Service (QoS) refers to a set of traffic management and control mechanisms used in computer networks to prioritize and regulate data transmission based on the requirements of applications. It classifies traffic and marks packets so the network can treat them differently. It uses scheduling and queuing to forward high-priority traffic first when the network is busy. It manages bandwidth using shaping or policing to keep traffic within defined limits and prevent one flow from dominating. It improves reliability for real-time apps by reducing delay variation and limiting packet drops during congestion. QoS Parameters Quality of Service parameters are measurable factors used to evaluate and control network performance, especially for real-time and multimedia applications."
            },
            {
              "id": "qos-and-multimedia--packet-loss",
              "heading": "Packet Loss",
              "explanation": "Some packets get dropped in the network (often due to congestion). This reduces quality for calls, video, and downloads.\nJitter: Jitter refers to the variation in packet arrival times caused by congestion, routing changes, or timing differences.\nLatency: Latency is the time taken for a packet to travel from the source to the destination.\nBandwidth: Bandwidth represents the maximum data-carrying capacity of a network link within a given time period\nMean Opinion Score (MOS): MOS is a subjective measure used to evaluate voice quality on a scale from 1 to 5, (5 = excellent, 1 = poor).\nThroughput: Throughput is the actual rate at which data is successfully delivered over a network."
            },
            {
              "id": "qos-and-multimedia--error-rate",
              "heading": "Error Rate",
              "explanation": "Error rate indicates the frequency of corrupted or lost packets during transmission. Types of Quality of Service Quality of Service mechanisms can be broadly classified into stateless and stateful solutions based on how network devices handle traffic information."
            },
            {
              "id": "qos-and-multimedia--stateless-solutions",
              "heading": "Stateless Solutions",
              "explanation": "Routers do not maintain detailed information about individual traffic flows. This approach is highly scalable and robust, making it suitable for large networks. Traffic is treated based on predefined classes rather than per-flow analysis. It does not provide strict guarantees for delay, bandwidth, or performance. Commonly used where simplicity and scalability are more important than precise control."
            },
            {
              "id": "qos-and-multimedia--stateful-solutions",
              "heading": "Stateful Solutions",
              "explanation": "Routers maintain per-flow state information for each traffic stream. This allows the network to provide strong QoS guarantees, such as assured bandwidth and controlled delay. It ensures efficient resource utilization and better protection for critical applications. The approach is less scalable and less robust due to higher processing and memory overhead. Best suited for networks where precise performance control is required. How does QoS work? Quality of Service (QoS) manages network traffic so important applications (voice/video) get better performance even during congestion. It does this by tagging traffic, separating it into queues, and sending higher-priority packets first.\nPacket Marking: Packets are labeled (e.g., voice, video, data) so routers/switches can recognize priority and treat them accordingly.\nVirtual Queues: Devices keep separate queues per priority. High-priority traffic goes into a faster queue and may get guaranteed bandwidth.\nHandling Allocation: QoS decides which queue sends packets first and how much bandwidth each gets, so critical traffic stays smooth while other traffic shares the left bandwidth. Importance"
            },
            {
              "id": "qos-and-multimedia--prioritizes-critical-apps",
              "heading": "Prioritizes critical apps",
              "explanation": "QoS gives higher priority to real-time traffic like VoIP, video meetings, and streaming so it stays smooth.\nReduces latency and jitter: QoS lowers delay and delay variation, which improves call and video quality.\nMinimizes packet loss: QoS reduces drops during congestion, protecting time-sensitive and important traffic.\nUses bandwidth efficiently: QoS distributes bandwidth smartly to avoid congestion and prevent one flow from consuming everything.\nImproves reliability: QoS keeps performance more stable and predictable even when the network is heavily loaded."
            },
            {
              "id": "qos-and-multimedia--supports-slas",
              "heading": "Supports SLAs",
              "explanation": "QoS helps meet SLA targets for delay, throughput, and availability. Implementing QoS Implementing Quality of Service (QoS) requires a structured, phased approach to ensure efficient use of network resources and consistent performance for critical applications.\nPlanning: The team identifies which application need priority, chooses a QoS approach, and aligns stakeholders for a smooth rollout.\nDesign: The team plans required hardware/software changes and maps the QoS model to the current network and device limits.\nTesting: The team validates policies in a lab or staging setup to catch marking, queuing, and performance issues before production.\nDeployment: The team enables QoS step-by-step by site, segment, or feature to reduce risk and keep the network stable."
            },
            {
              "id": "qos-and-multimedia--monitoring-tuning",
              "heading": "Monitoring & Tuning",
              "explanation": "The team continuously tracks performance metrics and adjusts QoS rules to maintain consistent results. Models to Implement QoS QoS models define how traffic is prioritized and how network resources are assigned to meet application performance needs."
            },
            {
              "id": "qos-and-multimedia--integrated-services-intserv",
              "heading": "Integrated Services (IntServ)",
              "explanation": "Integrated Services (IntServ) provides strict QoS guarantees by reserving resources for each individual flow before traffic starts. IntServ works on a per-flow basis, so each session can get guaranteed delay, bandwidth, and loss limits. Routers keep state information per flow, which increases control but reduces scalability. The network uses admission control, meaning new sessions are accepted only if enough resources are available. IntServ QoS Components\nResource reservation: Routers reserve bandwidth/buffers for the flow and run admission checks at each hop.\nQoS-aware scheduling: Schedulers like WFQ help share bandwidth fairly while meeting priorities.\nQoS-aware routing: QoS routing tries to pick paths that can meet the required service level."
            },
            {
              "id": "qos-and-multimedia--qos-packet-discard",
              "heading": "QoS packet discard",
              "explanation": "During congestion, lower-priority packets are dropped first to protect critical flows. RSVP (Resource Reservation Protocol) RSVP is a signaling protocol used with Integrated Services to reserve network resources. Reservations are typically receiver-initiated (the receiver requests the resources). RSVP maintains soft state, so reservations must be refreshed periodically. PATH messages go forward to discover the route, and RESV messages return to reserve resources along that path. It can support multicast reservations. Call Admission Control Call admission control ensures that the network only accepts traffic it can support without degrading existing services. Each session must declare its QoS requirements and traffic characteristics before transmission.\nR-Specification (R-spec): Defines the requested QoS parameters such as delay bounds and acceptable packet loss."
            },
            {
              "id": "qos-and-multimedia--t-specification-t-spec",
              "heading": "T-Specification (T-spec)",
              "explanation": "Describes traffic characteristics such as data rate and burstiness. A signaling protocol carries R-spec and T-spec to routers where reservations are required. Routers admit or reject calls based on current resource availability and existing allocations."
            },
            {
              "id": "qos-and-multimedia--differentiated-services-diffserv",
              "heading": "Differentiated Services (DiffServ)",
              "explanation": "Differentiated Services (DiffServ) provides QoS by prioritizing traffic classes instead of reserving resources for every flow. Traffic is classified into classes (voice, video, best-effort) rather than handled per individual flow. Routers manage QoS using aggregated class behavior, which scales better in large networks. DiffServ offers relative priority (better treatment for higher classes), not strict end-to-end guarantees. Packets are marked (commonly using DSCP) so devices know which class and priority to apply. It reduces complexity by avoiding heavy per-flow signaling and per-flow router state. IntServ vs DiffServ Integrated Services (IntServ) Differentiated Services (DiffServ) It provides QoS for each individual flow. It provides QoS by grouping traffic into classes. Routers store separate state information for every flow. Routers store state information only for each traffic class. RSVP signaling is used to reserve resources end-to-end. End-to-end signaling is generally not required. It offers strict guarantees for delay, bandwidth, and packet loss. It offers relative priority rather than strict guarantees. It is less scalable for large networks. It is highly scalable for large networks. It is more complex to configure and manage. It is simpler to deploy and manage. Explicit resource reservation is required. Explicit per-flow reservation is not required. It fits best in small or controlled networks. It fits best in large enterprise and backbone networks. QoS Tools QoS tools are network techniques that classify and control traffic so critical applications get predictable performance.\nClassification & marking: Identify traffic and mark packets (e.g., DSCP) for correct priority handling."
            },
            {
              "id": "qos-and-multimedia--shaping-policing",
              "heading": "Shaping & policing",
              "explanation": "Shaping smooths traffic to a set rate; policing enforces limits by dropping or re-marking excess packets.\nQueuing & scheduling: Use priority queues and schedulers to decide packet send order and share bandwidth.\nResource reservation: Reserve bandwidth/buffers for selected flows to guarantee service."
            },
            {
              "id": "qos-and-multimedia--congestion-management",
              "heading": "Congestion management",
              "explanation": "Control queue buildup to reduce delay and packet loss during high traffic. Relationship Between Quality of Service (QoS) and Multimedia QoS is essential for multimedia because audio and video traffic is highly sensitive to delay, jitter, packet loss, and bandwidth limits, so QoS helps keep media smooth even when the network is congested. QoS prioritizes real-time streams like VoIP, video calls, and live streaming to avoid interruptions. QoS controls latency and jitter so audio and video stay synchronized and playback remains stable. QoS reduces packet loss by giving media packets better treatment during congestion. QoS allocates bandwidth to multimedia flows so high-bitrate streams run properly without blocking other critical traffic. QoS improves user experience by reducing buffering, lag, and voice/video breaks. QoS optimizes resource usage by using scheduling and queuing so multimedia and normal data can share the network efficiently. Multimedia Multimedia is a digital way of presenting information by combining multiple media types (like text, images, audio, video, and animation) in one system, often with user interaction. Components of Multimedia\nText: Written content used to display information clearly, with formatting like font, size, and style.\nGraphics: Visual elements such as photos, diagrams, charts, and illustrations that improve understanding.\nAnimation: Moving visuals created by showing images in sequence to make content more engaging.\nVideo: Continuous moving frames (usually 15–30 fps) often with audio, used for demonstrations and streaming.\nAudio: Sound like speech, music, and effects that adds realism and improves user experience (e.g., MP3, WMA)."
            }
          ],
          "quick_revision": [
            "Quality of Service and Multimedia Quality of Service (QoS) refers to a set of traffic management and control mechanisms used in computer networks to prioritize and…",
            "Packet Loss: Some packets get dropped in the network (often due to congestion).",
            "Error Rate: Error rate indicates the frequency of corrupted or lost packets during transmission.",
            "Stateless Solutions: Routers do not maintain detailed information about individual traffic flows.",
            "Stateful Solutions: Routers maintain per-flow state information for each traffic stream.",
            "Prioritizes critical apps: QoS gives higher priority to real-time traffic like VoIP, video meetings, and streaming so it stays smooth.",
            "Supports SLAs: QoS helps meet SLA targets for delay, throughput, and availability.",
            "Monitoring & Tuning: The team continuously tracks performance metrics and adjusts QoS rules to maintain consistent results.",
            "Integrated Services (IntServ): Integrated Services (IntServ) provides strict QoS guarantees by reserving resources for each individual flow before traffic starts.",
            "QoS packet discard: During congestion, lower-priority packets are dropped first to protect critical flows.",
            "T-Specification (T-spec): Describes traffic characteristics such as data rate and burstiness.",
            "Differentiated Services (DiffServ): Differentiated Services (DiffServ) provides QoS by prioritizing traffic classes instead of reserving resources for every flow.",
            "Shaping & policing: Shaping smooths traffic to a set rate; policing enforces limits by dropping or re-marking excess packets.",
            "Congestion management: Control queue buildup to reduce delay and packet loss during high traffic."
          ]
        },
        {
          "id": "techniques-for-achieving-qos",
          "title": "Techniques for achieving QoS",
          "summary": "QoS Optimization Techniques Quality of Service (QoS) improvement techniques are network methods that control how traffic is handled so time-critical applications get the performance they need, even when the network is busy.",
          "sections": [
            {
              "id": "techniques-for-achieving-qos--overview",
              "heading": "Overview",
              "explanation": "QoS Optimization Techniques Quality of Service (QoS) improvement techniques are network methods that control how traffic is handled so time-critical applications get the performance they need, even when the network is busy. Needed because networks carry mixed traffic (voice, video and data) on the same links Helps real-time applications by reducing delay, jitter, and packet loss Assigns priority to important traffic when congestion happens Controls bandwidth usage so one flow doesn’t dominate others Techniques for QoS"
            },
            {
              "id": "techniques-for-achieving-qos--traffic-policing",
              "heading": "Traffic Policing",
              "explanation": "Checks traffic speed against a set limit and immediately drops or lowers the priority of packets that exceed it. Measures traffic against a predefined rate or policy Operates without buffering excess packets Prevents a single user or application from overusing bandwidth Commonly implemented at network ingress points to control incoming traffic"
            },
            {
              "id": "techniques-for-achieving-qos--congestion-management-and-avoidance",
              "heading": "Congestion Management and Avoidance",
              "explanation": "Regulate packet queues and proactively respond to rising traffic levels to maintain stable network performance. Congestion management controls queue buildup and ensures orderly packet transmission Congestion avoidance identifies early congestion signals before buffers overflow Early action helps minimize delay and prevents large-scale retransmissions Random Early Detection (RED) drops packets selectively to notify senders about congestion Weighted RED (WRED) varies drop probability based on traffic priority to safeguard critical flows"
            },
            {
              "id": "techniques-for-achieving-qos--admission-control",
              "heading": "Admission Control",
              "explanation": "Allows new traffic flows only when the network has enough resources to support them without harming the performance of existing services. Checks availability of bandwidth, delay margin, and buffer capacity Admits a new flow only if current QoS levels can still be maintained Helps avoid overload and uncontrolled congestion Supports predictable performance for real-time and high-priority traffic Common in mission-critical and guaranteed-service network environments"
            },
            {
              "id": "techniques-for-achieving-qos--resource-reservation",
              "heading": "Resource Reservation",
              "explanation": "It dedicates specific network capacity to selected traffic flows to ensure stable and predictable performance. Allocates bandwidth and necessary resources before transmission starts Provides assured service for delay-sensitive applications Minimizes competition with best-effort traffic Suitable for environments requiring strict performance guarantees RSVP (Resource Reservation Protocol) conceptually signals and establishes reservations across the path"
            },
            {
              "id": "techniques-for-achieving-qos--overprovisioning",
              "heading": "Overprovisioning",
              "explanation": "Network design approach that adds extra capacity so normal traffic spikes are less likely to cause congestion and performance issues. Increases link bandwidth/resources to absorb peak loads Lowers congestion chances without relying heavily on QoS controls Works best when the network is lightly to moderately loaded Cannot ensure predictable service during severe or unpredictable congestion Expensive and inefficient at scale due to unused reserved capacity QoS Requirements for Different Applications Application Reliability Delay Jitter Bandwidth E-mail High Low File Transfer High Low Medium Web Access High Medium Low Medium Remote Login High Medium Low Audio on Demand Medium Low High Medium Video on Demand Medium Low High Telephony (VoIP) Medium High Low Video Conferencing Medium High Traffic Classification and Marking Process of identifying different types of network traffic and labelling packets so the network can apply appropriate QoS policies to them. Traffic classification groups packets based on parameters like application type, protocol, port number, or source/destination address (e.g., voice, video, best-effort data). Packet marking assigns a priority value to classified packets (such as DSCP or priority bits) to indicate how network devices should treat them. Marked packets allow routers and switches to differentiate traffic and apply mechanisms like priority queuing, shaping, or policing effectively. Without classification and marking, all traffic is treated equally, making QoS enforcement ineffective."
            }
          ],
          "quick_revision": [
            "QoS Optimization Techniques Quality of Service (QoS) improvement techniques are network methods that control how traffic is handled so time-critical applications get the…",
            "Traffic Policing: Checks traffic speed against a set limit and immediately drops or lowers the priority of packets that exceed it.",
            "Congestion Management and Avoidance: Regulate packet queues and proactively respond to rising traffic levels to maintain stable network performance.",
            "Admission Control: Allows new traffic flows only when the network has enough resources to support them without harming the performance of existing services.",
            "Resource Reservation: It dedicates specific network capacity to selected traffic flows to ensure stable and predictable performance.",
            "Overprovisioning: Network design approach that adds extra capacity so normal traffic spikes are less likely to cause congestion and performance issues."
          ]
        },
        {
          "id": "token-bucket",
          "title": "Token Bucket",
          "summary": "Algorithm The Token Bucket Algorithm is a traffic control method where tokens are added to a bucket at a fixed rate (up to a maximum capacity), and packets can be transmitted only if enough tokens are available.",
          "sections": [
            {
              "id": "token-bucket--overview",
              "heading": "Overview",
              "explanation": "Algorithm The Token Bucket Algorithm is a traffic control method where tokens are added to a bucket at a fixed rate (up to a maximum capacity), and packets can be transmitted only if enough tokens are available. Controls the average sending rate of traffic entering the network Supports burst transmission within the bucket capacity while keeping long-term limits Used in QoS, traffic shaping, and traffic policing Need for the Token Bucket Algorithm Token Bucket is needed because fixed-rate limiting forces traffic to move at a constant speed, while real network traffic is naturally bursty. It provides controlled flexibility so short spikes don’t get blocked, while long-term bandwidth limits are still enforced. Networks have limited bandwidth, so uncontrolled traffic can cause congestion and packet loss Real traffic (web, video, APIs) arrives in bursts, not at a steady rate Fixed-rate limiters may delay or drop packets even during short, legitimate spikes Applications often need brief high-speed sending to stay responsive Unrestricted bursts can overload the network if not controlled Token Bucket balances burst allowance with long-term average rate control Key Terminology and Parameters\nToken: A permission unit required to transmit data; a packet can be sent only if enough tokens are available.\nBucket: A logical storage that holds tokens until they are used.\nToken Generation Rate (r): Tokens added per second; controls the long-term average sending rate.\nBucket Capacity (B): Maximum tokens the bucket can store; defines the maximum burst size."
            },
            {
              "id": "token-bucket--token-consumption-rule",
              "heading": "Token Consumption Rule",
              "explanation": "Tokens are deducted based on transmitted data, commonly 1 token per byte (or sometimes per packet), depending on configuration. Working Tokens are added to the bucket at a constant rate (r) and stored up to the maximum capacity (B) Idle periods allow tokens to accumulate, enabling future burst transmission When a packet arrives, the system checks whether enough tokens are available If sufficient tokens exist, they are deducted and the packet is sent immediately If tokens are unavailable, the packet is delayed, queued, or dropped until new tokens are generated Steps Involved in Token Bucket Algorithm"
            },
            {
              "id": "token-bucket--bucket-creation",
              "heading": "Bucket Creation",
              "explanation": "A logical bucket with a fixed capacity (rate limit) is defined, representing the maximum number of tokens it can hold.\nToken Refill: Tokens are added to the bucket at a constant rate until the bucket reaches its capacity.\nRequest Arrival: When a request (or packet) arrives, the system checks whether tokens are available."
            },
            {
              "id": "token-bucket--token-consumption",
              "heading": "Token Consumption",
              "explanation": "If tokens are present, one token is removed, and the request is allowed to proceed. The time of consumption is also recorded."
            },
            {
              "id": "token-bucket--bucket-empty",
              "heading": "Bucket Empty",
              "explanation": "If no tokens remain, incoming requests are denied or delayed. This prevents overload and keeps the system within the defined rate limit. Flow Characteristics Token Bucket primarily manages bandwidth and traffic rate, but it indirectly influences other flow characteristics that affect overall network performance.\nReliability: Not directly controlled by Token Bucket; reliability is mainly handled by transport protocols like TCP.\nDelay: By regulating traffic, it reduces excessive queuing, which can help lower transmission delay.\nJitter: Smoother traffic flow minimizes large timing variations, improving real-time application performance.\nBandwidth: Controls the average transmission rate and allows limited bursts, helping prevent sudden network overload. Token Bucket vs Leaky Bucket Algorithm Token Bucket Algorithm Leaky Bucket Algorithm It depends on tokens. It does not depend on tokens. If bucket is full, token is discarded but not the packet. If bucket is full, then packets are discarded. Packets can only transmit when there are enough tokens. Packets are transmitted continuously. Allows large bursts to be sent at faster rate. Bucket has maximum capacity. Sends the packet at a constant rate. The bucket holds tokens generated at regular intervals of time. When the host has to send a packet , packet is thrown in bucket. If there is a ready packet , a token is removed from Bucket and packet is send. Bursty traffic is converted into uniform traffic by leaky bucket. If there is no token in the bucket, then the packet cannot be sent. In practice bucket is a finite queue outputs at finite rate. Advantages Supports burst traffic while maintaining a controlled long-term average rate Reduces sudden congestion by limiting how fast traffic can build up over time Uses bandwidth efficiently by allowing unused capacity to be used later as bursts Provides flexible rate control through tunable parameters like token rate (r) and bucket size (B) Commonly used in QoS, traffic shaping, and policing to manage different traffic classes Disadvantages Does not guarantee zero packet loss, especially during heavy congestion Requires proper buffering/queue management to avoid drops when tokens are insufficient Bursts can still create short-term congestion or jitter if the network is already busy Needs correct tuning of token rate (r) and bucket size (B); wrong values can cause either poor performance or weak control Applications Used in routers and switches to enforce QoS policies for different traffic classes Applied in traffic shaping to smooth outgoing traffic and reduce congestion Used by ISPs to enforce user bandwidth plans and prevent one user from dominating the link Common in video streaming and live media to handle short bitrate spikes without breaking average limits Used in cloud networking and APIs for rate limiting, fair usage control, and protection against traffic spikes\nExample: A token bucket is configured with a token rate (r) = 5 Mbps and a bucket capacity (B) = 10 MB. If the sender stays idle, tokens accumulate until the bucket becomes full. When a burst occurs, the sender can transmit up to 10 MB quickly (using the stored tokens), and once the stored tokens are consumed, transmission continues at the steady long-term rate of 5 Mbps."
            }
          ],
          "quick_revision": [
            "Algorithm The Token Bucket Algorithm is a traffic control method where tokens are added to a bucket at a fixed rate (up to a maximum capacity), and packets can be…",
            "Token Consumption Rule: Tokens are deducted based on transmitted data, commonly 1 token per byte (or sometimes per packet), depending on configuration.",
            "Bucket Creation: A logical bucket with a fixed capacity (rate limit) is defined, representing the maximum number of tokens it can hold.",
            "Token Consumption: If tokens are present, one token is removed, and the request is allowed to proceed.",
            "Bucket Empty: If no tokens remain, incoming requests are denied or delayed."
          ]
        },
        {
          "id": "leaky-bucket",
          "title": "Leaky Bucket",
          "summary": "Leaky bucket algorithm The Leaky Bucket Algorithm is a method used in networking to regulate the rate at which data is transmitted.",
          "sections": [
            {
              "id": "leaky-bucket--overview",
              "heading": "Overview",
              "explanation": "Leaky bucket algorithm The Leaky Bucket Algorithm is a method used in networking to regulate the rate at which data is transmitted. It maintains a steady sending speed, even when data arrives in sudden bursts, preventing the network from becoming overloaded. Incoming packets are stored in a fixed-size buffer before transmission. Data is released into the network at a constant rate. Packets arriving after the buffer is full are discarded. Helps routers and switches use bandwidth in a controlled manner. Working A Leaky Bucket algorithm uses a FIFO queue to regulate traffic. For fixed-size packets, a constant number are removed at each clock tick. For variable-size packets, transmission is based on a fixed byte/bit rate. The following is an algorithm for variable-length packets: 1. Initialize a counter to n at the tick of the clock. 2. Repeat until n is smaller than the packet size of the packet at the head of the queue. Pop a packet out of the head of the queue, say P. Send the packet P, into the network Decrement the counter by the size of packet P. 3. Reset the counter and go to step 1.\nExample: Let n=1000 Let Packet = Since n > size of the packet at the head of the Queue, i.e. n > 200 Therefore, n = 1000-200 = 800 Packet size of 200 is sent into the network. Now, again n > size of the packet at the head of the Queue, i.e. n > 400 Therefore, n = 800-400 = 400 Packet size of 400 is sent into the network. Since, n < size of the packet at the head of the Queue, i.e. n < 450Therefore, the procedure is stopped. Initialize n = 1000 on another tick of the clock. This procedure is repeated until all the packets are sent into the network."
            },
            {
              "id": "leaky-bucket--formulas-code",
              "heading": "Formulas & Code",
              "explanation": "Below is the implementation of above explained approach C++ // cpp program to implement leakybucket #include <bits/stdc++.h> using namespace std ; int main () { int no_of_queries , storage , output_pkt_size ; int input_pkt_size , bucket_size , size_left ; // initial packets in the bucket storage = 0 ; // total no. of times bucket content is checked no_of_queries = 4 ; // total no. of packets that can // be accommodated in the bucket bucket_size = 10 ; // no. of packets that enters the bucket at a time input_pkt_size = 4 ; // no. of packets that exits the bucket at a time output_pkt_size = 1 ; for ( int i = 0 ; i < no_of_queries ; i ++ ) // space left { size_left = bucket_size - storage ; if ( input_pkt_size <= size_left ) { // update storage storage += input_pkt_size ; } else { printf ( \"Packet loss = %d \\n \" , input_pkt_size ); } printf ( \"Buffer size= %d out of bucket size= %d \\n \" , storage , bucket_size ); storage -= output_pkt_size ; } return 0 ; } // This code is contributed by bunny09262002 // Improved by: rishitchaudhary #include <bits/stdc++.h> using namespace std ; int main () { int no_of_queries , storage , output_pkt_size ; int input_pkt_size , bucket_size , size_left ; storage = 0 ; no_of_queries = 4 ; bucket_size = 10 ; input_pkt_size = 4 ; output_pkt_size = 1 ; for ( int i = 0 ; i < no_of_queries ; i ++ ) { size_left = bucket_size - storage ; if ( input_pkt_size <= size_left ) { storage += input_pkt_size ; } else { printf ( \"Packet loss = %d\\n\" , input_pkt_size ); } printf ( \"Buffer size= %d out of bucket size= %d\\n\" , storage , bucket_size ); storage -= output_pkt_size ; } return 0 ; } Java // Java Implementation of Leaky bucket import java.io.* ; import java.util.* ; class Leakybucket { public static void main ( String [] args ) { int no_of_queries , storage , output_pkt_size ; int input_pkt_size , bucket_size , size_left ; // initial packets in the bucket storage = 0 ; // total no. of times bucket content is checked no_of_queries = 4 ; // total no. of packets that can // be accommodated in the bucket bucket_size = 10 ; // no. of packets that enters the bucket at a time input_pkt_size = 4 ; // no. of packets that exits the bucket at a time output_pkt_size = 1 ; for ( int i = 0 ; i < no_of_queries ; i ++ ) { size_left = bucket_size - storage ; // space left if ( input_pkt_size <= ( size_left )) { storage += input_pkt_size ; } else { System . out . println ( \"Packet loss = \" + input_pkt_size ); } System . out . println ( \"Buffer size= \" + storage + \" out of bucket size= \" + bucket_size ); storage -= output_pkt_size ; } // Improved by: rishitchaudhary size_left = bucket_size - storage ; Python # initial packets in the bucket storage = 0 # total no. of times bucket content is checked no_of_queries = 4 # total no. of packets that can # be accommodated in the bucket bucket_size = 10 # no. of packets that enters the bucket at a time input_pkt_size = 4 # no. of packets that exits the bucket at a time output_pkt_size = 1 for i in range ( 0 , no_of_queries ) # space left size_left = bucket_size - storage if input_pkt_size <= size_left # update storage storage += input_pkt_size else print ( \"Packet loss = \" , input_pkt_size ) print ( f \"Buffer size= { storage } out of bucket size = { bucket_size } \" ) # as packets are sent out into the network, the size of the storage decreases storage -= output_pkt_size # This code is contributed by Arpit Jain # Improved by: rishitchaudhary C# // C# Implementation of Leaking bucket using System ; class Leakingbucket { static void Main ( string [] args ) { int no_of_queries , storage , output_pkt_size ; int input_pkt_size , bucket_size , size_left ; // initial packets in the bucket storage = 0 ; // total no. of times bucket content is checked no_of_queries = 4 ; // total no. of packets that can // be accommodated in the bucket bucket_size = 10 ; // no. of packets that enters the bucket at a time input_pkt_size = 4 ; // no. of packets that exits the bucket at a time output_pkt_size = 1 ; for ( int i = 0 ; i < no_of_queries ; i ++ ) { size_left = bucket_size - storage ; // space left if ( input_pkt_size <= ( size_left )) { storage += input_pkt_size ; } else { Console . WriteLine ( \"Packet loss = \" + input_pkt_size ); } Console . WriteLine ( \"Buffer size= \" + storage + \" out of bucket size= \" + bucket_size ); storage -= output_pkt_size ; } // This code is Contributed by phasing17 Console . WriteLine ( \"Buffer size= \" + storage + \" out of bucket size= \" + bucket_size ); JavaScript // JS code to implement the approach // initial packets in the bucket let storage = 0 ; // total no. of times bucket content is checked let noOfQueries = 4 ; // total no. of packets that can // be accommodated in the bucket let bucketSize = 10 ; // no. of packets that enters the bucket at a time let inputPktSize = 4 ; // no. of packets that exits the bucket at a time let outputPktSize = 1 ; for ( let i = 0 ; i < noOfQueries ; i ++ ) { // space left let sizeLeft = bucketSize - storage ; if ( inputPktSize <= sizeLeft ) { // update storage storage += inputPktSize ; } else { console . log ( \"Packet loss = \" , inputPktSize ); } console . log ( `Buffer size= ${ storage } out of bucket size = ${ bucketSize } ` ); // as packets are sent out into the network, the size of the storage decreases storage -= outputPktSize ; } // This code is contributed by phasing17 Output Buffer size= 4 out of bucket size= 10 Buffer size= 7 out of bucket size= 10 Buffer size= 10 out of bucket size= 10 Packet loss = 4 Buffer size= 9 out of bucket size= 10 Leaky Bucket vs Token Bucket Leaky Bucket Token Bucket When the host has to send a packet , packet is thrown in bucket. In this, the bucket holds tokens generated at regular intervals of time. Bucket leaks at constant rate Bucket has maximum capacity. Bursty traffic is converted into uniform traffic by leaky bucket. If there is a ready packet , a token is removed from Bucket and packet is send. In practice bucket is a finite queue outputs at finite rate If there is no token in the bucket, then the packet cannot be sent. Advantage Prevents sudden traffic spikes that can cause congestion. Produces a smooth and consistent data flow. Simple to implement and requires minimal control logic. Makes bandwidth usage more predictable. Suitable for applications that require steady transmission. Disadvantages Does not handle burst traffic efficiently. Packets may be dropped when the buffer becomes full. Available bandwidth may remain unused during low traffic periods. Less adaptable to dynamic network conditions. Not ideal for highly variable data traffic. Applications Traffic shaping in routers and switches. Bandwidth control in Quality of Service (QoS) networks. Voice over IP (VoIP) to ensure stable call quality. Video streaming for continuous data delivery. Legacy networks such as ATM that require predictable traffic patterns."
            }
          ],
          "quick_revision": [
            "Leaky bucket algorithm The Leaky Bucket Algorithm is a method used in networking to regulate the rate at which data is transmitted.",
            "Formulas & Code: Below is the implementation of above explained approach C++ // cpp program to implement leakybucket #include <bits/stdc++.h> using namespace std ; int main () { int…"
          ]
        }
      ]
    },
    {
      "title": "Network Security",
      "subsections": [
        {
          "id": "authen-tic-ation",
          "title": "Authen­tic­ation",
          "summary": "Authentication Authentication is the process of confirming the identity of a user, device, or system by validating provided credentials before granting access to a network or its resources.",
          "sections": [
            {
              "id": "authen-tic-ation--overview",
              "heading": "Overview",
              "explanation": "Authentication Authentication is the process of confirming the identity of a user, device, or system by validating provided credentials before granting access to a network or its resources. It prevents unauthorized usage of systems It ensures secure interaction within a network environment It maintain security, reliability, and trust within the system Authentication Methods Authentication can be implemented using different techniques based on the type of credentials used. The commonly used methods are:"
            },
            {
              "id": "authen-tic-ation--password-based-authentication",
              "heading": "Password-Based Authentication",
              "explanation": "The most commonly used authentication technique Each user is assigned a unique username and password During login, the entered password is compared with the stored (usually hashed) password If the credentials match, access is granted; otherwise, access is denied Security depends on password strength and protection against attacks like guessing or phishing"
            },
            {
              "id": "authen-tic-ation--physical-identification",
              "heading": "Physical Identification",
              "explanation": "Uses physical objects such as ID cards, badges, tokens, or smart cards The system verifies possession of the physical item to authenticate the user Often combined with passwords or PINs to increase security Smart cards can store authentication data internally Commonly used in ATMs, offices, and restricted access areas Loss or theft of the card can pose a security risk"
            },
            {
              "id": "authen-tic-ation--biometric-authentication",
              "heading": "Biometric Authentication",
              "explanation": "Relies on unique biological or behavioral characteristics of individuals Eliminates the need to remember passwords or carry physical tokens Difficult to replicate, providing higher security Requires specialized hardware and accurate data capture"
            },
            {
              "id": "authen-tic-ation--common-biometric-techniques",
              "heading": "Common biometric techniques",
              "explanation": "Facial recognition – analyzes facial features Fingerprint recognition – uses ridge patterns of fingers Hand geometry – measures shape and size of the hand Retinal pattern recognition – scans the eye structure Signature verification – analyzes writing style Voice recognition – matches voice frequency patterns Types of Authentication Authentication systems are classified based on the number of independent factors used to verify a user’s identity. Increasing the number of factors improves security by reducing reliance on a single credential."
            },
            {
              "id": "authen-tic-ation--single-factor-authentication-sfa",
              "heading": "Single-Factor Authentication (SFA)",
              "explanation": "Single-Factor Authentication relies on one form of verification, typically a username and password The system grants access when the entered credential matches the stored value It is widely used in systems where ease of access is prioritized over high security Security is entirely dependent on password strength and user practices\nAdvantages: Simple and quick to use Easy to implement and manage Cost-effective for basic systems\nDisadvantages: Provides limited protection Easily compromised through weak passwords, phishing, or brute-force attacks"
            },
            {
              "id": "authen-tic-ation--two-factor-authentication-2fa",
              "heading": "Two-Factor Authentication (2FA)",
              "explanation": "Two-Factor Authentication requires two different authentication factors to confirm identity Typically combines something the user knows (password) with something the user has (OTP, token, smart card) Even if one factor is compromised, the second factor helps prevent unauthorized access Commonly used in online banking, email services, and enterprise systems\nAdvantages: Offers significantly improved security over SFA Reduces the impact of stolen or leaked passwords\nDisadvantages: Adds an extra step during login Depends on additional devices or network connectivity"
            },
            {
              "id": "authen-tic-ation--multi-factor-authentication-mfa",
              "heading": "Multi-Factor Authentication (MFA)",
              "explanation": "Multi-Factor Authentication uses two or more independent factors for identity verification It may combine passwords, physical devices, and biometric traits Designed for environments where data sensitivity and security are critical Provides layered protection against advanced attacks\nAdvantages: Strong protection against unauthorized access Minimizes risks from credential compromise\nDisadvantages: More complex to deploy and manage Higher cost and possible dependency on third-party services Applications Authentication is widely used in computer networks and systems to ensure secure and controlled access to resources. Its common applications include:\nUser Login Systems: Verifies user identity in operating systems, websites, and applications before access is granted.\nBanking and Financial Systems: Secures ATMs, mobile banking, and online transactions using PINs, OTPs, and biometric authentication.\nNetwork Access Control: Restricts access to private and enterprise networks to authorized users and devices only.\nEmail and Cloud Services: Protects sensitive user data using password-based and multi-factor authentication mechanisms.\nEnterprise and Organizational Systems: Controls access to internal servers, applications, and confidential organizational resources."
            }
          ],
          "quick_revision": [
            "Authentication Authentication is the process of confirming the identity of a user, device, or system by validating provided credentials before granting access to a…",
            "Password-Based Authentication: The most commonly used authentication technique Each user is assigned a unique username and password During login, the entered password is compared with the stored…",
            "Physical Identification: Uses physical objects such as ID cards, badges, tokens, or smart cards The system verifies possession of the physical item to authenticate the user Often combined with…",
            "Biometric Authentication: Relies on unique biological or behavioral characteristics of individuals Eliminates the need to remember passwords or carry physical tokens Difficult to replicate,…",
            "Common biometric techniques: Facial recognition – analyzes facial features Fingerprint recognition – uses ridge patterns of fingers Hand geometry – measures shape and size of the hand Retinal…",
            "Single-Factor Authentication (SFA): Single-Factor Authentication relies on one form of verification, typically a username and password The system grants access when the entered credential matches the…",
            "Two-Factor Authentication (2FA): Two-Factor Authentication requires two different authentication factors to confirm identity Typically combines something the user knows (password) with something the…",
            "Multi-Factor Authentication (MFA): Multi-Factor Authentication uses two or more independent factors for identity verification It may combine passwords, physical devices, and biometric traits Designed for…"
          ]
        },
        {
          "id": "firewalls",
          "title": "Firewalls",
          "summary": "Introduction of Firewall in Computer Network A Firewall is a network security system, available as hardware or software, that monitors and controls incoming and outgoing traffic based on predefined rules.",
          "sections": [
            {
              "id": "firewalls--overview",
              "heading": "Overview",
              "explanation": "Introduction of Firewall in Computer Network A Firewall is a network security system, available as hardware or software, that monitors and controls incoming and outgoing traffic based on predefined rules. It acts like a security guard, filtering data packets to either: Accept Allow the traffic. Reject Block with an error response.\nDrop: Block silently without response. Firewall acting as a barrier between LAN and WAN. Importance\nPrevent Unauthorized Access: Like a locked door with a guard, only trusted users and traffic are allowed through.\nBlock Malicious Traffic: Harmful data such as viruses, phishing attempts, or denial-of-service (DoS) attacks are stopped before reaching the system.\nProtect Sensitive Information: Safeguards personal and business data from theft or accidental leaks.\nControl Network Usage: Enforces policies such as parental controls, workplace restrictions, or government filtering."
            },
            {
              "id": "firewalls--mitigate-insider-risks",
              "heading": "Mitigate Insider Risks",
              "explanation": "Detects suspicious applications or data exfiltration attempts from within the network. Working of Firewall A firewall inspects all incoming and outgoing traffic and decide whether to allow or block it. All data packets entering or leaving the network must first pass through the firewall. The firewall examines each packet against predefined security rules set by the organization. If the packet matches safe rules, it is allowed; if it is suspicious, blacklisted, or contains malicious content, it is blocked. Blocked or unusual traffic is recorded in logs, and real-time alerts may be generated for serious threats. Since it is not possible to define every rule, the firewall applies a default policy (accept, reject, or drop). Setting the default policy to drop or reject is considered best practice to prevent unauthorized access.\nDefault Policy: A firewall needs a default action (accept, reject, or drop) for traffic not covered by rules. For example, if no rule exists for SSH, the default applies. To prevent unauthorized access, it is best set to drop or reject. Types of Firewall Firewalls can be categorized based on their generation."
            },
            {
              "id": "firewalls--network-placement",
              "heading": "Network Placement",
              "explanation": "Packet Filtering Firewall Stateful Inspection Firewall Proxy Firewall (Application Level) Circuit-Level Gateway Web Application Firewall (WAF) Next-Generation Firewall (NGFW)\nSystems Protected: Network Firewall Host-Based Firewall\nData Filtering Method: Perimeter Firewall Internal Firewall Distributed Firewall\nForm Factors: Hardware Firewall Software Firewall"
            }
          ],
          "quick_revision": [
            "Introduction of Firewall in Computer Network A Firewall is a network security system, available as hardware or software, that monitors and controls incoming and outgoing…",
            "Mitigate Insider Risks: Detects suspicious applications or data exfiltration attempts from within the network.",
            "Network Placement: Packet Filtering Firewall Stateful Inspection Firewall Proxy Firewall (Application Level) Circuit-Level Gateway Web Application Firewall (WAF) Next-Generation Firewall…"
          ]
        },
        {
          "id": "mac-address-filtering",
          "title": "MAC Address Filtering",
          "summary": "MAC Filtering in Computer Network MAC filtering is a network access control method where a router or switch allows or blocks devices based on their MAC (Media Access Control) address.",
          "sections": [
            {
              "id": "mac-address-filtering--overview",
              "heading": "Overview",
              "explanation": "MAC Filtering in Computer Network MAC filtering is a network access control method where a router or switch allows or blocks devices based on their MAC (Media Access Control) address. Works by keeping an allow list (whitelist) of permitted MAC addresses or a deny list (blacklist) of blocked ones Commonly used in Wi-Fi routers to restrict which devices can join the network Provides basic control, but it’s not strong security alone because MAC addresses can be spoofed Working When a device tries to join a network, the router or access point checks the device’s MAC address against the configured filtering rules. In allow list mode, the network permits access only to devices whose MAC addresses are explicitly approved by the administrator. In deny list mode, the network blocks only the MAC addresses marked as restricted, while other devices are allowed to connect. If the same MAC address appears in both lists, the deny rule usually takes priority to avoid accidental access. MAC filtering can be enforced at the connection layer (the device cannot join the Wi-Fi/network) or at the DHCP layer (the device connects but does not receive an IP address, so it cannot use network services). In real networks, MAC filtering is used as an extra security layer along with strong Wi-Fi encryption and authentication, not as the only protection."
            },
            {
              "id": "mac-address-filtering--steps-windows-dhcp-example",
              "heading": "Steps (Windows DHCP Example)",
              "explanation": "Open the DHCP Console, expand the server, and select IPv4. Right-click IPv4, choose Properties, and navigate to the Filters tab. Enable the Allow list or Deny list based on the desired access policy, and add the required MAC addresses. Click OK to apply and save the configuration changes. Updating MAC Filterin g Updating MAC filtering involves modifying the allow or deny lists in the router settings to control which devices can access the network. Open your router’s admin page using a browser or the router’s app. Go to the Wireless or Wireless Security section and locate MAC Filtering settings. In some routers, the same setting may appear as MAC Address Control, Wireless MAC Authentication, or Access Control. If MAC filtering is enabled, add the device’s MAC address (for example, a Nintendo system) to the allowed list, and then save the changes. If you do not want MAC filtering on your network, disable it and save the configuration. Applications\nAccess control: It restricts network access to only authorized devices.\nParental control: It limits children’s internet access by permitting only selected devices.\nBYOD enforcement: It allows only approved personal devices to connect to company networks.\nGuest access: It provides controlled access for visitors without exposing the main network.\nWireless security: It blocks unknown devices from connecting to Wi-Fi.\nIoT security: It prevents untrusted devices from accessing smart home or industrial IoT networks.\nTraffic management: It limits the number of devices that can connect at the same time.\nCompliance support: It helps enforce organizational network access policies."
            },
            {
              "id": "mac-address-filtering--troubleshooting-and-monitoring",
              "heading": "Troubleshooting and monitoring",
              "explanation": "It helps identify unauthorized devices and track which devices are connected. Security Risks Attackers can spoof a MAC address by changing their device address to one that is already allowed. MAC addresses can be learned by sniffing nearby Wi-Fi traffic, especially when the network is weakly protected. MAC filtering does not provide encryption, so it cannot protect data privacy or stop eavesdropping on its own. Managing MAC lists takes effort because every new device must be added and old entries must be updated or removed. It does not scale well in large networks because maintaining many MAC entries becomes tedious and error-prone. Legitimate devices can be blocked by mistake if their MAC address changes or if MAC randomization is enabled."
            }
          ],
          "quick_revision": [
            "MAC Filtering in Computer Network MAC filtering is a network access control method where a router or switch allows or blocks devices based on their MAC (Media Access…",
            "Steps (Windows DHCP Example): Open the DHCP Console, expand the server, and select IPv4.",
            "Troubleshooting and monitoring: It helps identify unauthorized devices and track which devices are connected."
          ]
        },
        {
          "id": "vpn",
          "title": "VPN",
          "summary": "Virtual Private Network - VPN A Virtual Private Network (VPN) is a security technology that creates an encrypted tunnel between your device and a VPN server over the internet, so your traffic travels privately and your real IP address is hidden.",
          "sections": [
            {
              "id": "vpn--overview",
              "heading": "Overview",
              "explanation": "Virtual Private Network - VPN A Virtual Private Network (VPN) is a security technology that creates an encrypted tunnel between your device and a VPN server over the internet, so your traffic travels privately and your real IP address is hidden.\nPrivacy protection: Hides your IP and encrypts traffic, so ISPs, advertisers, and third parties can’t easily monitor your browsing.\nSecurity on public Wi-Fi: Encryption protects logins and personal data on unsafe networks (airports, cafes).\nBypass geo-restrictions: Changes your apparent location by routing through another region’s server, unlocking region-limited sites or services.\nReduce ISP throttling: Since traffic is encrypted, ISPs can’t easily identify specific activities (streaming/gaming) to selectively slow them.\nSecure remote access: Let employees connect to internal company resources securely from outside the organization. VPN Working"
            },
            {
              "id": "vpn--data-encryption",
              "heading": "Data encryption",
              "explanation": "Connection establishment: When you turn on the VPN, the VPN client authenticates you and sets up a secure session with a VPN server.\nYour outgoing traffic is encrypted using cryptographic algorithms, so intercepted packets look like unreadable ciphertext to hackers, ISPs, or attackers on public Wi-Fi."
            },
            {
              "id": "vpn--traffic-redirection-tunnelling",
              "heading": "Traffic redirection (tunnelling)",
              "explanation": "The encrypted traffic is sent through the tunnel to the VPN server, and the VPN server replaces your real IP with its own public IP, hiding your identity/location from the destination site.\nDecryption and forwarding: The VPN server decrypts the traffic and forwards it to the actual website/service; replies come back to the VPN server and then travel back to you through the same encrypted tunnel."
            },
            {
              "id": "vpn--end-to-end-protection",
              "heading": "End-to-end protection",
              "explanation": "This tunnel provides privacy (confidentiality), helps maintain integrity against tampering during transit, and improves anonymity by masking your IP. Types of VPN A) Types based on usage (deployment) A deployment-based VPN type describes who is connecting and what network is being protected.\nRemote Access VPN: It allows an individual user to securely connect to a private network over the internet, and it is widely used by employees working remotely."
            },
            {
              "id": "vpn--site-to-site-vpn",
              "heading": "Site-to-Site VPN",
              "explanation": "It securely connects two or more separate networks, such as a head office and branch offices, so internal communication remains protected across locations.\nMobile VPN: It is designed for mobile users and keeps the VPN session stable even when the device switches between Wi-Fi and cellular networks."
            },
            {
              "id": "vpn--mpls-vpn",
              "heading": "MPLS VPN",
              "explanation": "It is a provider-managed enterprise WAN solution that offers scalable connectivity and traffic prioritization, but it typically does not provide end-to-end encryption by default. B) Types based on protocols (tunnelling technology) Protocol-based VPN types describe how the tunnel is created and secured, and they affect speed, security, and compatibility.\nPPTP: It is an older protocol that can be fast, but it provides weak security, so it is mainly used only for legacy systems.\nL2TP/IPsec: It combines L2TP tunnelling with IPsec encryption, which improves security, but it can add performance overhead.\nOpenVPN: It is an open-source protocol that uses SSL/TLS for encryption, and it is widely adopted because it provides strong security and flexibility.\nIKEv2/IPsec: It is a secure and fast protocol that works very well on mobile devices because it reconnects quickly when network conditions change. VPN Protocols"
            },
            {
              "id": "vpn--openvpn",
              "heading": "OpenVPN",
              "explanation": "OpenVPN is an open-source VPN protocol that uses SSL/TLS to provide secure authentication and encryption. It can run on UDP for better speed and on TCP for higher reliability on unstable networks. It supports strong encryption such as AES-256 and ChaCha20 to protect confidentiality and integrity. It works on most operating systems and often passes through NAT and firewalls more easily than older protocols. It is commonly used for secure remote access, privacy, and bypassing network restrictions."
            },
            {
              "id": "vpn--wireguard",
              "heading": "WireGuard",
              "explanation": "WireGuard is a modern VPN protocol designed to be lightweight, fast, and easier to secure due to a small codebase. It mainly uses UDP and modern cryptography like ChaCha20, Poly1305, and BLAKE2s. It delivers high speed and low latency, which makes it suitable for streaming and online gaming. It works very well on mobile devices because it reconnects quickly when the network changes."
            },
            {
              "id": "vpn--ikev2-ipsec",
              "heading": "IKEv2/IPsec",
              "explanation": "IKEv2/IPsec uses IKEv2 to set up secure tunnels and IPsec to provide encryption and integrity. It automatically re-establishes the VPN session when switching between Wi-Fi and mobile data. It supports strong encryption like AES-256 and can use Perfect Forward Secrecy for better long-term security. It is widely used in enterprise environments for secure remote access."
            },
            {
              "id": "vpn--l2tp-ipsec",
              "heading": "L2TP/IPsec",
              "explanation": "L2TP/IPsec combines L2TP tunnelling with IPsec encryption to secure traffic. It provides better security than PPTP, but it uses double encapsulation, which can reduce throughput. It is supported on many platforms, so it is useful for legacy and cross-platform setups. It is often chosen only when newer protocols are not available."
            },
            {
              "id": "vpn--pptp",
              "heading": "PPTP",
              "explanation": "PPTP is an older VPN protocol that is fast but not secure by modern standards. It has low overhead, which improves speed, but it uses weak encryption and is vulnerable to attacks. It is not recommended for sensitive data and should be used only for legacy compatibility."
            },
            {
              "id": "vpn--sstp",
              "heading": "SSTP",
              "explanation": "SSTP is a Microsoft VPN protocol that tunnels traffic over SSL/TLS using TCP port 443. It can pass through many firewalls because it looks similar to normal HTTPS traffic. It offers strong security, especially on Windows, but it has limited support on non-Windows platforms. It is a good choice when networks block common VPN protocols. How to Choose the Right VPN for Your Needs? Choosing the right VPN means selecting a service that gives strong security, good speed, wide compatibility, and reliable operation for your specific use case.\nSecurity features: You should choose a VPN that provides strong encryption such as AES-256, supports secure protocols like OpenVPN, WireGuard, or IKEv2/IPsec, and follows a strict no-logs policy for better privacy."
            },
            {
              "id": "vpn--performance-and-speed",
              "heading": "Performance and speed",
              "explanation": "You should select a VPN with fast servers and low latency if you need smooth streaming, gaming, or video calls, because high latency and overloaded servers reduce performance.\nServer locations: You should prefer a VPN with many server locations across countries, because it improves connection options and helps access geo-restricted content.\nDevice and platform compatibility: You should ensure the VPN supports all your devices, including Windows, macOS, Android, iOS, and routers if you want whole-network protection."
            },
            {
              "id": "vpn--customer-support-and-reliability",
              "heading": "Customer support and reliability",
              "explanation": "You should pick a provider that offers responsive support, clear setup guides, and consistent uptime, so issues get resolved quickly and the connection stays stable. D rawbacks of Using VPN\nReduced internet speed: Encryption and routing traffic through remote servers can increase latency and lower connection speeds.\nInconsistent provider quality: Some VPN providers may use weak encryption or maintain user logs, which can compromise privacy.\nBlocking and restrictions: Certain websites, streaming services, and countries actively detect and block VPN traffic, limiting access.\nConfiguration complexity: Advanced setups and manual configurations may require technical expertise, particularly in enterprise environments.\nCost factors: Free VPNs often impose limits on bandwidth and features, while reliable premium services require ongoing subscription fees."
            }
          ],
          "quick_revision": [
            "Virtual Private Network - VPN A Virtual Private Network (VPN) is a security technology that creates an encrypted tunnel between your device and a VPN server over the…",
            "Data encryption: Connection establishment: When you turn on the VPN, the VPN client authenticates you and sets up a secure session with a VPN server.",
            "Traffic redirection (tunnelling): The encrypted traffic is sent through the tunnel to the VPN server, and the VPN server replaces your real IP with its own public IP, hiding your identity/location from…",
            "End-to-end protection: This tunnel provides privacy (confidentiality), helps maintain integrity against tampering during transit, and improves anonymity by masking your IP. Types of VPN A)…",
            "Site-to-Site VPN: It securely connects two or more separate networks, such as a head office and branch offices, so internal communication remains protected across locations.",
            "MPLS VPN: It is a provider-managed enterprise WAN solution that offers scalable connectivity and traffic prioritization, but it typically does not provide end-to-end encryption by…",
            "OpenVPN: OpenVPN is an open-source VPN protocol that uses SSL/TLS to provide secure authentication and encryption.",
            "WireGuard: WireGuard is a modern VPN protocol designed to be lightweight, fast, and easier to secure due to a small codebase.",
            "IKEv2/IPsec: IKEv2/IPsec uses IKEv2 to set up secure tunnels and IPsec to provide encryption and integrity.",
            "L2TP/IPsec: L2TP/IPsec combines L2TP tunnelling with IPsec encryption to secure traffic.",
            "PPTP: PPTP is an older VPN protocol that is fast but not secure by modern standards.",
            "SSTP: SSTP is a Microsoft VPN protocol that tunnels traffic over SSL/TLS using TCP port 443.",
            "Performance and speed: You should select a VPN with fast servers and low latency if you need smooth streaming, gaming, or video calls, because high latency and overloaded servers reduce…",
            "Customer support and reliability: You should pick a provider that offers responsive support, clear setup guides, and consistent uptime, so issues get resolved quickly and the connection stays stable."
          ]
        }
      ]
    },
    {
      "title": "Wireless and Special Networks",
      "subsections": [
        {
          "id": "wi-fi-standards",
          "title": "Wi-Fi Standards",
          "summary": "Wi-Fi is a wireless networking technology that allows devices to communicate without physical cables.",
          "sections": [
            {
              "id": "wi-fi-standards--overview",
              "heading": "Overview",
              "explanation": "Wi-Fi is a wireless networking technology that allows devices to communicate without physical cables. It is standardized by the IEEE (Institute of Electrical and Electronics Engineers) under the 802.11 family of standards, which defines how wireless devices transmit and receive data. Each Wi-Fi generation (e.g., Wi-Fi 4, Wi-Fi 5, Wi-Fi 6, Wi-Fi 6E, Wi-Fi 7) is primarily defined by two parameters:\nSpeed (Data Rate): The maximum rate at which data can be transmitted over the network, typically measured in Mbps (Megabits per second) or Gbps (Gigabits per second). Higher speeds allow faster downloads, smoother streaming, and better performance for multiple devices. 2.4 GHz band Offers longer range but lower speeds; more prone to interference from devices like microwaves and Bluetooth. 5 GHz band Provides higher speeds with lower interference but shorter range. 6 GHz band (Wi-Fi 6E and above) Introduced in newer standards for even faster speeds, lower latency, and more available channels for congested networks. Wi-Fi Frequency Bands Wi-Fi routers transmit data over different radio frequency bands, which determine speed, range, and interference levels. These bands allow devices to connect and communicate efficiently, depending on network demand and environment.\nSingle-Band Routers: Support only 2.4 GHz or 5 GHz. Suitable for basic internet usage but may face congestion in crowded networks.\nDual-Band Routers: Support both 2.4 GHz and 5 GHz, allowing devices to connect to the optimal band for better speed, reliability, and reduced interference."
            },
            {
              "id": "wi-fi-standards--tri-band-routers",
              "heading": "Tri-Band Routers",
              "explanation": "Add the 6 GHz band (available with Wi-Fi 6E), offering higher speeds, lower latency, and more channels, ideal for multiple high-demand devices in dense networks. Parameter 2.4 GHz 5 GHz 6 GHz (Wi-Fi 6E) Speed Comparatively low High Very high Range High Comparatively low Shortest Interference High Low Very low Number of Channels 11–14 (depends on region) 23+ 59+ Typical Use Cases Web browsing, IoT devices Streaming, gaming, HD video AR/VR, ultra-high-speed apps Latency Higher Lower Very low Different standards of Wi-Fi Wi-Fi standards define how wireless devices communicate over a network. These standards are developed and maintained by the IEEE (Institute of Electrical and Electronics Engineers) under the 802.11 family. The evolution of Wi-Fi standards began in 1997, when IEEE introduced the first wireless LAN standard named IEEE 802.11. Since then, multiple versions have been released to improve speed, range, efficiency, and support for more devices. IEEE Standard Introduced In Frequency Band Used Maximum Speed Provided IEEE 802.11 1997 2.4 GHz 2 Mbps IEEE 802.11a 1999 5 GHz 54 Mbps IEEE 802.11b 1999 2.4 GHz 11 Mbps IEEE 802.11g 2003 2.4 GHz 54 Mbps IEEE 802.11n 2009 2.4 GHz & 5 GHz Up to 600 Mbps IEEE 802.11ac 2014 5 GHz Up to 6.9 Gbps IEEE 802.11ax (Wi-Fi 6) 2019 2.4 GHz & 5 GHz Up to 9.6 Gbps IEEE 802.11ax (Wi-Fi 6E) 2021 2.4, 5 & 6 GHz Up to 9.6 Gbps IEEE 802.11be (Wi-Fi 7) 2024 2.4, 5 & 6 GHz Up to 46 Gbps Recently, the Wi-Fi Alliance introduced a simplified naming scheme for Wi-Fi standards. Instead of using complex technical names such as IEEE 802.11b, the standards are now identified with user-friendly names like Wi-Fi 1, and similarly for newer versions. This change was introduced to make Wi-Fi standards easier for consumers to understand, as the numerical 802.11 naming convention is difficult for non-technical users to recognize and compare. The new naming scheme clearly indicates performance improvements, where a higher Wi-Fi number represents a newer and faster standard. New Naming Standards New Naming Standards refer to the updated conventions introduced by the Wi-Fi Alliance to simplify how Wi-Fi technologies are labeled. Instead of complex IEEE names like 802.11n or 802.11ax, simpler and more user-friendly names such as Wi-Fi 4 or Wi-Fi 6 are used. This improves clarity, consistency, and global recognition, making it easier for consumers to identify and compare Wi-Fi generations. IEEE Standard New Wi-Fi Standard IEEE 802.11n Wi-Fi 4 IEEE 802.11ac Wi-Fi 5 IEEE 802.11ax Wi-Fi 6 IEEE 802.11ax (6 GHz) Wi-Fi 6E IEEE 802.11be Wi-Fi 7"
            }
          ],
          "quick_revision": [
            "Wi-Fi is a wireless networking technology that allows devices to communicate without physical cables.",
            "Tri-Band Routers: Add the 6 GHz band (available with Wi-Fi 6E), offering higher speeds, lower latency, and more channels, ideal for multiple high-demand devices in dense networks."
          ]
        },
        {
          "id": "wireless-lan",
          "title": "Wireless LAN",
          "summary": "Wireless Local Area Network (WLAN) A WLAN (Wireless Local Area Network) is a network that allows devices to connect and communicate wirelessly within a limited area, providing mobility and multiple device connectivity without cables.",
          "sections": [
            {
              "id": "wireless-lan--overview",
              "heading": "Overview",
              "explanation": "Wireless Local Area Network (WLAN) A WLAN (Wireless Local Area Network) is a network that allows devices to connect and communicate wirelessly within a limited area, providing mobility and multiple device connectivity without cables. An Access Point (AP) connects the WLAN to the wired network, allowing clients to communicate through wireless adapters. The coverage of an AP typically spans a building, campus, or tech park, providing high-speed communication for desktops, laptops, mobile devices, and IoT devices. Most modern WLANs use IEEE 802.11 (Wi‑Fi) standards or HiperLAN for connectivity. Setting up an AP is affordable and quick, and users can move freely within its coverage area without losing connectivity. WLAN Architecture WLAN architecture defines how wireless devices connect, communicate, and interact with the wired network. It provides organized coverage, seamless connectivity, and mobility for wireless clients. The design is standardized by IEEE 802.11, which defines components, communication structures, and modes. WLAN Architecture"
            },
            {
              "id": "wireless-lan--stations-sta",
              "heading": "Stations (STA)",
              "explanation": "Devices like laptops, smartphones, and IoT devices. Equipped with a wireless network adapter/controller to communicate with the WLAN."
            },
            {
              "id": "wireless-lan--access-point-ap",
              "heading": "Access Point (AP)",
              "explanation": "Acts as a bridge between wireless clients and the wired network. Manages traffic and ensures devices can communicate within its coverage area. 3.\nBase Service Set (BSS): A group of stations connected under a single AP. Represents the smallest operational unit of a WLAN."
            },
            {
              "id": "wireless-lan--extended-service-set-ess",
              "heading": "Extended Service Set (ESS)",
              "explanation": "Multiple BSSs connected via a Distribution System (DS). Provides broader network coverage, allowing mobility across areas."
            },
            {
              "id": "wireless-lan--distribution-system-ds",
              "heading": "Distribution System (DS)",
              "explanation": "The wired backbone linking multiple BSSs in an ESS. Enables data to travel between APs and across the network efficiently. Types of WLANs"
            },
            {
              "id": "wireless-lan--infrastructure-mode",
              "heading": "Infrastructure Mode",
              "explanation": "Infrastructure mode is a WLAN operating mode in which wireless devices communicate through a centralized device called an Access Point (AP). The AP controls wireless communication and provides connectivity between wireless stations and the wired network. Wireless stations must associate with an Access Point to communicate. The Access Point manages authentication, association, and frame forwarding. Enables access to the wired LAN and Internet. Supports roaming, allowing devices to move between access points without disconnection. Provides better security, scalability, and network management. Commonly used in homes, offices, campuses, and public WLANs."
            },
            {
              "id": "wireless-lan--ad-hoc-mode",
              "heading": "Ad-hoc Mode",
              "explanation": "Ad-hoc mode is a WLAN operating mode in which wireless devices communicate directly with each other without using an Access Point. The network is formed dynamically, and each device participates equally in communication. No centralized control; communication is peer-to-peer. Each device acts as both sender and receiver of data. Suitable for small, temporary, or emergency networks. Easy to set up since no infrastructure is required. Limited in scalability, security, and network management. Does not provide direct access to a wired LAN or Internet. Standards of WLAN WLAN standards define the rules, frequencies, data rates, and communication methods used by wireless devices to transmit data reliably. These standards are specified by the IEEE 802.11 family to ensure interoperability between devices from different vendors. 1. IEEE 802.11 (Wi-Fi) It is the primary global standard for WLAN communication. Specifies the operations of the physical layer (PHY) and MAC layer. Ensures devices from different vendors can communicate seamlessly. Provides the foundation for all subsequent 802.11 variants. 2. 802.11a Operates in the 5 GHz frequency band. Supports higher data rates compared to older standards. Experiences lower interference due to less crowded frequency. Suitable for high-speed wireless communication in smaller areas. 3. 802.11b Operates in the 2.4 GHz frequency band. Offers longer range but lower maximum data speed.. Compatible with many older devices. Often used in homes and small offices. 4. 802.11g Uses the 2.4 GHz band like 802.11b. Provides higher speed than 802.11b. Maintains backward compatibility with 802.11b devices. Commonly used in small networks requiring moderate speed. 5. 802.11n Operates on both 2.4 GHz and 5 GHz bands. Introduces MIMO (Multiple Input Multiple Output) technology for better speed and reliability. Improves coverage and range compared to previous standards. Widely used in modern home and office WLANs. 6. 802.11ac Operates in the 5 GHz band. Supports very high data rates using wider channels. Introduces advanced modulation techniques for better efficiency. Ideal for high-speed applications like video streaming and gaming. 7. 802.11ax (Wi-Fi 6) Operates on 2.4 GHz and 5 GHz, with newer versions also using 6 GHz. Improves efficiency, capacity, and performance in dense networks. Uses technologies like OFDMA and MU-MIMO for better multi-user handling. Designed for modern environments with many connected devices, like offices and smart homes. Working of WLAN The working of a WLAN explains how wireless devices communicate with each other and access the network using radio signals. WLAN operates based on IEEE 802.11 standards, where data is transmitted wirelessly between stations and access points within a defined coverage area. A wireless device (station) sends data as radio signals using its wireless network adapter. The device first associates and authenticates with an Access Point (AP). The Access Point receives the wireless signal and converts it into wired Ethernet frames. Data is then forwarded to the wired LAN or Internet through the distribution system. For incoming data, the AP transmits frames wirelessly to the intended device. WLAN uses CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) to reduce data collisions. Encryption mechanisms like WPA2/WPA3 ensure secure data transmission. Advantages"
            },
            {
              "id": "wireless-lan--easy-installation-and-expansion",
              "heading": "Easy Installation and Expansion",
              "explanation": "No physical cabling is required. New devices can be added easily without changing network infrastructure. 2. Mobility within Coverage Area Users can move freely within the WLAN range while remaining connected. Supports seamless access in offices, campuses, and public spaces. 3. Cost-Effective Reduces cabling and maintenance costs compared to wired networks. Suitable for environments where wiring is difficult or expensive. 4. Supports Multiple Device Connectivity Allows multiple devices such as laptops, smartphones, and IoT devices to connect simultaneously. Efficient resource sharing through a single network. Limitations\nInterference: Performance can be affected by other wireless devices, microwaves, or physical obstacles.\nSecurity Vulnerabilities: Weak configurations or outdated encryption can expose the network to unauthorized access.\nLimited Range: Coverage is restricted compared to wired LAN; signal strength decreases with distance and obstacles.\nPerformance Variability: Speed and reliability depend on the WLAN standard (e.g., 802.11b/g/n/ac) and environmental conditions. Applications 1. Home and Office Networks Provides Wi-Fi for laptops, smartphones, printers, and IoT devices. Supports work-from-home setups and office networking without extensive wiring."
            },
            {
              "id": "wireless-lan--public-hotspots",
              "heading": "Public Hotspots",
              "explanation": "Cafes, airports, hotels, and libraries use WLAN to offer Internet access to visitors. Facilitates mobile connectivity in public areas. 3. Educational Institutions and Campuses Enables wireless access in classrooms, labs, libraries, and dorms. Supports e-learning, online exams, and campus-wide connectivity. 4. Industrial IoT and Smart Buildings Connects sensors, controllers, and smart devices in factories or smart buildings. Facilitates real-time monitoring, automation, and efficient resource management. Security Considerations WLAN security ensures that wireless communication remains private, authenticated, and protected from unauthorized access or attacks. Since wireless networks transmit data over the air, they are more vulnerable than wired networks, making proper security measures essential."
            },
            {
              "id": "wireless-lan--encryption",
              "heading": "Encryption",
              "explanation": "Use WPA2 or WPA3 to encrypt data transmitted over the WLAN. Protects against eavesdropping and unauthorized access. 2. Strong Authentication Avoid default passwords on Access Points. Use complex passwords and, if possible, RADIUS or enterprise authentication. 3. Firmware and Security Updates Regularly update AP firmware and network devices to patch vulnerabilities. 4. Network Segmentation Separate guest networks from internal networks to limit exposure. 5. Monitoring and Logging Monitor connected devices and traffic for unusual activity. Helps detect and respond to security threats quickly."
            }
          ],
          "quick_revision": [
            "Wireless Local Area Network (WLAN) A WLAN (Wireless Local Area Network) is a network that allows devices to connect and communicate wirelessly within a limited area,…",
            "Stations (STA): Devices like laptops, smartphones, and IoT devices.",
            "Access Point (AP): Acts as a bridge between wireless clients and the wired network.",
            "Extended Service Set (ESS): Multiple BSSs connected via a Distribution System (DS).",
            "Distribution System (DS): The wired backbone linking multiple BSSs in an ESS. Enables data to travel between APs and across the network efficiently.",
            "Infrastructure Mode: Infrastructure mode is a WLAN operating mode in which wireless devices communicate through a centralized device called an Access Point (AP).",
            "Ad-hoc Mode: Ad-hoc mode is a WLAN operating mode in which wireless devices communicate directly with each other without using an Access Point.",
            "Easy Installation and Expansion: No physical cabling is required.",
            "Public Hotspots: Cafes, airports, hotels, and libraries use WLAN to offer Internet access to visitors.",
            "Encryption: Use WPA2 or WPA3 to encrypt data transmitted over the WLAN. Protects against eavesdropping and unauthorized access. 2."
          ]
        },
        {
          "id": "bluetooth",
          "title": "Bluetooth",
          "summary": "What is Bluetooth? Bluetooth is a short-range wireless communication technology that allows electronic devices to exchange data over radio waves without physical cables, mainly for simple, low-power, and personal connectivity.",
          "sections": [
            {
              "id": "bluetooth--overview",
              "heading": "Overview",
              "explanation": "What is Bluetooth? Bluetooth is a short-range wireless communication technology that allows electronic devices to exchange data over radio waves without physical cables, mainly for simple, low-power, and personal connectivity. Used to connect nearby devices such as phones, laptops, and accessories Designed to replace short cables with wireless links Operates in the 2.4 GHz Industrial, Scientific, and Medical (ISM) frequency band Bluetooth Versions and Types"
            },
            {
              "id": "bluetooth--bluetooth-classic-br-edr",
              "heading": "Bluetooth Classic (BR/EDR)",
              "explanation": "Bluetooth Classic (BR/EDR) is the original version of Bluetooth designed for continuous, high-reliability data and audio transmission between devices over short distances. Supports steady data and audio streaming between devices Higher power consumption compared to BLE Commonly used in headphones, speakers, keyboards, and computers Provides moderate data rates for reliable connections 2. Bluetooth Low Energy (BLE) Bluetooth Low Energy (BLE) is a power-efficient version of Bluetooth optimized for devices that transmit small amounts of data intermittently, extending battery life. Ideal for low-power, battery-operated devices like wearables and sensors Supports intermittent or periodic data transfer Widely used in IoT, smart home, and health monitoring devices Maintains connectivity with minimal energy consumption Architecture of Bluetooth The architecture of Bluetooth defines how devices are organized and communicate within a network. It supports two main types of network structures:"
            },
            {
              "id": "bluetooth--piconet",
              "heading": "Piconet",
              "explanation": "A piconet is the basic Bluetooth network where one device acts as a master controlling communication, while up to seven active devices act as slaves. Piconet The master device coordinates data transmission and timing Slaves communicate only when allowed by the master Uses frequency-hopping to avoid interference Supports ad-hoc network formation for nearby devices"
            },
            {
              "id": "bluetooth--scatternet",
              "heading": "Scatternet",
              "explanation": "A scatternet is formed when multiple piconets are connected through devices that participate in more than one piconet, allowing a larger network to function seamlessly. Extends network coverage beyond a single piconet Devices can act as master in one piconet and slave in another Enables communication across multiple groups of devices Useful in environments where many Bluetooth devices coexist Bluetooth Protocol Stack The Bluetooth protocol stack consists of multiple layers, each responsible for specific functions to enable reliable wireless communication between devices. Bluetooth Protocol Stack Radio (RF) Layer Specifies the air interface, including operating frequency, frequency hopping, and transmit power. Performs modulation and demodulation of digital data into radio frequency (RF) signals. Defines the physical characteristics of Bluetooth transceivers. Supports two types of physical links: connection-oriented and connection-less. Baseband Link Layer Acts as the digital core of the Bluetooth system. Equivalent to the MAC sublayer in LAN architectures. Handles connection establishment within a piconet. Manages device addressing, packet formats, timing, and power control. Link Manager Protocol (LMP) Layer Manages the established links between Bluetooth devices. Responsible for authentication, encryption, and security management. Creates, monitors, and terminates links based on commands or failures. Logical Link Control and Adaptation Protocol (L2CAP) Layer Known as the heart of the Bluetooth protocol stack. Provides communication between upper and lower layers. Performs segmentation and reassembly of data packets. Supports multiplexing of multiple logical connections over a single physical link. Service Discovery Protocol (SDP) Layer Enables a device to discover available services on another Bluetooth-enabled device. Allows applications to determine the capabilities and services supported by remote devices. RFCOMM Layer A cable replacement protocol that emulates serial ports. Provides serial data communication over L2CAP. Supports protocols such as WAP and OBEX. Based on the ETSI TS 07.10 standard. OBEX (Object Exchange) Used for exchanging objects such as files, images, and contacts between devices. Commonly used in file transfer and data synchronization applications. WAP (Wireless Application Protocol) Enables internet access and web-based services over Bluetooth. Used mainly in older mobile and embedded systems. TCP (Telephony Control Protocol) Provides telephony services over Bluetooth. Supports call setup, call release, and group management. Used primarily for voice gateway and cordless telephony applications. Types of Bluetooth Bluetooth technology is used in a wide variety of devices to enable short-range wireless communication. These Bluetooth-enabled devices are designed for different applications such as communication, entertainment, navigation, and data sharing. Common Types of Bluetooth Devices"
            },
            {
              "id": "bluetooth--in-car-headset",
              "heading": "In-Car Headset",
              "explanation": "Allows users to make and receive phone calls through the car’s speaker system without directly using a mobile phone, enabling hands-free communication.\nStereo Headset: Used to listen to music wirelessly from smartphones, cars, or home audio systems, providing cable-free audio streaming.\nWebcam: A Bluetooth-enabled webcam can be connected wirelessly to a laptop or smartphone for video calls and conferencing.\nBluetooth-Enabled Printer: Enables wireless printing by connecting a printer to a mobile phone or laptop through Bluetooth, without requiring cables or a network connection."
            },
            {
              "id": "bluetooth--bluetooth-global-positioning-system-gps",
              "heading": "Bluetooth Global Positioning System (GPS)",
              "explanation": "Allows a smartphone to connect with a car’s navigation system via Bluetooth to provide GPS directions and location-based services. Applications of Bluetooth Bluetooth is widely used for short-range wireless communication across various personal, commercial, and industrial applications due to its low power consumption and ease of use. Used in wireless headsets, speakers, keyboards, and other peripherals for cable-free connectivity. Enables Wireless Personal Area Networks (WPANs) for connecting nearby devices; in limited cases, it can support small local networks. Allows wireless connectivity between digital cameras and mobile phones for instant photo transfer. Supports data transfer such as videos, music, photographs, and documents between smartphones, computers, and other Bluetooth-enabled devices. Widely used in medical healthcare for patient monitoring devices and wearable sensors. Applied in sports and fitness devices such as smartwatches, fitness trackers, and heart-rate monitors. Used in military and defense systems for secure short-range communication and equipment interconnection. Advantages Bluetooth is a low-cost and easy-to-use wireless communication technology. It supports wireless connectivity without cables, enabling quick ad-hoc connections between devices. Bluetooth signals can penetrate walls and obstacles to a limited extent. It supports both voice and data transmission, making it suitable for audio devices and file sharing. Bluetooth consumes low power, especially with Bluetooth Low Energy (BLE). Widely supported across smartphones, laptops, and IoT devices. Disadvantages Bluetooth can be vulnerable to security threats if proper pairing and encryption are not used. It offers lower data transfer speeds compared to Wi-Fi (Bluetooth Classic supports up to ~3 Mbps). Bluetooth has a limited communication range compared to other wireless technologies. Performance may degrade due to interference in the 2.4 GHz ISM band. Traditional Bluetooth piconet communication does not support routing, though Bluetooth Mesh enables multi-hop routing in modern implementations."
            }
          ],
          "quick_revision": [
            "What is Bluetooth? Bluetooth is a short-range wireless communication technology that allows electronic devices to exchange data over radio waves without physical cables,…",
            "Bluetooth Classic (BR/EDR): Bluetooth Classic (BR/EDR) is the original version of Bluetooth designed for continuous, high-reliability data and audio transmission between devices over short…",
            "Piconet: A piconet is the basic Bluetooth network where one device acts as a master controlling communication, while up to seven active devices act as slaves.",
            "Scatternet: A scatternet is formed when multiple piconets are connected through devices that participate in more than one piconet, allowing a larger network to function seamlessly.",
            "In-Car Headset: Allows users to make and receive phone calls through the car’s speaker system without directly using a mobile phone, enabling hands-free communication.",
            "Bluetooth Global Positioning System (GPS): Allows a smartphone to connect with a car’s navigation system via Bluetooth to provide GPS directions and location-based services."
          ]
        },
        {
          "id": "zigbee",
          "title": "Zigbee",
          "summary": "Introduction of ZigBee ZigBee is an open, global wireless communication standard designed for low-power, low-data-rate, and short-range applications such as home automation, sensing, and control.",
          "sections": [
            {
              "id": "zigbee--overview",
              "heading": "Overview",
              "explanation": "Introduction of ZigBee ZigBee is an open, global wireless communication standard designed for low-power, low-data-rate, and short-range applications such as home automation, sensing, and control. It is based on the IEEE 802.15.4 (LR-WPAN) standard, which defines the Physical (PHY) and Medium Access Control (MAC) layers. The Zigbee Alliance, on the other hand, specifies the higher protocol layers to enable secure, reliable, and cost-effective wireless communication. ZigBee is a packet-based protocol that provides an easy-to-use architecture for secure, reliable, and low-power wireless networks. Devices such as sensors, pumps, and valves can be placed or moved freely, as ZigBee networks support location-independent communication. IEEE 802.15.4 develops the PHY and MAC layers, whereas ZigBee handles the upper layers of the protocol stack. ZigBee is designed for very low-cost implementation of low-power devices operating at low data rates over short distances. IEEE 802.15.4 supports star and peer-to-peer topologies, while ZigBee supports star, mesh, and cluster-tree topologies. ZigBee-compliant devices can support point-to-point and point-to-multipoint communication. Why Another Short-Range Communication Standard? Existing wireless technologies like Wi-Fi and Bluetooth are optimized for high data rates, resulting in higher power consumption. Many applications, such as sensor networks, home automation, and industrial monitoring require very low data rates but long battery life. Devices in control and sensing systems often transmit small, infrequent data packets, making high-bandwidth standards inefficient. ZigBee was introduced to provide a low-cost, low-power, and reliable solution for short-range wireless communication. It supports scalable networks and mesh topology, which improves coverage and reliability compared to traditional short-range standards. Zigbee Standard: Characteristics and Features Zigbee is designed to operate on very low power, allowing battery-powered devices to function for long periods without frequent recharging or replacement. The standard supports data rates ranging from 20 kbps to 250 kbps, which is sufficient for transmitting sensor readings, control commands, and other small amounts of data. Zigbee devices typically communicate over distances of 75 to 100 meters, although the actual range can vary depending on environmental obstacles and interference. Devices can join an existing Zigbee network quickly, usually within approximately 30 milliseconds, enabling fast deployment and dynamic networking. Zigbee networks can theoretically include up to 65,000 devices, but in practical implementations, the number of connected devices is usually around 240 due to routing and memory limitations. Being an open standard, Zigbee allows for low-cost hardware and software implementation, making it ideal for widespread use in Internet of Things (IoT) applications. Devices in a Zigbee network spend most of their time in sleep mode and only transmit data when necessary, significantly reducing energy consumption. Zigbee operates in three frequency bands: 868 MHz in Europe with 1 channel, 915 MHz in the US and Australia with 10 channels, and 2.4 GHz worldwide with 16 channels, although each network uses only a single channel at a time. Zigbee uses stochastic addressing, where each device is assigned a random address and announced, and mechanisms exist to resolve any address conflicts. Each node maintains the quality of its links to neighboring nodes through link management, and the link quality is used as the link cost in routing. Frequency agility allows nodes to report interference to the channel manager, which can then select a different channel to maintain reliable communication. Zigbee supports asymmetric links, meaning each node may have different transmit power and sensitivity, which can result in communication paths being asymmetric. Power management ensures that routers and coordinators use main power, while end devices rely on batteries, optimizing energy consumption across the network."
            },
            {
              "id": "zigbee--types-of-zigbee-devices",
              "heading": "Types of ZigBee Devices",
              "explanation": "ZigBee Coordinator It is the central and most important device in a ZigBee network. It starts and forms the network and allows other devices to join. It assigns network addresses to devices and manages overall communication. It maintains network security, including authentication and key management. Only one coordinator is present in each ZigBee network. ZigBee Router It forwards data packets between devices in the network. It helps extend the network range by acting as an intermediate node. It supports mesh networking by providing multiple communication paths. Routers usually remain powered on and do not enter sleep mode. Multiple routers can exist in a ZigBee network. ZigBee End Device It communicates only with its parent device (coordinator or router). It does not route or forward data for other devices. It is typically battery-powered and designed for low energy consumption. End devices can enter sleep mode to conserve power. Examples include sensors, switches, and control units. ZigBee Devices Advantages Zigbee is designed for low power consumption, allowing battery-powered devices to operate for long periods without frequent recharging. The protocol provides network security and application support services, operating on top of the IEEE 802.15.4 standard. Zigbee enables fully connected networks in homes, where all devices can communicate with each other seamlessly. It is widely used in smart home applications due to its ability to connect and control multiple devices efficiently. Implementation of Zigbee networks is relatively easy, making it suitable for both developers and end-users. Zigbee offers adequate security features to protect network data from unauthorized access. Zigbee chips and modules are relatively inexpensive, making it a cost-effective solution for IoT applications. The protocol uses a mesh networking topology , allowing devices to communicate with each other without relying on a central hub or router. Zigbee is highly reliable, with mechanisms in place to ensure data delivery even under adverse conditions. Disadvantages Zigbee has a relatively short range compared to other wireless communication protocols, which can limit its use in large buildings or outdoor environments. The protocol is designed for low-data-rate applications, making it unsuitable for scenarios that require high-speed data transfer. Zigbee is not as widely adopted as other IoT protocols, which can create interoperability challenges when connecting devices from different manufacturers. While Zigbee includes security features, they are not as robust as those in some other IoT protocols, making it more vulnerable to potential hacking or security threats. Zigbee Network Topologies Zigbee supports multiple network topologies to provide flexible communication between devices, ensuring reliable data transfer and extended network coverage depending on the application. Star Topology – The network consists of a single coordinator and several end devices, where all end devices communicate only with the coordinator. This topology is commonly used in Zigbee Smart Energy applications. Mesh Topology – The network includes one coordinator, multiple routers, and end devices. It is self-healing, meaning that if one device fails, data can be rerouted through other devices to maintain network connectivity. Tree Topology – The network has a central coordinator, multiple routers, and end devices. The routers extend the network coverage, allowing devices farther from the coordinator to communicate through the routers. Architecture of Zigbee Zigbee architecture is a layered communication framework that defines how data is transmitted and received between devices. It consists of six layers, each with a specific role in ensuring efficient, secure, and reliable communication. Physical Layer (PHY) – The physical layer is the lowest layer and is closest to the hardware. It directly controls the Zigbee radio and handles the transmission and reception of data by converting data packets into over-the-air bits and vice versa. Medium Access Control Layer (MAC) – The MAC layer serves as an interface between the physical layer and the network layer. It manages the network’s PAN ID, enables network discovery through beacon requests, and controls how devices access the communication channel. Network Layer – This layer acts as a bridge between the MAC layer and the application layer. It is responsible for managing mesh networking, routing, and addressing within the Zigbee network. Security Layer – The security layer ensures secure communication between devices, including encryption, authentication, and integrity checks for transmitted data. Application Support Layer – Part of the application layer, this sub-layer provides services to facilitate communication between the Zigbee device object and the network, supporting manufacturer-defined applications. – The highest layer of the Zigbee stack, it contains the Zigbee Device Object (ZDO) and the application objects. It defines the behavior of devices and manages how applications interact with the network. Channel Access Methods Channel access methods in Zigbee define how devices share the communication medium to transmit data efficiently while avoiding collisions. Zigbee supports two main channel access methods: Contention-Based Method – This method uses Carrier-Sense Multiple Access with Collision Avoidance (CSMA/CA), allowing multiple devices to share the communication channel while minimizing the chance of data collisions. Contention-Free Method – In this method, the coordinator assigns a specific time slot to each device, known as a Guaranteed Time Slot (GTS), which ensures collision-free transmission for critical or time-sensitive data. Applications Zigbee is widely used in applications that require low-power, reliable, and short-range wireless communication. Its versatility makes it suitable for home, industrial, medical, and commercial applications. Home Automation – Zigbee enables smart home devices such as lights, thermostats, and security systems to communicate and be controlled remotely. Medical Data Collection – Zigbee is used in healthcare to collect and transmit patient data from medical devices, enabling remote monitoring and efficient healthcare management. Industrial Control Systems – Zigbee facilitates wireless control and monitoring of machinery, sensors, and other industrial equipment for improved efficiency and safety. Meter Reading Systems – Utility meters, such as electricity, gas, and water meters, use Zigbee to automatically transmit usage data to central systems. Light Control Systems – Zigbee allows wireless control of lighting in homes, offices, and commercial spaces, improving energy efficiency and convenience. Commercial Applications – Zigbee is used in retail, logistics, and building management for automation, monitoring, and communication between devices. Government Markets Worldwide – Various government applications, such as smart city projects and public safety monitoring, utilize Zigbee for reliable wireless communication. Home Networking – Zigbee enables communication between different household devices, creating a connected network for better device coordination and automation."
            }
          ],
          "quick_revision": [
            "Introduction of ZigBee ZigBee is an open, global wireless communication standard designed for low-power, low-data-rate, and short-range applications such as home…",
            "Types of ZigBee Devices: ZigBee Coordinator It is the central and most important device in a ZigBee network."
          ]
        },
        {
          "id": "mobile-networks",
          "title": "Mobile Networks",
          "summary": "Generations of Wireless Communication Wireless communication has evolved over several generations to meet the increasing demand for faster, more reliable, and feature-rich mobile and data services.",
          "sections": [
            {
              "id": "mobile-networks--overview",
              "heading": "Overview",
              "explanation": "Generations of Wireless Communication Wireless communication has evolved over several generations to meet the increasing demand for faster, more reliable, and feature-rich mobile and data services. Each generation represents a significant technological advancement over the previous one, improving voice quality, data speeds, network coverage, and enabling new applications such as mobile internet, multimedia streaming, and Internet of Things (IoT) connectivity. The evolution from 1G to 5G has transformed the way people communicate, work, and interact with devices, making mobile networks an integral part of modern life. 0 th Generation 0th Generation, or 0G, was the very first step in mobile communication, also called pre-cellular technology, which refers to the earliest mobile telephony systems that existed before the introduction of cell phones. These systems were primarily used for voice communication and relied on radio transmission. 0G networks laid the foundation for mobile telephony but were limited in coverage, mobility, and functionality. Used radio telephones, often installed in cars or trucks, for mobile communication. Communication was limited to voice only, with no data services. These systems were pre-cellular, meaning there were no defined cells or handoff mechanisms. Mobile units were large and bulky, usually requiring installation in vehicles due to size and power requirements. 1G (1st Generation) 1G, or the first generation of mobile communication, was the first system to allow mobile voice calls using analog signals. It marked the beginning of mobile telephony as we know it today, but it had limitations in terms of coverage, data support, and sound quality. Introduced mobile voice calling for the first time. Used analog signals for communication. Employed an FDD (Frequency Division Duplex) scheme with a typical bandwidth allocation of 25 MHz Coverage areas were relatively small, requiring many base stations for larger regions. Roaming between different operators was not supported. Low sound quality compared to later generations. Supported very low data speeds, approximately 2.4 kbps, mainly for signalling purposes. 2G (2nd Generation) 2G, or the second generation of mobile communication, marked the transition from analog to digital signals, improving voice quality, security, and efficiency. It introduced basic data services like SMS and email, enabling mobile devices to do more than just make calls. 2G networks laid the foundation for mobile internet and multimedia services that would develop in later generations. Shifted from analog to digital communication, improving voice clarity and reducing interference. Supported both voice calls and SMS services. Provided moderate mobile data services, enabling limited internet access. Technologies like GSM, CDMA, and TDMA were widely used in 2G networks. Typical data speeds ranged around 64 kbps, sufficient for SMS and basic browsing. 2.5G (GPRS) introduced packet-switched data, enabling mobile internet, email, and basic streaming services. 2.75G (EDGE) offered faster data transfer, up to ~128 kbps, improving mobile internet speed and reliability.\nNote: Claims that 2G “supported WLAN or all 4 sectors” are inaccurate — 2G focused on digital cellular networks. WLAN and other wireless standards are separate technologies. 3G (3rd Generation) 3G, or the third generation of mobile communication, introduced high-speed data services alongside voice, enabling mobile internet, video calls, and multimedia applications. It improved network capacity and system reliability compared to earlier generations, paving the way for modern mobile services. Improved mobile internet system, allowing users to access websites, emails, and streaming services on the go. Offered better system capacity, supporting more simultaneous users in a given area. Provided high-speed wireless internet, enabling multimedia applications and mobile video calls. Common technologies used in 3G networks include UMTS (Universal Mobile Telecommunications System) and CDMA (Code Division Multiple Access). Typical data speeds were around 2 Mbps, although actual speeds could vary depending on network conditions. 4G (4th Generation) 4G, or the fourth generation of mobile communication, is based on all-IP architecture, providing high-speed internet and advanced multimedia services. It allows simultaneous support for voice, data, and video applications with better quality, efficiency, and flexibility than earlier generations. 4G networks enabled HD video streaming, VoIP services, and faster internet access for smartphones, tablets, and other devices. Uses IP-based protocols to provide efficient and flexible communication for data, voice, and multimedia services. LTE (Long Term Evolution) is mainly used to provide high-speed internet access. VoLTE (Voice over LTE) allows users to make voice calls while simultaneously using the internet. Offers freedom and flexibility to select any desired service with reasonable Quality of Service (QoS). Provides high usability for a wide range of mobile and internet applications. Supports multimedia services at a low transmission cost, making it efficient for data-heavy applications. Enables HD-quality video streaming and smooth online media experiences. Typical data speeds range around 100 Mbps, though actual speeds can vary depending on network conditions. 5G (5th Generation) 5G, or the fifth generation of mobile communication, is the latest generation of wireless technology, designed to provide ultra-high data speeds, low latency, and massive device connectivity. It supports advanced applications such as autonomous vehicles, smart cities, industrial IoT, and immersive multimedia experiences, offering a significant improvement over 4G networks. Provides higher data rates, with speeds up to 10 Gbps under ideal conditions. Offers faster and more secure connectivity, supporting a massive number of devices simultaneously. Data latency is significantly reduced, potentially as low as 1 millisecond, enabling real-time applications. Supports massive network capacity, allowing millions of connected devices in smart cities and industrial networks. Offers greater flexibility in network management, supporting features like network slicing for customized services. Enables enhanced applications such as AR/VR, remote surgery, autonomous vehicles, and industrial automation. 5G is generally considered 10–30 times faster than 4G, depending on deployment conditions and frequency bands. Comparison of Wireless Communication Generations The following table summarizes the key characteristics, technologies, and coverage of 0G to 5G, providing a quick overview of how mobile communication has evolved over time. Generation Technology Data Speed Coverage & Features 0G Pre-cellular radio telephony ~2.4 kbps (voice only) Very limited coverage, vehicle-mounted, analog voice, bulky devices, no handoff 1G Analog cellular, FDD ~2.4 kbps Small coverage area, first mobile voice calls, low sound quality, no roaming, analog signals 2G GSM, CDMA, TDMA; 2.5G (GPRS); 2.75G (EDGE) 9.6 kbps – 384 kbps Moderate coverage, digital voice, SMS, basic data, improved security 3G UMTS, HSPA, CDMA2000 Hundreds of kbps – 2 Mbps Wide coverage, high-speed data, video calls, multimedia services 4G LTE, WiMAX, VoLTE 100 Mbps – 1 Gbps Wide coverage, all-IP network, HD streaming, low latency, VoLTE support 5G mmWave, sub-6 GHz, network slicing Up to 10 Gbps Very wide & dense coverage, ultra-low latency, massive connectivity, high reliability, flexible networks"
            }
          ],
          "quick_revision": [
            "Generations of Wireless Communication Wireless communication has evolved over several generations to meet the increasing demand for faster, more reliable, and…"
          ]
        }
      ]
    },
    {
      "title": "Modern Networking Concepts",
      "subsections": [
        {
          "id": "software-defined-networking-sdn",
          "title": "Software Defined Networking (SDN)",
          "summary": "Software Defined Networking (SDN) is a network management approach that utilizes software-based controllers to dynamically and centrally control network behavior, enhancing flexibility, performance, and monitoring capabilities.",
          "sections": [
            {
              "id": "software-defined-networking-sdn--overview",
              "heading": "Overview",
              "explanation": "Software Defined Networking (SDN) is a network management approach that utilizes software-based controllers to dynamically and centrally control network behavior, enhancing flexibility, performance, and monitoring capabilities. It separates the control plane (decision-making) from the data plane (packet forwarding). Network intelligence is centralized in an SDN controller instead of being distributed across devices. Network devices like switches become simple forwarding elements that follow controller instructions. It enables programmability and automation, making networks easier to manage and adapt. Need for SDN Traditional networks rely on individually configured devices, making management complex and inflexible. SDN is needed to simplify network control and efficiently handle modern, dynamic network requirements."
            },
            {
              "id": "software-defined-networking-sdn--centralized-control",
              "heading": "Centralized Control",
              "explanation": "SDN centralizes network intelligence in a controller, enabling consistent policy enforcement and easier network management.\nProgrammability: Network behavior can be programmed using software, allowing automated configuration, faster deployment, and reduced manual errors."
            },
            {
              "id": "software-defined-networking-sdn--flexibility-and-agility",
              "heading": "Flexibility and Agility",
              "explanation": "SDN enables quick adaptation to changing traffic patterns and application demands without reconfiguring individual devices. SDN Architecture SDN architecture is organized into three logical layers, each with a specific role. This layered design simplifies network management and enables centralized control."
            },
            {
              "id": "software-defined-networking-sdn--application-layer",
              "heading": "Application Layer",
              "explanation": "Contains network applications such as traffic management, security, and monitoring tools. Allows administrators to define network policies and requirements. Communicates with the SDN controller through northbound APIs."
            },
            {
              "id": "software-defined-networking-sdn--control-layer",
              "heading": "Control Layer",
              "explanation": "Hosts the SDN controller, which acts as the brain of the network. Translates application requirements into forwarding rules. Maintains a global view of the network and makes routing decisions."
            },
            {
              "id": "software-defined-networking-sdn--infrastructure-layer-data-plane",
              "heading": "Infrastructure Layer (Data Plane)",
              "explanation": "Consists of physical or virtual switches and routers. Forwards packets based on rules received from the controller. Does not make independent decisions, ensuring simple and efficient forwarding. Control Plane vs Data Plane Feature Control Plane Data Plane Purpose Handles network decision-making and control logic Handles actual forwarding of data packets Function Determines routing paths and network policies Forwards packets based on given rules Location in SDN Centralized in the SDN controller Implemented in switches and routers Decision Making Makes forwarding and traffic decisions Does not make decisions; follows instructions Network View Maintains a global view of the network Operates with a local device-level view Programmability Highly programmable through software Limited programmability Complexity Logically complex Relatively simple and fast Examples SDN Controller, routing logic Switches, forwarding tables Northbound and Southbound APIs In Software Defined Networking, APIs act as communication interfaces between different layers of the SDN architecture. These interfaces enable programmability and centralized control of the network."
            },
            {
              "id": "software-defined-networking-sdn--northbound-apis",
              "heading": "Northbound APIs",
              "explanation": "Northbound APIs allow communication between the Application Layer and the SDN Controller. They enable network applications to define high-level policies, such as routing, load balancing, and security rules, without dealing with low-level network details. These APIs simplify network management and support automation by providing an abstract view of the network.\nExample: REST APIs are commonly used as northbound interfaces to allow applications to interact with the SDN controller using standard web-based methods."
            },
            {
              "id": "software-defined-networking-sdn--southbound-apis",
              "heading": "Southbound APIs",
              "explanation": "Southbound APIs enable communication between the SDN Controller and the Infrastructure Layer (switches and routers). They allow the controller to install forwarding rules and manage packet flow in the data plane. Through southbound APIs, network devices follow instructions from the centralized controller instead of making independent decisions.\nExample: OpenFlow is a widely used southbound protocol that allows the SDN controller to directly program flow tables in switches. SDN Components SDN components are the fundamental building blocks of Software Defined Networking that collectively enable centralized control, programmability, and efficient management of network operations."
            },
            {
              "id": "software-defined-networking-sdn--sdn-applications",
              "heading": "SDN Applications",
              "explanation": "These are software programs that define high-level network policies such as traffic management, security, load balancing, and monitoring. They specify the desired network behavior and communicate these requirements to the SDN controller."
            },
            {
              "id": "software-defined-networking-sdn--sdn-controller-a",
              "heading": "SDN Controller: A",
              "explanation": "SDN Controller: A cts as the central control unit of the network. It maintains a global view of the network, makes forwarding decisions, and translates application policies into rules that can be enforced by network devices."
            },
            {
              "id": "software-defined-networking-sdn--sdn-networking-devices-i",
              "heading": "SDN Networking Devices: I",
              "explanation": "SDN Networking Devices: I ncludes physical or virtual switches and routers that form the data plane. They forward packets based on instructions received from the controller and do not make independent routing decisions. Models of SDN Implementation Different SDN Implementation models exist depending on how the control and network devices interact. 1. Open SDN Implements standard protocols like OpenFlow for communication between controllers and network devices. Network devices are “dumb” switches, the intelligence is in the controller. Provides vendor-neutral interoperability and easy programmability. Ideal for research, experimentation, and multivendor environments. 2. API-Based SDN Network devices expose APIs for programmability instead of relying on a specific protocol. Controllers or applications can configure and control devices through REST, gRPC, or NetConf APIs. Offers flexibility and easy integration with network management systems. Supports automation, orchestration, and dynamic policy deployment. 3. Overlay SDN Creates virtual networks on top of existing physical infrastructure. Uses tunneling protocols like VXLAN, NVGRE, or GRE to connect virtual switches. Enables multi-tenant environments, data center virtualization, and network abstraction. Works without changing underlying physical devices. 4. Hybrid SDN Combines traditional networking with SDN principles. Some devices follow SDN protocols (OpenFlow), others follow standard protocols (OSPF, BGP). Supports gradual migration to SDN without disrupting existing infrastructure. Offers flexibility but requires careful policy and traffic management. SDN vs Traditional Networking Traditional Networking Software-Defined Networking (SDN) The control plane and data plane are combined in each device. The control plane is separated and centralized in a controller. Devices handle both forwarding and decision-making. Devices handle forwarding; the controller makes decisions. Management is manual and device-by-device. Management is automated and centralized. Configuration is done via CLI, which is slow and error-prone. Configuration uses APIs, making it fast and flexible. Scalability is limited by device capabilities. Scalability is high; the controller manages multiple devices. Network behavior depends on hardware and is mostly fixed. Network behavior is dynamic and software-controlled. Devices from different vendors may not interoperate. Vendor-neutral protocols allow multi-vendor interoperability. Fault recovery depends on devices and can be slow. The controller detects issues and reroutes traffic quickly. Upgrades require hardware changes and are costly. New services are deployed via software, reducing costs. For more details you can refer to the article differences between SDN and Traditional Networking . Advantages\nCentralized control: A controller manages the network from one place, making monitoring and policy enforcement easier.\nAutomation: Configuration, provisioning, and traffic control can be automated, reducing manual work and errors.\nProgrammability: Network behavior can be changed through software and APIs to match new requirements.\nFlexibility: Policies and services can be updated quickly without replacing hardware.\nScalability: Central control helps manage large networks more efficiently.\nCost efficiency: SDN can run on commodity hardware, lowering dependency on expensive proprietary devices.\nBetter fault handling: The controller can detect failures and reroute traffic to keep services running.\nFaster innovation: New features and services can be deployed rapidly through software updates. Disadvantages"
            },
            {
              "id": "software-defined-networking-sdn--single-point-of-failure",
              "heading": "Single point of failure",
              "explanation": "If a centralized controller goes down, network control can be disrupted unless redundancy is in place.\nScalability: In very large networks, the controller can become a bottleneck if it cannot manage all devices fast enough.\nResilience: SDN can reroute traffic, but real reliability depends on controller availability and good failover design.\nMigration complexity: Mixing SDN with traditional networks takes careful planning and can be difficult to deploy smoothly."
            },
            {
              "id": "software-defined-networking-sdn--security-risks",
              "heading": "Security risks",
              "explanation": "The controller is a high-value target, so strong authentication, access control, and monitoring are required. Applications\nData centers: SDN gives centralized control to automate provisioning and route traffic dynamically for better performance.\nCloud networking: SDN builds programmable virtual networks that support multi-tenancy, fast service rollout, and easy scaling."
            },
            {
              "id": "software-defined-networking-sdn--traffic-management",
              "heading": "Traffic management",
              "explanation": "SDN monitors traffic in real time and adjusts paths to improve load balancing and reduce congestion.\nNetwork virtualization: SDN enables overlays and virtual network functions, improving resource usage and isolating tenants.\nSecurity: SDN applies security policies centrally and can update rules quickly for threat detection and mitigation."
            }
          ],
          "quick_revision": [
            "Software Defined Networking (SDN) is a network management approach that utilizes software-based controllers to dynamically and centrally control network behavior,…",
            "Centralized Control: SDN centralizes network intelligence in a controller, enabling consistent policy enforcement and easier network management.",
            "Flexibility and Agility: SDN enables quick adaptation to changing traffic patterns and application demands without reconfiguring individual devices.",
            "Application Layer: Contains network applications such as traffic management, security, and monitoring tools.",
            "Control Layer: Hosts the SDN controller, which acts as the brain of the network.",
            "Infrastructure Layer (Data Plane): Consists of physical or virtual switches and routers.",
            "Northbound APIs: Northbound APIs allow communication between the Application Layer and the SDN Controller.",
            "Southbound APIs: Southbound APIs enable communication between the SDN Controller and the Infrastructure Layer (switches and routers).",
            "SDN Applications: These are software programs that define high-level network policies such as traffic management, security, load balancing, and monitoring.",
            "SDN Controller: A: SDN Controller: A cts as the central control unit of the network.",
            "SDN Networking Devices: I: SDN Networking Devices: I ncludes physical or virtual switches and routers that form the data plane.",
            "Single point of failure: If a centralized controller goes down, network control can be disrupted unless redundancy is in place.",
            "Security risks: The controller is a high-value target, so strong authentication, access control, and monitoring are required.",
            "Traffic management: SDN monitors traffic in real time and adjusts paths to improve load balancing and reduce congestion."
          ]
        },
        {
          "id": "network-function-virtualization-nfv",
          "title": "Network Function Virtualization (NFV)",
          "summary": "Network Functions Virtualization Network Functions Virtualization (NFV) is a technology that virtualizes traditional network functions, like routing, load balancing, and firewalls, so they run as software on standard servers instead of dedicated hardware devices.",
          "sections": [
            {
              "id": "network-function-virtualization-nfv--overview",
              "heading": "Overview",
              "explanation": "Network Functions Virtualization Network Functions Virtualization (NFV) is a technology that virtualizes traditional network functions, like routing, load balancing, and firewalls, so they run as software on standard servers instead of dedicated hardware devices. Replaces dedicated network hardware with software-based Virtual Network Functions (VNFs) Enables faster deployment and easy scaling of network services on demand Reduces costs by using standard, commodity servers instead of specialized devices Simplifies network management through automation and centralized orchestration NFV Architecture The architecture of NFV is divided into three key parts, each responsible for infrastructure, network functions, and management. NFV Architecture"
            },
            {
              "id": "network-function-virtualization-nfv--virtualized-infrastructure",
              "heading": "Virtualized Infrastructure",
              "explanation": "Provides the compute, storage, and networking resources needed to host VNFs. This is abstracted using hypervisors for VMs or container platforms for cloud-native deployments."
            },
            {
              "id": "network-function-virtualization-nfv--virtual-network-functions-vnfs",
              "heading": "Virtual Network Functions (VNFs)",
              "explanation": "Software implementations of network functions such as routing, switching, firewalls, load balancers, and VPNs. VNFs can be deployed, scaled, or updated independently."
            },
            {
              "id": "network-function-virtualization-nfv--management-and-orchestration-mano",
              "heading": "Management and Orchestration (MANO)",
              "explanation": "The central framework responsible for lifecycle management of VNFs, resource allocation, automation, and overall coordination of the NFV environment. It includes NFV Orchestrator (NFVO), VNF Manager (VNFM), and Virtualized Infrastructure Manager (VIM). Working of NFV The working of NFV can be understood in four main steps, each handling virtual network functions, automation, rapid deployment, and flexible management of network services."
            },
            {
              "id": "network-function-virtualization-nfv--virtualized-network-functions-vnfs",
              "heading": "Virtualized Network Functions (VNFs)",
              "explanation": "Software running on VMs or containers performs tasks traditionally handled by dedicated hardware, including routing, load balancing, firewalls, and VPN services."
            },
            {
              "id": "network-function-virtualization-nfv--automation-and-control",
              "heading": "Automation and Control",
              "explanation": "Hypervisors, container platforms, or software-defined networking (SDN) controllers manage the provisioning, configuration, and orchestration of VNFs.\nRapid Deployment: Network services can be deployed, updated, or scaled automatically without manual hardware setup."
            },
            {
              "id": "network-function-virtualization-nfv--flexible-management",
              "heading": "Flexible Management",
              "explanation": "Centralized orchestration ensures optimized resource usage, service chaining, and dynamic scaling of network functions. Applications\nTelecommunication Networks: NFV virtualizes core network functions such as IMS, EPC, and 5G core for faster and scalable service deployment."
            },
            {
              "id": "network-function-virtualization-nfv--virtual-customer-premises-equipment-vcpe",
              "heading": "Virtual Customer Premises Equipment (vCPE)",
              "explanation": "Customer network functions like routers and firewalls are delivered as software from the cloud instead of physical devices.\nSecurity Services: Firewalls, intrusion detection, and intrusion prevention systems are implemented as virtual network functions."
            },
            {
              "id": "network-function-virtualization-nfv--load-balancing",
              "heading": "Load Balancing",
              "explanation": "NFV enables software-based load balancers that dynamically distribute traffic without dedicated hardware.\nCloud Data Centers: NFV supports efficient deployment and management of network services using shared cloud infrastructure."
            },
            {
              "id": "network-function-virtualization-nfv--enterprise-wan-and-vpn-services",
              "heading": "Enterprise WAN and VPN Services",
              "explanation": "NFV allows flexible and quick provisioning of virtual WAN and VPN connectivity for enterprises. Advantages\nCost Savings: Runs on standard servers with a pay-as-you-go model, reducing both CapEx and OpEx.\nFaster Deployment: Virtualized functions can be deployed in hours, avoiding the delays of physical hardware setup.\nScalability: Network resources can be scaled up or down dynamically without buying extra hardware."
            },
            {
              "id": "network-function-virtualization-nfv--simplified-management",
              "heading": "Simplified Management",
              "explanation": "Software-based functions are easier to configure, update, and maintain, lowering operational complexity.\nFlexibility: Multiple network services like routing, firewalls, and load balancing can be implemented via software for quick adaptation. Disadvantages"
            },
            {
              "id": "network-function-virtualization-nfv--weaker-physical-security",
              "heading": "Weaker Physical Security",
              "explanation": "Shared servers are more vulnerable than dedicated hardware, putting multiple VNFs at risk if the host is compromised.\nMalware Spread: Malware can propagate quickly between VNFs on the same server, requiring strong isolation measures.\nReduced Visibility: East-west traffic between VNFs is harder to monitor with traditional tools, complicating threat detection."
            },
            {
              "id": "network-function-virtualization-nfv--virtualization-dependency",
              "heading": "Virtualization Dependency",
              "explanation": "NFV depends on hypervisors and orchestration platforms; flaws here can impact multiple network functions.\nPerformance Overhead: Shared resources may cause latency or contention, affecting VNF performance and service quality."
            },
            {
              "id": "network-function-virtualization-nfv--complex-security-management",
              "heading": "Complex Security Management",
              "explanation": "Maintaining consistent security policies across virtualized environments increases operational complexity. NVF vs SDN NFV and SDN are compared because both use software to improve network flexibility and efficiency. While they serve different purposes, they are often used together in modern network designs. Comparing them helps in understanding their roles in building scalable and cost-effective networks. NFV (Network Functions Virtualization) SDN (Software Defined Networking) Virtualizes network functions as software. Separates the control plane from the data plane. Replaces hardware devices with virtual services. Uses a centralized controller to manage traffic. Focuses on deploying network services. Focuses on controlling network behavior. Runs on standard, general-purpose servers. Works with programmable network devices. Uses VNFs, NFVI, and MANO components. Uses SDN controller, switches, and APIs. Improves flexibility and service scalability. Improves network control and automation."
            }
          ],
          "quick_revision": [
            "Network Functions Virtualization Network Functions Virtualization (NFV) is a technology that virtualizes traditional network functions, like routing, load balancing, and…",
            "Virtualized Infrastructure: Provides the compute, storage, and networking resources needed to host VNFs.",
            "Virtual Network Functions (VNFs): Software implementations of network functions such as routing, switching, firewalls, load balancers, and VPNs.",
            "Management and Orchestration (MANO): The central framework responsible for lifecycle management of VNFs, resource allocation, automation, and overall coordination of the NFV environment.",
            "Virtualized Network Functions (VNFs): Software running on VMs or containers performs tasks traditionally handled by dedicated hardware, including routing, load balancing, firewalls, and VPN services.",
            "Automation and Control: Hypervisors, container platforms, or software-defined networking (SDN) controllers manage the provisioning, configuration, and orchestration of VNFs.",
            "Flexible Management: Centralized orchestration ensures optimized resource usage, service chaining, and dynamic scaling of network functions.",
            "Virtual Customer Premises Equipment (vCPE): Customer network functions like routers and firewalls are delivered as software from the cloud instead of physical devices.",
            "Load Balancing: NFV enables software-based load balancers that dynamically distribute traffic without dedicated hardware.",
            "Enterprise WAN and VPN Services: NFV allows flexible and quick provisioning of virtual WAN and VPN connectivity for enterprises.",
            "Simplified Management: Software-based functions are easier to configure, update, and maintain, lowering operational complexity.",
            "Weaker Physical Security: Shared servers are more vulnerable than dedicated hardware, putting multiple VNFs at risk if the host is compromised.",
            "Virtualization Dependency: NFV depends on hypervisors and orchestration platforms; flaws here can impact multiple network functions.",
            "Complex Security Management: Maintaining consistent security policies across virtualized environments increases operational complexity."
          ]
        },
        {
          "id": "iot-networking",
          "title": "IoT Networking",
          "summary": "Introduction to Internet of Things - IOT The Internet of Things (IoT) is a network of physical objects embedded with sensors, software, and communication technologies, enabling them to connect to the Internet and exchange data automatically without direct human involvement.",
          "sections": [
            {
              "id": "iot-networking--overview",
              "heading": "Overview",
              "explanation": "Introduction to Internet of Things - IOT The Internet of Things (IoT) is a network of physical objects embedded with sensors, software, and communication technologies, enabling them to connect to the Internet and exchange data automatically without direct human involvement. Focuses on connecting everyday physical objects such as devices, machines, and systems to computer networks Enables real-time data collection, monitoring, and automated actions Plays a key role in modern computer networks by extending Internet connectivity beyond traditional computers Improves efficiency, accuracy, and convenience in daily life and industrial applications IoT Ecosystem Sensors collect data and send it via the network to edge or cloud systems where the data is processed and analyzed. Results are delivered to users through apps or used to automatically drive actuators and systems. Components of IoT System An IoT system is built using multiple interconnected components that work together to sense data, process it, transmit it over networks, and present useful information to users or trigger actions automatically."
            },
            {
              "id": "iot-networking--sensors-and-actuators",
              "heading": "Sensors and Actuators",
              "explanation": "IoT Devices (Things): Physical objects such as appliances, machines, vehicles, or wearables that sense data from the environment or perform actions.\nSensors collect environmental data like temperature, motion, or light, while actuators convert digital signals into physical actions.\nEmbedded Processing Units: Microcontrollers or microprocessors that process sensor data, execute control logic, and manage device operations.\nConnectivity Modules: Enable devices to communicate over networks using technologies such as Wi-Fi, Bluetooth, cellular networks, or LPWAN.\nIoT Gateways: Aggregate data from multiple devices, perform protocol translation, and securely transmit data to cloud or edge platforms.\nCloud / Edge Computing: Cloud platforms store and analyze large IoT data, while edge computing processes data near the source to reduce latency."
            },
            {
              "id": "iot-networking--user-interface-and-applications",
              "heading": "User Interface and Applications",
              "explanation": "Dashboards, mobile apps, or web interfaces that allow users to monitor data, control devices, and receive alerts.\nNote: Modern IoT systems also rely on low-power embedded systems, ensuring devices consume minimal energy while maintaining high performance. IoT Architecture IoT system are divided into layers to ensure smooth interaction between sensors, networks, data processing, and applications.\nPerception (Sensing) Layer: Collects real-world data such as temperature, humidity, motion, light, or pressure using sensors. Uses actuators to perform physical actions like switching devices on/off or adjusting system parameters. Identifies and tracks physical objects using technologies such as RFID and NFC."
            },
            {
              "id": "iot-networking--transport-network-layer",
              "heading": "Transport / Network Layer",
              "explanation": "Transfers sensed data from IoT devices to gateways, edge nodes, or cloud platforms. Maintains reliable communication using wired and wireless technologies like Wi-Fi, Bluetooth, Zigbee, and cellular networks. Supports communication protocols to ensure efficient and secure data exchange between devices and systems.\nProcessing / Middleware Layer: Filters, analyzes, and stores incoming data for further use and decision-making. Manages connected devices, handles interoperability, and supports scalability across large IoT deployments. Ensures data integrity, authentication, and secure access to IoT services."
            },
            {
              "id": "iot-networking--application-layer",
              "heading": "Application Layer",
              "explanation": "Provides dashboards, mobile apps, or web interfaces for monitoring and controlling IoT systems. Presents processed data in a meaningful form to support analysis and decision-making. Delivers domain-specific solutions such as smart homes, healthcare monitoring, industrial automation, and smart cities. Sensors and Actuators in IoT Sensors and actuators allow IoT systems to connect with the physical environment by collecting real-world data and carrying out actions in response to system commands. Role of Sensors in IoT Sensors detect physical, chemical, or biological parameters from the environment and convert them into digital data. This data acts as the primary input for IoT systems and is used for monitoring, analysis, and automation.\nTemperature Sensors: Measure heat or temperature changes in the environment or objects.\nImage Sensors: Capture visual data for cameras and computer vision applications.\nGyro Sensors (Gyroscope): Detect angular velocity and orientation of objects.\nObstacle Sensors: Identify the presence of obstacles to avoid collisions.\nRF Sensors: Use radio frequency signals for detection, tracking, and communication.\nIR Sensors (Infrared): Detect heat signatures or motion using infrared radiation. MQ-02 / MQ-05 Gas Sensors Sense the presence and concentration of gases such as carbon monoxide, methane, or smoke.\nLDR Sensor (Light Dependent Resistor): Measure light intensity and brightness levels."
            },
            {
              "id": "iot-networking--ultrasonic-distance-sensors",
              "heading": "Ultrasonic Distance Sensors",
              "explanation": "Calculate distance by emitting ultrasonic waves and measuring their reflection time. Actuators receive control signals from IoT systems and convert them into physical actions. They enable automation by performing tasks such as switching devices on or off, controlling motors, or adjusting mechanical components based on sensor data. Role of Actuators in IoT Systems Actuators receive control signals from IoT systems and convert them into physical actions. They enable automation by performing tasks such as switching devices on or off, controlling motors, or adjusting mechanical components based on sensor data. Enabling Technologies of IoT Enabling technologies refer to the foundational technologies that support the core functionalities of IoT systems, such as sensing, connectivity, data processing, and intelligent decision-making."
            },
            {
              "id": "iot-networking--rfid-and-nfc",
              "heading": "RFID and NFC",
              "explanation": "Radio Frequency Identification (RFID) and Near Field Communication (NFC) are used for automatic identification and short-range data exchange. These technologies help IoT systems recognize objects and enable contactless communication.\nEmbedded Systems: Embedded systems are dedicated computing units integrated into IoT devices. They control sensors and actuators, process collected data, and manage communication with other devices or platforms."
            },
            {
              "id": "iot-networking--wireless-sensor-networks-wsn",
              "heading": "Wireless Sensor Networks (WSN)",
              "explanation": "Wireless sensor networks consist of multiple sensor nodes that communicate wirelessly to collect and transmit data. They are widely used for monitoring environmental and industrial conditions.\nCloud Computing and Big Data: Cloud computing provides scalable storage and computing resources for handling large volumes of IoT data, while Big Data technologies support efficient data analysis and management."
            },
            {
              "id": "iot-networking--edge-and-fog-computing",
              "heading": "Edge and Fog Computing",
              "explanation": "Edge and fog computing process data closer to the source devices rather than sending all data to the cloud. This reduces latency, improves response time, and lowers network bandwidth usage. Working of IoT Devices The working of IoT devices involves sensing data, communicating with networks, processing information, and performing actions based on system requirements. Working of IoT Devices\nData Collection and Transmission: IoT devices use sensors to collect data from the environment based on application needs. This data is then transmitted to other devices, gateways, or processing systems for further use.\nData Processing and Trigger Generation: The received data is analyzed either by embedded processors, edge devices, or cloud platforms. Based on predefined conditions or user requirements, triggers are generated for appropriate actions.\nActuation Based on Triggers: Actuators perform physical actions when trigger conditions are satisfied. These actions may include switching devices on or off, controlling motors, or adjusting system parameters automatically.\nInformation Reception: IoT devices can also receive information from networks, other devices, or users. This information is used for analysis, configuration, or improving system behavior."
            },
            {
              "id": "iot-networking--communication-between-devices-and-networks",
              "heading": "Communication Between Devices and Networks",
              "explanation": "IoT systems support communication between multiple devices and even across different networks. This communication is enabled using protocols such as MQTT, CoAP, ZigBee, HTTP, and FTP, ensuring reliable data exchange. IoT Communication Protocols IoT communication protocols are sets of rules that enable devices to exchange data efficiently and reliably over networks. Different protocols work at different layers—some focus on how data is delivered, others on how devices address and identify each other, and some define how applications interact with the data. Using the right protocol ensures IoT devices operate smoothly even under low power, limited bandwidth, or unreliable network conditions.\nMQTT (Message Queuing Telemetry Transport): A lightweight, low-overhead protocol using a publish/subscribe model. Devices send data to a broker, which distributes it to subscribers, making it ideal for remote or low-power IoT devices."
            },
            {
              "id": "iot-networking--coap-constrained-application-protocol",
              "heading": "CoAP (Constrained Application Protocol)",
              "explanation": "A simple, web-like protocol designed for constrained devices. It uses request/response messaging and can work over UDP, reducing bandwidth usage and enabling efficient communication for small sensors and actuators.\nHTTP (Hypertext Transfer Protocol): A widely used protocol for web communication. In IoT, it connects devices to web servers or cloud platforms, allowing easy integration with web-based applications and dashboards.\nTCP (Transmission Control Protocol): Provides reliable, ordered delivery with error checking. It ensures that no data is lost and packets arrive in the correct sequence, which is essential for applications where accuracy is critical."
            },
            {
              "id": "iot-networking--udp-user-datagram-protocol",
              "heading": "UDP (User Datagram Protocol)",
              "explanation": "A faster, connectionless protocol with minimal overhead. It doesn’t guarantee delivery, but it’s suitable for real-time applications like video streaming or sensor data where speed is more important than perfect reliability.\nIPv6: Offers a huge address space, essential as IoT devices grow in number. It also provides better support for mobile devices and automatic configuration. 6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks) Allows small, low-power devices to use IPv6 by compressing headers and enabling communication over constrained wireless networks, such as sensor networks. Applications\nSmart Homes: Control lighting, heating, appliances, and security systems remotely for comfort, energy savings, and safety.\nSmart Cities: Manage traffic, waste, street lighting, and environmental monitoring to improve urban living.\nHealthcare and Wearables: Track health metrics, monitor patients remotely, and provide personalized care."
            },
            {
              "id": "iot-networking--industrial-iot-iiot",
              "heading": "Industrial IoT (IIoT)",
              "explanation": "Optimize factory operations with predictive maintenance, automation, and machine-to-machine communication.\nAgriculture: Monitor soil, crops, and irrigation systems to increase yield and reduce resource waste.\nTransportation and Logistics: Track vehicles, manage fleets, monitor cargo, and optimize delivery routes. Advantages\nAutomation and efficiency: IoT automates repetitive tasks and reduces manual effort, improving productivity.\nReal-time monitoring: It continuously tracks devices and environments, enabling faster detection and response to issues.\nResource optimization: It analyzes usage patterns to reduce wastage of energy, water, and materials.\nImproved decision-making: It provides data-driven insights that help organizations make better operational choices.\nCost reduction: It enables predictive maintenance and efficient operations, lowering downtime and maintenance costs. Disadvantages"
            },
            {
              "id": "iot-networking--security-vulnerabilities",
              "heading": "Security vulnerabilities",
              "explanation": "Large numbers of devices increase attack surface, and weak device security can lead to hacking or botnets.\nPrivacy concerns: Always-on sensors can collect sensitive user or location data, creating tracking and misuse risks.\nReliability dependence: IoT systems often depend on internet/cloud availability, so outages can disrupt services.\nInteroperability issues: Devices from different vendors may not follow the same standards, causing integration problems.\nMaintenance overhead: Managing updates, patches, batteries, and device lifecycle at scale is complex and costly."
            }
          ],
          "quick_revision": [
            "Introduction to Internet of Things - IOT The Internet of Things (IoT) is a network of physical objects embedded with sensors, software, and communication technologies,…",
            "Sensors and Actuators: IoT Devices (Things): Physical objects such as appliances, machines, vehicles, or wearables that sense data from the environment or perform actions.",
            "User Interface and Applications: Dashboards, mobile apps, or web interfaces that allow users to monitor data, control devices, and receive alerts.",
            "Transport / Network Layer: Transfers sensed data from IoT devices to gateways, edge nodes, or cloud platforms.",
            "Application Layer: Provides dashboards, mobile apps, or web interfaces for monitoring and controlling IoT systems.",
            "Ultrasonic Distance Sensors: Calculate distance by emitting ultrasonic waves and measuring their reflection time.",
            "RFID and NFC: Radio Frequency Identification (RFID) and Near Field Communication (NFC) are used for automatic identification and short-range data exchange.",
            "Wireless Sensor Networks (WSN): Wireless sensor networks consist of multiple sensor nodes that communicate wirelessly to collect and transmit data.",
            "Edge and Fog Computing: Edge and fog computing process data closer to the source devices rather than sending all data to the cloud.",
            "Communication Between Devices and Networks: IoT systems support communication between multiple devices and even across different networks.",
            "CoAP (Constrained Application Protocol): A simple, web-like protocol designed for constrained devices.",
            "UDP (User Datagram Protocol): A faster, connectionless protocol with minimal overhead.",
            "Industrial IoT (IIoT): Optimize factory operations with predictive maintenance, automation, and machine-to-machine communication.",
            "Security vulnerabilities: Large numbers of devices increase attack surface, and weak device security can lead to hacking or botnets."
          ]
        },
        {
          "id": "network-slicing-in-5g",
          "title": "Network Slicing in 5G",
          "summary": "Networks Network slicing in 5G is a technique that enables a single physical network to be divided into multiple virtual slices, each optimised for specific performance requirements, such as bandwidth, latency, and reliability, to support different applications efficiently.",
          "sections": [
            {
              "id": "network-slicing-in-5g--overview",
              "heading": "Overview",
              "explanation": "Networks Network slicing in 5G is a technique that enables a single physical network to be divided into multiple virtual slices, each optimised for specific performance requirements, such as bandwidth, latency, and reliability, to support different applications efficiently. Each network slice is designed for a specific use case. One slice supports high-speed mobile broadband services. Another slice enables ultra-reliable and low-latency communication for critical applications such as remote surgery and autonomous vehicles. A separate slice supports massive IoT connectivity by handling a large number of devices. Network Slicing in 5G Core Features of 5G"
            },
            {
              "id": "network-slicing-in-5g--ultra-reliable-low-latency-communication-urllc",
              "heading": "Ultra-Reliable Low-Latency Communication (URLLC)",
              "explanation": "Delivers extremely low latency and high reliability, making it suitable for critical applications such as autonomous vehicles, industrial automation, remote surgery, and telemedicine.\nEnhanced Mobile Broadband (eMBB): Provides very high data rates and stable, high-speed internet connectivity to support applications such as HD video streaming, virtual reality, and cloud services."
            },
            {
              "id": "network-slicing-in-5g--massive-machine-type-communication-mmtc",
              "heading": "Massive Machine-Type Communication (mMTC)",
              "explanation": "Supports the connection of a large number of IoT devices simultaneously, enabling applications like smart cities, smart agriculture, and large-scale IoT deployments. Defining Key Terminologies"
            },
            {
              "id": "network-slicing-in-5g--network-slicing",
              "heading": "Network Slicing",
              "explanation": "Network slicing is a 5G technology that allows the creation of multiple virtual networks over a single shared physical infrastructure, with each slice optimized to meet specific service requirements such as latency, bandwidth, and reliability. 5G 5G is the fifth generation of wireless communication technology that offers higher data speeds, ultra-low latency, increased capacity, and improved connectivity compared to previous generations. The Step-by-Step Process"
            },
            {
              "id": "network-slicing-in-5g--slice-creation",
              "heading": "Slice Creation",
              "explanation": "First, the network operator decides what each slice is meant to do. Based on the application, requirements such as bandwidth, latency, reliability, and security are defined."
            },
            {
              "id": "network-slicing-in-5g--resource-allocation",
              "heading": "Resource Allocation",
              "explanation": "After defining the slice, the network assigns the required resources (like spectrum, computing power, and network functions) so that each slice can perform its task efficiently."
            },
            {
              "id": "network-slicing-in-5g--isolation-and-management",
              "heading": "Isolation and Management",
              "explanation": "Each slice is kept separate from the others. This means every slice has its own control and management, ensuring that problems or heavy traffic in one slice do not affect the performance of other slices. Real-World Applications"
            },
            {
              "id": "network-slicing-in-5g--smart-cities",
              "heading": "Smart Cities",
              "explanation": "Network slicing helps smart cities operate efficiently by supporting applications such as intelligent traffic control, smart lighting, and energy optimization, each with its own network requirements."
            },
            {
              "id": "network-slicing-in-5g--autonomous-vehicles",
              "heading": "Autonomous Vehicles",
              "explanation": "Self-driving vehicles require continuous, low-latency, and highly reliable communication to operate safely. Network slicing provides dedicated network resources to ensure uninterrupted data exchange between vehicles and infrastructure."
            },
            {
              "id": "network-slicing-in-5g--iot-and-industry-4-0",
              "heading": "IoT and Industry 4.0",
              "explanation": "Network slicing enables smooth and reliable communication for large numbers of IoT devices and industrial systems. This is essential for smart factories, automation, real-time monitoring, and efficient industrial operations. Advantages of Network Slicing in 5G Networks"
            },
            {
              "id": "network-slicing-in-5g--customization-and-efficient-resource-allocation",
              "heading": "Customization and Efficient Resource Allocation",
              "explanation": "Network slicing allows the network to be customized for specific applications by allocating the right amount of resources, resulting in better performance and efficient usage.\nImproved Quality of Service (QoS): It ensures low latency, high bandwidth, and high reliability for critical applications such as healthcare, automation, and autonomous systems.\nMulti-Tenancy Support: Multiple users or service providers can share the same physical network infrastructure while remaining securely isolated from each other."
            },
            {
              "id": "network-slicing-in-5g--cost-efficiency",
              "heading": "Cost Efficiency",
              "explanation": "By optimizing resource usage, network slicing reduces operational costs and enables service providers to offer specialized services, creating new revenue opportunities.\nFlexibility and Scalability: Network slices can be dynamically created, modified, or scaled based on changing network demands and application requirements.\nEnhanced Security: Isolation between slices helps contain security threats, ensuring that issues in one slice do not affect other slices. Disadvantages of Network Slicing in 5G Networks"
            },
            {
              "id": "network-slicing-in-5g--increased-complexity-and-overhead",
              "heading": "Increased Complexity and Overhead",
              "explanation": "Managing multiple network slices increases operational complexity. It also introduces additional signaling and requires skilled personnel to design, monitor, and maintain the slices.\nResource Contention: Since all slices share the same physical infrastructure, inefficient resource allocation can lead to congestion or performance degradation in one or more slices."
            },
            {
              "id": "network-slicing-in-5g--interoperability-and-privacy-challenges",
              "heading": "Interoperability and Privacy Challenges",
              "explanation": "Supporting slices with different requirements can create compatibility issues across network components. Inadequate isolation between slices may also increase data privacy and security risks.\nHigh Initial Investment: Implementing network slicing requires significant upfront investment in advanced infrastructure, virtualization technologies, and software upgrades."
            }
          ],
          "quick_revision": [
            "Networks Network slicing in 5G is a technique that enables a single physical network to be divided into multiple virtual slices, each optimised for specific performance…",
            "Ultra-Reliable Low-Latency Communication (URLLC): Delivers extremely low latency and high reliability, making it suitable for critical applications such as autonomous vehicles, industrial automation, remote surgery, and…",
            "Massive Machine-Type Communication (mMTC): Supports the connection of a large number of IoT devices simultaneously, enabling applications like smart cities, smart agriculture, and large-scale IoT deployments.",
            "Network Slicing: Network slicing is a 5G technology that allows the creation of multiple virtual networks over a single shared physical infrastructure, with each slice optimized to meet…",
            "Slice Creation: First, the network operator decides what each slice is meant to do.",
            "Resource Allocation: After defining the slice, the network assigns the required resources (like spectrum, computing power, and network functions) so that each slice can perform its task…",
            "Isolation and Management: Each slice is kept separate from the others.",
            "Smart Cities: Network slicing helps smart cities operate efficiently by supporting applications such as intelligent traffic control, smart lighting, and energy optimization, each with…",
            "Autonomous Vehicles: Self-driving vehicles require continuous, low-latency, and highly reliable communication to operate safely.",
            "IoT and Industry 4.0: Network slicing enables smooth and reliable communication for large numbers of IoT devices and industrial systems.",
            "Customization and Efficient Resource Allocation: Network slicing allows the network to be customized for specific applications by allocating the right amount of resources, resulting in better performance and efficient…",
            "Cost Efficiency: By optimizing resource usage, network slicing reduces operational costs and enables service providers to offer specialized services, creating new revenue opportunities.",
            "Increased Complexity and Overhead: Managing multiple network slices increases operational complexity.",
            "Interoperability and Privacy Challenges: Supporting slices with different requirements can create compatibility issues across network components."
          ]
        }
      ]
    }
  ]
};

export default COMPUTER_NETWORK_RESOURCE;
