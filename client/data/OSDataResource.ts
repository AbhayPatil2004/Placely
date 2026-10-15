import type { ResourceDocument } from "@/components/subjects/resourceTypes";

const OS_DATA_RESOURCE: ResourceDocument = {
  "subject": "Operating Systems",
  "format_version": "2.0",
  "reading_style": "Short topic summaries, scannable sections, key points, examples, and quick revision notes.",
  "topics": [
    {
      "id": "introduction",
      "title": "Introduction",
      "category": "Basics",
      "source_id": "introduction",
      "summary": "Introduction to Operating System An operating system acts as an intermediary between the computer hardware and the user.",
      "sections": [
        {
          "id": "introduction--overview",
          "heading": "Overview",
          "explanation": "Introduction to Operating System An operating system acts as an intermediary between the computer hardware and the user. It provides a controlled interface between users/applications and computer hardware and manages system resources. It provides an environment in which users can execute programs conveniently and efficiently. The operating system's kernel remains active when the computer is running and manages system resources and provides essential services to programs. It assigns resources such as memory, processors, and input/output devices to processes that need them. Every general-purpose computer consists of hardware, an operating system, system programs and application programs. The hardware includes the CPU, main memory, storage devices, and I/O and peripheral devices. System programs include compilers, assemblers, loaders, editors, utilities, and command interpreters. Application programs are user-level software that perform specific tasks. The OS kernel remains active while the computer is running and manages hardware resources and provides services to system and application programs. The OS itself is not only a user interface. Instead, it provides an interface for user interaction, typically through: Command-Line Interface (CLI), (e.g., Bash, PowerShell) Graphical User Interface (GUI), (e.g., Windows desktop, macOS Finder) Note: At the core of the OS lies the kernel, which provides the core interface between hardware and software and handles low-level operations such as process management, memory management, file system management, and device management. Goals of Operating System"
        },
        {
          "id": "introduction--primary-goals",
          "heading": "Primary Goals",
          "explanation": "The primary goals of an operating system (OS) are to provide an easy-to-use and convenient environment for executing user programs."
        },
        {
          "id": "introduction--user-convenience",
          "heading": "User Convenience",
          "explanation": "It should be easy to use, providing a user-friendly interface and making it simple to interact with the system.\nProgram Execution: It facilitates the execution of user programs by providing the necessary environment and services for them to run.\nResource Management: The OS manages and allocates the computer's resources, including the CPU, memory, disk storage and input/output devices, to ensure fair utilization.\nSecurity: The OS protects the system and user data from unauthorized access, ensuring confidentiality, integrity and availability of information."
        },
        {
          "id": "introduction--secondary-goals",
          "heading": "Secondary Goals",
          "explanation": "Secondary goals of an operating system focus on improving overall system performance and stability. They ensure efficient use of resources and make the system reliable and robust.\nEfficient Resource Utilization: It should aim to maximize the performance and utilization of computer resources like CPU, Memory and I/O devices, ensuring that the system runs smoothly and efficiently.\nReliability: The OS should be robust and reliable, able to handle errors and exceptions gracefully and maintain stable system operation. Components of Operating System Two commonly discussed parts of an operating system are the kernel and the shell. Shell is a command interpreter that provides an interface for users to interact with the operating system. It accepts user commands, interprets them, and invokes the appropriate programs or system services. Kernel is the core component of the operating system. It provides the interface between software and hardware and manages resources such as the CPU, memory, and I/O devices. List of Common Operating Systems There are multiple types of operating systems each having its own unique features:\nWindows OS: Developed by Microsoft. Used in personal computing, business environment, gaming. macOS Developed by Apple. Used for creative industries (design, video editing, music production), Personal computing and Professional environments.\nLinux: Initially created by Linus Torvalds and now developed collaboratively by a global open-source community. It is widely used in servers and data centers, development environments, embedded systems, and personal computers.\nUnix: Originally developed at AT&T Bell Labs. Various commercial and open-source Unix and Unix-like systems are used in servers, workstations, development environments, research, and academic settings.\nPlatform for Application Programs: It provides a platform, on top of which, other programs, called application programs can run."
        },
        {
          "id": "introduction--managing-input-output-i-o",
          "heading": "Managing Input/Output (I/O)",
          "explanation": "It manages system resources such as memory, monitors, keyboards, printers, and other I/O devices to ensure their efficient and fair utilization.\nMultitasking: It manages memory and allows multiple processes to execute concurrently in their own address spaces. Processes can communicate using mechanisms such as shared memory and message passing."
        },
        {
          "id": "introduction--memory-and-file-management",
          "heading": "Memory and File Management",
          "explanation": "It manages the computer’s main memory and secondary storage. Additionally, it allocates and deallocates memory for tasks and applications."
        },
        {
          "id": "introduction--provides-security",
          "heading": "Provides Security",
          "explanation": "It helps protect the system and applications through mechanisms such as authentication, authorization, access control, and isolation. Need of Operating Systems . Factors to Consider When Choosing an Operating System There are so many factors to be considered while choosing the best Operating System for our use. These factors are mentioned below."
        },
        {
          "id": "introduction--price-factor",
          "heading": "Price Factor",
          "explanation": "Cost is an important factor when choosing an operating system. Some operating systems, such as Linux distributions, are available free of charge, and others may involve licensing costs or require specific hardware."
        },
        {
          "id": "introduction--ease-of-use",
          "heading": "Ease of Use",
          "explanation": "Some operating systems are designed to be more user-friendly, while others may require more technical knowledge. Users should choose an operating system that matches their level of expertise and requirements."
        },
        {
          "id": "introduction--compatibility-factor",
          "heading": "Compatibility Factor",
          "explanation": "Some operating systems support a wider range of applications and hardware than others. Users should choose an operating system that supports the applications and hardware they need."
        },
        {
          "id": "introduction--security-factor",
          "heading": "Security Factor",
          "explanation": "Security is an important factor when choosing an operating system. Modern operating systems such as Windows, macOS, and Linux provide various security features, and the overall security of a system also depends on proper configuration, regular updates, and responsible usage. 32 vs 64-bit Operating Systems Functions of OS History of Operating Systems for more about history."
        }
      ],
      "quick_revision": [
        "Introduction to Operating System An operating system acts as an intermediary between the computer hardware and the user.",
        "Primary Goals: The primary goals of an operating system (OS) are to provide an easy-to-use and convenient environment for executing user programs.",
        "User Convenience: It should be easy to use, providing a user-friendly interface and making it simple to interact with the system.",
        "Secondary Goals: Secondary goals of an operating system focus on improving overall system performance and stability.",
        "Managing Input/Output (I/O): It manages system resources such as memory, monitors, keyboards, printers, and other I/O devices to ensure their efficient and fair utilization.",
        "Memory and File Management: It manages the computer’s main memory and secondary storage.",
        "Provides Security: It helps protect the system and applications through mechanisms such as authentication, authorization, access control, and isolation.",
        "Price Factor: Cost is an important factor when choosing an operating system.",
        "Ease of Use: Some operating systems are designed to be more user-friendly, while others may require more technical knowledge.",
        "Compatibility Factor: Some operating systems support a wider range of applications and hardware than others.",
        "Security Factor: Security is an important factor when choosing an operating system."
      ]
    },
    {
      "id": "types-of-os",
      "title": "Types of OS",
      "category": "Basics",
      "source_id": "types-of-os",
      "summary": "Types of Operating Systems An operating system (OS) is software that manages computer hardware and software resources.  It acts as a bridge between users and the computer, ensuring smooth operation.",
      "sections": [
        {
          "id": "types-of-os--overview",
          "heading": "Overview",
          "explanation": "Types of Operating Systems An operating system (OS) is software that manages computer hardware and software resources. It acts as a bridge between users and the computer, ensuring smooth operation. Different types of OS serve different needs; some handle one task at a time, while others manage multiple users or real-time processes. Types of Operating System"
        },
        {
          "id": "types-of-os--batch-operating-system",
          "heading": "Batch Operating System",
          "explanation": "Batch Operating System is designed to handle large groups of similar jobs efficiently. It does not interact with the computer directly but instead processes jobs that are grouped by an operator. These jobs are queued and executed one after the other, without user interaction during the process. Executes a group of similar jobs automatically in batches without user interaction.\nMinimal Idle Time: The system minimizes idle time by processing jobs in a continuous sequence without human intervention.\nHandling Repetitive Tasks: Ideal for managing large, repetitive tasks, such as payroll and billing, with minimal effort.\nImproved Throughput: Batch systems can handle high volumes of jobs at once, improving overall system throughput.\nDisadvantages: Inefficient CPU Utilization : When a job is waiting for input/output (I/O), the CPU remains idle, leading to poor utilization of resources.\nIncreased Response Time: The time between job submission and output can be high as all jobs are processed sequentially. Lack of Real-Time Feedback : Users cannot interact with the system in real-time, making it less suitable for interactive tasks."
        },
        {
          "id": "types-of-os--multi-programming-operating-system",
          "heading": "Multi-Programming Operating System",
          "explanation": "In a Multi-Programming Operating System, multiple programs run in memory at the same time. The CPU switches between programs, utilizing its resources more effectively and improving overall system performance. Runs multiple programs in memory at the same time to maximize CPU usage.\nBetter CPU Utilization: CPU stays busy by switching to another job during I/O wait.\nImproved Throughput: Multiple jobs run concurrently, increasing work done per unit time.\nEfficient Resource Use: CPU, memory, and I/O devices are shared effectively among processes.\nComplex Design: Requires advanced memory management and CPU scheduling.\nSecurity Issues: More programs in memory increase chances of unauthorized access.\nHigh Memory Requirement: Needs larger RAM to run multiple programs together. Examples: Banking systems Railway servers Billing machines"
        },
        {
          "id": "types-of-os--multi-tasking-time-sharing-operating-systems",
          "heading": "Multi-tasking/Time-sharing Operating systems",
          "explanation": "Multitasking OS is a type of multiprogramming system where each process runs in a round-robin manner. Every task gets a fixed time slice called a quantum. After the quantum ends, the OS switches to the next task, allowing multiple tasks whether from one user or many to run smoothly on a single system. Allows multiple tasks to run by giving each a small time slice for smooth, shared system use.\nEqual CPU Access: Each task gets a fair share of CPU time.\nReduced Software Duplication: Many users can run the same software without needing separate copies.\nLow CPU Idle Time: Efficient scheduling keeps the CPU busy. Lower Reliability System failures affect all users.\nSecurity Concerns: Multiple users increase risks to data integrity and privacy.\nCommunication Issues: Data sharing between users can cause conflicts. Examples: IBM VM/CMS TSO (Time Sharing Option)"
        },
        {
          "id": "types-of-os--multi-processing-operating-system",
          "heading": "Multi-Processing Operating System",
          "explanation": "Multi-Processing OS is a type of Operating System in which more than one CPU is used for the execution of processes. It betters the throughput of the System. Uses two or more CPUs simultaneously to increase speed and reliability.\nFaster Processing: Multiple CPUs work simultaneously, increasing overall system speed.\nHigh Reliability: If one processor fails, others can continue working (fault tolerance).\nSupports Heavy Tasks: Ideal for computation-intensive applications like scientific or industrial tasks.\nHigh Cost: Multiple processors and complex hardware increase system cost.\nComplex Design: Requires advanced OS support for communication and task distribution.\nNot Always Efficient: Poor task distribution can lead to idle processors and wasted resources. Examples: UNIX Linux (Ubuntu, Red Hat, Debian) macOS"
        },
        {
          "id": "types-of-os--distributed-operating-system",
          "heading": "Distributed Operating System",
          "explanation": "Distributed operating systems connects multiple independent computers through a shared communication network. Each system has its own CPU and memory but works together as a single unit. The main benefit is remote access, allowing users to use files and software stored on other connected systems. Connects multiple independent computers to function as a single coordinated system.\nIndependent Systems: Failure of one machine does not affect others.\nEasily Scalable: New systems can be added to the network easily.\nLower Processing Delays: Tasks are handled faster across multiple machines.\nNetwork Dependency: If the main network fails, communication stops.\nLack of Standardization: No well-defined language or model for building such systems.\nHigh Cost & Complexity: Hardware is expensive, and the software is complex and not widely understood."
        },
        {
          "id": "types-of-os--issues-with-distributed-operating-system",
          "heading": "Issues With Distributed Operating System",
          "explanation": "Networking causes delays in the transfer of data between nodes of a distributed system. Such delays may lead to an inconsistent view of data located in different nodes and make it difficult to know the chronological order in which events occurred in the system. Control functions like scheduling, resource allocation and deadlock detection have to be performed in several nodes to achieve computation speedup and provide reliable operation when computers or networking components fail. Messages exchanged by processes present in different nodes may travel over public networks and pass through computer systems that are not controlled by the distributed operating system. An intruder may exploit this feature to tamper with messages or create fake messages to fool the authentication procedure and masquerade as a user of the system. Examples: LOCUS MICROS"
        },
        {
          "id": "types-of-os--network-operating-system",
          "heading": "Network Operating System",
          "explanation": "A Network Operating System (NOS) runs on a server and manages data, users, security, applications, and other network functions. It allows shared access to files, printers, and resources within a small private network. Users can see the configuration and connections of other users, which is why these systems are considered loosely coupled systems. Manages and supports users, data, and security across connected computers within a network.\nCentralized and Stable Servers: Provide reliable management of resources.\nEasy Upgrades: New hardware and technologies can be added without difficulty.\nRemote Access: Users can access the server from different locations and devices.\nHigh Server Cost: Setting up and maintaining servers is expensive.\nDependency on Server: Most operations rely on a central server.\nRegular Maintenance Needed: Frequent updates and technical support are required. Microsoft Windows Server 2003 UNIX, Linux Mac OS X"
        },
        {
          "id": "types-of-os--real-time-operating-system",
          "heading": "Real-Time Operating System",
          "explanation": "These types of OSs serve real-time systems. The time interval required to process and respond to inputs is very small. This time interval is called response time. Real-time systems are used when there are time requirements that are very strict like missile systems, air traffic control systems, robots, etc. Types of Real-Time Operating Systems\nHard Real-Time Operating System: Used where strict timing is essential and any delay is unacceptable, such as airbags or automatic parachutes. These systems avoid virtual memory to ensure immediate response.\nSoft Real-Time Operating System: Used where timing is important but minor delays are acceptable. These systems aim to give quick and predictable responses but do not require perfect accuracy. They are commonly used in multimedia applications, gaming, video streaming, and other interactive tasks. Hard Real-Time OS and Soft Real-Time OS. Processes data and responds immediately within strict time limits for real-time applications\nMaximum Utilization: Maximum utilization of devices and systems, thus more output from all the resources. Error-Free These types of systems are error-free.\nMemory Allocation: Memory allocation is best managed in these types of systems.\nLimited Tasks: Very few tasks run at the same time and they focus on very few applications to avoid errors.\nComplex Algorithms: The algorithms are very complex and difficult for the designer to write.\nThread Priority: It is not good to set thread priority, as these systems are not suitable for frequent task switching. Examples: Scientific experiments Medical imaging systems"
        },
        {
          "id": "types-of-os--mobile-operating-systems",
          "heading": "Mobile Operating Systems",
          "explanation": "Mobile operating systems are designed specifically for mobile devices such as smartphones and tablets. Examples of such operating systems are Android and iOS. These operating systems manage the hardware and software resources of the device, providing a platform for running applications and ensuring a seamless user experience. Runs on smartphones and tablets, managing hardware, apps, and touch-based interfaces.\nUser-Friendly Interfaces: Mobile operating systems are designed to be intuitive and easy to use, making them accessible to a wide range of users.\nExtensive App Ecosystems: The availability of a vast number of applications allows users to customize their devices to meet their specific needs.\nConnectivity Options: Mobile operating systems support multiple connectivity options, enabling users to stay connected wherever they go.\nBattery Life Constraints: Despite advancements in power management, battery life remains a challenge for mobile devices, especially with heavy usage.\nSecurity Risks: Mobile devices are susceptible to various security threats, such as malware and phishing attacks, which can compromise user data.\nFragmentation: In the case of Android, the wide range of devices and customizations can lead to fragmentation, making it difficult for developers to ensure compatibility across all devices. Android iOS"
        }
      ],
      "quick_revision": [
        "Types of Operating Systems An operating system (OS) is software that manages computer hardware and software resources.",
        "Batch Operating System: Batch Operating System is designed to handle large groups of similar jobs efficiently.",
        "Multi-Programming Operating System: In a Multi-Programming Operating System, multiple programs run in memory at the same time.",
        "Multi-tasking/Time-sharing Operating systems: Multitasking OS is a type of multiprogramming system where each process runs in a round-robin manner.",
        "Multi-Processing Operating System: Multi-Processing OS is a type of Operating System in which more than one CPU is used for the execution of processes.",
        "Distributed Operating System: Distributed operating systems connects multiple independent computers through a shared communication network.",
        "Issues With Distributed Operating System: Networking causes delays in the transfer of data between nodes of a distributed system.",
        "Network Operating System: A Network Operating System (NOS) runs on a server and manages data, users, security, applications, and other network functions.",
        "Real-Time Operating System: These types of OSs serve real-time systems.",
        "Mobile Operating Systems: Mobile operating systems are designed specifically for mobile devices such as smartphones and tablets."
      ]
    },
    {
      "id": "kernel-in-os",
      "title": "Kernel in OS",
      "category": "Basics",
      "source_id": "kernel-in-os",
      "summary": "Kernel in Operating System A kernel is the core part of an operating system.  It acts as a bridge between software applications and the hardware of a computer.",
      "sections": [
        {
          "id": "kernel-in-os--overview",
          "heading": "Overview",
          "explanation": "Kernel in Operating System A kernel is the core part of an operating system. It acts as a bridge between software applications and the hardware of a computer. The kernel manages system resources, such as the CPU, memory and devices, ensuring everything works together smoothly and efficiently. It handles tasks like running programs, accessing files and connecting to devices like printers and keyboards. An Operating System includes the kernel as its core, but also provides a user interface, file system management, network services and various utility applications that allow users to interact with the system Facilitates communication between hardware and user applications. Ensures efficient and secure multitasking. Manages system stability and prevents unauthorized resource access. Types of Kernel The following are different types of kernels. Monolithic kernel: all OS services run in kernel space → fast, but less fault-isolation. Example: Unix, Linux, Open VMS, XTS-400 etc. Microkernel minimal kernel functionality; most services moved to user space -> better reliability, but more overhead. Example: Minix 3 and Mach (true microkernel versions like Mach 3.0) Hybrid kernel : mixes monolithic + microkernel ideas; some services in kernel for speed, others isolated for safety. Example: Windows NT family (Windows 2000, XP, Vista, 7, 8, 10 etc.), macOS / XNU, React OS and Haiku OS Nanokernel extremely minimal kernel, providing only basic hardware abstraction; everything else outside. Example: Nemesis and MIT Exokernel projects like XOK, Aegis\nExokernel: Design where the OS handles only protection (security and safety between programs). It gives applications direct access to hardware resources instead of managing them itself. Example: MIT Exokernel, Xok , ExOS . Functions of Kernel The kernel is responsible for various critical functions that ensure the smooth operation of the computer system. These functions include: Function of Kernel Process Management Scheduling and execution of processes."
        },
        {
          "id": "kernel-in-os--memory-management",
          "heading": "Memory Management",
          "explanation": "Allocation and deallocation of memory space, managing virtual memory, handling memory protection and sharing."
        },
        {
          "id": "kernel-in-os--device-management",
          "heading": "Device Management",
          "explanation": "Managing input/output devices, providing a unified interface for hardware devices and handling device driver communication.\nFile System Management: Managing file operations and providing a file system interface to applications."
        },
        {
          "id": "kernel-in-os--resource-management",
          "heading": "Resource Management",
          "explanation": "Managing system resources (CPU time, disk space, network bandwidth). It allocating and deallocating resources as needed.\nSecurity and Access Control: Enforcing access control policies like user permissions and authentication."
        },
        {
          "id": "kernel-in-os--inter-process-communication",
          "heading": "Inter-Process Communication",
          "explanation": "Facilitating communication between processes by providing mechanisms like message passing and shared memory. Working of Kernel kernel is the first part of the OS loaded into memory during boot, and it stays resident while the system is running. It operates in a privileged mode (kernel mode), separate from user mode for applications; user apps can’t directly access hardware or critical resources. Applications make requests to the kernel via system calls (or software interrupts). The kernel handles these by switching from user mode to kernel mode. Kernel executes the requested operation (e.g. file I/O, process creation, memory allocation). On completion, kernel returns result (or error) to user space. Kernel does context switching as needed (scheduler picks next process/thread) to allow multitasking."
        }
      ],
      "quick_revision": [
        "Kernel in Operating System A kernel is the core part of an operating system.",
        "Memory Management: Allocation and deallocation of memory space, managing virtual memory, handling memory protection and sharing.",
        "Device Management: Managing input/output devices, providing a unified interface for hardware devices and handling device driver communication.",
        "Resource Management: Managing system resources (CPU time, disk space, network bandwidth).",
        "Inter-Process Communication: Facilitating communication between processes by providing mechanisms like message passing and shared memory."
      ]
    },
    {
      "id": "system-call",
      "title": "System Call",
      "category": "Basics",
      "source_id": "system-call",
      "summary": "User programs cannot directly access hardware or critical OS resources because it would make the system unstable and insecure.",
      "sections": [
        {
          "id": "system-call--overview",
          "heading": "Overview",
          "explanation": "User programs cannot directly access hardware or critical OS resources because it would make the system unstable and insecure. To maintain safety, the operating system provides system calls — controlled interfaces that allow user programs to request services from the kernel. These calls act as a gateway between user mode and kernel mode. System Calls are, A way for programs to interact with the operating system. Provide the services of the operating system to the user programs. Only entry points into the kernel are executed in kernel mode. Example: Opening a file in C (fopen) internally uses system calls like open(). Running a program in Linux uses fork() and exec() system calls. Printing on screen uses the write() system call. How do System Calls Work? A system call is a controlled entry point that allows a user program to request a service from the operating system. Here's how it works: The user program executes a system call instruction (e.g., using syscall or int 0x80). The CPU switches from user mode → kernel mode for safe execution. The kernel identifies the system call number and performs the requested operation (file access, process creation, memory allocation, etc.). After completing the task, the kernel switches back to user mode. The result (success/failure/data) is returned to the program. Without system calls, every program would need its own way to access hardware, leading to inconsistent and insecure systems. System calls do not always cause context switching. They primarily involve a mode switch from user mode to kernel mode. A context switch happens only when the calling process is blocked , not during every system call. Types of System Calls Services provided by an OS are typically related to any kind of operation that a user program can perform like creation, termination, forking, moving, communication, etc. Similar types of operations are grouped into one single system call category. System calls are classified into the following categories: Types of system call Different Types of System Calls in OS\nFile System: Used to create, open, read, write, and manage files and directories.\nProcess Control: Used to create, execute, synchronize, and terminate processes.\nMemory Management: Used to allocate, deallocate, and manage memory for processes. Interprocess Communication (IPC) : Used for data exchange and communication between different processes.\nDevice Management: Used to request and release devices, and to perform read/write operations on them."
        }
      ],
      "quick_revision": [
        "User programs cannot directly access hardware or critical OS resources because it would make the system unstable and insecure."
      ]
    },
    {
      "id": "system-initialization",
      "title": "System Initialization",
      "category": "Basics",
      "source_id": "system-initialization",
      "summary": "What Happens When We Turn on Computer? A computer without a running program is nothing more than an inert collection of electronic components.",
      "sections": [
        {
          "id": "system-initialization--overview",
          "heading": "Overview",
          "explanation": "What Happens When We Turn on Computer? A computer without a running program is nothing more than an inert collection of electronic components. The true magic begins the moment we press the power button, a chain reaction of events unfolds from hardware checks to firmware initialization, boot loader execution, and operating system startup. Note: The boot process may be invisible to most users, but it is one of the most critical foundations of modern computing. Steps of Boot Process Behind the scenes, a series of well-defined steps take place that bring the system from an inactive state to a fully functional machine running its operating system (OS). This sequence is known as the boot process."
        },
        {
          "id": "system-initialization--power-supply-initialization",
          "heading": "Power Supply Initialization",
          "explanation": "The process begins when the power supply unit (PSU) sends electricity to the computer’s essential components such as:\nMotherboard: Processor (CPU) Memory (RAM) Hard drive or SSD Cooling fans Note: At this stage, the components receive stable power so they can operate correctly."
        },
        {
          "id": "system-initialization--bios-uefi-startup-and-post",
          "heading": "BIOS/UEFI Startup and POST",
          "explanation": "Modern computers contain a BIOS (Basic Input/Output System) or UEFI (Unified Extensible Firmware Interface) firmware chip. This firmware is responsible for:\nPower-On Self-Test (POST): The POST checks whether critical hardware components like RAM, CPU, video card, and storage devices are functioning correctly.\nError Handling: If an issue is detected, the system either displays an error message on the screen or emits a series of beeps called POST beep codes."
        },
        {
          "id": "system-initialization--hardware-initialization",
          "heading": "Hardware Initialization",
          "explanation": "The BIOS/UEFI configures connected devices and prepares the system for the next stage of booting. 3. Loading the Boot Loader (MBR and UEFI Process) Once POST completes successfully, the BIOS/UEFI looks for a bootable device based on the configured boot order (hard drive, USB, DVD, etc.). In traditional systems, the BIOS searches the Master Boot Record (MBR) located in the first sector of the boot disk. In modern systems, UEFI uses the GUID Partition Table (GPT) and locates the EFI System Partition (ESP). The boot sector contains a small program known as the boot loader. Basic MBR Disk Example: GRUB or LILO (Linux) Note: The job of the boot loader is to load the actual operating system kernel into memory."
        },
        {
          "id": "system-initialization--kernel-and-init-process",
          "heading": "Kernel and Init Process",
          "explanation": "After the boot loader runs, the OS kernel is loaded into RAM. The kernel is the core of the operating system and performs tasks such as: Managing CPU, memory, and hardware devices Initializing system drivers Preparing user space The final step of kernel initialization is to start the init process, which decides the system’s run level.\nRunlevel 3: Multiuser mode with networking (text-based)\nRunlevel 5: Multiuser mode with GUI and display manager Note: Modern systems often use systemd or upstart instead of the traditional SysV init."
        },
        {
          "id": "system-initialization--starting-system-services-and-daemons",
          "heading": "Starting System Services and Daemons",
          "explanation": "The init/systemd process then launches background services known as daemons, such as: Networking services Printing services Security services Display server (X server or Wayland) and display manager (e.g., GDM, LightDM) Note: At this point, the system either displays a login screen (GUI) or a command-line login prompt."
        },
        {
          "id": "system-initialization--user-login-and-desktop-environment",
          "heading": "User Login and Desktop Environment",
          "explanation": "Finally, after the user logs in, the OS loads the desktop environment (such as Windows Desktop, macOS Finder, or Linux GNOME/KDE). This gives the user a graphical interface to interact with applications and the underlying hardware. Functions of BIOS/UEFI During Boot\nPOST: Tests hardware devices to ensure they function properly.\nMBR/GPT Handling: Locates and loads the boot loader from the storage device.\nSystem Configuration: Allows users to set time/date, boot order, CPU and memory settings.\nSecurity Features: Provides password protection, secure boot, and TPM (Trusted Platform Module) support."
        }
      ],
      "quick_revision": [
        "What Happens When We Turn on Computer? A computer without a running program is nothing more than an inert collection of electronic components.",
        "Power Supply Initialization: The process begins when the power supply unit (PSU) sends electricity to the computer’s essential components such as:",
        "BIOS/UEFI Startup and POST: Modern computers contain a BIOS (Basic Input/Output System) or UEFI (Unified Extensible Firmware Interface) firmware chip.",
        "Hardware Initialization: The BIOS/UEFI configures connected devices and prepares the system for the next stage of booting. 3.",
        "Kernel and Init Process: After the boot loader runs, the OS kernel is loaded into RAM. The kernel is the core of the operating system and performs tasks such as: Managing CPU, memory, and…",
        "Starting System Services and Daemons: The init/systemd process then launches background services known as daemons, such as: Networking services Printing services Security services Display server (X server or…",
        "User Login and Desktop Environment: Finally, after the user logs in, the OS loads the desktop environment (such as Windows Desktop, macOS Finder, or Linux GNOME/KDE)."
      ]
    },
    {
      "id": "process-introduction",
      "title": "Process Introduction",
      "category": "Process Scheduling",
      "source_id": "process-introduction",
      "summary": "Process in Operating System A process is a program in execution.  When we write source code in C or C++ and compile it, the compiler generates an executable binary file.",
      "sections": [
        {
          "id": "process-introduction--overview",
          "heading": "Overview",
          "explanation": "Process in Operating System A process is a program in execution. When we write source code in C or C++ and compile it, the compiler generates an executable binary file. This executable file is called a program. When the program is loaded into memory and executed, it becomes a process. A process is an 'active' entity instead of a program, which is considered a 'passive' entity. A single program can create many processes when run multiple times Example: : When we open a .exe or binary file multiple times, multiple instances begin (multiple processes are created). Memory Layout of a Process A process in memory is divided into several distinct sections, each serving a different purpose. Here's how a process typically looks in memory.\nText Section: A text or code segment contains executable instructions. It is typically a read only section\nStack: The stack contains temporary data, such as function parameters, returns addresses, and local variables. Data Section Contains the global variable. Dynamically allocated memory to the process during its run time. Attributes of a Process A process has several important attributes that help the operating system manage and control it. These attributes are stored in a structure called the Process Control Block (PCB) (sometimes called a task control block). The PCB keeps all the key information about the process, including: Process ID (PID) : A unique number assigned to each process so the operating system can identify it.\nProcess State: This shows the current status of the process, like whether it is running, waiting, or ready to execute. Priority and other CPU Scheduling Information : Data that helps the operating system decide which process should run next, like priority levels and pointers to scheduling queues.\nI/O Information: Information about input/output devices the process is using.\nFile Descriptors: Information about open files and network connections.\nAccounting Information: Tracks how long the process has run, the amount of CPU time used, and other resource usage data.\nMemory Management Information: Details about the memory space allocated to the process, including where it is loaded in memory and the structure of its memory layout (stack, heap, etc.). These attributes in the PCB help the operating system control, schedule, and manage each process effectively. States of Process\nProcess Table: CPU Scheduling Criteria Process Schedulers in OS"
        }
      ],
      "quick_revision": [
        "Process in Operating System A process is a program in execution."
      ]
    },
    {
      "id": "process-control-block",
      "title": "Process Control Block",
      "category": "Process Scheduling",
      "source_id": "process-control-block",
      "summary": "Process Control Block in OS A Process Control Block (PCB) is a data structure used by the operating system to keep track of process information and manage execution.",
      "sections": [
        {
          "id": "process-control-block--overview",
          "heading": "Overview",
          "explanation": "Process Control Block in OS A Process Control Block (PCB) is a data structure used by the operating system to keep track of process information and manage execution. It helps the OS monitor and control process execution. Each process is given a unique Process ID (PID) for identification. The PCB stores details such as process state, program counter, stack pointer, open files, and scheduling info. During a state transition, the OS updates the PCB with the latest execution data. It also includes register values, CPU quantum, and process priority. The Process Table is an array of PCBs that maintains information for all active processes. PCB The Process Control Block (PCB) is stored as a part of OS so that normal users cannot access it. This is because it holds important information about the process. Some operating systems place the PCB at the start of the kernel stack for the process, as this is a safe and secure spot. Terminologies used in Process Control Block\nProcess state: Stores whether the process is running, waiting, ready, or terminated\nProcess number Or PID: Every process is assigned a unique id known as process ID or PID. Program Counter stores the address of the next instruction that is to be executed for the process. Registers in the PCB, it is a data structure. When a processes is running and it's time slice expires, the current value of process specific registers would be stored in the PCB and the process would be swapped out. When the process is scheduled to be run, the register values are read from the PCB and written to the CPU registers. This is the main purpose of the registers in the PCB."
        },
        {
          "id": "process-control-block--memory-limits",
          "heading": "Memory limits",
          "explanation": "This field contains the information about memory management system used by the operating system. This may include page tables, segment tables, etc.\nList of Open files: This information includes the list of files opened for a process.\nApplications: Helps the operating system schedule processes and allocate CPU resources efficiently. Enables efficient resource utilization and sharing by providing detailed resource-usage information. Supports context switching through stored CPU registers and stack pointer information. Assists in process synchronization by keeping track of waiting states and required resources. Tracks process states and resource usage to determine which process should be executed next."
        }
      ],
      "quick_revision": [
        "Process Control Block in OS A Process Control Block (PCB) is a data structure used by the operating system to keep track of process information and manage execution.",
        "Memory limits: This field contains the information about memory management system used by the operating system."
      ]
    },
    {
      "id": "process-table",
      "title": "Process Table",
      "category": "Process Scheduling",
      "source_id": "process-table",
      "summary": "Process Table in OS A process table is a data structure maintained by the operating system to keep track of all active processes.",
      "sections": [
        {
          "id": "process-table--overview",
          "heading": "Overview",
          "explanation": "Process Table in OS A process table is a data structure maintained by the operating system to keep track of all active processes. It contains an entry for the\nProcess Control Block: (PCB) of each process, which stores essential information like process ID, state, program counter, CPU registers, memory usage and resource allocations. In most operating systems, its main function is to map each PID to its corresponding PCB. Some OS designs include quick-access fields like process state, parent PID, or scheduling info directly in the process table. Roles of Process Table & Process Control Block\nHelp in Scheduling: Stores process details, and the Process Table organizes them for the scheduler to select the next process.\nFacilitate Context Switching: Keeps CPU registers, stack pointers, and other context data.\nInterrupt Handling: Holds details of interrupts generated by the process and how the OS handled them.\nEnable IPC: Contains flags or pointers for shared memory, pipes, or message queues.\nSupport Resource Allocation: Tracks memory, files, and I/O devices assigned to the process.\nProcess Synchronization & Deadlock Handling: Maintains lock-related info to detect and manage deadlocks or race conditions.\nSecurity & Access Control: Stores user ID, group ID, and permissions for enforcing access control.\nDebugging & Monitoring: Provides data used by tools like top or ps for monitoring and debugging.\nVirtual Memory Management: May hold page table details and page-fault handling info.\nReal-Time Systems: Contains deadlines and priority data for time-critical process execution."
        }
      ],
      "quick_revision": [
        "Process Table in OS A process table is a data structure maintained by the operating system to keep track of all active processes."
      ]
    },
    {
      "id": "process-management-introduction",
      "title": "Process Management Introduction",
      "category": "Process Scheduling",
      "source_id": "process-management-introduction",
      "summary": "Introduction of Process Management Process management is a core function of an Operating System (OS).  It deals with creating, scheduling, and coordinating processes to ensure efficient CPU utilization and smooth system performance.",
      "sections": [
        {
          "id": "process-management-introduction--overview",
          "heading": "Overview",
          "explanation": "Introduction of Process Management Process management is a core function of an Operating System (OS). It deals with creating, scheduling, and coordinating processes to ensure efficient CPU utilization and smooth system performance. Single-tasking systems are easy to manage since only one process runs at a time. Multiprogramming/multitasking systems are more complex, as multiple processes need to share the CPU efficiently. Active processes may share memory and other resources, requiring careful management. Process synchronization is necessary when processes interact or communicate to avoid conflicts. CPU-Bound vs I/O-Bound Processes A CPU-bound process requires more CPU time and spends more time in the running state. An I/O-bound process requires more I/O time and less CPU time. An I/O-bound process spends more time in the waiting state. CPU is much faster than IO devices, so if a process starts doing IO, the CPU should not be sitting idle and must be assigned to some other process if there are waiting processes. The goal of Process Scheduling is to maximize CPU utilization by assigning a process to it if the current running process is doing IO."
        },
        {
          "id": "process-management-introduction--process-management-tasks",
          "heading": "Process Management Tasks",
          "explanation": "Process management is a key part in operating systems with multi-programming or multitasking. Process Creation and Termination : Process creation involves creating a Process ID, setting up Process Control Block, etc. A process can be terminated either by the operating system or by the parent process. Process termination involves clearing all resources allocated to it. : In a multiprogramming system, multiple processes need to get the CPU. It is the job of Operating System to ensure smooth and efficient execution of multiple processes.\nDeadlock Handling: Making sure that the system does not reach a state where two or more processes cannot proceed due to cyclic dependency on each other.\nInter-Process Communication: Operating System provides facilities such as shared memory and message passing for cooperating processes to communicate.\nProcess Synchronization: Process Synchronization is the coordination of execution of multiple processes in a multiprogramming system to ensure that they access shared resources (like memory) in a controlled and predictable manner. A process goes through different states before termination and these state changes require different operations on processes by an operating system. After the process finishes its tasks, the operating system ends it and removes its Process Control Block (PCB). Context Switching of Process"
        },
        {
          "id": "process-management-introduction--context-switching",
          "heading": "Context Switching",
          "explanation": "Context Switching is the process where the CPU stops running one process, saves its current state, and loads the saved state of another process so that multiple processes can share the CPU effectively. Context switching saves the current process state and loads another to share the CPU efficiently. It enables multitasking by quickly switching between processes so no single process blocks others. It is controlled by the scheduler and occurs due to interrupts, higher priority processes, or preemptive scheduling."
        }
      ],
      "quick_revision": [
        "Introduction of Process Management Process management is a core function of an Operating System (OS).",
        "Process Management Tasks: Process management is a key part in operating systems with multi-programming or multitasking.",
        "Context Switching: Context Switching is the process where the CPU stops running one process, saves its current state, and loads the saved state of another process so that multiple…"
      ]
    },
    {
      "id": "process-states",
      "title": "Process States",
      "category": "Process Scheduling",
      "source_id": "process-states",
      "summary": "States of a Process in Operating Systems A process in an operating system passes through multiple states as it begins execution, waits for resources, gets scheduled, runs, and eventually finishes.",
      "sections": [
        {
          "id": "process-states--overview",
          "heading": "Overview",
          "explanation": "States of a Process in Operating Systems A process in an operating system passes through multiple states as it begins execution, waits for resources, gets scheduled, runs, and eventually finishes. These stages collectively describe the complete lifecycle of a process. Types of Process States"
        },
        {
          "id": "process-states--two-state-model",
          "heading": "Two-State Model",
          "explanation": "The Two-State Model divides the process lifecycle into only two possible conditions. A process is either actively using the CPU to execute instructions or waiting until it gets a chance to run. This model helps illustrate the basic interaction between a process and the CPU. The two states are\nRunning: The process is currently using the CPU to execute its tasks."
        },
        {
          "id": "process-states--not-running",
          "heading": "Not Running",
          "explanation": "The process is not using the CPU. It may be waiting for input, waiting for resources, or simply paused. When a new process is created, it starts in the not running state. Initially, this process is kept in a program called the dispatcher\nNot Running State: A newly created process starts here since it is not yet using the CPU."
        },
        {
          "id": "process-states--dispatcher-role",
          "heading": "Dispatcher Role",
          "explanation": "The dispatcher checks if the CPU is free for a new process. Moving to Running State : If the CPU is available, the dispatcher loads the process onto it, shifting it to the running state.\nCPU Scheduler Role: The scheduler selects which process should run next based on the OS’s scheduling policy. The five-state process lifecycle expands the basic two-state idea by separating processes that are simply waiting for CPU time from those that cannot run because they are waiting for an external event. This makes the model more accurate for real operating systems, where processes may pause for input, data, or device responses before continuing.\nNew: The process has just been created. It hasn’t started running yet, but its PCB (Process Control Block) is prepared.\nReady: The process is loaded into memory and prepared to run as soon as the CPU becomes free.\nRunning: The CPU is currently executing this process. With a single CPU system, only one process can be in this state at a time.\nBlocked/Waiting: The process cannot continue execution because it is waiting for an event like I/O completion or data input.\nExit/Terminate: The process has completed its execution or has been stopped, and the operating system removes it from memory."
        },
        {
          "id": "process-states--the-seven-state-model",
          "heading": "The Seven-State Model",
          "explanation": "A process moves through different states as it is created, prepared for execution, runs on the CPU, waits for resources, or completes. These states help the operating system manage how processes use memory, CPU, and I/O devices.\nNew: The process is in the creation phase. The program exists in secondary memory, and the OS prepares its PCB before loading it into main memory.\nReady: The process has been loaded into main memory and is prepared to run. It is waiting in the ready queue until the CPU becomes available.\nRunning: The CPU is currently executing the instructions of the process. Only one process can be in this state at a time on a single-processor system.\nBlocked/Waiting: The process cannot continue because it is waiting for an event such as I/O completion, user input, or access to a locked resource. Once the event is complete, it moves back to the ready state.\nTerminated: The process has completed its execution or has been stopped. The OS deletes its PCB and frees all resources allocated to it."
        },
        {
          "id": "process-states--suspend-ready",
          "heading": "Suspend Ready",
          "explanation": "A ready process that has been swapped out of main memory and placed in secondary storage due to memory shortage. When brought back to main memory, it returns to the ready state."
        },
        {
          "id": "process-states--cpu-bound-i-o-bound",
          "heading": "CPU-Bound / I/O-Bound",
          "explanation": "A CPU-bound process spends most of its time performing computations, while an I/O-bound process spends more time waiting for input/output operations. Movement of a Process From One State to Another A process transitions between different states depending on its progress and the availability of system resources. These movements help the operating system manage tasks efficiently.\nNew → Ready: A process is created, resources are allocated, and it is loaded into main memory.\nReady → Running: The scheduler selects a ready process and assigns the CPU to it.\nRunning → Blocked (Waiting): The process must wait for an event or resource (e.g., I/O, user input, system call).\nBlocked → Ready: The event completes or the needed resource becomes available, so the process is ready to run again.\nRunning → Ready: The OS preempts the running process—often because a higher-priority process becomes ready.\nRunning → Terminated: The process completes its execution or is forcefully stopped.\nBlocked → Terminated: The process waiting for an event is aborted or killed by the OS or another process. (General Rule) A process may move between ready , running , and blocked many times, but new and terminated happen only once in its lifetime.\nSchedulers: Schedulers are components of an operating system that decide which process should be executed by the CPU at a given time. They manage process execution by selecting processes from queues and allocating CPU efficiently. Types of Schedulers"
        },
        {
          "id": "process-states--long-term-scheduler",
          "heading": "Long-Term Scheduler",
          "explanation": "The long-term scheduler decides which new processes should enter the ready state and controls the degree of multiprogramming .\nThe: Short-term scheduler selects the next process from the ready queue to run on the CPU and works very frequently. The medium-term scheduler handles swapping by suspending processes and moving them between main memory and secondary storage.\nPreemption: We have many processes ready to run. There are two types of multiprogramming:\nPreemption: Process is forcefully removed from CPU. Pre-emption is also called time sharing or multitasking .\nNon-Preemption: Processes are not removed until they complete the execution. Once control is given to the CPU for a process execution, till the CPU releases the control by itself, control cannot be taken back forcibly from the CPU. The number of processes that can reside in the ready state at maximum decides the degree of multiprogramming, e.g., if the degree of multiprogramming= 100, this means 100 processes can reside in the ready state at maximum. Operation on the Process\nCreation: A process is created and placed in the ready queue (main memory), where it waits to be executed.\nScheduling: The operating system selects one process from the ready queue to run next. This selection step is called scheduling.\nExecution: The CPU starts running the chosen process. If the process needs to wait for an event or resource, it becomes blocked, and the CPU switches to another process.\nTermination: Once the process completes its task, the OS terminates it and clears its context.\nBlocking: When a process waits for an event or resource (like I/O), it enters the blocked state and cannot continue until that event is completed."
        },
        {
          "id": "process-states--context-switching",
          "heading": "Context Switching",
          "explanation": "When the OS switches from one process to another, it saves the current process’s context and loads the next one. This switching is called context switching."
        },
        {
          "id": "process-states--inter-process-communication-ipc",
          "heading": "Inter-Process Communication (IPC)",
          "explanation": "Processes often need to exchange data or coordinate. The OS supports IPC using mechanisms like shared memory, message passing, and synchronization tools. These states—new, ready, running, waiting, and terminated—represent different stages in a process's life cycle. By transitioning through these states, the operating system ensures that processes are executed smoothly, resources are allocated effectively, and the overall performance of the computer is optimized."
        }
      ],
      "quick_revision": [
        "States of a Process in Operating Systems A process in an operating system passes through multiple states as it begins execution, waits for resources, gets scheduled,…",
        "Two-State Model: The Two-State Model divides the process lifecycle into only two possible conditions.",
        "Not Running: The process is not using the CPU. It may be waiting for input, waiting for resources, or simply paused.",
        "Dispatcher Role: The dispatcher checks if the CPU is free for a new process.",
        "The Seven-State Model: A process moves through different states as it is created, prepared for execution, runs on the CPU, waits for resources, or completes.",
        "Suspend Ready: A ready process that has been swapped out of main memory and placed in secondary storage due to memory shortage.",
        "CPU-Bound / I/O-Bound: A CPU-bound process spends most of its time performing computations, while an I/O-bound process spends more time waiting for input/output operations.",
        "Long-Term Scheduler: The long-term scheduler decides which new processes should enter the ready state and controls the degree of multiprogramming .",
        "Context Switching: When the OS switches from one process to another, it saves the current process’s context and loads the next one.",
        "Inter-Process Communication (IPC): Processes often need to exchange data or coordinate."
      ]
    },
    {
      "id": "process-scheduler",
      "title": "Process Scheduler",
      "category": "Process Scheduling",
      "source_id": "process-scheduler",
      "summary": "Process Schedulers in Operating System Process scheduling is the activity of the process manager that handles the removal of the running process from the CPU and the selection of another process based on a particular strategy.",
      "sections": [
        {
          "id": "process-scheduler--overview",
          "heading": "Overview",
          "explanation": "Process Schedulers in Operating System Process scheduling is the activity of the process manager that handles the removal of the running process from the CPU and the selection of another process based on a particular strategy. Throughout its lifetime, a process moves between various scheduling queues, such as the ready queue, waiting queue or devices queue. Scheduling is important in operating systems with multiprogramming as multiple processes might be eligible for running at a time. One of the key responsibilities of an Operating System (OS) is to decide which programs will execute on the CPU. Process Schedulers are fundamental components of operating systems responsible for deciding the order in which processes are executed by the CPU. In simpler terms, they manage how the CPU allocates its time among multiple tasks or processes that are competing for its attention.\nProcess Schedulers: Process Schedulers are fundamental components of operating systems responsible for deciding the order in which processes are executed by the CPU. In simpler terms, they manage how the CPU allocates its time among multiple tasks or processes that are competing for its attention."
        },
        {
          "id": "process-scheduler--long-term-scheduler-job-scheduler",
          "heading": "Long-Term Scheduler (Job Scheduler)",
          "explanation": "The Long-Term Scheduler is responsible for loading processes from disk into main memory so they can begin execution. Transfers processes from the Job Queue to the\nReady Queue: . Controls the degree of Multi-programming — the number of processes present in memory or ready state at any time. Carefully selects a balanced mix of I/O-bound and CPU-bound processes to ensure efficient system performance. Helps avoid a situation where either the CPU or I/O devices remain idle. In many modern time-sharing systems (such as Windows), a long-term scheduler may not exist; new processes are directly admitted to memory for short-term scheduling. It is the slowest among all schedulers, as it operates less frequently."
        },
        {
          "id": "process-scheduler--short-term-scheduler-cpu-scheduler",
          "heading": "Short-Term Scheduler (CPU Scheduler)",
          "explanation": "The Short-Term Scheduler (STS) is responsible for selecting a process from the ready queue and assigning the CPU to it. Frequently selects the next process to execute from the ready state. Maintains fairness by allocating CPU time among processes. Uses various CPU scheduling algorithms to decide process order. Maximizes CPU utilization by keeping the processor as busy as possible. Calls the dispatcher, which performs the actual context switch. It is the fastest scheduler, since it operates very frequently (often every few milliseconds). 2.1 Dispatcher The Dispatcher is a special program that takes over once the short-term scheduler selects a process. It transfers control of the CPU to the chosen process. The following are functions of it.\nContext Switching: Saves the state of the previously running process and restores the state of the new one.\nMode Switching: Ensures correct transition into user mode from kernel mode.\nProgram Control Transfer: Jumps to the correct starting point in the newly selected program. Dispatcher Example Using FCFS scheduling for processes Scheduler selects P1 first. Dispatcher loads P1 onto the CPU. Next the scheduler selects P2, and the dispatcher assigns P2 to the CPU, and so on. Note: The time taken by the dispatcher to perform context switching is called dispatch latency ."
        },
        {
          "id": "process-scheduler--medium-term-scheduler",
          "heading": "Medium-Term Scheduler",
          "explanation": "The Medium-Term Scheduler (MTS) manages swapping, which temporarily moves processes between main memory and disk. Swaps processes out of memory when they are waiting (e.g., blocked for I/O) to reduce the degree of multiprogramming. Frees memory for other active processes. Swaps processes back into memory when they are ready to continue execution, allowing them to resume from where they left off. Helps maintain an effective mix of CPU-bound and I/O-bound processes. It operates faster than the long-term scheduler but slower than the short-term scheduler.\nSome Other Schedulers: Apart from CPU scheduling, operating systems also use specialized schedulers to manage I/O operations and real-time tasks efficiently.\nI/O Schedulers: Manage order of read/write operations. Reduce I/O wait time and improve performance. Schedule I/O requests using algorithms like FCFS , RR, SCAN, C-SCAN.\nReal-Time Schedulers: Used in systems where tasks must meet deadlines. Ensure timely execution of critical tasks. Use algorithms like EDF and RM.\nType: Job scheduler CPU scheduler Process-swapping scheduler Fastest Medium (between both)\nMultiprogramming Control: Controls degree of multiprogramming Less control over multiprogramming Reduces degree of multiprogramming Presence in Time-Sharing Systems Rarely used or absent Essential Present as a component\nMain Function: Selects processes from job pool and loads into memory Selects ready processes for CPU execution Reintroduces swapped processes into memory Process Context Switching in Operating System"
        }
      ],
      "quick_revision": [
        "Process Schedulers in Operating System Process scheduling is the activity of the process manager that handles the removal of the running process from the CPU and the…",
        "Long-Term Scheduler (Job Scheduler): The Long-Term Scheduler is responsible for loading processes from disk into main memory so they can begin execution.",
        "Short-Term Scheduler (CPU Scheduler): The Short-Term Scheduler (STS) is responsible for selecting a process from the ready queue and assigning the CPU to it.",
        "Medium-Term Scheduler: The Medium-Term Scheduler (MTS) manages swapping, which temporarily moves processes between main memory and disk."
      ]
    },
    {
      "id": "cpu-scheduling-algorithms",
      "title": "CPU Scheduling Algorithms",
      "category": "Process Scheduling",
      "source_id": "cpu-scheduling-algorithms",
      "summary": "CPU Scheduling in Operating Systems CPU scheduling is a process used by the operating system to decide which task or process gets to use the CPU at a particular time.",
      "sections": [
        {
          "id": "cpu-scheduling-algorithms--overview",
          "heading": "Overview",
          "explanation": "CPU Scheduling in Operating Systems CPU scheduling is a process used by the operating system to decide which task or process gets to use the CPU at a particular time. This is important because a CPU can only handle one task at a time, but there are usually many tasks that need to be processed. The following are different purposes of a CPU scheduling time. Maximize the CPU utilization Minimize the response and waiting time of the process. Importance of CPU Scheduling Algorithm CPU scheduling is the process of deciding which process will own the CPU to use while another process is suspended. The main function of CPU scheduling is to ensure that whenever the CPU remains idle, the OS has at least selected one of the processes available in the ready queue. Terminologies Used in CPU Scheduling\nArrival Time: The time at which the process arrives in the ready queue.\nCompletion Time: The time at which the process completes its execution.\nBurst Time: Time required by a process for CPU execution.\nTurn Around Time: Time Difference between completion time and arrival time. Turn Around Time = Completion Time – Arrival Time"
        },
        {
          "id": "cpu-scheduling-algorithms--waiting-time-w-t",
          "heading": "Waiting Time(W.T)",
          "explanation": "Time Difference between turn around time and burst time. Waiting Time = Turn Around Time – Burst Time Important Factors in CPU Scheduling Different CPU Scheduling algorithms have different structures and the choice of a particular algorithm depends on a variety of factors."
        },
        {
          "id": "cpu-scheduling-algorithms--cpu-utilization",
          "heading": "CPU Utilization",
          "explanation": "The main purpose of any CPU algorithm is to keep the CPU as busy as possible. Theoretically, CPU usage can range from 0 to 100 but in a real-time system, it varies from 40 to 90 percent depending on the system load.\nThroughput: The average CPU performance is the number of processes performed and completed during each unit. This is called throughput. The output may vary depending on the length or duration of the processes."
        },
        {
          "id": "cpu-scheduling-algorithms--turn-around-time",
          "heading": "Turn Around Time",
          "explanation": "For a particular process, the important conditions are how long it takes to perform that process. The time elapsed from the time of process delivery to the time of completion is known as the conversion time. Turnaround time is the amount of time spent waiting for memory access, waiting in line, using CPU and waiting for I/O."
        },
        {
          "id": "cpu-scheduling-algorithms--waiting-time",
          "heading": "Waiting Time",
          "explanation": "The Scheduling algorithm does not affect the time required to complete the process once it has started performing. It only affects the waiting time of the process i.e. the time spent in the waiting process in the ready queue."
        },
        {
          "id": "cpu-scheduling-algorithms--response-time",
          "heading": "Response Time",
          "explanation": "In a interactive system, turn around time is not the best option. The process may produce something early and continue to computing the new results while the previous results are released to the user. Therefore another method is the time taken in the submission of the application process until the first response is issued. This measure is called response time. Different Types of CPU Scheduling Algorithms\nPreemptive Scheduling: Preemptive scheduling is used when a process switches from running state to ready state or from the waiting state to the ready state."
        },
        {
          "id": "cpu-scheduling-algorithms--non-preemptive-scheduling",
          "heading": "Non-Preemptive Scheduling",
          "explanation": "Non-Preemptive scheduling is used when a process terminates , or when a process switches from running state to waiting state. Preemptive vs Non-Preemptive Scheduling for details. CPU Scheduling Algorithms Let us now learn about these CPU scheduling algorithms in operating systems one by one: FCFS - First Come, First Serve SJF - Shortest Job First SRTF - Shortest Remaining Time First Priority Scheduling HRRN - Highest Response Ratio Next\nMultilevel Feedback Queue Scheduling: Comparison of CPU Scheduling Algorithms Here is a brief comparison between different CPU scheduling algorithms: Complexity Average waiting time (AWT)\nPerformance: FCFS According to the arrival time of the processes, the CPU is allocated. Simple and easy to implement Large. No Slow performance SJF Based on the lowest CPU burst time (BT). More complex than FCFS Smaller than FCFS"
        },
        {
          "id": "cpu-scheduling-algorithms--minimum-average-waiting-time",
          "heading": "Minimum Average Waiting Time",
          "explanation": "SRTF Same as SJF the allocation of the CPU is based on the lowest CPU burst time (BT). But it is preemptive. More complex than FCFS Depending on some measures e.g., arrival time, process size, etc\nYes: The preference is given to the short jobs RR According to the order of the process arrives with fixed time quantum (TQ) The complexity depends on Time Quantum size Large as compared to SJF and Priority scheduling. No Each process has given a fairly fixed time Priority Pre-emptive According to the priority. The bigger priority task executes first This type is less complex Smaller than FCFS\nYes: Well performance but contain a starvation problem Priority non-preemptive According to the priority with monitoring the new incoming higher priority jobs This type is less complex than Priority preemptive Preemptive Smaller than FCFS\nYes: Most beneficial with batch systems MLQ According to the process that resides in the bigger queue priority More complex than the priority scheduling algorithms Smaller than FCFS\nYes: Good performance but contain a starvation problem MFLQ According to the process of a bigger priority queue. It is the most Complex but its complexity rate depends on the TQ size Smaller than all scheduling types in many cases No Good performance Read Related Article - Starvation and Aging\nQuestion: Which of the following is false about SJF? S1: It causes minimum average waiting time S2: It can cause starvation (B) Only S2 (C) Both S1 and S2 (D) Neither S1 nor S2\nAnswer: (D) S1 is true SJF will always give minimum average waiting time. S2 is true SJF can cause starvation.\nQuestion: Consider the following table of arrival time and burst time for three processes P0, P1 and P2. Process Arrival time P0 0 ms 9 ms P1 1 ms 4 ms P2 2 ms 9 ms The pre-emptive shortest job first scheduling algorithm is used. Scheduling is carried out only at arrival or completion of processes. What is the average waiting time for the three processes? (A) 5.0 ms (B) 4.33 ms (A) Process P0 is allocated processor at 0 ms as there is no other process in the ready queue. P0 is preempted after 1 ms as P1 arrives at 1 ms and burst time for P1 is less than remaining time of P0. P1 runs for 4ms. P2 arrived at 2 ms but P1 continued as burst time of P2 is longer than P1. After P1 completes, P0 is scheduled again as the remaining time for P0 is less than the burst time of P2. P0 waits for 4 ms, P1 waits for 0 ms and P2 waits for 11 ms. So average waiting time is (0+4+11)/3 = 5.\nQuestion: Consider the following set of processes, with the arrival times and the CPU-burst times given in milliseconds. Process Arrival time P1 0 ms 5 ms P2 1 ms 3 ms P3 2 ms 3 ms P4 4 ms 1 ms What is the average turnaround time for these processes with the preemptive Shortest Remaining Processing Time First algorithm ?\nSolution: The following is Gantt Chart of execution P1 1 4 5 8 12 Turn Around Time = Completion Time – Arrival Time Avg Turn Around Time = (12 + 3 + 6+ 1)/4 = 5.50\nQuestion: An operating system uses the Shortest Remaining Time First (SRTF) process scheduling algorithm. Consider the arrival times and execution times for the following processes: P1 20 ms 0 ms P2 25 ms 15 ms P3 10 ms 30 ms P4 15 ms 45 ms What is the total waiting time for process P2?\nSolution: At time 0, P1 is the only process, P1 runs for 15 time units. At time 15, P2 arrives, but P1 has the shortest remaining time. So P1 continues for 5 more time units. At time 20, P2 is the only process. So it runs for 10 time units At time 30, P3 is the shortest remaining time process. So it runs for 10 time units At time 40, P2 runs as it is the only process. P2 runs for 5 time units. At time 45, P3 arrives, but P2 has the shortest remaining time. So P2 continues for 10 more time units. P2 completes its execution at time 55. Total waiting time for P2 = Completion time - (Arrival time + Execution time) = 55 - (15 + 25) = 15"
        }
      ],
      "quick_revision": [
        "CPU Scheduling in Operating Systems CPU scheduling is a process used by the operating system to decide which task or process gets to use the CPU at a particular time.",
        "Waiting Time(W.T): Time Difference between turn around time and burst time.",
        "CPU Utilization: The main purpose of any CPU algorithm is to keep the CPU as busy as possible.",
        "Turn Around Time: For a particular process, the important conditions are how long it takes to perform that process.",
        "Waiting Time: The Scheduling algorithm does not affect the time required to complete the process once it has started performing.",
        "Response Time: In a interactive system, turn around time is not the best option.",
        "Non-Preemptive Scheduling: Non-Preemptive scheduling is used when a process terminates , or when a process switches from running state to waiting state.",
        "Minimum Average Waiting Time: SRTF Same as SJF the allocation of the CPU is based on the lowest CPU burst time (BT)."
      ]
    },
    {
      "id": "preemptive-vs-non-preemptive",
      "title": "Preemptive vs Non-Preemptive",
      "category": "Process Scheduling",
      "source_id": "preemptive-vs-non-preemptive",
      "summary": "Preemptive and Non-Preemptive Scheduling CPU scheduling in operating systems is the method of selecting which process in the ready queue will execute on the CPU next.",
      "sections": [
        {
          "id": "preemptive-vs-non-preemptive--overview",
          "heading": "Overview",
          "explanation": "Preemptive and Non-Preemptive Scheduling CPU scheduling in operating systems is the method of selecting which process in the ready queue will execute on the CPU next. It aims to utilise the processor efficiently while minimising waiting and response times. By determining an optimal execution order, CPU scheduling enhances overall system performance, supports smooth multitasking, and improves the user experience. Scheduling can be broadly classified into two types: Preemptive and Non-Preemptive. Preemptive Scheduling vs Non-Preemptive Scheduling Preemptive Scheduling: After P1 goes for I/O, P2 comes into the CPU and utilizes it. Non-Preemptive Scheduling: After P1 goes for I/O, the CPU remains idle until P1 finishes I/O and comes back. In preemptive scheduling, the operating system can interrupt a running process to allocate the CPU to another process usually due to priority rules or time-sharing policies. A process may be moved from Running → Ready state before it finishes. In the following example P2 is preempted at time 1 due to arrival of a higher priority process.\nRound Robin: Shortest Remaining Time First (SRTF) Priority Scheduling (preemptive version)\nAdvantages: Prevents one process from monopolizing CPU Better average response time in multi-user systems Widely used in modern OS (Windows, Linux, macOS)\nDisadvantages: More complex to implement Higher overhead from context switching Can cause starvation of low-priority processes Risk of concurrency issues if preempted during shared resource access"
        },
        {
          "id": "preemptive-vs-non-preemptive--non-preemptive-scheduling",
          "heading": "Non-Preemptive Scheduling",
          "explanation": "In non-preemptive scheduling, once a process starts using the CPU, it runs until it finishes or moves to a waiting state. The OS cannot forcibly take away the CPU. Below is the table and Gantt Chart according to the First Come First Serve (FCFS) Algorithm: We can notice that every process finishes execution once it gets CPU. Examples: First Come First Serve (FCFS) Shortest Job First (SJF) Priority Scheduling (non-preemptive version)\nAdvantages: It is easy to implement in an operating system. It was used in Windows 3.11 and early macOS. It has a minimal scheduling burden. Less computational resources are used.\nDisadvantages: A long-running or malicious process can occupy the CPU for a long time, delaying other processes. Since round-robin scheduling cannot be applied, the average response time becomes high (poor), especially for short processes. Preemptive vs. Non-Preemptive Scheduling"
        },
        {
          "id": "preemptive-vs-non-preemptive--non-preemptive-scheduling-2",
          "heading": "Non-Preemptive Scheduling",
          "explanation": "In this resources(CPU Cycle) are allocated to a process for a limited time. Once resources(CPU Cycle) are allocated to a process, the process holds it till it completes its burst time or switches to waiting state Process can be interrupted in between. Process can not be interrupted until it terminates itself or its time is up If a process having high priority frequently arrives in the ready queue, a low priority process may starve If a process with a long burst time is running CPU, then later coming process with less CPU burst time may starve It has overhead due to frequent context switching It has minimal or no scheduling overhead. Average process response time is less Average process response time is high Decisions are made by the scheduler and are based on priority and time slice allocation Decisions are made by the process itself and the OS just follows the process's instructions More as a process might be preempted when it was accessing a shared resource. Less as a process is never preempted. Examples of preemptive scheduling are Round Robin and Shortest Remaining Time First Examples of non-preemptive scheduling are First Come First Serve and Shortest Job First"
        }
      ],
      "quick_revision": [
        "Preemptive and Non-Preemptive Scheduling CPU scheduling in operating systems is the method of selecting which process in the ready queue will execute on the CPU next.",
        "Non-Preemptive Scheduling: In non-preemptive scheduling, once a process starts using the CPU, it runs until it finishes or moves to a waiting state.",
        "Non-Preemptive Scheduling: In this resources(CPU Cycle) are allocated to a process for a limited time."
      ]
    },
    {
      "id": "dispatcher-vs-scheduler",
      "title": "Dispatcher vs scheduler",
      "category": "Process Scheduling",
      "source_id": "dispatcher-vs-scheduler",
      "summary": "Dispatcher vs Scheduler in OS Multiple processes in a multitasking operating system, compete for CPU time.  To manage this efficiently, the operating system uses two important components: the Scheduler and the Dispatcher.",
      "sections": [
        {
          "id": "dispatcher-vs-scheduler--overview",
          "heading": "Overview",
          "explanation": "Dispatcher vs Scheduler in OS Multiple processes in a multitasking operating system, compete for CPU time. To manage this efficiently, the operating system uses two important components: the Scheduler and the Dispatcher. Note: Both work together to decide which process will run and how it will be executed by the CPU. Although they are interrelated, they perform distinct functions to ensure optimal CPU utilization and smooth process management. Once the Short Term Scheduler selects the next process to execute, the Dispatcher takes over. The Dispatcher is a small, specialized program that gives control of the CPU to the process chosen by the short-term scheduler. It performs the low-level work needed to actually start executing the selected process.\nScheduler: A scheduler is a component of an operating system that manages the execution of processes by deciding which one gets CPU time. It ensures efficient utilization of the CPU and smooth execution of multiple processes. There are three main types of schedulers , each performing different tasks in process management Long-Term (Job) Scheduler : Moves processes from secondary memory (job pool) to main memory (ready queue). Medium-Term Scheduler : Suspends and resumes processes based on system status. Short-Term (CPU) Scheduler : Selects one of the ready processes in memory to execute next. Difference Between Scheduler and Dispatcher\nScheduler: Decides which process should be executed next. Transfers control of CPU to the process selected by the scheduler. To select the process and determine execution order. To start the execution of the selected process. Long-term, Medium-term and Short-term. No types; it’s a single module. Works independently. Dependent on the scheduler’s decision. Uses algorithms like FCFS, SJF, RR, Priority, etc. No specific algorithm used. Less frequent, low decision overhead Frequent, handles context switching overhead Process selection and queue management. Context switching, mode change and process start. Works with the ready queue and dispatcher. Works with CPU and the selected process. Takes longer than the dispatcher. Executes in a very short time."
        }
      ],
      "quick_revision": [
        "Dispatcher vs Scheduler in OS Multiple processes in a multitasking operating system, compete for CPU time."
      ]
    },
    {
      "id": "starvation-and-aging",
      "title": "Starvation and Aging",
      "category": "Process Scheduling",
      "source_id": "starvation-and-aging",
      "summary": "Starvation and Aging in Operating Systems Starvation (or indefinite blocking) occurs in priority scheduling when a low-priority process keeps waiting indefinitely because higher-priority processes continuously get the CPU. This problem arises in heavily loaded systems where resources are always…",
      "sections": [
        {
          "id": "starvation-and-aging--overview",
          "heading": "Overview",
          "explanation": "Starvation and Aging in Operating Systems Starvation (or indefinite blocking) occurs in priority scheduling when a low-priority process keeps waiting indefinitely because higher-priority processes continuously get the CPU. This problem arises in heavily loaded systems where resources are always occupied by higher-priority tasks, leaving some processes starved. To prevent this, operating systems use aging, a technique that gradually increases the priority of waiting processes, ensuring fair execution. P1 4 1 P2 7 10 P3 10 2 P2 0 4 14 21 As we see in the above example process has higher priority than other processes getting CPU earlier. We can think of a scenario in which only one process has very low priority (for example 127) and we are giving another process with high priority, this can lead to indefinitely waiting for the process for CPU which has priority, which leads to . Causes of Starvation\nNot Fair Scheduling: If there are always higher-priority processes available, then the lower-priority processes may never be allowed to run. Apart from priority, there can be other causes like a scheduling algorithm that randomly picks a process and somehow a victim process is always missed leading to starvation."
        },
        {
          "id": "starvation-and-aging--limited-resources",
          "heading": "Limited Resources",
          "explanation": "Due to limitation of resources one or the other process has to wait. Aging - Solution to Starvation Aging is a scheduling technique used to prevent starvation by gradually increasing the priority of processes waiting too long in the system. Ensures fairness, as long-waiting processes eventually get CPU time. Often combined with algorithms like priority scheduling or round-robin to balance short-term efficiency with long-term fairness. For example, if priorities range from 127 (low) to 0 (high), a waiting process can move up one level every 15 minutes, ensuring even the lowest-priority process eventually gets executed. Starvation VS Aging\nAging: A process waits indefinitely for CPU or resources. A technique that gradually increases a process’s priority to avoid starvation. It is a problem in scheduling. It is a solution to fix that problem. The priority of the waiting process does not change, so it keeps waiting. The priority of the waiting process increases over time, helping it run. A process may never get CPU and may wait forever. Ensures every process eventually gets CPU after waiting for some time."
        }
      ],
      "quick_revision": [
        "Starvation and Aging in Operating Systems Starvation (or indefinite blocking) occurs in priority scheduling when a low-priority process keeps waiting indefinitely…",
        "Limited Resources: Due to limitation of resources one or the other process has to wait."
      ]
    },
    {
      "id": "inter-process-communication",
      "title": "Inter Process Communication",
      "category": "Process Synchronization",
      "source_id": "inter-process-communication",
      "summary": "Inter Process Communication (IPC) Inter-Process Communication or IPC is a mechanism that allows processes to communicate and share data with each other while they are running.",
      "sections": [
        {
          "id": "inter-process-communication--overview",
          "heading": "Overview",
          "explanation": "Inter Process Communication (IPC) Inter-Process Communication or IPC is a mechanism that allows processes to communicate and share data with each other while they are running. Since each process has its own memory space, IPC provides controlled methods for exchanging information and coordinating actions. It helps processes work together efficiently and safely in an operating system. It helps processes synchronize their activities, share information and avoid conflicts while accessing shared resources. There are two method of IPC, shared memory and message passing. An operating system can implement both methods of communication. Example: : A simple example of IPC is a bank ATM system, where one process reads the card and PIN, another checks the account balance, and a third dispenses cash. These processes communicate and coordinate to complete the transaction correctly. Communication between processes using shared memory requires processes to share a memory segment, the implementation of which is handled by the programmer. Processes can use shared memory for extracting information as a record from another process as well as for delivering any specific information to other processes. In the above shared memory model, a common memory space is allocated by the kernel. Process A writes data into the shared memory region (Step 1). Process B can then directly read this data from the same shared memory region (Step 2). Since both processes access the same memory segment, this method is fast but requires synchronization mechanisms (like semaphores) to avoid conflicts when multiple processes read/write simultaneously. Example: Multiple people can edit the document at the same time in shared google doc. Message Passing is a method where processes communicate by sending and receiving messages to exchange data. One process sends a message and the other process receives it, allowing them to share information. Message Passing can be achieved through different methods like Sockets, Message Queues or Pipes. In the above message passing model, processes exchange information by sending and receiving messages through the kernel. Process A sends a message to the kernel (Step 1). The kernel then delivers the message to Process B (Step 2). Here, processes do not share memory directly. Instead, communication happens via system calls (send(), recv(), or similar). This method is simpler and safer than shared memory because there’s no risk of overwriting shared data, but it incurs more overhead due to kernel involvement. Example: Multiple people send updates to a group chat, but each message goes through the server before others see it, like processes sending messages instead of directly sharing memory. Methods in Inter process Communication for more details."
        },
        {
          "id": "inter-process-communication--problems-in-inter-process-communication-ipc",
          "heading": "Problems in Inter-Process Communication (IPC)",
          "explanation": "Inter-Process Communication (IPC) faces challenges when multiple processes share resources. Improper synchronization can cause race conditions, deadlock, and starvation, while shared data may suffer data inconsistency. IPC also adds overhead and can raise security issues. Managing many processes can lead to scalability problems."
        },
        {
          "id": "inter-process-communication--dining-philosophers-problem",
          "heading": "Dining Philosophers Problem",
          "explanation": "This problem illustrates deadlock and starvation. The Dining Philosophers Problem involves five philosophers sitting around a table, each needing two forks (shared resources) to eat. If all philosophers pick up one fork at the same time, none can eat, resulting in deadlock.\nSolution: Use semaphores or monitors to control access to forks. Allow only one philosopher to pick forks at a time or limit eating to four philosophers. Enforce an order of picking forks to avoid circular wait. These solutions prevent deadlock and starvation."
        },
        {
          "id": "inter-process-communication--producer-consumer-problem",
          "heading": "Producer–Consumer Problem",
          "explanation": "This problem deals with synchronization and buffer management. The Producer–Consumer Problem describes producers generating data and placing it in a shared buffer, while consumers remove data from it. The main challenge is preventing producers from adding data to a full buffer and consumers from removing data from an empty buffer.\nSolution: Use mutex to ensure mutual exclusion on the shared buffer. Use counting semaphores to track empty and full buffer slots. Producer waits if buffer is full; consumer waits if buffer is empty. Ensures proper synchronization and data consistency."
        },
        {
          "id": "inter-process-communication--readers-writers-problem",
          "heading": "Readers–Writers Problem",
          "explanation": "This problem focuses on concurrent access to shared data. The Readers–Writers Problem allows multiple readers to read data simultaneously, while writers require exclusive access. The challenge is avoiding starvation of either readers or writers.\nSolution: Use reader–writer locks or semaphores. Allow multiple readers to read simultaneously. Grant writers exclusive access to shared data. Apply priority rules to avoid starvation."
        },
        {
          "id": "inter-process-communication--sleeping-barber-problem",
          "heading": "Sleeping Barber Problem",
          "explanation": "This problem demonstrates process coordination. The Sleeping Barber Problem models a barber who sleeps when there are no customers and is awakened when a customer arrives and a chair is available. The difficulty lies in managing waiting chairs and customer arrivals correctly.\nSolution: Use semaphores to manage customer arrival and barber availability. Barber sleeps when no customers are present. Customers wait if chairs are available; otherwise, they leave. Ensures proper process coordination without deadlock."
        }
      ],
      "quick_revision": [
        "Inter Process Communication (IPC) Inter-Process Communication or IPC is a mechanism that allows processes to communicate and share data with each other while they are…",
        "Problems in Inter-Process Communication (IPC): Inter-Process Communication (IPC) faces challenges when multiple processes share resources.",
        "Dining Philosophers Problem: This problem illustrates deadlock and starvation.",
        "Producer–Consumer Problem: This problem deals with synchronization and buffer management.",
        "Readers–Writers Problem: This problem focuses on concurrent access to shared data.",
        "Sleeping Barber Problem: This problem demonstrates process coordination."
      ]
    },
    {
      "id": "process-synchronization",
      "title": "Process Synchronization",
      "category": "Process Synchronization",
      "source_id": "process-synchronization",
      "summary": "Introduction to Process Synchronization Process Synchronization is a mechanism used to coordinate the execution of multiple processes/threads that access shared resources, ensuring mutual exclusion, data consistency, and correct ordering of operations.",
      "sections": [
        {
          "id": "process-synchronization--overview",
          "heading": "Overview",
          "explanation": "Introduction to Process Synchronization Process Synchronization is a mechanism used to coordinate the execution of multiple processes/threads that access shared resources, ensuring mutual exclusion, data consistency, and correct ordering of operations. On the basis of synchronization, processes\nIndependent Process: The execution of one process does not affect the execution of other processes.\nCooperative Process: A process that can affect or be affected by other processes executing in the system. Process synchronization Process Synchronization is the coordination of multiple cooperating processes in a system to ensure controlled access to shared resources, thereby preventing race conditions and other synchronization problems. Improper Synchronization in\nInconsistency: When two or more processes access shared data at the same time without proper synchronization. This can lead to conflicting changes, where one process’s update is overwritten by another, causing the data to become unreliable and incorrect."
        },
        {
          "id": "process-synchronization--loss-of-data",
          "heading": "Loss of Data",
          "explanation": "Loss of data occurs when multiple processes try to write or modify the same shared resource without coordination. If one process overwrites the data before another process finishes, important information can be lost, leading to incomplete or corrupted data.\nDeadlock: Improper resource allocation and synchronization can lead to deadlock , where processes wait indefinitely for resources held by one another. Role of Synchronization in IPC\nPreventing Race Conditions: Ensures processes don’t access shared data at the same time, avoiding inconsistent results.\nMutual Exclusion: Allows only one process in the critical section at a time.\nProcess Coordination: Lets processes wait for specific conditions (e.g., producer-consumer).\nDeadlock Prevention: Proper synchronization and resource-management techniques can help prevent or avoid deadlocks.\nSafe Communication: Ensures data/messages between processes are sent, received and processed in order.\nFairness: Some synchronization mechanisms can provide fair access to shared resources and reduce starvation. Types of Processes Based on Synchronization The two primary type of process Synchronization in an Operating System are:\nCompetitive: Two or more processes are said to be in Competitive Synchronization if and only if they compete for the accessibility of a shared resource. Lack of Proper Synchronization among Competing process may lead to either Inconsistency or Data loss.\nCooperative: Two or more processes are said to be in Cooperative Synchronization if and only if they get affected by each other i.e. execution of one process affects the other process. Lack of Proper Synchronization among Cooperating process may lead to Deadlock.\nLet's consider a Linux command: >>ps/grep \"chrome\"/wc ps command produces list of processes running in linux. grep command find/count the lines form the output of the ps command. wc command counts how many words are in the output. Therefore, three processes are created which are ps, grep and wc. grep takes input from ps and wc takes input from grep. From this example, we can understand the concept of cooperative processes, where some processes produce and others consume and thus work together. This type of problem must be handled by the operating system, as it is the manager. Required conditions for Process Synchronization A critical section is the part of a process where shared data or resources are accessed or modified. Mutual exclusion ensures that only one process/thread executes its critical section for a particular shared resource at a time. A race condition occurs when multiple processes/threads concurrently access shared data, and the final result depends on the order or timing of their execution."
        },
        {
          "id": "process-synchronization--pre-emption",
          "heading": "Pre-emption",
          "explanation": "The OS temporarily suspends a running process and gives the CPU to another process. If a process is preempted while accessing shared data, proper synchronization must ensure that another process cannot incorrectly access or modify the shared data."
        }
      ],
      "quick_revision": [
        "Introduction to Process Synchronization Process Synchronization is a mechanism used to coordinate the execution of multiple processes/threads that access shared…",
        "Loss of Data: Loss of data occurs when multiple processes try to write or modify the same shared resource without coordination.",
        "Pre-emption: The OS temporarily suspends a running process and gives the CPU to another process."
      ]
    },
    {
      "id": "race-condition",
      "title": "Race Condition",
      "category": "Process Synchronization",
      "source_id": "race-condition",
      "summary": "A race condition occurs when two or more processes or threads access and modify the same data at the same time, and the final result depends on the order in which they run.",
      "sections": [
        {
          "id": "race-condition--overview",
          "heading": "Overview",
          "explanation": "A race condition occurs when two or more processes or threads access and modify the same data at the same time, and the final result depends on the order in which they run. Without proper coordination, this can lead to incorrect or unpredictable results.\nFor example: If two people update the same bank account simultaneously without checking each other’s changes, the final balance may be wrong.\nShared Resource: A variable, file, memory location, or device accessed by multiple processes.\nConcurrency: Multiple processes or threads executing simultaneously or overlapping in execution.\nNon-Atomic Operations: Operations that can be interrupted, such as read-modify-write, which can cause inconsistent states when multiple processes access the same data concurrently. Causes of Race Conditions\nSimultaneous Access: When two or more processes try to read or write the same shared resource at the same time.\nNon-Atomic Updates: Operations like increment or decrement are not indivisible. Lack of Synchronization : No mechanisms like locks, semaphores, or monitors are used to control access."
        },
        {
          "id": "race-condition--improper-scheduling",
          "heading": "Improper Scheduling",
          "explanation": "OS scheduler interrupts processes at critical moments. Example: Two Processes Updating a Shared Variable Let’s take a shared variable balance = 100 and two processes P1 and P2: P1 wants to add 10 to balance. P2 wants to subtract 10 from balance. P1 reads balance = 100 and prepares to add 10. Before P1 updates the balance with the new value (110), it is interrupted by the process P2. P2, unaware of P1’s action (of adding 10), reads the balance as 100 (incorrect) and prepares to subtract 10. After subtracting, P2 updates the balance to 90 and then P1 resumes and writes the balance as 110 which results in an incorrect final value. In many cases, the final balance may incorrectly be 110 or 90, instead of the expected 100. This is a classic race condition. Effects of Race Conditions Data Corruption Shared data may become inconsistent.\nUnpredictable Behavior: The output may vary every time the program runs.\nSecurity Risks: Race conditions can be exploited, e.g., in banking transactions or authentication bypass.\nSystem Crashes: Critical system data may get corrupted, leading to failures.\nMutex (Mutual Exclusion): Ensure only one process can enter the critical section at a time.\nSemaphores: Counting or binary semaphores control access to resources.\nMonitors: High-level synchronization constructs that manage shared resources.\nAtomic Operations: Use hardware or software-supported atomic instructions. Disable Interrupts (for kernel-level programming) : Prevent context switches during critical sections.\nProper Scheduling: Ensure the scheduler does not preempt critical section execution."
        }
      ],
      "quick_revision": [
        "A race condition occurs when two or more processes or threads access and modify the same data at the same time, and the final result depends on the order in which they…",
        "Improper Scheduling: OS scheduler interrupts processes at critical moments."
      ]
    },
    {
      "id": "critical-section",
      "title": "Critical Section",
      "category": "Process Synchronization",
      "source_id": "critical-section",
      "summary": "Critical Section in Synchronization A critical section is a part of a program where shared resources (like memory, files, or variables) are accessed by multiple processes or threads.",
      "sections": [
        {
          "id": "critical-section--overview",
          "heading": "Overview",
          "explanation": "Critical Section in Synchronization A critical section is a part of a program where shared resources (like memory, files, or variables) are accessed by multiple processes or threads. To avoid problems such as race conditions and data inconsistency, only one process/thread should execute the critical section at a time using synchronization techniques. This ensures that operations on shared resources are performed safely and predictably. A critical section is the part of a program where shared resources are accessed by multiple processes or threads. Only one process or thread should execute the critical section at a time to avoid race conditions and data inconsistency. Synchronization techniques are used to ensure safe and predictable access to shared resources. Structure of a Critical Section A critical section is a key concept in operating systems that ensures safe and controlled access to shared resources when multiple processes or threads are executing simultaneously. It helps prevent issues like race conditions and data inconsistency by allowing only one process or thread to access the shared resource at a time, using synchronization techniques for proper coordination."
        },
        {
          "id": "critical-section--entry-section",
          "heading": "Entry Section",
          "explanation": "The process requests permission to enter the critical section. Synchronization tools (e.g., mutex, semaphore) are used to control access."
        },
        {
          "id": "critical-section--critical-section",
          "heading": "Critical Section",
          "explanation": "The actual code where shared resources are accessed or modified. 3.\nExit Section: The process releases the lock or semaphore, allowing other processes to enter the critical section. 4.\nRemainder Section: The rest of the program that does not involve shared resource access. Block-Diagram of Critical Section\nCritical Section Problem: Shared Resources and Race Conditions Shared resources include memory, global variables, files, and databases."
        },
        {
          "id": "critical-section--formulas-code",
          "heading": "Formulas & Code",
          "explanation": "A race condition occurs when two or more processes attempt to update shared data at the same time, leading to unexpected results. Example: Two bank transactions modifying the same account balance simultaneously without synchronization may lead to incorrect final balance. It could be visualized using the pseudo-code below do{ flag=1; while(flag); // (entry section) // critical section if (!flag) // remainder section } while(true); Requirements of a Solution Correctness - Shared data should remain consistent. Efficiency - Should minimize waiting and maximize CPU utilization. Fairness - No process should be unfairly delayed or starved. Requirements of Critical Section Solutions"
        },
        {
          "id": "critical-section--mutual-exclusion",
          "heading": "Mutual Exclusion",
          "explanation": "At most one process can be inside the critical section at a time. Prevents conflicts by ensuring no two processes update the shared resource simultaneously."
        },
        {
          "id": "critical-section--progress",
          "heading": "Progress",
          "explanation": "If no process is in the critical section, and some processes want to enter, the choice of who enters next should not be postponed indefinitely. Ensures that the system continues to make progress rather than getting stuck."
        },
        {
          "id": "critical-section--bounded-waiting",
          "heading": "Bounded Waiting",
          "explanation": "There must be a limit on how long a process waits before it gets a chance to enter the critical section. Prevents starvation , where one process is repeatedly bypassed while others get to execute.\nExample Use Case: Older operating systems or embedded systems where simplicity and reliability outweigh responsiveness.\nSolution to Critical Section Problem: A simple solution to the critical section can be thought of as shown below, acquireLock(); Process Critical Section releaseLock(); A thread must acquire a lock prior to executing a critical section. The lock can be acquired by only one thread. There are various ways to implement locks in the above pseudo-code. Examples of critical sections in real-world applications Banking System (ATM or Online Banking)\nCritical Section: Updating an account balance during a deposit or withdrawal.\nIssue if not handled: Two simultaneous withdrawals could result in an incorrect final balance due to race conditions. Critical Section Reserving the last available seat.\nIssue if not handled: Two users may be shown the same available seat and both may book it, leading to overbooking. Print Spooler in a Networked Printer\nCritical Section: Sending print jobs to the printer queue.\nIssue if not handled: Print jobs may get mixed up or skipped if multiple users send jobs simultaneously. File Editing in Shared Documents (e.g., Google Docs, MS Word with shared access)\nCritical Section: Saving or writing to the shared document.\nIssue if not handled: Simultaneous edits could lead to conflicting versions or data loss."
        }
      ],
      "quick_revision": [
        "Critical Section in Synchronization A critical section is a part of a program where shared resources (like memory, files, or variables) are accessed by multiple…",
        "Entry Section: The process requests permission to enter the critical section.",
        "Critical Section: The actual code where shared resources are accessed or modified. 3.",
        "Formulas & Code: A race condition occurs when two or more processes attempt to update shared data at the same time, leading to unexpected results.",
        "Mutual Exclusion: At most one process can be inside the critical section at a time.",
        "Progress: If no process is in the critical section, and some processes want to enter, the choice of who enters next should not be postponed indefinitely.",
        "Bounded Waiting: There must be a limit on how long a process waits before it gets a chance to enter the critical section."
      ]
    },
    {
      "id": "solutions-to-process-synchronization-problems",
      "title": "Solutions to Process Synchronization Problems",
      "category": "Process Synchronization",
      "source_id": "solutions-to-process-synchronization-problems",
      "summary": "In a multiprogramming environment, multiple processes often compete for shared resources like memory, CPU, or files.  If not managed properly, this leads to race conditions where the final output depends on the order of execution.",
      "sections": [
        {
          "id": "solutions-to-process-synchronization-problems--overview",
          "heading": "Overview",
          "explanation": "In a multiprogramming environment, multiple processes often compete for shared resources like memory, CPU, or files. If not managed properly, this leads to race conditions where the final output depends on the order of execution. To avoid such issues, process synchronization techniques are used. Over the years, different solutions have been proposed, each improving upon the shortcomings of the previous one. The three major approaches are:\nInterrupt Disable: Lock (Software-based & Hardware-based) Operating System (OS)-based Solutions Solution to Process Synchronization Problems\nTypes: Over the years, different solutions have been proposed, each improving upon the shortcomings of the previous one. The three major approaches are:\nInterrupt Disable: Lock (Software-based & Hardware-based) Operating System (OS)-based Solutions"
        },
        {
          "id": "solutions-to-process-synchronization-problems--interrupt-disable",
          "heading": "Interrupt Disable",
          "explanation": "This method allows a process to disable all hardware interrupts before entering its critical section. Since no interrupts can occur, the running process cannot be preempted. It executes its critical section without interference.\nProblems: Works only in uniprocessor systems. In multiprocessor systems, disabling interrupts on one CPU does not stop others. It is dangerous: if a process forgets to enable interrupts again, the system may hang. It gives too much power to user processes, which can misuse it. Because of these limitations, interrupt disabling is rarely used in practice. This led to lock-based approaches."
        },
        {
          "id": "solutions-to-process-synchronization-problems--lock",
          "heading": "Lock",
          "explanation": "Locks ensure that only one process at a time can enter the critical section. A process must “acquire” the lock before entering, and “release” it after exiting. If another process tries to enter while the lock is held, it must wait.\nLocks can be implemented in two ways: (a) Software-Based Locks Software-based locks are implemented using algorithms that rely on shared variables (like flags, turn variables, or ticket numbers) to coordinate access to the critical section. These solutions try to ensure mutual exclusion without depending on hardware instructions. Peterson’s Algorithm works well for exactly two processes. Dekker’s Algorithm : One of the earliest algorithms for mutual exclusion. Works for exactly two processes using flags and a turn variable. Bakery Algorithm works for multiple processes, inspired by “take-a-number” systems in shops."
        },
        {
          "id": "solutions-to-process-synchronization-problems--problems-of-software-locks",
          "heading": "Problems of Software Locks",
          "explanation": "Require busy waiting: the CPU wastes cycles looping while checking conditions. Peterson’s Algorithm is elegant, but only practical for two processes. Extending it to many processes (like Bakery Algorithm) makes the code complex. Not suitable for modern multiprocessor systems, where hardware-level atomicity is required. Because of these inefficiencies, hardware support for locks was introduced. (b) Hardware-Based Locks Modern CPUs provide special atomic instructions that make lock implementation easier and faster. These are much simpler than software algorithms like Peterson’s or Bakery. It works in multiprocessor systems, because the atomic instruction is enforced by the CPU’s memory system. What does \"atomic\" mean here? Atomic means indivisible operation. Once an atomic instruction starts, it finishes completely before anything else (like another process or interrupt) can occur. This ensures that no two processes can modify the same lock at the same time. Why is this important?\nWithout atomic operations, two processes could: Check the lock at the same time, Both see it as “free”, Both enter the critical section leading to a race condition."
        },
        {
          "id": "solutions-to-process-synchronization-problems--cpus-include-hardware-level-instructions-such-as",
          "heading": "CPUs include hardware-level instructions such as",
          "explanation": "Test-and-Set (TSL) : Tests the lock’s old value and sets it to “locked” in one unbreakable step. Compare-and-Swap (CAS) : Compares a memory value with an expected value and, if equal, swaps it with a new value atomically.\nSpinlocks: Built using TSL or CAS; processes “spin” (busy wait) until the lock becomes free. Very fast for short waits but wastes CPU cycles for long waits."
        },
        {
          "id": "solutions-to-process-synchronization-problems--limitations-why-os-based-solutions-are-still-needed",
          "heading": "Limitations (why OS-based solutions are still needed)",
          "explanation": "Processes may still use busy waiting, which wastes CPU cycles. No fairness guarantee one process might keep winning while others starve. Only solves basic mutual exclusion, not higher-level needs like sleeping, waking, or scheduling. 2.1 Mutex (Mutual Exclusion Lock) A mutex is a higher-level lock abstraction often built on top of hardware primitives like spinlocks. Unlike raw locks, a mutex doesn’t always require busy waiting: If the mutex is unavailable, the process is blocked and put to sleep until the lock is released. This avoids wasting CPU cycles compared to spinlocks. Mutexes also provide fair scheduling and are widely used in thread libraries (e.g., Pthreads) and operating systems."
        },
        {
          "id": "solutions-to-process-synchronization-problems--semaphores-and-monitors",
          "heading": "Semaphores and Monitors",
          "explanation": "Locks (software or hardware) solve the basic problem of mutual exclusion, but they still have limitations: They rely on busy waiting, wasting CPU cycles. They don’t provide higher-level management like blocking, waking up, or handling multiple conditions. To address this, Operating Systems introduced more powerful synchronization tools: Semaphores and Monitors. These are built on top of lock-based mechanisms but provide extra control, safety and ease of use. (a) Semaphores A semaphore is an integer variable accessed with two atomic operations: wait() (decrement, block if < 0), signal() (increment, wake one waiting process) Removes busy waiting by blocking processes when resources are unavailable. (b) Monitors A monitor is a higher-level construct that combines mutual exclusion and condition variables. Only one process can execute in a monitor at a time, ensuring safety automatically. Condition variables (wait, signal) simplify coordination between processes.\nRelated Posts: Software-based solutions Hardware-based solutions OS-Based solutions"
        }
      ],
      "quick_revision": [
        "In a multiprogramming environment, multiple processes often compete for shared resources like memory, CPU, or files.",
        "Interrupt Disable: This method allows a process to disable all hardware interrupts before entering its critical section.",
        "Lock: Locks ensure that only one process at a time can enter the critical section.",
        "Problems of Software Locks: Require busy waiting: the CPU wastes cycles looping while checking conditions.",
        "CPUs include hardware-level instructions such as: Test-and-Set (TSL) : Tests the lock’s old value and sets it to “locked” in one unbreakable step.",
        "Limitations (why OS-based solutions are still needed): Processes may still use busy waiting, which wastes CPU cycles.",
        "Semaphores and Monitors: Locks (software or hardware) solve the basic problem of mutual exclusion, but they still have limitations: They rely on busy waiting, wasting CPU cycles."
      ]
    },
    {
      "id": "hardware-based-solutions",
      "title": "Hardware Based Solutions",
      "category": "Process Synchronization",
      "source_id": "hardware-based-solutions",
      "summary": "Hardware Based Solutions in Process Synchronization Hardware-based solutions to the critical section problem use special instructions like Test-and-Set and Swap.",
      "sections": [
        {
          "id": "hardware-based-solutions--overview",
          "heading": "Overview",
          "explanation": "Hardware Based Solutions in Process Synchronization Hardware-based solutions to the critical section problem use special instructions like Test-and-Set and Swap. These instructions help manage access to shared resources by allowing only one process to enter the critical section at a time. They are fast and efficient, making them ideal for systems with advanced hardware support. Various hardware solutions to the Critical Section Problem are Test and Set\nMutual Exclusion: Only one process can enter the critical section at a time because TestAndSet is atomic. If one process sets lock = true, all others will keep spinning in the inner while."
        },
        {
          "id": "hardware-based-solutions--formulas-code",
          "heading": "Formulas & Code",
          "explanation": "1. Test and Set TAS is an atomic instruction that reads a variable’s old value and sets it to true in a single indivisible step. boolean lock = false; // Shared lock variable boolean TestAndSet(boolean &target) { boolean rv = target; // Step 1: Read old value target = true; // Step 2: Set lock (mark busy) return rv; // Step 3: Return old value } while (1) { while (TestAndSet(lock)); // Entry Section → Busy wait until lock is free // ---- Critical Section ---- lock = false; // Exit Section → Release lock // ---- Remainder Section ---- } Critical Section Protection A process enters only if TestAndSet(lock) returns false (lock was free). If it returns true, the process keeps waiting. Exit Section After finishing, the process releases the lock by setting lock = false. 2. Swap (and CAS Enhancement) The Swap instruction is a hardware-based synchronization mechanism similar to Test-and-Set. Instead of directly setting the lock, it swaps the values of a shared lock variable and a local key variable. This ensures mutual exclusion because only one process can set its key to false and enter the critical section, while others keep spinning. boolean lock = false; // Shared variable boolean key; // Local per-process variable void swap(boolean &a, boolean &b) { boolean temp = a; a = b; b = temp; } while (1) { key = true; // Process wants to enter while (key) // Entry Section swap(lock, key); // Keep swapping until lock becomes true & key false // ---- Critical Section ---- lock = false; // Exit Section → Release lock } Explanation of Pseudocode 1. Initialization lock = false means no process is inside the critical section. Each process has a local key variable (initially false). 2. Entry Section A process sets key = true (wants to enter). It then calls swap(lock, key) If lock was false, swap makes key = false and lock = true, so the process enters. If lock was already true, key remains true, and the process spins in the loop. 3. Critical Section : Only the process that successfully swapped and got key = false enters. 4. Exit Section When the process leaves, it sets lock = false, allowing other waiting processes to try again. 5. Remainder Section : The process executes other code before attempting entry again. The Swap instruction ensures mutual exclusion and progress, but like Test-and-Set, it suffers from busy waiting and no bounded waiting guarantee. Compare-and-Swap (CAS) Enhancement Modern CPUs often use CAS (Compare-and-Swap), which improves efficiency compared to Swap. CAS atomically compares a variable to an expected value and updates it only if they match. int lock = 0; // 0 = free, 1 = busy boolean CompareAndSwap(int &target, int expected, int new_val) { int old = target; if (target == expected) target = new_val; return old == expected; // true if swap succeeded } while (1) { while (!CompareAndSwap(lock, 0, 1)); // Try to acquire lock // ---- Critical Section ---- lock = 0; // Exit Section → Release lock } Mutual Exclusion : Only one process at a time can succeed in swapping values. Progress : If the lock is free, a process will eventually enter. Drawbacks : Both Swap and CAS suffer from busy waiting and no bounded waiting guarantee as some processes may starve."
        },
        {
          "id": "hardware-based-solutions--spinlock",
          "heading": "Spinlock",
          "explanation": "A Spinlock is a higher-level abstraction built using Test-and-Set or CAS. A process repeatedly checks if the lock is free (spins) instead of sleeping. Useful when waiting times are short (e.g., in kernel or multiprocessor systems).\nSwap: Swap shared & local variables Ensures mutual exclusion Busy waiting, less efficient than CAS CAS (enhanced) Compare-and-swap atomic update Efficient, lock-free possible Still spins under contention"
        },
        {
          "id": "hardware-based-solutions--formulas-code-2",
          "heading": "Formulas & Code",
          "explanation": "Example with Test-and-Set int lock = 0; // 0 = free, 1 = busy void acquire() { while (TestAndSet(lock)); // Busy wait } void release() { lock = 0; } while (1) { acquire(); // ---- Critical Section ---- release(); // ---- Remainder Section ---- } Pros Very fast on multiprocessor systems (no context switching overhead). Simple to implement with atomic instructions. Cons Causes busy waiting → wastes CPU cycles. Not suitable for long critical sections. Comparison of Hardware-Based Solutions Cons Test-and-Set Atomically sets lock variable Simple, widely supported Busy waiting, starvation possible Spinlock Lock abstraction (built on TAS/CAS) Very fast for short waits CPU wasting, not fair"
        }
      ],
      "quick_revision": [
        "Hardware Based Solutions in Process Synchronization Hardware-based solutions to the critical section problem use special instructions like Test-and-Set and Swap.",
        "Formulas & Code: 1.",
        "Spinlock: A Spinlock is a higher-level abstraction built using Test-and-Set or CAS. A process repeatedly checks if the lock is free (spins) instead of sleeping.",
        "Formulas & Code: Example with Test-and-Set int lock = 0; // 0 = free, 1 = busy void acquire() { while (TestAndSet(lock)); // Busy wait } void release() { lock = 0; } while (1) {…"
      ]
    },
    {
      "id": "semaphores",
      "title": "Semaphores",
      "category": "Process Synchronization",
      "source_id": "semaphores",
      "summary": "Semaphores in Process Synchronization A semaphore is a synchronization tool used in operating systems to manage access to shared resources in a multi-process or multi-threaded environment.",
      "sections": [
        {
          "id": "semaphores--overview",
          "heading": "Overview",
          "explanation": "Semaphores in Process Synchronization A semaphore is a synchronization tool used in operating systems to manage access to shared resources in a multi-process or multi-threaded environment. It is an integer variable that controls process execution using atomic operations like wait() and signal(). Semaphores help prevent race conditions and ensure proper coordination between processes. Controls entry into the critical section. Maintains a counter representing available resources. Ensures mutual exclusion among processes. Can block and wake up processes during execution. Widely used in concurrent programming. Working of Semaphores 1. wait(S) Decrements the semaphore value. If the semaphore becomes negative, the calling process is blocked and placed in the waiting queue until another process performs signal(). Used to acquire a resource."
        },
        {
          "id": "semaphores--signal-operation",
          "heading": "Signal Operation",
          "explanation": "Increments the semaphore value. If one or more processes are waiting, one blocked process is awakened. Used to release a resource. Example: Let’s consider two processes P1 and P2 sharing a semaphore S, initialized to 1:\nState 1: Both processes are in their non-critical sections, and S = 1.\nState 2: P1 enters the critical section. It performs wait(S), so S = 0. P2 attempts to enter the critical section but waits because the semaphore value is 0.\nState 3: If P2 now wants to enter, it cannot proceed since S = 0. It must wait until S > 0.\nState 4: When P1 finishes, it performs signal(S), making S = 1. Now P2 can enter its critical section and again sets S = 0. This mechanism guarantees mutual exclusion, ensuring that only one process can access the shared resource at a time, see the image below for reference:\nMutual Exclusion: Semaphore ensures that only one process accesses a shared resource at a time.\nProcess Synchronization: Semaphore coordinates the execution order of multiple processes.\nResource Management: Limits access to a finite set of resources, like printers, devices, etc.\nReader-Writer Problem: Allows multiple readers but restricts the writers until no reader is present.\nAvoiding Deadlocks: Prevents deadlocks by controlling the order of allocation of resources."
        },
        {
          "id": "semaphores--counting-semaphore",
          "heading": "Counting Semaphore",
          "explanation": "A counting semaphore can have values ranging from 0 to any positive integer. It is used when multiple instances of a resource are available and need to be managed. Value ranges from 0 to n. Manages multiple resource instances. Controls access to limited resources. Example: Managing access to 5 printers or 3 database connections."
        },
        {
          "id": "semaphores--binary-semaphore",
          "heading": "Binary Semaphore",
          "explanation": "A binary semaphore has only two possible values: 0 and 1. It is mainly used for mutual exclusion, ensuring that only one process enters the critical section at a time. Value is either 0 or 1. Used for mutual exclusion. Similar to a mutex, but unlike a mutex, a binary semaphore does not enforce ownership. Any process can perform signal(). Managing access to a single critical section\nPriority Inversion: A low-priority process holding a semaphore can block a high-priority one.\nDeadlock: Processes may wait on each other’s semaphores in a cycle, causing indefinite blocking.\nComplex to Manage: The OS must carefully track wait and signal calls; misuse can cause errors.\nBusy Waiting: In basic implementations, processes may keep checking the semaphore value, wasting CPU time."
        }
      ],
      "quick_revision": [
        "Semaphores in Process Synchronization A semaphore is a synchronization tool used in operating systems to manage access to shared resources in a multi-process or…",
        "Signal Operation: Increments the semaphore value.",
        "Counting Semaphore: A counting semaphore can have values ranging from 0 to any positive integer.",
        "Binary Semaphore: A binary semaphore has only two possible values: 0 and 1."
      ]
    },
    {
      "id": "mutex-vs-semaphore",
      "title": "Mutex vs. Semaphore",
      "category": "Process Synchronization",
      "source_id": "mutex-vs-semaphore",
      "summary": "Mutex vs Semaphore Mutex and Semaphores are kernel resources that provide synchronization services (also known as synchronization primitives).",
      "sections": [
        {
          "id": "mutex-vs-semaphore--overview",
          "heading": "Overview",
          "explanation": "Mutex vs Semaphore Mutex and Semaphores are kernel resources that provide synchronization services (also known as synchronization primitives). Synchronization is required when multiple processes are executing concurrently, to avoid conflicts between processes using shared resources.\nMutex: A mutex is different from a binary semaphore, which provides a locking mechanism. It stands for"
        },
        {
          "id": "mutex-vs-semaphore--mutual-exclusion",
          "heading": "Mutual Exclusion",
          "explanation": "Object. Mutex is mainly used to provide mutual exclusion to a specific portion of the code so that the process can execute and work with a particular section of the code at a particular time.\nMutex: A mutex enforces strict ownership. Only the thread that locks the mutex can unlock it. It is specifically used for locking a resource to ensure that only one thread accesses it at a time. Due to this strict ownership, a mutex is not only typically used for signaling between threads, but it is used for mutual exclusion also to ensuring that a resource is accessed by only one thread at a time. Mutex uses a priority inheritance mechanism to avoid priority inversion issues. Note: The priority inheritance mechanism keeps higher-priority processes in the blocked state for the minimum possible time. However, this cannot avoid the priority inversion problem, but it can reduce its effect up to an extent. The producer-consumer problem Consider the standard producer-consumer problem. Assume, we have a buffer of 4096-byte length. A producer thread collects the data and writes it to the buffer. A consumer thread processes the collected data from the buffer. The objective is, that both the threads should not run at the same time.\nSolution: A mutex provides mutual exclusion, either producer or consumer can have the key (mutex) and proceed with their work. As long as the buffer is filled by the producer, the consumer needs to wait and vice versa. At any point in time, only one thread can work with the entire buffer. The concept can be generalized using semaphore. Advantages of Mutex No race condition arises, as only one process is in the critical section at a time. Data remains consistent and it helps in maintaining integrity. It is a simple locking mechanism that into a critical section and is released while leaving the critical section. Disadvantages of Mutex If a thread holding the mutex is preempted or goes to sleep inside the critical section, other threads are blocked, which can lead to priority inversion or starvation . Mutexes involve context switching and kernel overhead, which makes them slower than spinlocks for very short critical sections. Incorrect usage (such as forgetting to unlock) can cause deadlock.\nSemaphore: A semaphore is a non-negative integer variable that is shared between various threads. Semaphore works upon signaling mechanism, in this a thread can be signaled by another thread.\nSemaphore: It provides a less restrictive control mechanism. Any thread can invoke signal() (also known as release() or up()) and any other thread can invoke wait() (also known as acquire() or down()). There is no strict ownership in semaphores, meaning the thread that signals doesn't necessarily have to be the same one that waited. Note: Semaphores are often used for coordinating signaling between threads. Semaphore uses two atomic operations for process synchronization: Wait (P) & Signal (V). The producer-consumer problem Consider the standard producer-consumer problem. Assume, we have a buffer of 4096-byte length. A producer thread collects the data and writes it to the buffer. A consumer thread processes the collected data from the buffer. The objective is, both the threads should not run at the same time.\nSolution: A semaphore is a generalized mutex . instead a single buffer, we can split the 4 KB buffer into four 1 KB buffers (identical resources). A semaphore can be associated with these four buffers. The consumer and producer can work on different buffers at the same time. Advantages of Semaphore Semaphores are machine-independent. Only one process will access the critical section at a time, however, multiple threads are allowed. Semaphores are machine-independent, so they should be run over microkernel . Flexible resource management. Disadvantages of Semaphore It has priority inversion. Semaphore operations (Wait, Signal) must be implemented in the correct manner to avoid deadlock. It leads to a loss of modularity, so semaphores can't be used for large-scale systems. Semaphore is prone to programming error and this can lead to deadlock or violation of mutual exclusion property. Operating System has to track all the calls to wait and signal operations. Difference Between Mutex and Semaphore\nSemaphore: A mutex is an object. A semaphore is an integer. Mutex works upon the locking mechanism. Semaphore uses signaling mechanism. Operations on mutex: Lock & Unlock Operation on semaphore: Wait & Signal Mutex does not have any subtypes. Semaphore is of two types: Counting Semaphore & Binary Semaphore A mutex can only be modified by the process that is requesting or releasing a resource. Semaphore work with two atomic operations (Wait, signal) which can modify it. If the mutex is locked then the process needs to wait in the process queue and mutex can only be accessed once the lock is released. If the process needs a resource and no resource is free. So, the process needs to perform a wait operation until the semaphore value is greater than zero. Misconception of Mutex and Semaphore There is an ambiguity between binary semaphore and mutex. We might have come across that a mutex is a binary semaphore. But it is not! The purposes of mutex and semaphore are different. Maybe, due to similarity in their implementation of a mutex would be referred to as a binary semaphore. A mutex is a locking mechanism used to synchronize access to a resource. Only one task (can be a thread or process based on OS abstraction) can acquire the mutex. It means there is ownership associated with a mutex and only the owner can release the lock (mutex). While, a semaphore is a signaling mechanism used to control access to shared resources in an operating system. For example, imagine you are downloading a large file on your computer (Task A) while simultaneously trying to print a document (Task B). When the print job is initiated, it triggers a semaphore that checks if the download is complete. If the download is still in progress, the semaphore prevents the print task from proceeding, effectively saying, \"Wait until the download finishes.\" Once the download completes, the semaphore signals that Task B can start printing. This ensures that both tasks do not interfere with each other and helps manage system resources efficiently, allowing tasks to run smoothly without conflict."
        }
      ],
      "quick_revision": [
        "Mutex vs Semaphore Mutex and Semaphores are kernel resources that provide synchronization services (also known as synchronization primitives).",
        "Mutual Exclusion: Object."
      ]
    },
    {
      "id": "monitors",
      "title": "Monitors",
      "category": "Process Synchronization",
      "source_id": "monitors",
      "summary": "Monitors in Process Synchronization Monitors are a high-level synchronization mechanism that simplify process and thread synchronization.",
      "sections": [
        {
          "id": "monitors--overview",
          "heading": "Overview",
          "explanation": "Monitors in Process Synchronization Monitors are a high-level synchronization mechanism that simplify process and thread synchronization. They are built on top of locks and are mostly used in multithreading systems like Java. Unlike semaphores, where the programmer must explicitly call wait() and signal(), monitors combine shared data and the operations on that data inside a single structure, making synchronization safer and easier to manage. A monitor is similar to a class/module that groups shared variables and the functions that operate on them. Only one thread can execute inside a monitor at a time, ensuring automatic mutual exclusion. In Java, monitors are implemented using classes and synchronized methods. There is no monitor keyword in Java – the functionality is achieved through synchronized. Implementation of Monitors Monitors are implemented at the programming language level, not directly by the operating system. In Java, monitor-like behavior is achieved using the synchronized keyword ensures that only one thread can execute inside the monitor at a time. A monitor encapsulates both shared data (critical resource) and the operations that access or modify it. Mutual exclusion is enforced automatically, unlike semaphores where programmers must explicitly call wait() and signal(). Synchronization can be applied through synchronized methods or synchronized blocks. Condition variables are used to control thread waiting and signaling. The methods wait(), notify(), and notifyAll() provide process coordination. Structure of Monitor Condition Variables in Monitors A condition variable allows threads to wait until a certain condition becomes true. They are always used inside a monitor. There are three main condition variables: wait() : temporarily releases the monitor lock and puts the thread to sleep until it is signaled. signal() : wakes up one waiting thread (if any). broadcast() (in some languages): wakes up all waiting threads. class AccountUpdate Defines the monitor as a class. private int bal; Shared resource (balance) which should be accessed by only one thread at a time. synchronized withdraw(int n) Ensures withdrawal operation is also mutually exclusive. bal = bal - n; Updates the balance by deducting the withdrawn amount. Use of synchronized – Makes the methods act like monitor procedures, guaranteeing mutual exclusion. Limitations of Monitors"
        },
        {
          "id": "monitors--formulas-code",
          "heading": "Formulas & Code",
          "explanation": "Pseudocode for monitors class AccountUpdate { private int bal; condition sufficientFunds; // condition variable void synchronized deposit(int n) { // increase balance // signal waiting threads that funds are available } void synchronized withdraw(int n) { // if (bal < n) -> wait on sufficientFunds // else -> perform withdrawal (bal = bal - n) } Example: Monitor Implementation in Java Here is a simple example of a Bank Account Monitor which will have two features (deposit and withdraw) using Java: Java class AccountUpdate { private int bal ; void synchronized deposit ( int n ) { bal = bal + n ; } void synchronized withdraw ( int n ) { bal = bal - n ; } class AccountUpdate { private int bal ; void synchronized deposit ( int n ) { bal = bal + n ; } void synchronized withdraw ( int n ) { bal = bal - n ; } synchronized deposit(int n) Ensures that only one thread can deposit at a time, preventing race conditions. bal = bal + n; Updates the balance by adding the deposited amount. Language Dependency Monitors must be built into the programming language itself; they cannot be added externally like libraries. Compiler Burden The compiler has to generate extra code to manage monitor functionality. OS Dependency The compiler also needs awareness of operating system facilities that handle critical section access. Limited Language Support Only some languages support monitors directly, such as Java, C#, Visual Basic, Ada, and Concurrent Euclid."
        },
        {
          "id": "monitors--reduced-flexibility",
          "heading": "Reduced Flexibility",
          "explanation": "Since monitors are tightly coupled with language and compiler design, portability across different environments is limited."
        }
      ],
      "quick_revision": [
        "Monitors in Process Synchronization Monitors are a high-level synchronization mechanism that simplify process and thread synchronization.",
        "Formulas & Code: Pseudocode for monitors class AccountUpdate { private int bal; condition sufficientFunds; // condition variable void synchronized deposit(int n) { // increase balance //…",
        "Reduced Flexibility: Since monitors are tightly coupled with language and compiler design, portability across different environments is limited."
      ]
    },
    {
      "id": "priority-inversion",
      "title": "Priority Inversion",
      "category": "Process Synchronization",
      "source_id": "priority-inversion",
      "summary": "Priority Inversion in Operating Systems Priority inversion is a scheduling problem where a low-priority task holds a resource (like a lock) that a high-priority task needs.",
      "sections": [
        {
          "id": "priority-inversion--overview",
          "heading": "Overview",
          "explanation": "Priority Inversion in Operating Systems Priority inversion is a scheduling problem where a low-priority task holds a resource (like a lock) that a high-priority task needs. This forces the high-priority task to wait for the low one. Causes of Priority Inversion A low-priority task (L) acquires a shared resource that a high-priority task (H) will need later. When H requests that resource, it must wait for L to release it. While L holds that resource, a medium-priority task (M) which doesn’t require the resource becomes runnable and preempts L, because M has higher priority than L. As a result, the high-priority task (H) remains blocked, even though H outranks both L and M. Effectively, the priority order is inverted: M runs before H, despite H having the highest priority. This leads to unbounded priority inversion Types of Priority Inversion"
        },
        {
          "id": "priority-inversion--bounded-priority-inversion",
          "heading": "Bounded Priority Inversion",
          "explanation": "Bounded priority inversion occurs when a high-priority task is delayed by a lower-priority task holding a resource. The delay is predictable and limited to the time the lower-priority task holds the resource.\nExplanation: Consider three tasks with the following priorities L (Low priority): Task L holds a mutex to access a shared resource. M (Medium priority): Task M does not require the shared resource. H (High priority): Task H needs the shared resource held by L."
        },
        {
          "id": "priority-inversion--sequence-of-events",
          "heading": "Sequence of Events",
          "explanation": "L acquires the mutex and enters its critical section. H arrives and attempts to acquire the mutex but is blocked, waiting for L to release it. M becomes ready to run and preempts L. M executes until it completes its task. L resumes, finishes its critical section, and releases the mutex. H acquires the mutex and enters its critical section. Outcome: H's execution is delayed by the time L holds the mutex and the time M runs. The total delay is predictable and equals the sum of L's critical section time and M's execution time."
        },
        {
          "id": "priority-inversion--unbounded-priority-inversion",
          "heading": "Unbounded Priority Inversion",
          "explanation": "Unbounded priority inversion occurs when a medium-priority task (M) preempts L while it holds the lock. This action delays L from releasing the resource, which in turn delays H. The delay H experiences becomes unpredictable and can potentially be indefinite, hence the term \"unbounded.\"\nExplanation: Task L (Low Priority) starts and acquires a lock on a shared resource. Task H (High Priority) starts and needs the same lock. It gets blocked because Task L has it. This situation, where a high-priority task waits for a low-priority one, is called Priority Inversion. Task M (Medium Priority) now starts. Its priority is higher than Task L's. The scheduler lets Task M preempt Task L, so Task M begins running. This is the critical problem: Task M runs, preventing Task L from finishing its work. Because Task L can't run, it cannot release the lock. This means Task H remains blocked indefinitely, even though it's the most important task. The high-priority task is stuck waiting for a medium-priority task to finish, which is a serious flaw. This can cause a system failure or trigger a watchdog timer. Solutions to Priority Inversion Priority inversion can lead to significant delays and system inefficiencies. To resolve or prevent this issue, the following solutions are commonly used:\nPriority Inheritance: Temporarily elevates the priority of the low-priority task holding the resource to match that of the highest-priority waiting task, ensuring timely resource release .\nPriority Ceiling Protocol: Assigns a maximum priority to each resource, preventing tasks with lower priorities from acquiring resources needed by higher-priority tasks .\nAvoiding Blocking: Utilizes non-blocking algorithms or designs systems to minimize shared resource usage, thereby reducing the chances of priority inversion ."
        }
      ],
      "quick_revision": [
        "Priority Inversion in Operating Systems Priority inversion is a scheduling problem where a low-priority task holds a resource (like a lock) that a high-priority task…",
        "Bounded Priority Inversion: Bounded priority inversion occurs when a high-priority task is delayed by a lower-priority task holding a resource.",
        "Sequence of Events: L acquires the mutex and enters its critical section.",
        "Unbounded Priority Inversion: Unbounded priority inversion occurs when a medium-priority task (M) preempts L while it holds the lock."
      ]
    },
    {
      "id": "classical-ipc-problems",
      "title": "Classical IPC Problems",
      "category": "Process Synchronization",
      "source_id": "classical-ipc-problems",
      "summary": "Inter-Process Communication (IPC) allows processes to share data and coordinate tasks.  However, when multiple processes interact, problems such as synchronization errors, resource conflicts, and deadlocks can occur.",
      "sections": [
        {
          "id": "classical-ipc-problems--overview",
          "heading": "Overview",
          "explanation": "Inter-Process Communication (IPC) allows processes to share data and coordinate tasks. However, when multiple processes interact, problems such as synchronization errors, resource conflicts, and deadlocks can occur. These challenges are often studied through the following classical IPC problems, which provide models for understanding and solving real-world issues in operating systems. Producer-Consumer Problem managing shared buffers without overflow or underflow. Readers-Writers Problem balancing concurrent reads and exclusive writes. Dining Philosophers Problem preventing deadlock and starvation in shared resource usage. Sleeping Barber Problem handling synchronization and fairness in service systems. These problems highlight the need for proper synchronization techniques like semaphores, mutexes, and monitors. Producer generates data and adds it to a buffer. Consumer removes data from the buffer for processing. Buffer Overflow producer tries to add when the buffer is full. Buffer Underflow consumer tries to remove when the buffer is empty.\nSolution: Use synchronization tools like semaphores or mutexes to ensure controlled access to the buffer. Producer-Consumer Solution (using Semaphores)"
        },
        {
          "id": "classical-ipc-problems--reader-writer-problem",
          "heading": "Reader-Writer Problem",
          "explanation": "Here, multiple processes read and write to a shared resource. Readers only read the data. Writers modify the data.\nChallenges: Allow many readers to access simultaneously. Ensure that only one writer writes at a time. Prevent readers from reading while a writer is writing. Readers Preference give readers priority, making writers wait. Writers Preference give writers priority, ensuring timely updates."
        },
        {
          "id": "classical-ipc-problems--dining-philosophers-problem",
          "heading": "Dining Philosophers Problem",
          "explanation": "This problem models philosophers seated around a table, each needing two chopsticks to eat. Chopsticks are shared between neighbors, creating potential conflicts. Deadlock if all philosophers pick up one chopstick and wait for the other. – some philosophers may never get to eat.\nSolution: Use semaphores or monitors to coordinate chopstick use and avoid deadlock. Dining Philosophers Solution (using Semaphores) Dining-Philosophers Solution (using Monitors)\nIn a barber shop: If no customers are present, the barber sleeps. If customers arrive and seats are available, they wait. If all seats are full, new customers leave.\nChallenges: Prevent deadlock where no one gets served. Ensure fairness so no customer starves waiting too long.\nSolution: Semaphores can manage customer queues, chair availability, and barber activity. Sleeping Barber Solution (using Semaphores)"
        }
      ],
      "quick_revision": [
        "Inter-Process Communication (IPC) allows processes to share data and coordinate tasks.",
        "Reader-Writer Problem: Here, multiple processes read and write to a shared resource.",
        "Dining Philosophers Problem: This problem models philosophers seated around a table, each needing two chopsticks to eat."
      ]
    },
    {
      "id": "introduction-2",
      "title": "Introduction",
      "category": "Deadlock",
      "source_id": "introduction",
      "summary": "Introduction of Deadlock in Operating System Deadlock is a state in an operating system where two or more processes are stuck forever because each is waiting for a resource held by another.",
      "sections": [
        {
          "id": "introduction-2--overview",
          "heading": "Overview",
          "explanation": "Introduction of Deadlock in Operating System Deadlock is a state in an operating system where two or more processes are stuck forever because each is waiting for a resource held by another. It happens only when four conditions exist: mutual exclusion, hold and wait, no preemption, and circular wait. For example, P1 holds R1 and needs R2, while P2 holds R2 and needs R1, so both wait forever. Deadlock can be handled using prevention, avoidance (Banker’s algorithm), or detection and recovery. Causes of Deadlock in Operating System A process in an operating system typically uses resources in the following sequence: Request a resource Use the resource Release the resource Deadlock arises when processes hold some resources while waiting for others. Examples of Deadlock There are several examples of deadlock. Some of them are mentioned below. 1. The system has 2 tape drives. P0 and P1 each hold one tape drive and each needs another one. 2. Semaphores A and B, initialized to 1, P0, and P1 are in deadlock as follows: P0 executes wait(A) and preempts. P1 executes wait(B). Now P0 and P1 enter in deadlock."
        },
        {
          "id": "introduction-2--p1-action",
          "heading": "P1 Action",
          "explanation": "P1 Action wait(A) wait(B) wait(A) 3. Assume the space is available for allocation of 200K bytes, and the following sequence of events occurs. P1 Request 80KB; Request 70KB; Request 60KB; Request 80KB; Deadlock occurs if both processes progress to their second request. Necessary Conditions for Deadlock in OS Deadlock can arise if the following four conditions hold simultaneously (Necessary Conditions)\nMutual Exclusion: Only one process can use a resource at any given time i.e. the resources are non-sharable."
        },
        {
          "id": "introduction-2--hold-and-wait",
          "heading": "Hold and Wait",
          "explanation": "A process is holding at least one resource at a time and is waiting to acquire other resources held by some other process.\nNo Preemption: A resource cannot be taken from a process unless the process releases the resource."
        },
        {
          "id": "introduction-2--circular-wait",
          "heading": "Circular Wait",
          "explanation": "Circular Wait set of processes are waiting for each other in a circular fashion. For example, imagine four processes P1, P2, P3, and P4 and four resources R1, R2, R3, and R4 . P1 is holding R1 and waiting for R2 (which is held by P2). P2 is holding R2 and waiting for R3 (which is held by P3). P3 is holding R3 and waiting for R4 (which is held by P4). P4 is holding R4 and waiting for R1 (which is held by P1)."
        }
      ],
      "quick_revision": [
        "Introduction of Deadlock in Operating System Deadlock is a state in an operating system where two or more processes are stuck forever because each is waiting for a…",
        "P1 Action: P1 Action wait(A) wait(B) wait(A) 3.",
        "Hold and Wait: A process is holding at least one resource at a time and is waiting to acquire other resources held by some other process.",
        "Circular Wait: Circular Wait set of processes are waiting for each other in a circular fashion."
      ]
    },
    {
      "id": "deadlock-handling",
      "title": "Deadlock Handling",
      "category": "Deadlock",
      "source_id": "deadlock-handling",
      "summary": "Deadlock handling methods are strategies used in operating systems to ensure processes do not remain permanently blocked, maintaining smooth execution and system reliability.",
      "sections": [
        {
          "id": "deadlock-handling--overview",
          "heading": "Overview",
          "explanation": "Deadlock handling methods are strategies used in operating systems to ensure processes do not remain permanently blocked, maintaining smooth execution and system reliability. Methods of Handling Deadloc ks There are four approaches to dealing with deadlocks. Methods of Handling Deadlocks"
        },
        {
          "id": "deadlock-handling--deadlock-prevention",
          "heading": "Deadlock Prevention",
          "explanation": "Deadlock Prevention is a method of handling deadlocks where the operating system ensures that at least one of the necessary conditions for deadlock (mutual exclusion, hold and wait, no preemption, circular wait) never occurs. By breaking these conditions in advance, the system prevents deadlock from happening. Read more about"
        },
        {
          "id": "deadlock-handling--deadlock-avoidance",
          "heading": "Deadlock Avoidance",
          "explanation": "Deadlock Avoidance is a method where the operating system makes decisions dynamically to ensure the system never enters an unsafe state, thereby avoiding the possibility of deadlock. This is usually done using algorithms like the Banker’s Algorithm. Deadlock avoidance mainly relies on algorithms that check resource allocation before making decisions. The two common types are:\nBanker’s Algorithm: Used when multiple instances of resources exist. It simulates allocation and ensures that the system remains in a safe state before granting resources.\nResource Allocation Graph (RAG) Algorithm: Used when each resource has only one instance. It checks for cycles in the graph to avoid unsafe states. Read more about Banker's Algorithm &"
        },
        {
          "id": "deadlock-handling--deadlock-detection",
          "heading": "Deadlock Detection",
          "explanation": "Deadlock detection periodically checks for circular waits and resolves deadlocks by aborting and restarting processes, releasing their resources. It allows unrestricted resource access and immediate request fulfillment, enabling online handling. The main drawback is potential loss due to preemption. Deadlock Recovery is the process of handling a deadlock after it has occurred. It involves:\nProcess Termination: Aborting one or more deadlocked processes to break the cycle.\nResource Preemption: Temporarily taking resources from some processes and reallocating them to others. Read more about Deadlock Detection and Recovery"
        },
        {
          "id": "deadlock-handling--deadlock-ignorance",
          "heading": "Deadlock Ignorance",
          "explanation": "In the Deadlock ignorance method the OS acts like the deadlock never occurs and completely ignores it even if the deadlock occurs. This method only applies if the deadlock occurs very rarely. The algorithm is very simple. It says, \" if the deadlock occurs, simply reboot the system and act like the deadlock never occurred.\" That's why the algorithm is called the Ostrich Algorithm . Read more about"
        }
      ],
      "quick_revision": [
        "Deadlock handling methods are strategies used in operating systems to ensure processes do not remain permanently blocked, maintaining smooth execution and system…",
        "Deadlock Prevention: Deadlock Prevention is a method of handling deadlocks where the operating system ensures that at least one of the necessary conditions for deadlock (mutual exclusion,…",
        "Deadlock Avoidance: Deadlock Avoidance is a method where the operating system makes decisions dynamically to ensure the system never enters an unsafe state, thereby avoiding the possibility…",
        "Deadlock Detection: Deadlock detection periodically checks for circular waits and resolves deadlocks by aborting and restarting processes, releasing their resources.",
        "Deadlock Ignorance: In the Deadlock ignorance method the OS acts like the deadlock never occurs and completely ignores it even if the deadlock occurs."
      ]
    },
    {
      "id": "deadlock-prevention",
      "title": "Deadlock Prevention",
      "category": "Deadlock",
      "source_id": "deadlock-prevention",
      "summary": "Deadlock prevention is a strategy used in computer systems to ensure that different processes can run smoothly without getting stuck waiting for each other forever.",
      "sections": [
        {
          "id": "deadlock-prevention--overview",
          "heading": "Overview",
          "explanation": "Deadlock prevention is a strategy used in computer systems to ensure that different processes can run smoothly without getting stuck waiting for each other forever. Think of it like a traffic system where cars (processes) must move through intersections (resources) without getting into a gridlock. Deadlock can only happen if all four of the following conditions are met simultaneously: Mutual Exclusion Hold and Wait"
        },
        {
          "id": "deadlock-prevention--eliminate-mutual-exclusion",
          "heading": "Eliminate Mutual Exclusion",
          "explanation": "Some resources, like a printer, are inherently non-sharable, so this condition is difficult to break. However, sharable resources like read-only files can be accessed by multiple processes at the same time. For non-sharable resources, prevention through this method is not possible."
        },
        {
          "id": "deadlock-prevention--eliminate-hold-and-wait",
          "heading": "Eliminate Hold and Wait",
          "explanation": "Hold and wait is a condition in which a process holds one resource while simultaneously waiting for another resource that is being held by a different process. The process cannot continue until it gets all the required resources."
        },
        {
          "id": "deadlock-prevention--there-are-two-ways-to-eliminate-hold-and-wait",
          "heading": "There are two ways to eliminate hold and wait",
          "explanation": "By eliminating wait : The process specifies the resources it requires in advance so that it does not have to wait for allocation after execution starts. For Example, Process1 declares in advance that it requires both Resource1 and Resource2. By eliminating hold : The process has to release all resources it is currently holding before making a new request. For Example: Process1 must release Resource2 and Resource3 before requesting Resource1."
        },
        {
          "id": "deadlock-prevention--eliminate-no-preemption",
          "heading": "Eliminate No Preemption",
          "explanation": "No preemption means resources can’t be taken away once allocated. To prevent this: Processes must release resources voluntarily : A process gives up resources once it finishes using them. Avoid partial allocation : If a process requests resources that are unavailable, it must release all currently held resources and wait until all required resources are free."
        },
        {
          "id": "deadlock-prevention--eliminate-circular-wait",
          "heading": "Eliminate Circular Wait",
          "explanation": "Circular wait happens when processes form a cycle, each waiting for a resource held by the next. To prevent this: Impose a strict ordering on resources. Assign each resource a unique number. Processes can only request resources in increasing order of their numbers. This prevents cycles, as no process can go backwards in numbering."
        }
      ],
      "quick_revision": [
        "Deadlock prevention is a strategy used in computer systems to ensure that different processes can run smoothly without getting stuck waiting for each other forever.",
        "Eliminate Mutual Exclusion: Some resources, like a printer, are inherently non-sharable, so this condition is difficult to break.",
        "Eliminate Hold and Wait: Hold and wait is a condition in which a process holds one resource while simultaneously waiting for another resource that is being held by a different process.",
        "There are two ways to eliminate hold and wait: By eliminating wait : The process specifies the resources it requires in advance so that it does not have to wait for allocation after execution starts.",
        "Eliminate No Preemption: No preemption means resources can’t be taken away once allocated.",
        "Eliminate Circular Wait: Circular wait happens when processes form a cycle, each waiting for a resource held by the next."
      ]
    },
    {
      "id": "bankers-algorithm-for-deadlock-avoidance",
      "title": "Banker’s Algorithm for Deadlock Avoidance",
      "category": "Deadlock",
      "source_id": "bankers-algorithm-for-deadlock-avoidance",
      "summary": "Banker's Algorithm Banker's Algorithm is a resource allocation and deadlock avoidance algorithm used in operating systems.",
      "sections": [
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--overview",
          "heading": "Overview",
          "explanation": "Banker's Algorithm Banker's Algorithm is a resource allocation and deadlock avoidance algorithm used in operating systems. It checks whether granting resource requests keeps the system in a safe state, where at least one safe sequence exists in which all processes can complete. It avoids deadlock by ensuring that resource allocations keep the system in a safe state. It keeps track of the resources each process needs and the resources currently available. Components of the Banker's Algorithm The following Data structures are used to implement the Banker’s Algorithm: Components of the Banker's Algorithm Let 'n' be the number of processes in the system and 'm' be the number of resource types."
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--available",
          "heading": "Available",
          "explanation": "It is a 1-D array of size 'm' indicating the number of available resources of each type. Available[ j ] = k means there are 'k' instances of resource type R j."
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--max",
          "heading": "Max",
          "explanation": "It is a 2-d array of size ' n*m' that defines the maximum demand of each process in a system. Max[ i, j ] = k means process P i may request at most 'k' instances of resource type R j."
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--allocation",
          "heading": "Allocation",
          "explanation": "It is a 2-d array of size 'n*m' that defines the number of resources of each type currently allocated to each process. Allocation[ i, j ] = k means process P i is currently allocated 'k' instances of resource type R j."
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--need",
          "heading": "Need",
          "explanation": "It is a 2-d array of size 'n*m' that indicates the remaining resource need of each process. Need [ i, j ] = k means process P i currently needs 'k' instances of resource type R j. Need [ i, j ] = Max [ i, j ] – Allocation [ i, j ] Allocation specifies the resources currently allocated to process P i and Need specifies the additional resources that process P i may still request to complete its task. Key Concepts in Banker's Algorithm\nSafe State: There exists at least one sequence of processes such that each process can obtain the needed resources, complete its execution, release its resources, and thus allow other processes to eventually complete without entering a deadlock."
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--unsafe-state",
          "heading": "Unsafe State",
          "explanation": "Even though the system can still allocate resources to some processes, there is no guarantee that all processes can finish without potentially causing a deadlock. An unsafe state does not necessarily mean that a deadlock has already occurred. It means the system cannot guarantee that all processes can complete without deadlock. Example of Unsafe State Consider a system with three processes ( P1, P2, ) and 7 instances of a resource. Let's say 1. The available instances of the resource are: 1 P3: 1 3. The maximum demand (maximum resources each process may eventually request) is: P3 3 P1 4 2 P2 5 3 2 P3 3 1 2 P1 may need 2 more resources to complete its execution. P2 may need 2 more resources to complete its execution. P3 may need 2 more resources to complete its execution. However, there is only 1 resource available, and each process needs 2 more resources to complete. Therefore, no process can obtain all the resources it needs to finish. There is no safe sequence in which all processes can complete."
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--safety-algorithm",
          "heading": "Safety Algorithm",
          "explanation": "The safety algorithm checks whether the system is in a safe state -meaning all processes can complete without causing deadlock."
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--formulas-code",
          "heading": "Formulas & Code",
          "explanation": "1. Initialize Work = Available (resources currently available) Finish[i] = false for all processes (none have finished yet) 2. Look for a process Pi such that Finish[i] = false Need[i] ≤ Work (resources required can be satisfied) If Need[i] ≤ Work, assume process Pi receives its remaining resources, completes, and releases all its allocated resources. Therefore: Work = Work + Allocation[i] 3. If such a process is found Assume that process Pi receives its remaining resources, completes its execution, and releases all the resources allocated to it. Update Work = Work + Allocation[i] and set Finish[i] = true. Repeat step 2 for remaining processes 4. If all processes are marked finished (Finish[i] = true for all), the system is safe . Essentially, the algorithm simulates process completion to verify that all processes can finish safely. 2. Resource Request Algorithm Determines whether a process’s resource request can be safely granted without putting the system into an unsafe state. 1. Check if the request exceeds the process’s maximum need If Request[i] > Need[i], the process has exceeded its declared maximum demand, so the request is rejected. 2. Check if resources are available If Request[i] > Available, the process must wait until the requested resources become available. 3. Temporarily allocate the resources Available = Available - Request[i] Allocation[i] = Allocation[i] + Request[i] Need[i] = Need[i] - Request[i] 4."
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--run-the-safety-algorithm",
          "heading": "Run the Safety Algorithm",
          "explanation": "If the new state is safe, grant the request. If unsafe, roll back and make the process wait. In short, the resource-request algorithm ensures resources are only granted if the system remains safe, preventing deadlock. Example: Considering a system with five processes P 0 through P 4 and three resources of type A, B, C. Resource type A has 10 instances, B has 5 instances and type C has 7 instances. Suppose at time t 0"
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--formulas-code-2",
          "heading": "Formulas & Code",
          "explanation": "Need Matrix Need [i, j] = Max [i, j] – Allocation [i, j]"
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--so-the-content-of-need-matrix-is",
          "heading": "So, the content of Need Matrix is",
          "explanation": "Safe State and Safe Sequence Analysis Applying the Safety algorithm on the given system, Impact of P1’s Resource Request We must determine whether this new system state is safe. To do so, we again execute Safety algorithm on the above data structures . Hence the new system state is safe, so we can immediately grant the request for process P 1 . Implementation of Banker's Algorithm"
        },
        {
          "id": "bankers-algorithm-for-deadlock-avoidance--formulas-code-3",
          "heading": "Formulas & Code",
          "explanation": "C++ #include <iostream> #include <vector> using namespace std ; int main () { // P0, P1, P2, P3, P4 are the names of Process int n = 5 ; // Indicates the Number of processes int r = 3 ; // Indicates the Number of resources vector < vector < int >> alloc = {{ 0 , 0 , 1 }, // P0 // This is Allocation Matrix { 3 , 0 , 0 }, // P1 { 1 , 0 , 1 }, // P2 { 2 , 3 , 2 }, // P3 { 0 , 0 , 3 }}; // P4 vector < vector < int >> max = {{ 7 , 6 , 3 }, // P0 // MAX Matrix { 3 , 2 , 2 }, // P1 { 8 , 0 , 2 }, // P2 { 2 , 1 , 2 }, // P3 { 5 , 2 , 3 }}; // P4 vector < int > avail = { 2 , 3 , 2 }; // These are Available Resources vector < int > f ( n , 0 ); vector < int > ans ( n ); int ind = 0 ; vector < vector < int >> need ( n , vector < int > ( r )); for ( int i = 0 ; i < n ; i ++ ) { for ( int j = 0 ; j < r ; j ++ ) { need [ i ][ j ] = max [ i ][ j ] - alloc [ i ][ j ]; } int y = 0 ; for ( int k = 0 ; k < n ; k ++ ) { for ( int i = 0 ; i < n ; i ++ ) { if ( f [ i ] == 0 ) { int flag = 0 ; for ( int j = 0 ; j < r ; j ++ ) { if ( need [ i ][ j ] > avail [ j ]) { flag = 1 ; break ; } if ( flag == 0 ) { ans [ ind ++ ] = i ; for ( y = 0 ; y < r ; y ++ ) { avail [ y ] += alloc [ i ][ y ]; } f [ i ] = 1 ; } cout << \"The SAFE Sequence is as follows \\n \" ; for ( int i = 0 ; i < n - 1 ; i ++ ) { cout << \" P\" << ans [ i ] << \" ->\" ; } cout << \" P\" << ans [ n - 1 ] << endl ; return 0 ; } #include <iostream> #include <vector> using namespace std ; int main () { int n = 5 ; int r = 3 ; vector < vector < int >> alloc = {{ 0 , 0 , 1 }, { 3 , 0 , 0 }, { 1 , 0 , 1 }, { 2 , 3 , 2 }, { 0 , 0 , 3 }}; vector < vector < int >> max = {{ 7 , 6 , 3 }, { 3 , 2 , 2 }, { 8 , 0 , 2 }, { 2 , 1 , 2 }, { 5 , 2 , 3 }}; vector < int > avail = { 2 , 3 , 2 }; vector < int > f ( n , 0 ); vector < int > ans ( n ); int ind = 0 ; vector < vector < int >> need ( n , vector < int > ( r )); for ( int i = 0 ; i < n ; i ++ ) { for ( int j = 0 ; j < r ; j ++ ) { need [ i ][ j ] = max [ i ][ j ] - alloc [ i ][ j ]; } int y = 0 ; for ( int k = 0 ; k < n ; k ++ ) { for ( int i = 0 ; i < n ; i ++ ) { if ( f [ i ] == 0 ) { int flag = 0 ; for ( int j = 0 ; j < r ; j ++ ) { if ( need [ i ][ j ] > avail [ j ]) { flag = 1 ; break ; } if ( flag == 0 ) { ans [ ind ++ ] = i ; for ( y = 0 ; y < r ; y ++ ) { avail [ y ] += alloc [ i ][ y ]; } f [ i ] = 1 ; } cout << \"The SAFE Sequence is as follows\\n\" ; for ( int i = 0 ; i < n - 1 ; i ++ ) { cout << \" P\" << ans [ i ] << \" ->\" ; } cout << \" P\" << ans [ n - 1 ] << endl ; return 0 ; } C //C program for Banker's Algorithm #include <stdio.h> int main () { // P0, P1, P2, P3, P4 are the names of Process int n , r , i , j , k ; n = 5 ; // Indicates the Number of processes r = 3 ; //Indicates the Number of resources int alloc [ 5 ][ 3 ] = { 0 , 0 , 1 }, // P0 // This is Allocation Matrix { 3 , 0 , 0 }, // P1 { 1 , 0 , 1 }, // P2 { 2 , 3 , 2 }, // P3 { 0 , 0 , 3 } }; // P4 int max [ 5 ][ 3 ] = { 7 , 6 , 3 }, // P0 // MAX Matrix { 3 , 2 , 2 }, // P1 { 8 , 0 , 2 }, // P2 { 2 , 1 , 2 }, // P3 { 5 , 2 , 3 } }; // P4 int avail [ 3 ] = { 2 , 3 , 2 }; // These are Available Resources int f [ n ], ans [ n ], ind = 0 ; for ( k = 0 ; k < n ; k ++ ) { f [ k ] = 0 ; } int need [ n ][ r ]; for ( i = 0 ; i < n ; i ++ ) { for ( j = 0 ; j < r ; j ++ ) need [ i ][ j ] = max [ i ][ j ] - alloc [ i ][ j ]; } int y = 0 ; for ( k = 0 ; k < 5 ; k ++ ) { for ( i = 0 ; i < n ; i ++ ) { if ( f [ i ] == 0 ) { int flag = 0 ; for ( j = 0 ; j < r ; j ++ ) { if ( need [ i ][ j ] > avail [ j ]){ flag = 1 ; break ; } if ( flag == 0 ) { ans [ ind ++ ] = i ; for ( y = 0 ; y < r ; y ++ ) avail [ y ] += alloc [ i ][ y ]; f [ i ] = 1 ; } printf ( \"Th SAFE Sequence is as follows \\n \" ); for ( i = 0 ; i < n - 1 ; i ++ ) printf ( \" P%d ->\" , ans [ i ]); printf ( \" P%d\" , ans [ n - 1 ]); return ( 0 ); } int alloc [ 5 ][ 3 ] = { { 0 , 0 , 1 }, Java public class BankerAlgorithm { public static void main ( String [] args ) { // P0, P1, P2, P3, P4 are the names of Process int n = 5 ; // Indicates the Number of processes int r = 3 ; // Indicates the Number of resources int [][] alloc = {{ 0 , 0 , 1 }, // P0 // This is Allocation Matrix { 3 , 0 , 0 }, // P1 { 1 , 0 , 1 }, // P2 { 2 , 3 , 2 }, // P3 { 0 , 0 , 3 }}; // P4 int [][] max = {{ 7 , 6 , 3 }, // P0 // MAX Matrix { 3 , 2 , 2 }, // P1 { 8 , 0 , 2 }, // P2 { 2 , 1 , 2 }, // P3 { 5 , 2 , 3 }}; // P4 int [] avail = { 2 , 3 , 2 }; // These are Available Resources int [] f = new int [ n ] ; int [] ans = new int [ n ] ; int ind = 0 ; int [][] need = new int [ n ][ r ] ; for ( int i = 0 ; i < n ; i ++ ) { for ( int j = 0 ; j < r ; j ++ ) { need [ i ][ j ] = max [ i ][ j ] - alloc [ i ][ j ] ; } int y = 0 ; for ( int k = 0 ; k < n ; k ++ ) { for ( int i = 0 ; i < n ; i ++ ) { if ( f [ i ] == 0 ) { int flag = 0 ; for ( int j = 0 ; j < r ; j ++ ) { if ( need [ i ][ j ] > avail [ j ] ) { flag = 1 ; break ; } if ( flag == 0 ) { ans [ ind ++] = i ; for ( y = 0 ; y < r ; y ++ ) { avail [ y ] += alloc [ i ][ y ] ; } f [ i ] = 1 ; } System . out . print ( \"The SAFE Sequence is as follows\\n\" ); for ( int i = 0 ; i < n - 1 ; i ++ ) { System . out . print ( \" P\" + ans [ i ] + \" ->\" ); } System . out . println ( \" P\" + ans [ n - 1 ] ); } int [][] alloc = {{ 0 , 0 , 1 }, Python def banker_algorithm () # P0, P1, P2, P3, P4 are the names of Process n = 5 # Indicates the Number of processes r = 3 # Indicates the Number of resources alloc = [[ 0 , 0 , 1 ], # P0 // This is Allocation Matrix [ 3 , 0 , 0 ], # P1 [ 1 , 0 , 1 ], # P2 [ 2 , 3 , 2 ], # P3 [ 0 , 0 , 3 ]] # P4 max = [[ 7 , 6 , 3 ], # P0 // MAX Matrix [ 3 , 2 , 2 ], # P1 [ 8 , 0 , 2 ], # P2 [ 2 , 1 , 2 ], # P3 [ 5 , 2 , 3 ]] # P4 avail = [ 2 , 3 , 2 ] # These are Available Resources f = [ 0 ] * n ans = [ 0 ] * n ind = 0 need = [[ 0 ] * r for _ in range ( n )] for i in range ( n ) for j in range ( r ) need [ i ][ j ] = max [ i ][ j ] - alloc [ i ][ j ] y = 0 for k in range ( n ) for i in range ( n ) if f [ i ] == 0 flag = 0 for j in range ( r ) if need [ i ][ j ] > avail [ j ] flag = 1 break if flag == 0 ans [ ind ] = i ind += 1 for y in range ( r ) avail [ y ] += alloc [ i ][ y ] f [ i ] = 1 print ( \"The SAFE Sequence is as follows\" ) for i in range ( n - 1 ) print ( f ' P { ans [ i ] } ->' , end = '' ) print ( f ' P { ans [ n - 1 ] } ' ) banker_algorithm () alloc = [[ 0 , 0 , 1 ], Hence, the SAFE Sequence is as follows P1 -> P3 -> P4 -> P0 -> P2."
        }
      ],
      "quick_revision": [
        "Banker's Algorithm Banker's Algorithm is a resource allocation and deadlock avoidance algorithm used in operating systems.",
        "Available: It is a 1-D array of size 'm' indicating the number of available resources of each type.",
        "Max: It is a 2-d array of size ' n*m' that defines the maximum demand of each process in a system.",
        "Allocation: It is a 2-d array of size 'n*m' that defines the number of resources of each type currently allocated to each process.",
        "Need: It is a 2-d array of size 'n*m' that indicates the remaining resource need of each process.",
        "Unsafe State: Even though the system can still allocate resources to some processes, there is no guarantee that all processes can finish without potentially causing a deadlock.",
        "Safety Algorithm: The safety algorithm checks whether the system is in a safe state -meaning all processes can complete without causing deadlock.",
        "Formulas & Code: 1.",
        "Run the Safety Algorithm: If the new state is safe, grant the request.",
        "Formulas & Code: Need Matrix Need [i, j] = Max [i, j] – Allocation [i, j]",
        "So, the content of Need Matrix is: Safe State and Safe Sequence Analysis Applying the Safety algorithm on the given system, Impact of P1’s Resource Request We must determine whether this new system state…",
        "Formulas & Code: C++ #include <iostream> #include <vector> using namespace std ; int main () { // P0, P1, P2, P3, P4 are the names of Process int n = 5 ; // Indicates the Number of…"
      ]
    },
    {
      "id": "detection-and-recovery",
      "title": "Detection And Recovery",
      "category": "Deadlock",
      "source_id": "detection-and-recovery",
      "summary": "Deadlock detection and recovery is the mechanism of detecting and resolving deadlocks in an operating system.  In operating systems, deadlock recovery is important to keep everything running smoothly.",
      "sections": [
        {
          "id": "detection-and-recovery--overview",
          "heading": "Overview",
          "explanation": "Deadlock detection and recovery is the mechanism of detecting and resolving deadlocks in an operating system. In operating systems, deadlock recovery is important to keep everything running smoothly. A deadlock occurs when two or more processes are blocked, waiting for each other to release the resources they need. Deadlock detection is the process of identifying when processes are stuck waiting for resources held by other processes. Recovery is the method of resolving the deadlock to allow the system to continue functioning. Detection is done using techniques like Resource Allocation Graphs (RAG) or Wait-for Graphs. Once a deadlock is detected, recovery methods include process termination, resource preemption, or process rollback. Approaches to Deadlock Detection and Recovery\nPrevention: The operating system takes steps to prevent deadlocks from occurring by ensuring that the system is always in a safe state, where deadlocks cannot occur. This is achieved through resource allocation algorithms such as the Banker's Algorithm ."
        },
        {
          "id": "detection-and-recovery--detection-and-recovery",
          "heading": "Detection and Recovery",
          "explanation": "If deadlocks do occur, the operating system must detect and resolve them. Deadlock detection algorithms, such as the Wait-For Graph, are used to identify deadlocks, and recovery algorithms, such as the Rollback and Abort algorithm, are used to resolve them. The recovery algorithm releases the resources held by one or more processes, allowing the system to continue to make progress. Prevention vs. Detection/Recovery Deadlock prevention aims to stop deadlocks entirely by carefully managing resource allocation rules. Deadlock detection and recovery identify deadlocks after they occur and then apply methods to resolve them. These strategies are important because deadlocks affect overall system stability, performance, and reliability . The operating system must choose an approach based on system requirements , such as workload type and resource usage patterns. Each method comes with trade-offs involving performance overhead , implementation complexity , and acceptable risk levels . A balanced strategy helps ensure deadlocks are properly detected, managed, and resolved without harming system efficiency. Deadlock Prevention and Avoidance"
        },
        {
          "id": "detection-and-recovery--deadlock-detection",
          "heading": "Deadlock Detection",
          "explanation": "Deadlock detection is a mechanism in operating systems used to identify whether a set of processes is stuck in a deadlock state. It analyzes resource allocation and process dependencies to detect cycles and determine if processes are waiting indefinitely for resources."
        },
        {
          "id": "detection-and-recovery--if-resources-have-a-single-instance",
          "heading": "If Resources Have a Single Instance",
          "explanation": "In this case for Deadlock detection, we can run an algorithm to check for the cycle in the Resource Allocation Graph. The presence of a cycle in the graph is a sufficient condition for deadlock. In the below diagram, resource 1 and resource 2 have single instances. There is a cycle R1 → P1 → R2 → P2. So, Deadlock is Confirmed. 2. If There are Multiple Instances of Resource s Detection of the cycle is necessary but not a sufficient condition for deadlock detection, in this case, the system may or may not be in deadlock varies according to different situations. For systems with multiple instances of resources, algorithms like Banker's Algorithm can be adapted to periodically check for deadlocks."
        },
        {
          "id": "detection-and-recovery--wait-for-graph-algorithm",
          "heading": "Wait-For Graph Algorithm",
          "explanation": "Wait-For Graph Algorithm is a deadlock detection algorithm used to detect deadlocks in a system where resources can have multiple instances. The algorithm works by constructing a Wait-For Graph, which is a directed graph that represents the dependencies between processes and resources.\nDeadlock Recovery: A traditional operating system such as Windows doesn't deal with deadlock recovery as it is a time and space-consuming process. Real-time operating systems use Deadlock recovery."
        },
        {
          "id": "detection-and-recovery--killing-the-process",
          "heading": "Killing The Process",
          "explanation": "Killing all the processes involved in the deadlock. Killing process one by one. After killing each process check for deadlock again and keep repeating the process till the system recovers from deadlock. Killing all the processes one by one helps a system to break circular wait conditions.\nProcess Rollback: Rollback deadlocked processes to a previously saved state where the deadlock condition did not exist. It requires checkpointing to periodically save the state of processes."
        },
        {
          "id": "detection-and-recovery--resource-preemption",
          "heading": "Resource Preemption",
          "explanation": "Resources are preempted from the processes involved in the deadlock, and preempted resources are allocated to other processes so that there is a possibility of recovering the system from the deadlock. In this case, the system goes into starvation."
        },
        {
          "id": "detection-and-recovery--concurrency-control",
          "heading": "Concurrency Control",
          "explanation": "Concurrency control mechanisms prevent data inconsistencies in systems with multiple concurrent processes. They ensure that processes do not access the same data simultaneously, avoiding errors and potential deadlocks. By managing access to shared resources, these mechanisms help maintain system stability and prevent processes from blocking each other. Kind of Recovery Advantages of Deadlock Detection and Recovery\nImproved System Stability: Deadlocks can cause system-wide stalls, and detecting and resolving deadlocks can help to improve the stability of the system.\nBetter Resource Utilization: By detecting and resolving deadlocks, the operating system can ensure that resources are efficiently utilized and that the system remains responsive to user requests.\nBetter System Design: Deadlock detection and recovery algorithms can provide insight into the behavior of the system and the relationships between processes and resources, helping to inform and improve the design of the system. Disadvantages of Deadlock Detection and Recovery\nPerformance Overhead: Deadlock detection and recovery algorithms can introduce a significant overhead in terms of performance, as the system must regularly check for deadlocks and take appropriate action to resolve them.\nComplexity: Deadlock detection and recovery algorithms can be complex to implement, especially if they use advanced techniques such as the Resource Allocation Graph or Timestamping."
        },
        {
          "id": "detection-and-recovery--false-positives-and-negatives",
          "heading": "False Positives and Negatives",
          "explanation": "Deadlock detection algorithms are not perfect and may produce false positives or negatives, indicating the presence of deadlocks when they do not exist or failing to detect deadlocks that do exist. Risk of Data Loss : In some cases, recovery algorithms may require rolling back the state of one or more processes, leading to data loss or corruption."
        }
      ],
      "quick_revision": [
        "Deadlock detection and recovery is the mechanism of detecting and resolving deadlocks in an operating system.",
        "Detection and Recovery: If deadlocks do occur, the operating system must detect and resolve them.",
        "Deadlock Detection: Deadlock detection is a mechanism in operating systems used to identify whether a set of processes is stuck in a deadlock state.",
        "If Resources Have a Single Instance: In this case for Deadlock detection, we can run an algorithm to check for the cycle in the Resource Allocation Graph.",
        "Wait-For Graph Algorithm: Wait-For Graph Algorithm is a deadlock detection algorithm used to detect deadlocks in a system where resources can have multiple instances.",
        "Killing The Process: Killing all the processes involved in the deadlock.",
        "Resource Preemption: Resources are preempted from the processes involved in the deadlock, and preempted resources are allocated to other processes so that there is a possibility of…",
        "Concurrency Control: Concurrency control mechanisms prevent data inconsistencies in systems with multiple concurrent processes.",
        "False Positives and Negatives: Deadlock detection algorithms are not perfect and may produce false positives or negatives, indicating the presence of deadlocks when they do not exist or failing to…"
      ]
    },
    {
      "id": "starvation-and-livelock",
      "title": "Starvation, and Livelock",
      "category": "Deadlock",
      "source_id": "starvation-and-livelock",
      "summary": "Starvation and Livelock Starvation, and livelock are problems that can occur in computer systems when multiple processes compete for resources.",
      "sections": [
        {
          "id": "starvation-and-livelock--overview",
          "heading": "Overview",
          "explanation": "Starvation and Livelock Starvation, and livelock are problems that can occur in computer systems when multiple processes compete for resources. Starvation occurs when a process is repeatedly denied access to resources because others with higher priority keep getting them first. Livelock is when processes keep changing their states to avoid conflict but still fail to make progress, similar to two people constantly stepping aside for each other without passing. is the problem that occurs when high priority processes keep executing and low priority processes get blocked for indefinite time. In heavily loaded computer system, a steady stream of higher-priority processes can prevent a low-priority process from ever getting the CPU .\nPriority Scheduling: If there are always higher-priority processes available, then the lower-priority processes may never be allowed to run.\nResource Utilization: We see that resources are always used by more significant priority processes and leave a lesser priority process starved.\nLivelock: Livelock is a situation where processes are not blocked (like in deadlock) but they continuously change their state in response to each other, without making any real progress. In short-> In livelock, processes keep moving but never reach completion. Example: Two processes repeatedly give way to each other while trying to access a resource, so neither proceeds. Note: The diagram illustrates a livelock scenario in an operating system where two processes (Process A and Process B) are actively trying to perform an action (fork()), but repeatedly fail because the process table is full."
        },
        {
          "id": "starvation-and-livelock--causes-of-livelock",
          "heading": "Causes of Livelock",
          "explanation": "Excessive resource preemption : processes keep releasing and re-requesting resources but never acquire them fully. Over-politeness (cooperation issue) : processes continuously yield or back off to let others proceed, but all do the same. Improper scheduling : CPU repeatedly switches processes in a way that none makes real progress. Faulty recovery mechanisms : algorithms designed to avoid deadlock (like automatic rollback/retry) can lead to livelock if retries happen endlessly. Busy-waiting loops : processes actively check and respond to conditions but without advancing execution. Example: Imagine a pair of processes using two resources below Difference between Starvation and Livelock A livelock is similar to a deadlock, except that the states of the processes involved in the livelock constantly change with regard to one another, none progressing. Livelock is a special case of resource starvation.\nDefinition: A process waits indefinitely because it is always bypassed by others. Processes keep executing but fail to make progress.\nCause: Unfair resource allocation or scheduling. Processes continuously respond to each other, preventing progress.\nProcess State: Ready but not scheduled/executed. Actively executing but not making progress.\nSystem Progress: System progresses, but some processes do not. System is busy, but no real work is done. Example: A low-priority task never gets CPU time. Two processes constantly yielding to each other.\nResolution: Use of fair scheduling (e.g., aging). Needs better coordination or back-off strategies."
        }
      ],
      "quick_revision": [
        "Starvation and Livelock Starvation, and livelock are problems that can occur in computer systems when multiple processes compete for resources.",
        "Causes of Livelock: Excessive resource preemption : processes keep releasing and re-requesting resources but never acquire them fully."
      ]
    },
    {
      "id": "resource-allocation-graph-rag",
      "title": "Resource Allocation Graph (RAG)",
      "category": "Deadlock",
      "source_id": "resource-allocation-graph-rag",
      "summary": "A Resource Allocation Graph (RAG) is a visual way to understand how resources are assigned in an operating system.",
      "sections": [
        {
          "id": "resource-allocation-graph-rag--overview",
          "heading": "Overview",
          "explanation": "A Resource Allocation Graph (RAG) is a visual way to understand how resources are assigned in an operating system. Instead of using only tables to show which resources are allocated, requested or available, the RAG uses nodes and edges to clearly illustrate relationships between processes and their required resources. RAG shows which resources are allocated and which are requested by processes. It helps to visualize deadlocks more clearly than tables. RAG shows how allocation and requests affect the whole system. Processes = circles, Resources = squares and edges show allocation or request. Types of Vertices in RAG In a Resource Allocation Graph, there are two types of vertices"
        },
        {
          "id": "resource-allocation-graph-rag--process-vertex",
          "heading": "Process Vertex",
          "explanation": "Every process will be represented as a process vertex. Generally, the process will be represented with a circle."
        },
        {
          "id": "resource-allocation-graph-rag--resource-vertex",
          "heading": "Resource Vertex",
          "explanation": "Every resource will be represented as a resource vertex. It is also two types:\nSingle Instance Resource: A resource with only one copy. In RAG, it is shown as a single node and only one process can use it at a time.\nMulti Instance Resource: A resource with multiple copies. In RAG, it is shown with multiple instances, so several processes can use different copies simultaneously. Types of Vertices Types of Edges in RAG"
        },
        {
          "id": "resource-allocation-graph-rag--assign-edge",
          "heading": "Assign Edge",
          "explanation": "If you already assign a resource to a process then it is called Assign edge. This is shown by an arrow from the resource vertex to the process vertex.\nRequest Edge: A request edge represents that a process is currently requesting a resource. This is shown by an arrow from the process vertex to the resource vertex. Types of Edges So, if a process is using a resource, an arrow is drawn from the resource node to the process node. If a process is requesting a resource, an arrow is drawn from the process node to the resource node. Example 1: (Single Instances RAG) Single Instance with deadlock If there is a cycle in the Resource Allocation Graph and each resource in the cycle provides only one instance, then the processes will be in deadlock. For example, if process P1 holds resource R1, process P2 holds resource R2 and process P1 is waiting for R2 and process P2 is waiting for R1, then process P1 and process P2 will be in deadlock. Single Instance without deadlock Here's another example, that shows Processes P1 and P2 acquiring resources R1 and R2 while process P3 is waiting to acquire both resources. In this example, there is no deadlock because there is no circular dependency. So cycle in single-instance resource type is the sufficient condition for deadlock. Example 2: (Multi-instances RAG) Multi Instances without deadlock From the above example, it is not possible to say the RAG is in a safe state or in an unsafe state. So to see the state of this RAG, let's construct the allocation matrix and request matrix.\nResource Allocation Table: The total number of processes are three: P1, P2 & P3 and the total number of resources are two: R1 & R2."
        },
        {
          "id": "resource-allocation-graph-rag--allocation-matrix",
          "heading": "Allocation matrix",
          "explanation": "For constructing the allocation matrix, just go to the resources and see to which process it is allocated. R1 is allocated to P1, therefore write 1 in allocation matrix and similarly, R2 is allocated to P2 as well as P3 and for the remaining element just write 0."
        },
        {
          "id": "resource-allocation-graph-rag--request-matrix",
          "heading": "Request matrix",
          "explanation": "In order to find out the request matrix, you have to go to the process and see the outgoing edges. P1 is requesting resource R2, so write 1 in the matrix and similarly, P2 requesting R1 and for the remaining element write 0. So now available resource is = (0, 0). Checking deadlock (safe or not) So there is no deadlock in this RAG. Even though there is a cycle, still there is no deadlock. Therefore in multi-instance resource cycle is not sufficient condition for deadlock. Multi Instances with deadlock Above example is the same as the previous example except that, the process P3 requesting for resource R1. So the table becomes as shown in below."
        },
        {
          "id": "resource-allocation-graph-rag--resource-allocation-table",
          "heading": "Resource Allocation Table",
          "explanation": "So, the Available resource is = (0, 0), but requirement are (0, 1), (1, 0) and (1, 0). So you can't fulfill any one requirement. Therefore, it is in deadlock. Therefore every cycle in a multi-instance resource type graph is not a deadlock. If there has to be a deadlock, there has to be a cycle. So in case of RAG with multi-instance resource type, the cycle is a necessary condition for deadlock but not sufficient. Deadlock Detection using Resource Allocation Graph A Resource Allocation Graph (RAG) is used to detect deadlocks by analyzing the relationships between processes and resources in a system. It visually represents how resources are allocated and requested. If graph contains no cycles no deadlock. If graph contains a cycle if only one instance per resource type, then deadlock. If graph contains a cycle if several instances per resource type, possibility of deadlock Figure given below is an example of System in a Deadlock because all processes are blocked and cannot proceed P1 is waiting for R1, held by P2. P2 is waiting for R3, held by P3. P3 is waiting for an instance of R2, whose one instance is held by p1 and other is held by p2l. RAG with Deadlock Following is an example of Resource Allocation Graph with a cycle but no Deadlock The system has enough resources to break the cycle. At least one process in the cycle can complete and release resources, allowing the remaining processes to proceed. RAG with a cycle but no Deadlock"
        }
      ],
      "quick_revision": [
        "A Resource Allocation Graph (RAG) is a visual way to understand how resources are assigned in an operating system.",
        "Process Vertex: Every process will be represented as a process vertex.",
        "Resource Vertex: Every resource will be represented as a resource vertex.",
        "Assign Edge: If you already assign a resource to a process then it is called Assign edge.",
        "Allocation matrix: For constructing the allocation matrix, just go to the resources and see to which process it is allocated.",
        "Request matrix: In order to find out the request matrix, you have to go to the process and see the outgoing edges.",
        "Resource Allocation Table: So, the Available resource is = (0, 0), but requirement are (0, 1), (1, 0) and (1, 0)."
      ]
    },
    {
      "id": "methods-of-resource-allocation",
      "title": "Methods of resource allocation",
      "category": "Deadlock",
      "source_id": "methods-of-resource-allocation",
      "summary": "Resource Allocation Techniques for Processes Multiple processes run simultaneously and compete for resources like CPU, memory, and I/O devices.",
      "sections": [
        {
          "id": "methods-of-resource-allocation--overview",
          "heading": "Overview",
          "explanation": "Resource Allocation Techniques for Processes Multiple processes run simultaneously and compete for resources like CPU, memory, and I/O devices. The OS manages these resources efficiently, ensuring smooth execution and fair allocation among processes. Allocates CPU and memory to processes Manages resource sharing and avoids conflicts Schedules processes for execution Reclaims resources after process completion"
        },
        {
          "id": "methods-of-resource-allocation--resource-partitioning-approach",
          "heading": "Resource Partitioning Approach",
          "explanation": "In the resource partitioning approach, the operating system divides all available resources into fixed partitions before program execution begins. Each resource partition is treated as a bundle of resources, such as: A specific portion of memory (e.g., 1 MB) A fixed number of disk blocks A dedicated I/O device (e.g., printer) Note: The OS assigns one resource partition to each user program before execution. Once allocated, that program uses only the resources within its assigned partition.\nWorking: The OS defines several resource partitions at system boot time. Each partition contains a set of resources. The Resource Table records all partitions, their components and their allocation status - Allocated or Free. When a program starts, it is assigned one entire partition. After the program terminates, its partition is marked Free for reuse. Free Memory (MB) 8 5 3 Disk Blocks 100 75 25\nPrinters: 2 1 Note: Here, each partition (P1, P2, P3) groups multiple resources. At system boot, this Resource Table is initialized and maintained by the OS. Advantages of Resource Partitioning\nEasy to Implement: The OS only needs to assign a partition to each process once.\nLow Overhead: Since allocation happens only at process startup, management is simple. Disadvantages of Resource Partitioning\nLack of Flexibility: If a program needs more resources than its assigned partition provides, it cannot run - even if other partitions have free resources.\nWastage of Resources: When a process uses fewer resources than what its partition holds, the remaining resources go unused. Example: If a partition contains 2 MB memory but a program only uses 1 MB, the remaining 1 MB remains idle."
        },
        {
          "id": "methods-of-resource-allocation--pool-based-approach",
          "heading": "Pool-Based Approach",
          "explanation": "Unlike the rigid partitioning approach, the pool-based approach maintains a common pool of resources. Whenever a program requests a resource, the OS dynamically allocates it from the resource pool if available. When the program finishes or releases the resource, it is returned to the pool for reuse.\nWorking: All resources are kept in a shared pool. Each resource’s status (free or allocated) is tracked in the Resource Table. When a process requests a resource: The OS checks its availability in the table. If available, it is allocated to the requesting process. Once released, the resource’s status is updated back to Free in the table. Free Memory (MB) 8 5 3 Disk Blocks 100 75 25\nPrinters: 2 1 Note: Whenever a process requests memory or an I/O device, the OS dynamically checks this table to allocate available resources. Advantages of Pool-Based Approach\nEfficient Utilization of Resources: No resource remains idle unnecessarily. Every available resource can be allocated on demand.\nFlexibility: Any process can get resources as long as they are free, regardless of fixed partitions. Disadvantages of Pool-Based Approach\nHigher Overhead: Frequent allocation and deallocation require constant updates to the resource table, increasing system overhead.\nComplex Management: The OS must handle synchronization, deadlock prevention and fair allocation dynamically. Comparison - Partitioning vs Pool-Based Approach\nAllocation Time: Before program execution During program execution Flexibility Rigid and static Dynamic and adaptive\nResource Utilization: May waste unused resources Efficient usage of all resources\nUse Case: Embedded or static systems Modern multitasking OS"
        }
      ],
      "quick_revision": [
        "Resource Allocation Techniques for Processes Multiple processes run simultaneously and compete for resources like CPU, memory, and I/O devices.",
        "Resource Partitioning Approach: In the resource partitioning approach, the operating system divides all available resources into fixed partitions before program execution begins.",
        "Pool-Based Approach: Unlike the rigid partitioning approach, the pool-based approach maintains a common pool of resources."
      ]
    },
    {
      "id": "program-for-deadlock-free-condition",
      "title": "Program for Deadlock free condition",
      "category": "Deadlock",
      "source_id": "program-for-deadlock-free-condition",
      "summary": "Program for Deadlock Free Condition in Operating System Deadlock occurs when two or more processes are stuck, each holding a resource while waiting for another, creating a cyclic dependency.",
      "sections": [
        {
          "id": "program-for-deadlock-free-condition--overview",
          "heading": "Overview",
          "explanation": "Program for Deadlock Free Condition in Operating System Deadlock occurs when two or more processes are stuck, each holding a resource while waiting for another, creating a cyclic dependency. This halts system progress indefinitely. Deadlocks occur when all four conditions are present which are Mutual Exclusion, Hold and Wait, No Preemption and Circular Wait. To ensure smooth execution in an operating system, deadlocks must be effectively managed. To achieve this, we will explore how to implement a deadlock-free condition in an operating system. Mathematical Condition for Deadlock Avoidance In a system with R identical resources and P processes competing for them, the goal is to determine the minimum number of resources required to ensure a deadlock never occurs.\nWhere: R is the total available resources. P is the number of processes. N is the maximum resources a process may need. This expression ensures deadlock prevention by guaranteeing at least one process always completes execution. If every process holds N-1 resources, the total resources in use are P(N-1). With at least one extra resource (+1), at least one process can acquire the final needed resource, execute, and release resources. This prevents circular wait, ensuring resources are always freed for the next process. Thus, deadlock is avoided as processes will never be indefinitely blocked. Examples: Input : P = 3, N = 4 Output : R >= 8 Implementing Deadlock-Free Conditions in an Operating System Deadlock prevention is an important technique used by operating systems to avoid the occurrence of deadlocks. Below are some program for achieving deadlock-free conditions in an Operating System: R >= 10 By allocating 3 resources to each process, we are left with 1 resource. This single resource can be given to any process, allowing it to proceed. Once that process finishes, the resource is released, and another process can use it. This ensures that deadlock will never occur.\nOutput: Philosopher 1 is eating Philosopher 3 is eating Philosopher 1 is thinking Philosopher 0 is eating Philosopher 3 is thinking Philosopher 2 is eating Philosopher 0 is thinking Philosopher 4 is eating Philosopher 2 is thinking Philosopher 1 is eating Philosopher 4 is thinking ...\nExplanation: Each philosopher tries to pick up two chopsticks (left and right). Philosophers 0 to 3 pick up the left chopstick first, while philosopher 4 picks up the right chopstick first. This ensures that at least one philosopher can always proceed, avoiding deadlock. Code will run indefinitely."
        },
        {
          "id": "program-for-deadlock-free-condition--formulas-code",
          "heading": "Formulas & Code",
          "explanation": "Output : R >= 10 Input : P = 7, N = 2 Implementation Using Mathematical Condition For P processes with a need of N resources each, the formula for the minimum resources required to avoid deadlock is: R ≥ P × (N−1) + 1 Consider three processes: A, B, and C, each with a need of 4 resources. Maximum resources required 3 processes × 4 resources = 12 resources. Minimum resources required 3 × (4 - 1) + 1 = 10 resources. C++ // C++ implementation of above program. #include <bits/stdc++.h> using namespace std ; // function that calculates // the minimum no. of resources int Resources ( int process , int need ) { int minResources = 0 ; // Condition so that deadlock // will not occur minResources = process * ( need - 1 ) + 1 ; return minResources ; } // Driver code int main () { int process = 3 , need = 4 ; cout << \"R >= \" << Resources ( process , need ); return 0 ; } #include <bits/stdc++.h> using namespace std ; int Resources ( int process , int need ) { int minResources = 0 ; minResources = process * ( need - 1 ) + 1 ; return minResources ; } int main () { int process = 3 , need = 4 ; cout << \"R >= \" << Resources ( process , need ); return 0 ; } Java // Java implementation of above program class GFG { // function that calculates // the minimum no. of resources static int Resources ( int process , int need ) { int minResources = 0 ; // Condition so that deadlock // will not occur minResources = process * ( need - 1 ) + 1 ; return minResources ; } // Driver Code public static void main ( String args [] ) { int process = 3 , need = 4 ; System . out . print ( \"R >= \" ); System . out . print ( Resources ( process , need )); } System . out . print ( Resources ( process , need )); Python # Python 3 implementation of # above program # function that calculates # the minimum no. of resources def Resources ( process , need ) minResources = 0 # Condition so that deadlock # will not occur minResources = process * ( need - 1 ) + 1 return minResources # Driver Code if __name__ == \"__main__\" process , need = 3 , 4 print ( \"R >=\" , Resources ( process , need )) # This Code is Contributed # by Naman_Garg minResources = process * ( need - 1 ) + 1 C# // C# implementation of above program using System ; class GFG { // function that calculates // the minimum no. of resources static int Resources ( int process , int need ) { int minResources = 0 ; // Condition so that deadlock // will not occur minResources = process * ( need - 1 ) + 1 ; return minResources ; } // Driver Code public static void Main () { int process = 3 , need = 4 ; Console . Write ( \"R >= \" ); Console . Write ( Resources ( process , need )); } // This code is contributed // by Sanjit_Prasad minResources = process * ( need - 1 ) + 1 ; JavaScript function Resources ( process , need ) { let minResources = 0 ; minResources = process * ( need - 1 ) + 1 ; return minResources ; } let process = 3 , need = 4 ; console . log ( `R >= ${ Resources ( process , need ) } ` ); // This code is contributed by ishankhandelwals. console . log ( Resources ( process , need ) }` ); Implementation Using Semaphores This program implements the Dining Philosophers Problem using semaphores to ensure deadlock-free execution. The solution avoids deadlocks by introducing a slight variation in the chopstick-picking order for one philosopher. C #include <pthread.h> #include <semaphore.h> #include <stdio.h> #include <stdlib.h> #include <unistd.h> sem_t chopstick [ 5 ]; // Semaphore for each chopstick void * philosopher ( void * arg ) { int id = * ( int * ) arg ; int left_chopstick = id ; // Philosopher picks up left chopstick first int right_chopstick = ( id + 1 ) % 5 ; // Philosopher picks up right chopstick next // Ensure at least one philosopher picks up chopsticks in reverse order if ( id == 4 ) { // The last philosopher picks up the right chopstick first int temp = left_chopstick ; left_chopstick = right_chopstick ; right_chopstick = temp ; } while ( 1 ) { // Wait until both chopsticks are available sem_wait ( & chopstick [ left_chopstick ]); sem_wait ( & chopstick [ right_chopstick ]); // Eat for some time printf ( \"Philosopher %d is eating \\n \" , id ); sleep ( 2 ); // Release both chopsticks sem_post ( & chopstick [ left_chopstick ]); sem_post ( & chopstick [ right_chopstick ]); // Think for some time printf ( \"Philosopher %d is thinking \\n \" , id ); sleep ( 2 ); } int main () { pthread_t philosophers [ 5 ]; // Initialize semaphore for each chopstick for ( int i = 0 ; i < 5 ; i ++ ) { sem_init ( & chopstick [ i ], 0 , 1 ); } // Create thread for each philosopher for ( int i = 0 ; i < 5 ; i ++ ) { int * id = ( int * ) malloc ( sizeof ( int )); * id = i ; pthread_create ( & philosophers [ i ], NULL , philosopher , id ); } // Wait for all threads to complete for ( int i = 0 ; i < 5 ; i ++ ) { pthread_join ( philosophers [ i ], NULL ); } // Destroy semaphores for ( int i = 0 ; i < 5 ; i ++ ) { sem_destroy ( & chopstick [ i ]); } return 0 ; }"
        }
      ],
      "quick_revision": [
        "Program for Deadlock Free Condition in Operating System Deadlock occurs when two or more processes are stuck, each holding a resource while waiting for another, creating…",
        "Formulas & Code: Output : R >= 10 Input : P = 7, N = 2 Implementation Using Mathematical Condition For P processes with a need of N resources each, the formula for the minimum resources…"
      ]
    },
    {
      "id": "operating-system-thread",
      "title": "Operating System | Thread",
      "category": "Multithreading",
      "source_id": "operating-system-thread",
      "summary": "Thread in Operating System A thread is a single sequence stream within a process and is called a lightweight process because it is smaller and faster.",
      "sections": [
        {
          "id": "operating-system-thread--overview",
          "heading": "Overview",
          "explanation": "Thread in Operating System A thread is a single sequence stream within a process and is called a lightweight process because it is smaller and faster. It allows multiple tasks to run simultaneously, improving program efficiency. In single-core systems, it creates an illusion of parallelism; in multi-core systems, threads can execute truly in parallel across different cores. Each thread has its own program counter, register set, and stack space. Threads share code, data, and operating system resources within the same process. Need of Threads Threads are needed in modern operating systems and applications because they:\nImprove Performance: Threads allow multiple tasks to run at the same time (parallel or interleaved), making programs execute faster.\nIncrease Responsiveness: If one thread is busy, another can handle user actions, keeping the application responsive.\nEnable Concurrency: Multiple operations like saving files, processing data, and handling user input can happen simultaneously.\nBetter CPU Utilization: On multi-core systems, threads can run on different cores, improving overall system performance."
        },
        {
          "id": "operating-system-thread--efficient-resource-sharing",
          "heading": "Efficient Resource Sharing",
          "explanation": "Threads share the same memory and resources within a process, making communication faster and reducing overhead. Components of Threads These are the basic components of the Operating System.\nStack Space: Stores local variables, function calls, and return addresses specific to the thread.\nRegister Set: Hold temporary data and intermediate results for the thread's execution."
        },
        {
          "id": "operating-system-thread--program-counter",
          "heading": "Program Counter",
          "explanation": "Tracks the current instruction being executed by the thread. Types of Threads Threads are mainly classified based on how they are managed and scheduled in an operating system. There are two primary types of threads."
        },
        {
          "id": "operating-system-thread--kernel-level-thread",
          "heading": "Kernel Level Thread",
          "explanation": "User-Level Threads (ULTs) Managed entirely in user space using a thread library; the kernel is unaware of them. Switching between ULTs is fast since only program counter, registers, and stack need to be saved/restored. Do not require system calls for creation or management, making them lightweight. If one thread makes a blocking system call, the entire process (all threads) is blocked. Scheduling is done by the application itself, which may not be as efficient as kernel-level scheduling. Cannot fully utilize multiprocessor systems because the kernel schedules processes, not individual user-level threads. Kernel-Level Threads (KLTs) Managed directly by the operating system kernel; each thread has an entry in the kernel’s thread table. The kernel schedules each thread independently, allowing true parallel execution on multiple CPUs/cores. Handles blocking system calls efficiently; if one thread blocks, the kernel can run another thread from the same process. Provides better load balancing across processors since the kernel controls all threads. Context switching is slower compared to ULTs because it requires switching between user mode and kernel mode. Implementation is more complex and requires frequent interaction with the kernel. Large numbers of threads may add extra load on the kernel scheduler, potentially affecting performance."
        },
        {
          "id": "operating-system-thread--threading-issues",
          "heading": "Threading Issues",
          "explanation": "Threading Issues fork() and exec() : In multithreaded programs, fork() may duplicate all threads or just the calling thread, depending on the system. exec() replaces the entire process including all threads with the new program.\nSignal Handling: Signals notify a process of events. They can be synchronous or asynchronous and are handled by either the default kernel handler or a user-defined handler.\nThread Cancellation: Threads can be terminated before completion. Cancellation can be asynchronous (immediate) or deferred (thread checks periodically). Example: stopping all threads loading a webpage. Thread-Local Storage (TLS) : Threads share process data, but sometimes need private copies, such as unique identifiers for transactions.\nScheduler Activations: The kernel provides virtual processors, allowing a user-thread library to schedule threads efficiently. Process vs Thread The primary difference is that threads within the same process run in a shared memory space, while processes run in separate memory spaces. Threads are not independent of one another like processes are, and as a result, threads share with other threads their code section, data section, and OS resources (like open files and signals). But, like a process, a thread has its own program counter (PC) , register set, and stack space. For more, refer to Process vs Thread ."
        }
      ],
      "quick_revision": [
        "Thread in Operating System A thread is a single sequence stream within a process and is called a lightweight process because it is smaller and faster.",
        "Efficient Resource Sharing: Threads share the same memory and resources within a process, making communication faster and reducing overhead.",
        "Program Counter: Tracks the current instruction being executed by the thread.",
        "Kernel Level Thread: User-Level Threads (ULTs) Managed entirely in user space using a thread library; the kernel is unaware of them.",
        "Threading Issues: Threading Issues fork() and exec() : In multithreaded programs, fork() may duplicate all threads or just the calling thread, depending on the system. exec() replaces the…"
      ]
    },
    {
      "id": "user-level-vs-kernel-level-threads",
      "title": "User Level Vs Kernel Level threads",
      "category": "Multithreading",
      "source_id": "user-level-vs-kernel-level-threads",
      "summary": "User-level threads are threads that are managed entirely by the user-level thread library without any direct involvement of the operating system kernel, whereas kernel-level threads are threads that are managed and scheduled directly by the operating system’s kernel.",
      "sections": [
        {
          "id": "user-level-vs-kernel-level-threads--overview",
          "heading": "Overview",
          "explanation": "User-level threads are threads that are managed entirely by the user-level thread library without any direct involvement of the operating system kernel, whereas kernel-level threads are threads that are managed and scheduled directly by the operating system’s kernel.\nUser-Level Threads: Threads are managed in user space and execute one at a time.\nKernel-Level Threads: Threads are managed by the kernel and can run in parallel on multiple CPUs."
        },
        {
          "id": "user-level-vs-kernel-level-threads--user-level-thread",
          "heading": "User-Level Thread",
          "explanation": "The User-level Threads are implemented by the user-level software. These threads are created and managed by the thread library, which the operating system provides as an API for creating, managing, and synchronizing threads. it is faster than the kernel-level threads, it is basically represented by the program counter, stack, register, and PCB. User-level threads are typically employed in scenarios where fine control over threading is necessary, but the overhead of kernel threads is not desired. They are also useful in systems that lack native multithreading support, allowing developers to implement threading in a portable way. Example: User threads library includes POSIX threads, Mach C-Threads\nDisadvantages: Threads are quick and easy to create. Multithreading may not fully use multiple processors. They are highly portable across operating systems. A blocking operation in one thread can halt the process. No kernel mode privileges are needed for switching. All threads share the same process, limiting isolation. Context switching is fast and lightweight. Debugging user-level threads is more difficult."
        },
        {
          "id": "user-level-vs-kernel-level-threads--kernel-level-thread",
          "heading": "Kernel-Level Thread",
          "explanation": "Kernel-level threads (KLTs) are created and managed directly by the operating system kernel. The kernel handles all operations like creation, scheduling, suspension, and termination, giving it full control. This ensures proper coordination and complete awareness of all threads within a process. The Kernel-level threads are directly handled by the OS directly whereas the thread’s management is done by the kernel. Each kernel-level thread has its own context, including information about the thread's status, such as its name, group, and priority. Example: The example of Kernel-level threads are Java threads, POSIX thread on Linux, etc.\nDisadvantages: Allows true parallel execution of threads. Thread creation and management take more time. Other threads continue running if one is blocked. Requires switching to kernel mode, adding overhead. Direct access to system resources and I/O operations. More complex to implement than user-level threads. Suitable for CPU-intensive and I/O-bound tasks. Context switching is slower compared to user-level."
        },
        {
          "id": "user-level-vs-kernel-level-threads--user-level-thread-vs-kernel-level-thread",
          "heading": "User-Level Thread Vs Kernel-Level Thread",
          "explanation": "User-Level Thread (ULT) Kernel-Level Thread (KLT) Implemented by user-level libraries Implemented by the Operating System Not recognized by the OS Recognized by the OS Fast context switching with less overhead Slower context switching with more overhead Blocking blocks the entire process Only the blocked thread is affected Limited use of multiprocessing Fully utilizes multiprocessing Fast and simple creation and management Slower and more complex management Threads share the same address space Each thread has its own address space More portable, works on any OS OS-dependent and less portable"
        }
      ],
      "quick_revision": [
        "User-level threads are threads that are managed entirely by the user-level thread library without any direct involvement of the operating system kernel, whereas…",
        "User-Level Thread: The User-level Threads are implemented by the user-level software.",
        "Kernel-Level Thread: Kernel-level threads (KLTs) are created and managed directly by the operating system kernel.",
        "User-Level Thread Vs Kernel-Level Thread: User-Level Thread (ULT) Kernel-Level Thread (KLT) Implemented by user-level libraries Implemented by the Operating System Not recognized by the OS Recognized by the OS…"
      ]
    },
    {
      "id": "process-based-and-thread-based-multitasking",
      "title": "Process-based and Thread-based Multitasking",
      "category": "Multithreading",
      "source_id": "process-based-and-thread-based-multitasking",
      "summary": "Multitasking is the ability of an operating system to run multiple tasks by rapidly switching the CPU between them.",
      "sections": [
        {
          "id": "process-based-and-thread-based-multitasking--overview",
          "heading": "Overview",
          "explanation": "Multitasking is the ability of an operating system to run multiple tasks by rapidly switching the CPU between them. This switching, known as context switching, gives each task a small time slice, creating the illusion that tasks are running simultaneously and ensuring smooth system performance. Allows multiple tasks to run at the same time Uses context switching to share CPU time Provides each task a small time slice Improves system efficiency and user experience Works of Multitasking\nTime Slicing: Dividing CPU time among tasks in small slices.\nContext Switching: Saving the state of one task and restoring another’s state to resume execution seamlessly.\nResource Management: Efficient allocation of memory, I/O devices, and CPU cycles across multiple tasks.\nMultitasking: Types of Multitasking Multitasking can be classified into two types based on the execution unit: Process-based Multitasking Thread-based Multitasking"
        },
        {
          "id": "process-based-and-thread-based-multitasking--process-based-multitasking",
          "heading": "Process Based Multitasking",
          "explanation": "In process-based multitasking, two or more independent processes run concurrently. Each process is self-contained with: Its own memory space (address space) Its own code, data, and system resources Its own Process Control Block (PCB)\nIsolation: Each process runs independently, preventing interference.\nHeavyweight: Requires more overhead due to separate memory allocation.\nSlower Communication: Inter-Process Communication (IPC) mechanisms (pipes, message queues, shared memory) add complexity.\nBetter Security: Faults in one process do not affect others, ensuring stability.\nBenefits: Strong fault isolation: one crashed process does not affect others. High robustness: ideal for untrusted or independent applications.\nLimitations: Memory overhead due to separate address spaces. Higher context switching cost than threads. Complex IPC, which increases communication overhead. Example: Running a music player while using a web browser. Both are separate processes with independent memory and resources."
        },
        {
          "id": "process-based-and-thread-based-multitasking--thread-based-multitasking-multithreading",
          "heading": "Thread Based Multitasking(Multithreading)",
          "explanation": "In thread-based multitasking, multiple threads run within a single process. Threads share: The same address space, code, and data But each has its own stack and execution context Thread based Multitasking\nLightweight: Faster to create and manage compared to processes.\nShared Memory: Enables direct communication between threads.\nEfficient Synchronization: Achieved using primitives like locks, semaphores, and condition variables.\nScalable: Threads can exploit multiple CPU cores for parallelism.\nBenefits: Lower overhead in terms of memory and context switching. Fast communication between threads through shared memory. Improved responsiveness within applications.\nLack of isolation: A faulty thread may crash the entire process.\nSynchronization issues: Requires careful handling to avoid race conditions and deadlocks."
        },
        {
          "id": "process-based-and-thread-based-multitasking--complex-debugging",
          "heading": "Complex debugging",
          "explanation": "Concurrency issues make testing and debugging harder. Example: In a web browser, one thread handles navigation while another downloads files. In MS Word, one thread processes text input while another performs spell-check."
        }
      ],
      "quick_revision": [
        "Multitasking is the ability of an operating system to run multiple tasks by rapidly switching the CPU between them.",
        "Process Based Multitasking: In process-based multitasking, two or more independent processes run concurrently.",
        "Thread Based Multitasking(Multithreading): In thread-based multitasking, multiple threads run within a single process.",
        "Complex debugging: Concurrency issues make testing and debugging harder."
      ]
    },
    {
      "id": "multi-threading-models",
      "title": "Multi threading models",
      "category": "Multithreading",
      "source_id": "multi-threading-models",
      "summary": "Multi Threading Models in Process Management Multithreading is a programming and execution model that allows multiple threads to exist within a single process, executing concurrently.",
      "sections": [
        {
          "id": "multi-threading-models--overview",
          "heading": "Overview",
          "explanation": "Multi Threading Models in Process Management Multithreading is a programming and execution model that allows multiple threads to exist within a single process, executing concurrently. Each thread represents a separate path of execution, enabling better responsiveness, resource utilization and parallelism, especially in modern multiprocessor systems. Note: Multithreading is widely used in applications like web servers, interactive applications and high-performance computing where concurrent execution is essential.\nThreading Models: Operating systems support threads through different threading models, which determine how threads are created, managed and mapped to CPU execution:"
        },
        {
          "id": "multi-threading-models--user-level-threads-ult",
          "heading": "User-Level Threads (ULT)",
          "explanation": "Managed by a user-level library, not the OS. Greater flexibility and control Programmers can customize scheduling.\nPortability: Works across multiple operating systems.\nFaster context switching: Switching between ULTs happens in user space.\nBlocking system calls: If one thread blocks, the entire process is blocked.\nLimited parallelism: Cannot utilize multiple CPUs effectively since the kernel is unaware of user threads."
        },
        {
          "id": "multi-threading-models--kernel-level-threads-klt",
          "heading": "Kernel-Level Threads (KLT)",
          "explanation": "Managed and scheduled directly by the operating system.\nTrue parallelism: Can run on multiple CPUs simultaneously. Better scalability OS can efficiently schedule threads.\nI/O efficiency: Other threads can continue if one thread blocks. Less flexible and portable Managed by the OS, harder to customize.\nHigher overhead: Thread creation and context switching involve system calls."
        },
        {
          "id": "multi-threading-models--hybrid-threading-models",
          "heading": "Hybrid Threading Models",
          "explanation": "Combines ULT and KLT advantages. Examples: Solaris and some modern OS use a two-level model, where user threads are mapped to kernel threads.\nAdvantages: Flexibility, control and efficient parallelism. Reduces blocking issues and improves concurrency.\nDisadvantages: More complex to implement. Requires more system resources. Mapping Models of Threads"
        },
        {
          "id": "multi-threading-models--many-to-many-model",
          "heading": "Many-to-Many Model",
          "explanation": "Many-to-Many Model Multiple user threads map to multiple kernel threads. If one thread blocks, others can continue. Provides high concurrency and is the most efficient model."
        },
        {
          "id": "multi-threading-models--many-to-one-model",
          "heading": "Many-to-One Model",
          "explanation": "Many-to-One Model Multiple user threads map to a single kernel thread. Blocking in one thread blocks the entire process. Efficient user-level management but poor multiprocessing utilization."
        },
        {
          "id": "multi-threading-models--one-to-one-model",
          "heading": "One-to-One Model",
          "explanation": "One-to-One Model Each user thread maps to a unique kernel thread. Multiple threads can run on multiple processors. Blocking in one thread does not affect others. Overhead is higher because each user thread requires a corresponding kernel thread.\nThread Libraries: Thread libraries provide APIs for creating and managing threads.\nUser-level library: Runs entirely in user space; fast and flexible.\nKernel-level library: Supported by the OS; better parallelism and fault tolerance. POSIX Pthreads Can be implemented as ULT or KLT. Windows Threads Kernel-level library.\nJava Threads: Typically built on kernel threads in modern JVMs. Advantages of Multithreading\nMinimized Context Switching Time: Switching threads is faster than switching processes.\nConcurrency: Multiple instruction sequences execute within a single process.\nResource Efficiency: Threads share memory and resources of their parent process.\nScalability on Multiprocessors: Threads can run on multiple CPUs, improving throughput.\nResponsiveness: Interactive applications remain responsive even when performing heavy tasks. Disadvantages of Multithreading\nComplexity: Threaded code can be harder to write and debug.\nHigh Management Overhead: Managing multiple threads may be costly for simple tasks.\nRisk of Deadlocks and Race Conditions: Improper synchronization may cause concurrency issues.\nDebugging Difficulty: Errors in multithreaded programs are often subtle and hard to reproduce."
        }
      ],
      "quick_revision": [
        "Multi Threading Models in Process Management Multithreading is a programming and execution model that allows multiple threads to exist within a single process, executing…",
        "User-Level Threads (ULT): Managed by a user-level library, not the OS. Greater flexibility and control Programmers can customize scheduling.",
        "Kernel-Level Threads (KLT): Managed and scheduled directly by the operating system.",
        "Hybrid Threading Models: Combines ULT and KLT advantages.",
        "Many-to-Many Model: Many-to-Many Model Multiple user threads map to multiple kernel threads.",
        "Many-to-One Model: Many-to-One Model Multiple user threads map to a single kernel thread.",
        "One-to-One Model: One-to-One Model Each user thread maps to a unique kernel thread."
      ]
    },
    {
      "id": "benefits-of-multithreading",
      "title": "Benefits of Multithreading",
      "category": "Multithreading",
      "source_id": "benefits-of-multithreading",
      "summary": "Benefits of Multithreading in Operating System Multithreading is a fundamental concept in modern computing that enables multiple threads to execute concurrently within a single process.",
      "sections": [
        {
          "id": "benefits-of-multithreading--overview",
          "heading": "Overview",
          "explanation": "Benefits of Multithreading in Operating System Multithreading is a fundamental concept in modern computing that enables multiple threads to execute concurrently within a single process. By dividing tasks into smaller, manageable threads, applications can achieve better performance, responsiveness and resource utilization. Note: Multithreading is widely used in both single-processor and multiprocessor systems to optimize execution, handle multiple user requests and perform complex operations in parallel."
        },
        {
          "id": "benefits-of-multithreading--increased-responsiveness",
          "heading": "Increased Responsiveness",
          "explanation": "Multithreading improves the responsiveness of interactive applications. Even if one thread is blocked or performing a lengthy operation, other threads can continue executing. Example: A multithreaded web browser allows a user to interact with part of a webpage while a video or content loads in another thread. In contrast, in a single-threaded system, processing one request would block all other user interactions."
        },
        {
          "id": "benefits-of-multithreading--resource-sharing",
          "heading": "Resource Sharing",
          "explanation": "Threads share the memory and resources of their parent process by default, unlike separate processes which require explicit mechanisms for sharing such as: Note: This shared memory model allows multiple threads to work efficiently within the same address space without the overhead of inter-process communication."
        },
        {
          "id": "benefits-of-multithreading--economy-of-resources",
          "heading": "Economy of Resources",
          "explanation": "Creating and managing threads is less resource-intensive than processes: Threads share memory and resources of the process, avoiding the need for separate allocations. In Solaris, for example, creating a process is 30 times slower than creating a thread and context switching between processes is 5 times slower than switching between threads. Note: This makes multithreading a cost-effective way to implement multitasking."
        },
        {
          "id": "benefits-of-multithreading--scalability",
          "heading": "Scalability",
          "explanation": "Multithreading significantly enhances scalability, especially in multiprocessor systems: Threads of a single process can run on different CPUs simultaneously, improving parallelism. Single-threaded processes, in contrast, are restricted to a single CPU, limiting system efficiency. Note: This allows applications to fully utilize multiple CPUs and improve performance."
        },
        {
          "id": "benefits-of-multithreading--multithreading-facilitates-efficient-communication-between-t",
          "heading": "Multithreading facilitates efficient communication between threads",
          "explanation": "Threads within the same process can share data and resources directly without complex inter-process communication. Synchronization mechanisms (mutexes, semaphores) provide controlled access to shared resources. High-bandwidth communication is possible between threads due to their shared memory space.\nMultithreading leverages modern CPU architectures: In multi-core systems, threads can execute in parallel on separate cores. In single-core systems, rapid context switching between threads creates the illusion of parallelism, enhancing concurrency. Note: This ensures better CPU utilization and system throughput.\nThreads consume fewer system resources than processes: Lower overhead for creation, maintenance and management. Shared memory and resources reduce duplication, leading to more efficient use of system memory and CPU cycles."
        },
        {
          "id": "benefits-of-multithreading--reduced-context-switching-time",
          "heading": "Reduced Context Switching Time",
          "explanation": "Context switching between threads is faster than between processes because: Threads share the same virtual memory space. The CPU does not need to reload separate memory maps for each thread, minimizing overhead."
        },
        {
          "id": "benefits-of-multithreading--enhanced-concurrency",
          "heading": "Enhanced Concurrency",
          "explanation": "Multithreading allows applications to perform multiple operations simultaneously: Threads can execute independently and concurrently, enhancing performance in multi-CPU environments. This leads to better throughput and faster execution of multi-tasking applications."
        }
      ],
      "quick_revision": [
        "Benefits of Multithreading in Operating System Multithreading is a fundamental concept in modern computing that enables multiple threads to execute concurrently within a…",
        "Increased Responsiveness: Multithreading improves the responsiveness of interactive applications.",
        "Resource Sharing: Threads share the memory and resources of their parent process by default, unlike separate processes which require explicit mechanisms for sharing such as: Note: This…",
        "Economy of Resources: Creating and managing threads is less resource-intensive than processes: Threads share memory and resources of the process, avoiding the need for separate allocations.",
        "Scalability: Multithreading significantly enhances scalability, especially in multiprocessor systems: Threads of a single process can run on different CPUs simultaneously, improving…",
        "Multithreading facilitates efficient communication between threads: Threads within the same process can share data and resources directly without complex inter-process communication.",
        "Reduced Context Switching Time: Context switching between threads is faster than between processes because: Threads share the same virtual memory space.",
        "Enhanced Concurrency: Multithreading allows applications to perform multiple operations simultaneously: Threads can execute independently and concurrently, enhancing performance in multi-CPU…"
      ]
    },
    {
      "id": "memory-management-in-operating-system",
      "title": "Memory Management in Operating System",
      "category": "Memory Management",
      "source_id": "memory-management-in-operating-system",
      "summary": "Memory management is the process of controlling and organizing a computer’s memory by allocating portions, called blocks, to different executing programmes to improve the overall system performance.",
      "sections": [
        {
          "id": "memory-management-in-operating-system--overview",
          "heading": "Overview",
          "explanation": "Memory management is the process of controlling and organizing a computer’s memory by allocating portions, called blocks, to different executing programmes to improve the overall system performance. The most important function of an operating system is to manage primary memory. Supports multiple processes simultaneously in memory. Protects processes from unauthorized access. Enables swapping and virtual memory efficiently. Introduction Memory Units Address Binding and Its Types"
        },
        {
          "id": "memory-management-in-operating-system--memory-protection",
          "heading": "Memory Protection",
          "explanation": "Techniques in Memory Allocation Used by an operating system to efficiently allocate, utilize, and manage memory resources for processes. Various techniques help the operating system manage memory effectively. They can be broadly categorized into: Contiguous Memory Allocation is a memory management technique in which an entire process is loaded into a single continuous block of main memory."
        },
        {
          "id": "memory-management-in-operating-system--single-contiguous-memory-allocation",
          "heading": "Single Contiguous Memory Allocation",
          "explanation": "It is a memory management technique in which the operating system and one user process are stored in a single continuous block of main memory. Memory is divided into two parts: one for the operating system and one for the user process. A program is loaded into one contiguous (continuous) memory block for execution. Only one user process can reside in memory at a time.\nPartitioned Memory Allocation: Main memory is divided into multiple contiguous partitions, and each partition can hold one process. This technique supports multiprogramming. Partitioned memory allocation is further classified into:"
        },
        {
          "id": "memory-management-in-operating-system--fixed-partition-allocation",
          "heading": "Fixed Partition Allocation",
          "explanation": "Fixed Partition Allocation is a memory management technique in which the main memory is divided into a fixed number of partitions of predefined sizes. Each partition can hold only one process at a time. This method is simple to implement but may lead to internal fragmentation when a process does not fully utilize its allocated partition. is a memory management technique in which memory partitions are created dynamically according to the size of the process. It reduces internal fragmentation but may lead to external fragmentation over time."
        },
        {
          "id": "memory-management-in-operating-system--non-contiguous-memory-allocation",
          "heading": "Non-Contiguous Memory Allocation",
          "explanation": "Non-Contiguous Memory Allocation is a memory management technique in which a process is divided into smaller parts and stored in different locations in main memory. Unlike contiguous allocation, the entire process does not need to occupy a single continuous block of memory, improving memory utilization and reducing fragmentation. Techniques Used in Non-Contiguous Memory Allocation\nPaging: Divides a process into fixed-size pages and memory into frames of the same size\nSegmentation: Divides a process into logical segments of variable size such as code, data, and stack Segmentation with Paging : Combines logical segmentation with paging to reduce fragmentation Swapping is a memory management technique in which processes are temporarily moved between main memory and secondary storage to free memory for other processes. M emory Management Mechanisms"
        },
        {
          "id": "memory-management-in-operating-system--virtual-memory",
          "heading": "Virtual Memory",
          "explanation": "Virtual Memory allows programs larger than physical RAM to run by using disk space as an extension of main memory. Page Replacement Algorithms(PRA) PRA decide which page to remove from memory when it is full. Demand Paging loads only the pages a process actually needs into memory. Reduces unnecessary memory usage and I/O. Fragmentation occurs when processes are loaded into and removed from memory, resulting in unused memory spaces that cannot be efficiently utilized. Occurs when a process is allocated more memory than it actually needs, leading to wasted space inside the allocated memory block."
        },
        {
          "id": "memory-management-in-operating-system--external-fragmentation",
          "heading": "External Fragmentation",
          "explanation": "Occurs when free memory is divided into small, scattered blocks, making it impossible to allocate a large contiguous block even though enough total free memory exists. Thrashing Working Set in Paging\nPlacement Algorithms: When allocating memory, the OS uses placement algorithms to decide which free block should be assigned to a process:\nFirst Fit: Allocates the first available partition large enough to hold the process.\nBest Fit: Allocates the smallest available partition that fits the process, reducing wasted space.\nWorst Fit: Allocates the largest available partition, leaving the largest remaining space.\nNext Fit: Similar to First Fit but starts searching for free memory from the point of the last allocation."
        },
        {
          "id": "memory-management-in-operating-system--advanced-memory-concepts",
          "heading": "Advanced Memory Concepts",
          "explanation": "Buddy System: Memory allocation technique Allocating kernel memory (buddy system and slab system) Second Chance (or Clock) Page Replacement Policy Belady’s Anomaly Overlays in Memory Management Memory Mapped Files in OS Cache Memory Operating system based Virtualization"
        }
      ],
      "quick_revision": [
        "Memory management is the process of controlling and organizing a computer’s memory by allocating portions, called blocks, to different executing programmes to improve…",
        "Memory Protection: Techniques in Memory Allocation Used by an operating system to efficiently allocate, utilize, and manage memory resources for processes.",
        "Single Contiguous Memory Allocation: It is a memory management technique in which the operating system and one user process are stored in a single continuous block of main memory.",
        "Fixed Partition Allocation: Fixed Partition Allocation is a memory management technique in which the main memory is divided into a fixed number of partitions of predefined sizes.",
        "Non-Contiguous Memory Allocation: Non-Contiguous Memory Allocation is a memory management technique in which a process is divided into smaller parts and stored in different locations in main memory.",
        "Virtual Memory: Virtual Memory allows programs larger than physical RAM to run by using disk space as an extension of main memory.",
        "External Fragmentation: Occurs when free memory is divided into small, scattered blocks, making it impossible to allocate a large contiguous block even though enough total free memory exists.",
        "Advanced Memory Concepts: Buddy System: Memory allocation technique Allocating kernel memory (buddy system and slab system) Second Chance (or Clock) Page Replacement Policy Belady’s Anomaly…"
      ]
    },
    {
      "id": "file-systems",
      "title": "File Systems",
      "category": "Disk Management",
      "source_id": "file-systems",
      "summary": "File Systems in Operating System File systems are a crucial part of any operating system, providing a structured way to store, organize and manage data on storage devices such as hard drives, SSDs and USB drives.",
      "sections": [
        {
          "id": "file-systems--overview",
          "heading": "Overview",
          "explanation": "File Systems in Operating System File systems are a crucial part of any operating system, providing a structured way to store, organize and manage data on storage devices such as hard drives, SSDs and USB drives.\nUser Application: The programs or software that request file operations like read, write, or delete.\nLogical File System: Manages metadata, file names, directories, and access permissions.\nVirtual File System (VFS): Acts as a bridge, allowing different file systems to work under a single interface.\nPhysical File System: Handles the actual storage of data blocks on the disk."
        },
        {
          "id": "file-systems--partition-1-partition-2-partition-3",
          "heading": "Partition 1, Partition 2, Partition 3",
          "explanation": "Divisions of the storage device where files are stored physically. Note: It acts as a bridge between the operating system and the physical storage hardware, allowing users and applications to perform CRUD Operations on files in an organized and efficient manner.\nFAT (File Allocation Table): An older file system used by older versions of Windows and other operating systems.\nNTFS (New Technology File System): A modern file system used by Windows. It supports features such as file and folder permissions, compression and encryption. ext (Extended File System) A file system commonly used on Linux and Unix based operating systems. HFS (Hierarchical File System) A file system used by macOS.\nAPFS (Apple File System): A new file system introduced by Apple for their Macs and iOS devices. Name Extension, separated by a period."
        },
        {
          "id": "file-systems--issues-handled-by-file-system",
          "heading": "Issues Handled By File System",
          "explanation": "A free space is created on the hard drive whenever a file is deleted from it. To reallocate them to other files, many of these spaces may need to be recovered. A key issue is how to efficiently allocate disk blocks to files to optimize space and performance."
        },
        {
          "id": "file-systems--file-directories",
          "heading": "File Directories",
          "explanation": "The collection of files is a file directory and contains information about the files, including attributes, location, etc. Much of this information, is managed by the operating system. Note: The directory is itself a file, accessible by various file management routines. File Types and Their Content File Types & their Content Note: It may be kept in the disk's non-contiguous blocks. We must keep track of all the blocks where the files are partially located. Advantages of Maintaining Directories Efficiency A file can be located more quickly.\nNaming: It becomes convenient for users as two users can have same name for different files or may have different name for same file.\nGrouping: Logical grouping of files can be done by properties e.g. all java programs, all games etc. Structures of Directory\nSingle-Level Directory: In this, a single directory is maintained for all the users.\nTwo-Level Directory: In this separate directories for each user is maintained."
        },
        {
          "id": "file-systems--tree-structured-directory",
          "heading": "Tree-Structured Directory",
          "explanation": "The directory is maintained in the form of a tree. Searching is efficient and also there is grouping capability. We have absolute or relative path name for a file. Read more about Structures of Directory\nFile Allocation Methods: There are several types of file allocation methods. These are mentioned below:\nContinuous Allocation: Linked Allocation(Non-contiguous allocation) Indexed Allocation Read more about"
        },
        {
          "id": "file-systems--disk-free-space-management",
          "heading": "Disk Free Space Management",
          "explanation": "To perform any of the file allocation techniques, it is necessary to know what blocks on the disk are available. Thus to manage unallocated disk space, two common methods are used:"
        },
        {
          "id": "file-systems--bit-tables",
          "heading": "Bit Tables",
          "explanation": "This uses a vector containing one bit for each block on the disk. An entry of 0 indicates a free block, while 1 indicates an allocated block and each 1 corresponds to a block in use."
        },
        {
          "id": "file-systems--free-block-list",
          "heading": "Free Block List",
          "explanation": "In this method, each block is assigned a number sequentially and the list of the numbers of all free blocks is maintained in a reserved block of the disk.\nLinked List: Free blocks are linked together in a list. Each free block stores the address of the next free block.\nBoundary Tags: Each block contains a boundary tag indicating its size and whether it is free or occupied. Read more about"
        }
      ],
      "quick_revision": [
        "File Systems in Operating System File systems are a crucial part of any operating system, providing a structured way to store, organize and manage data on storage…",
        "Partition 1, Partition 2, Partition 3: Divisions of the storage device where files are stored physically.",
        "Issues Handled By File System: A free space is created on the hard drive whenever a file is deleted from it.",
        "File Directories: The collection of files is a file directory and contains information about the files, including attributes, location, etc.",
        "Tree-Structured Directory: The directory is maintained in the form of a tree.",
        "Disk Free Space Management: To perform any of the file allocation techniques, it is necessary to know what blocks on the disk are available.",
        "Bit Tables: This uses a vector containing one bit for each block on the disk.",
        "Free Block List: In this method, each block is assigned a number sequentially and the list of the numbers of all free blocks is maintained in a reserved block of the disk."
      ]
    },
    {
      "id": "unix-file-system",
      "title": "Unix File System",
      "category": "Disk Management",
      "source_id": "unix-file-system",
      "summary": "Unix (UNiplexed Information Computing System) File System is a logical method of organizing and storing large amounts of information for easy management.",
      "sections": [
        {
          "id": "unix-file-system--overview",
          "heading": "Overview",
          "explanation": "Unix (UNiplexed Information Computing System) File System is a logical method of organizing and storing large amounts of information for easy management. A file is the smallest unit of storage, and all data in Unix is managed efficiently through a structured system. All data is stored in the form of files Files are organized into directories Directories follow a hierarchical tree structure Root directory (\"/\") is the topmost directory Uses permissions to control access to files and directories Note: The Unix file system uses a directory hierarchy that allows for easy navigation and organization of files. Directories can contain both files and other directories, and each file or directory has a unique name. File on Unix Operating System In Unix everything is treated as a file, even devices are also treated as a special file. Every file on a Unix System has a Unique Inode. All devices are represented by files called special files that are located in/dev directory. These are accessed in the same way as regular file. Device files have two category:\nBlock Special File: Here data gets transfer in terms of block.\nCharacter Special File: Here data gets transfer by stream of bits in sequential order like keyboard. Note: Processes access files by well defined set of system call. Files can be specifies by a character string called as path name. Each Pathname is unique and it is converted to an Inode. Directories or Files and their Description NAME DESCRIPTION / The slash / character alone denotes the root of the filesystem tree. /bin Stands for \"binaries\" and contains certain fundamental utilities, such as ls or cp, which are generally needed by all users. /boot Contains all the files that are required for successful booting process. /dev Stands for \"devices\". Contains file representations of peripheral devices and pseudo-devices. /etc Contains system-wide configuration files and system databases. Originally also contained \"dangerous maintenance utilities\" such as init, but these have typically been moved to /sbin or elsewhere. /home Contains the home directories for the users. /lib Contains system libraries, and some critical files such as kernel modules or device drivers. /media Default mount point for removable devices, such as USB sticks, media players, etc. /mnt Stands for \"mount\". Contains filesystem mount points. These are used, for example, if the system uses multiple hard disks or hard disk partitions. It is also often used for remote (network) filesystems, CD-ROM/DVD drives, and so on. /proc procfs virtual filesystem showing information about processes as files. /root The home directory for the superuser \"root\" - that is, the system administrator. This account's home directory is usually on the initial filesystem, and hence not in /home (which may be a mount point for another filesystem) in case specific maintenance needs to be performed, during which other filesystems are not available. Such a case could occur, for example, if a hard disk drive suffers physical failures and cannot be properly mounted. /tmp A place for temporary files. Many systems clear this directory upon startup; it might have tmpfs mounted atop it, in which case its contents do not survive a reboot, or it might be explicitly cleared by a startup script at boot time. /usr Originally the directory holding user home directories, its use has changed. It now holds executables, libraries, and shared resources that are not system critical, like the X Window System, KDE, Perl, etc. However, on some Unix systems, some user accounts may still have a home directory that is a direct subdirectory of /usr, such as the default as in Minix. (on modern systems, these user accounts are often related to server or system use, and not directly used by a person). /usr/bin This directory stores all binary programs distributed with the operating system not residing in /bin, /sbin or (rarely) /etc. /usr/include Stores the development headers used throughout the system. Header files are mostly used by the #include directive in C/C++ programming language. /usr/lib Stores the required libraries and data files for programs stored within /usr or elsewhere. /var A short for \"variable.\" A place for files that may change often - especially in size, for example e-mail sent to users on the system, or process-ID lock files. /var/log Contains system log files. /var/mail The place where all the incoming mails are stored. Users (other than root) can access their own mail only. Often, this directory is a symbolic link to /var/spool/mail. /var/spool Spool directory. Contains print jobs, mail spools and other queued tasks. /var/tmp A place for temporary files which should be preserved between system reboots. Types of Unix Files The UNIX files system contains several different types of files Types of Unix Files"
        },
        {
          "id": "unix-file-system--ordinary-files",
          "heading": "Ordinary Files",
          "explanation": "An ordinary file is a file on the system that contains data, text, or program instructions. Used to store your information, such as some text you have written or an image you have drawn. This is the type of file that you usually work with. Always located within/under a directory file. Do not contain other files. Note: In long-format output of ls -l, this type of file is specified by the \"-\" symbol."
        },
        {
          "id": "unix-file-system--directories",
          "heading": "Directories",
          "explanation": "Directories store both special and ordinary files. For users familiar with Windows or Mac OS, UNIX directories are equivalent to folders. A directory file contains an entry for every file and subdirectory that it houses. Each entry has two components - The Filename & A unique identification number for the file or directory (called the inode number). Branching points in the hierarchical tree. Used to organize groups of files. May contain ordinary files, special files or other directories. Never contain \"real\" information which you would work with (such as text). Basically, just used for organizing files. All files are descendants of the root directory, ( named / ) located at the top of the tree. Note: In long-format output of ls -l , this type of file is specified by the \"d\" symbol."
        },
        {
          "id": "unix-file-system--special-files",
          "heading": "Special Files",
          "explanation": "Used to represent a real physical device such as a printer, tape drive or terminal, used for Input/Output (I/O) operations. On UNIX systems there are two flavors of special files for each device, character special files and block special files : When a character special file is used for device Input/Output(I/O), data is transferred one character at a time. This type of access is called raw device access. When a block special file is used for device Input/Output(I/O), data is transferred in large fixed-size blocks. This type of access is called block device access. For terminal devices, it's one character at a time. For disk devices though, raw access means reading or writing in whole chunks of data - blocks, which are native to your disk. Note: In long-format output of ls -l, character special files are marked by the \"c\" symbol and block special files are marked by the \"b\" symbol."
        },
        {
          "id": "unix-file-system--pipes",
          "heading": "Pipes",
          "explanation": "UNIX allows you to link commands together using a pipe. The pipe acts a temporary file which only exists to hold data from one command until it is read by another. A Unix pipe provides a one-way flow of data. The output or result of the first command sequence is used as the input to the second command sequence. To make a pipe, put a vertical bar (|) on the command line between two commands. Note: who | wc -l In long-format output of ls -l , named pipes are marked by the \"p\" symbol."
        },
        {
          "id": "unix-file-system--sockets",
          "heading": "Sockets",
          "explanation": "A Unix socket (or Inter-process communication socket) is a special file which allows for advanced inter-process communication. A Unix Socket is used in a client-server application framework. In essence, it is a stream of data, very similar to network stream (and network sockets), but all the transactions are local to the filesystem. Note: In long-format output of ls -l, Unix sockets are marked by \"s\" symbol."
        },
        {
          "id": "unix-file-system--symbolic-link",
          "heading": "Symbolic Link",
          "explanation": "Symbolic link is used for referencing some other file of the file system. Symbolic link is also known as Soft link. It contains a text form of the path to the file it references. To an end user, symbolic link will appear to have its own name, but when you try reading or writing data to this file, it will instead reference these operations to the file it points to. If we delete the soft link itself , the data file would still be there. If we delete the source file or move it to a different location, symbolic file will not function properly. Note: In long-format output of ls -l , Symbolic link are marked by the \"l\" symbol (that's a lower case L). Advantages of the Unix file System\nHierarchical organization: The hierarchical structure of the Unix file system makes it easy to organize and navigate files and directories.\nRobustness: The Unix file system is known for its stability and reliability. It can handle large amounts of data without becoming unstable or crashing.\nSecurity: The Unix file system uses a set of permissions that allows administrators to control who has access to files and directories.\nCompatibility: The Unix file system is widely used and supported, which means that files can be easily transferred between different Unix-based systems. Disadvantages of the Unix file System\nComplexity: The Unix file system can be complex to understand and manage, especially for users who are not familiar with the command line interface.\nSteep Learning Curve: Users who are not familiar with Unix-based systems may find it difficult to learn how to use the Unix file system.\nLack of User-Friendly Interface: The Unix file system is primarily managed through the command line interface, which may not be as user-friendly as a graphical user interface.\nLimited Support for Certain File Systems: While the Unix file system is compatible with many file systems, there are some file systems that are not fully supported."
        }
      ],
      "quick_revision": [
        "Unix (UNiplexed Information Computing System) File System is a logical method of organizing and storing large amounts of information for easy management.",
        "Ordinary Files: An ordinary file is a file on the system that contains data, text, or program instructions.",
        "Directories: Directories store both special and ordinary files.",
        "Special Files: Used to represent a real physical device such as a printer, tape drive or terminal, used for Input/Output (I/O) operations.",
        "Pipes: UNIX allows you to link commands together using a pipe.",
        "Sockets: A Unix socket (or Inter-process communication socket) is a special file which allows for advanced inter-process communication.",
        "Symbolic Link: Symbolic link is used for referencing some other file of the file system."
      ]
    },
    {
      "id": "file-directory-path-name",
      "title": "File Directory | Path Name",
      "category": "Disk Management",
      "source_id": "file-directory-path-name",
      "summary": "Path Name in File Directory When files are organized as a directory tree, there must be a way to uniquely identify and access them.",
      "sections": [
        {
          "id": "file-directory-path-name--overview",
          "heading": "Overview",
          "explanation": "Path Name in File Directory When files are organized as a directory tree, there must be a way to uniquely identify and access them. This is done through path names. A path name specifies the location of a file or directory in the file system hierarchy. There are two main types of path names:"
        },
        {
          "id": "file-directory-path-name--absolute-path-name",
          "heading": "Absolute Path Name",
          "explanation": "An absolute path name (also known as a full path) specifies the complete path from the root directory (\"/\") to the target file or directory. It does not depend on the current working directory, which makes it unique and unambiguous. Always starts from the root. Unique across the entire system. Works irrespective of the current directory. UNIX/Linux /var/mail/username\nWindows: C:\\Users\\Username\\AppData\\Local\\Microsoft\\Outlook\\ Here, / (or C:\\) represents the root directory. Each subdirectory name is separated by a slash (\"/\") in UNIX or backslash (\"\") in Windows.\nAbsolute path names are used when: The program or script must access files independent of the current working directory. Referring to system files or files in fixed locations (e.g., /usr/lib/dictionary). Example in UNIX cp /usr/ast/mailbox /usr/ast/mailbox.bak This command copies the file mailbox from /usr/ast/ to a backup file in the same directory, using absolute paths."
        },
        {
          "id": "file-directory-path-name--relative-path-name",
          "heading": "Relative Path Name",
          "explanation": "A relative path name specifies the file or directory in relation to the current working directory (also known as the present working directory). It does not start from the root and is shorter and more flexible than an absolute path. If the current working directory is /usr/ast Then the absolute path /usr/ast/mailbox can be referred to simply as mailbox Example in UNIX cp mailbox mailbox.bak This command performs the same operation as the earlier absolute path example, assuming the working directory is /usr/ast.\nRelative path names are used when: The file resides in or near the current directory. You want shorter commands or portable scripts. The program explicitly sets or knows the working directory.\nWorking Directory Concept: The working directory (or current directory) is the directory that the operating system considers as the default for all relative path operations. You can: View it using pwd Change it using cd /usr/ast Once the working directory is set, all file operations using relative paths are performed relative to this directory. Absolute vs Relative Path\nDefinition: Full path from root directory Path relative to current working directory\nDependency: Independent of working directory Depends on working directory\nUniqueness: Always unique May vary depending on current directory\nUsage: Used in scripts or programs requiring fixed file references Used in user-level commands or local navigation Example (UNIX) /usr/lib/dictionary ../lib/dictionary Use of Absolute Path Names"
        },
        {
          "id": "file-directory-path-name--absolute-paths-are-preferred-when",
          "heading": "Absolute paths are preferred when",
          "explanation": "You want certainty about the file’s location. The script or application may run in different working directories. The file is located in a system-wide or shared location. The command or service runs automatically (cron jobs, daemons, etc.) where the working directory might not be known. : A spell-checking program may need to read the dictionary file at /usr/lib/dictionary Since the working directory during execution may vary, using an absolute path ensures it always finds the file correctly."
        }
      ],
      "quick_revision": [
        "Path Name in File Directory When files are organized as a directory tree, there must be a way to uniquely identify and access them.",
        "Absolute Path Name: An absolute path name (also known as a full path) specifies the complete path from the root directory (\"/\") to the target file or directory.",
        "Relative Path Name: A relative path name specifies the file or directory in relation to the current working directory (also known as the present working directory).",
        "Absolute paths are preferred when: You want certainty about the file’s location."
      ]
    },
    {
      "id": "structures-of-directory",
      "title": "Structures of Directory",
      "category": "Disk Management",
      "source_id": "structures-of-directory",
      "summary": "Structures of Directory in Operating System The operating system uses directories to track where files are stored, just like using folders to organise papers.",
      "sections": [
        {
          "id": "structures-of-directory--overview",
          "heading": "Overview",
          "explanation": "Structures of Directory in Operating System The operating system uses directories to track where files are stored, just like using folders to organise papers. Different directory structures can be used to suit various organisational needs. Understanding directory structures helps in organising and accessing files more easily. By using these structures, it becomes simpler to manage and navigate files on your computer. Different Types of Directories in OS In an operating system, there are different types of directory structures that help organise and manage files efficiently. Each type of directory has its own way of arranging files and directories, offering unique benefits and features. These are"
        },
        {
          "id": "structures-of-directory--single-level-directory",
          "heading": "Single-Level Directory",
          "explanation": "The single-level directory is the simplest directory structure . In it, all files are contained in the same directory which makes it easy to support and understand. A single level directory has a significant limitation, however, when the number of files increases or when the system has more than one user. Since all the files are in the same directory, they must have a unique name . If two users call their dataset test, then the unique name rule violated. Since it is a single directory, so its implementation is very easy. If the files are smaller in size, searching will become faster. The operations like file creation, searching, deletion, updating are very easy in such a directory structure.\nLogical Organization: .Simple to implement and suitable for small systems. Efficiency Faster file searching and access.\nSecurity: Restrict access at directory level to protect data.\nBackup & Recovery: Simplifies locating and restoring files.\nScalability: Easily supports growth with new files and directories\nDisadvantages: There may chance of name collision because two files can have the same name. Searching will become time taking if the directory is large. This can not group the same type of files together."
        },
        {
          "id": "structures-of-directory--two-level-directory",
          "heading": "Two-Level Directory",
          "explanation": "In a two-level directory structure, each user has a separate User File Directory (UFD) containing only their files. A Master File Directory (MFD) stores entries for all users and points to their respective UFDs, preventing filename conflicts between users.\nAdvantages: Different users can have files with the same name. A security would be there which would prevent user to access other user's files. Searching of the files becomes very easy in this directory structure.\nDisadvantages: File sharing is limited and less convenient between users. Unlike the advantage users can create their own files, users don't have the ability to create subdirectories. Scalability is not possible because one user can't group the same types of files together."
        },
        {
          "id": "structures-of-directory--tree-structure-hierarchical-structure",
          "heading": "Tree Structure/ Hierarchical Structure",
          "explanation": "The tree directory structure is the most common in personal computers. It resembles an upside-down tree, with the root directory at the top containing all user directories. Each user can create files and subdirectories within their own directory but cannot access or modify the root or other users’ directories.\nAdvantages: This directory structure allows subdirectories inside a directory. The searching is easier. It helps in organizing files by importance, making important files easier to locate. This directory is more scalable than the other two directory structures explained.\nDisadvantages: As the user isn't allowed to access other user's directory, this prevents the file sharing among users. As the user has the capability to make subdirectories, if the number of subdirectories increase the searching may become complicated. Users cannot modify the root directory data. Searching may become complex as the directory depth increases."
        },
        {
          "id": "structures-of-directory--acyclic-graph-structure",
          "heading": "Acyclic Graph Structure",
          "explanation": "In the earlier directory structures, a file could only be accessed from the directory it was stored in. The acyclic graph directory structure solves this by allowing a file or subdirectory to be shared across multiple directories using links. Changes made by one user are visible to all users sharing that file. In the below figure, this explanation can be nicely observed, where a file is shared between multiple users. If any user makes a change, it would be reflected to both the users.\nAdvantages: Sharing of files and directories is allowed between multiple users. Searching becomes too easy. Flexibility is increased as file sharing and editing access is there for multiple users.\nDisadvantages: Because of the complex structure it has, it is difficult to implement this directory structure. The user must be very cautious to edit or even deletion of file as the file is accessed by multiple users. If we need to delete the file, then we need to delete all the references of the file inorder to delete it permanently."
        },
        {
          "id": "structures-of-directory--general-graph-directory-structure",
          "heading": "General-Graph Directory Structure",
          "explanation": "Unlike the acyclic-graph directory, which avoids loops, the general-graph directory can have cycles, meaning a directory can contain paths that loop back to the starting point. This can make navigating and managing files more complex."
        },
        {
          "id": "structures-of-directory--general-graph-directory-structure-2",
          "heading": "General Graph Directory Structure",
          "explanation": "In the above image, you can see that a cycle is formed in the User 2 directory. While this structure offers more flexibility, it is also more complicated to implement. Advantages of General-Graph Directory More flexible than other directory structures. Allows cycles, meaning directories can loop back to each other. Disadvantages of General-Graph Directory More expensive to implement compared to other solutions. Requires garbage collection to manage and clean up unused files and directories."
        }
      ],
      "quick_revision": [
        "Structures of Directory in Operating System The operating system uses directories to track where files are stored, just like using folders to organise papers.",
        "Single-Level Directory: The single-level directory is the simplest directory structure . In it, all files are contained in the same directory which makes it easy to support and understand.",
        "Two-Level Directory: In a two-level directory structure, each user has a separate User File Directory (UFD) containing only their files.",
        "Tree Structure/ Hierarchical Structure: The tree directory structure is the most common in personal computers.",
        "Acyclic Graph Structure: In the earlier directory structures, a file could only be accessed from the directory it was stored in.",
        "General-Graph Directory Structure: Unlike the acyclic-graph directory, which avoids loops, the general-graph directory can have cycles, meaning a directory can contain paths that loop back to the starting…",
        "General Graph Directory Structure: In the above image, you can see that a cycle is formed in the User 2 directory."
      ]
    },
    {
      "id": "file-allocation-methods",
      "title": "File Allocation Methods",
      "category": "Disk Management",
      "source_id": "file-allocation-methods",
      "summary": "The allocation methods define how the files are stored in the disk blocks.  There are three main disk space or file allocation methods.",
      "sections": [
        {
          "id": "file-allocation-methods--overview",
          "heading": "Overview",
          "explanation": "The allocation methods define how the files are stored in the disk blocks. There are three main disk space or file allocation methods.\nIndexed Allocation: The main idea behind these methods is to provide Efficient disk space utilization & Fast access to the file blocks."
        },
        {
          "id": "file-allocation-methods--contiguous-allocation",
          "heading": "Contiguous Allocation",
          "explanation": "In this scheme, each file occupies a contiguous set of blocks on the disk. This means that given the starting block address and the length of the file (in terms of blocks required), we can determine the blocks occupied by the file. The directory entry for a file with contiguous allocation contains: Address of starting block Length of the allocated portion Example: If a file requires n blocks and is given a block b as the starting location, then the blocks assigned to the file will be: b, b+1, b+2,......b+n-1.\nAdvantages: Both the Sequential and Direct Accesses are supported by this. For direct access, the address of the kth block of the file which starts at block b can easily be obtained as ( b + k ) (b+k) ( b + k ) . This is extremely fast since the number of seeks are minimal because of contiguous allocation of file blocks.\nDisadvantages: This method suffers from both internal and external fragmentation. This makes it inefficient in terms of memory utilization. Increasing file size is difficult because it depends on the availability of contiguous memory at a particular instance."
        },
        {
          "id": "file-allocation-methods--linked-allocation",
          "heading": "Linked Allocation",
          "explanation": "In this scheme, each file is a linked list of disk blocks which need not be contiguous. Here, The disk blocks can be scattered anywhere on the disk. The directory entry contains a pointer to the starting and the ending file block. Each block contains a pointer to the next block occupied by the file. Example: The file 'jeep' in following image shows how the blocks are randomly distributed. The last block (25) contains -1 indicating a null pointer and does not point to any other block.\nAdvantages: This is very flexible in terms of file size. File size can be increased easily since the system does not have to look for a contiguous chunk of memory. This method does not suffer from external fragmentation. This makes it relatively better in terms of memory utilization.\nDisadvantages: Because the file blocks are distributed randomly on the disk, a large number of seeks are needed to access every block individually. This makes linked allocation slower. It does not support random or direct access. We can not directly access the blocks of a file. A block k of a file can be accessed by traversing k blocks sequentially (sequential access ) from the starting block of the file via block pointers. Pointers required in the linked allocation incur some extra overhead."
        },
        {
          "id": "file-allocation-methods--indexed-allocation",
          "heading": "Indexed Allocation",
          "explanation": "In this scheme, a special block known as the Index block contains the pointers to all the blocks occupied by a file. Here, Each file has its own index block. The i th entry in the index block contains the disk address of the i th file block. The directory entry contains the address of the index block as shown in the image.\nAdvantages: This supports direct access to the blocks occupied by the file and therefore provides fast access to the file blocks. It overcomes the problem of external fragmentation.\nDisadvantages: The pointer overhead for indexed allocation is greater than linked allocation. For very small files, say files that expand only 2-3 blocks, the indexed allocation would keep one entire block (index block) for the pointers which is inefficient in terms of memory utilization. However, in linked allocation we lose the space of only 1 pointer per block. Indexing Schemes for Large Files When a file is very large, a single index block may not have enough space to hold all the pointers to the data blocks. To manage this, the following indexing mechanisms are used:"
        },
        {
          "id": "file-allocation-methods--linked-scheme",
          "heading": "Linked Scheme",
          "explanation": "In this approach, multiple index blocks are linked together. Each index block contains some pointers to disk blocks and a pointer to the next index block. The chain continues until all the pointers are covered."
        },
        {
          "id": "file-allocation-methods--multilevel-index",
          "heading": "Multilevel Index",
          "explanation": "Instead of a single large index block, we use a hierarchy of index blocks. The first-level index block points to second-level index blocks and those second-level blocks contain pointers to the actual data blocks. Can be extended to three or more levels as required by file size."
        },
        {
          "id": "file-allocation-methods--combined-scheme-inode-structure",
          "heading": "Combined Scheme (Inode Structure)",
          "explanation": "A special block called the Inode (Information Node) stores File metadata (name, size, permissions, timestamps) & Block addresses (pointers).\nDirect Pointers: Point directly to data blocks (e.g., first 10 pointers).\nSingle Indirect Pointer: Points to a block that holds further block addresses."
        },
        {
          "id": "file-allocation-methods--double-indirect-pointer",
          "heading": "Double Indirect Pointer",
          "explanation": "Points to a block that contains pointers to other indirect blocks, which in turn point to data blocks."
        },
        {
          "id": "file-allocation-methods--triple-indirect-pointer",
          "heading": "Triple Indirect Pointer",
          "explanation": "Adds another layer of indirection for extremely large files.\nWhy Combined Scheme Is Preferred: Combines direct access for small files (faster). Allows efficient scalability for large files. Widely used in modern filesystems like ext2, ext3, ext4 (Linux)."
        }
      ],
      "quick_revision": [
        "The allocation methods define how the files are stored in the disk blocks.",
        "Contiguous Allocation: In this scheme, each file occupies a contiguous set of blocks on the disk.",
        "Linked Allocation: In this scheme, each file is a linked list of disk blocks which need not be contiguous.",
        "Indexed Allocation: In this scheme, a special block known as the Index block contains the pointers to all the blocks occupied by a file.",
        "Linked Scheme: In this approach, multiple index blocks are linked together.",
        "Multilevel Index: Instead of a single large index block, we use a hierarchy of index blocks.",
        "Combined Scheme (Inode Structure): A special block called the Inode (Information Node) stores File metadata (name, size, permissions, timestamps) & Block addresses (pointers).",
        "Double Indirect Pointer: Points to a block that contains pointers to other indirect blocks, which in turn point to data blocks.",
        "Triple Indirect Pointer: Adds another layer of indirection for extremely large files."
      ]
    },
    {
      "id": "file-access-methods",
      "title": "File Access Methods",
      "category": "Disk Management",
      "source_id": "file-access-methods",
      "summary": "File Access Methods in Operating System File access methods are techniques used by an OS to read and write data in files.",
      "sections": [
        {
          "id": "file-access-methods--overview",
          "heading": "Overview",
          "explanation": "File Access Methods in Operating System File access methods are techniques used by an OS to read and write data in files. They define how information is organized, retrieved, and modified. Choosing the right method is important for performance and data management. Direct Access Index sequential Method\nSequential Access: A file access method where data is read or written in order, one record after another , starting from the beginning. The file pointer moves forward automatically after each operation."
        },
        {
          "id": "file-access-methods--sequential-access-method",
          "heading": "Sequential Access Method",
          "explanation": "Key Points related to Sequential Access Data is accessed from one record right after another record in an order. When we use the read command, it moves ahead pointer by one. When we use the write command, it will allocate memory and move the pointer to the end of the file. Such a method is reasonable for tape. Advantages of Sequential Access Method It is simple to implement this file access mechanism. Data is accessed sequentially in the order it is stored. It is less prone to data corruption as the data is written sequentially and not randomly. Disadvantages of Sequential Access Method Slow for searching specific records. Inserting/updating in the middle is difficult. Can waste storage if records have varying lengths.\nDirect Access Method: A file access method that allows data to be read or written directly at any block or record , using its address (block number). It supports random access without scanning previous records."
        },
        {
          "id": "file-access-methods--direct-access-method",
          "heading": "Direct Access Method",
          "explanation": "Advantages of Direct Access Method The files can be immediately accessed decreasing the average access time. In the direct access method, in order to access a block, there is no need of traversing all the blocks present before it. Disadvantages of Direct Access Method\nComplex Implementation: Implementing direct access can be complex, requiring sophisticated algorithms and data structures to manage and locate records efficiently.\nHigher Storage Overhead: Direct access methods often require additional storage for maintaining data location information (such as pointers or address tables), which can increase the overall storage requirements. Index Sequential method It is the other method of accessing a file that is built on the top of the sequential access method. These methods construct an index for the file. The index, like an index in the back of a book, contains the pointer to the various blocks. To find a record in the file, we first search the index, and then by the help of pointer we access the file directly.\nIndex Access Method: Key Points Related to Index Sequential Method It is built on top of Sequential access. It control the pointer by using index. Advantages of Index Sequential Method Fast Searching Index enables quick lookups.\nFlexible: Supports both sequential and random access.\nReduced Access Time: Quickly locates data in large files. Disadvantages of Index Sequential Method\nComplexity: Harder to implement and maintain than sequential access. Extra Storage Requires additional space for indexes.\nSlower Updates: Both data and index must be updated during insertions, deletions, or modifications.\nMaintenance Overhead: Indexes need frequent updates in dynamic environments. Other Way of File Access"
        },
        {
          "id": "file-access-methods--relative-record-access",
          "heading": "Relative Record Access",
          "explanation": "Relative record access is a file access method used in operating systems where records are accessed relative to the current position of the file pointer. In this method, records are located based on their position relative to the current record, rather than by a specific address or key value. Key Points Related to Relative Record Access Relative record access is a random access method that allows records to be accessed based on their position relative to the current record. This method is efficient for accessing individual records but supports relative/random access using record positions to specific records. Relative record access requires fixed-length records and may not be flexible enough for some applications. This method is useful for processing records in a specific order or for files that are accessed sequentially. Advantages of Relative Record Access\nRandom Access: Allows direct access to any record by moving the file pointer to a specific offset.\nEfficient Retrieval: Faster than sequential access when accessing individual records since only required records are read.\nSequential Use: Useful for ordered processing (e.g., accessing next/previous records in sorted files). Disadvantages of Relative Record Access\nFixed Record Length: Requires equal-sized records; padding may be needed.\nLow Flexibility: Hard to insert or delete records without disturbing others.\nLimited Use: Suitable for regular/sequential access, but less flexible due to fixed-length records."
        },
        {
          "id": "file-access-methods--content-addressable-access",
          "heading": "Content Addressable Access",
          "explanation": "Content-addressable access (CAA) is a file access method used in operating systems that allows records or blocks to be accessed based on their content rather than their address. In this method, a hash function is used to calculate a unique key for each record or block, and the system can access any record or block by specifying its key. Keys in Content-Addressable Access\nUnique: Each record or block has a unique key that is generated using a hash function."
        },
        {
          "id": "file-access-methods--calculated-based-on-content",
          "heading": "Calculated based on content",
          "explanation": "The key is calculated based on the content of the record or block, rather than its location or address. Key Points Related to Content-Addressable Access Content-addressable access is a file access method that allows records or blocks to be accessed based on their content rather than their address. CAA uses a hash function to generate a unique key for each record or block. CAA is efficient for searching large databases or file systems and is more flexible than other access methods. CAA requires additional overhead for calculating the hash function and may have collisions or limited key space. Advantages of Content-Addressable Access\nEfficient Search: CAA is ideal for searching large databases or file systems because it allows for efficient searching based on the content of the records or blocks.\nFlexibility: Allows fast search using keys (hash-based lookup). Insertion and deletion may be complex due to collision handling.\nData Integrity: CAA ensures data integrity because each record or block has a unique key that is generated based on its content. Disadvantages of Content-Addressable Access\nOverhead: CAA requires additional overhead because the hash function must be calculated for each record or block.\nCollision: There is a possibility of collision where two records or blocks can have the same key. This can be minimized by using a good hash function, but it cannot be completely eliminated.\nLimited Key Space: The key space is limited by the size of the hash function used, which can lead to collisions and other issues."
        }
      ],
      "quick_revision": [
        "File Access Methods in Operating System File access methods are techniques used by an OS to read and write data in files.",
        "Sequential Access Method: Key Points related to Sequential Access Data is accessed from one record right after another record in an order.",
        "Direct Access Method: Advantages of Direct Access Method The files can be immediately accessed decreasing the average access time.",
        "Relative Record Access: Relative record access is a file access method used in operating systems where records are accessed relative to the current position of the file pointer.",
        "Content Addressable Access: Content-addressable access (CAA) is a file access method used in operating systems that allows records or blocks to be accessed based on their content rather than their…",
        "Calculated based on content: The key is calculated based on the content of the record or block, rather than its location or address."
      ]
    },
    {
      "id": "disk-scheduling-algorithms",
      "title": "Disk Scheduling Algorithms",
      "category": "Disk Management",
      "source_id": "disk-scheduling-algorithms",
      "summary": "Disk scheduling algorithms manage how data is read from and written to a computer's hard disk.  These algorithms help determine the order in which disk read and write requests are processed.",
      "sections": [
        {
          "id": "disk-scheduling-algorithms--overview",
          "heading": "Overview",
          "explanation": "Disk scheduling algorithms manage how data is read from and written to a computer's hard disk. These algorithms help determine the order in which disk read and write requests are processed. Disk scheduling is also known as I/O Scheduling. The main goals of disk scheduling are to optimize the performance of disk operations, reduce the time it takes to access data and improve overall system efficiency. Common disk scheduling methods include First-Come, First-Served (FCFS), Shortest Seek Time First (SSTF), SCAN, C-SCAN, LOOK, and C-LOOK. Importance of Disk Scheduling in Operating System Multiple I/O requests may arrive by different processes and only one I/O request can be served at a time by the disk controller. Thus other I/O requests need to wait in the waiting queue and need to be scheduled. Two or more requests may be far from each other so this can result in greater disk arm movement. Hard drives are one of the slowest parts of the computer system and thus need to be accessed in an efficient manner. Characteristics of Disk Scheduling\nSeek Time: Time taken to move the disk arm to the track where data is located.\nRotational Latency: Time taken for the desired sector to rotate under the read/write head.\nTransfer Time: Time taken to actually read or write the data, depending on disk speed and data size. Disk Access Time = Seek Time + Rotational Latency + Transfer Time Total Seek Time = Total head Movement * Seek Time Disk Access Time and Disk Response Time\nResponse Time: The time a request waits before its I/O operation starts.\nAverage Response Time: The mean waiting time of all requests. Variance in Response Time : How much individual waiting times differ from the average. Goals of Disk Scheduling Algorithms Ensuring Fairness Efficiency in Resource Utilization"
        },
        {
          "id": "disk-scheduling-algorithms--disk-scheduling-algorithms",
          "heading": "Disk Scheduling Algorithms",
          "explanation": "There are several Disk Several Algorithms. We will discuss in detail each one of them. FCFS (First Come First Serve) SSTF (Shortest Seek Time First) SCAN C-SCAN LOOK C-LOOK RSS (Random Scheduling) LIFO (Last-In First-Out) N-STEP SCAN F-SCAN"
        },
        {
          "id": "disk-scheduling-algorithms--fcfs-first-come-first-serve",
          "heading": "FCFS (First Come First Serve)",
          "explanation": "FCFS (First Come First Serve) is the simplest disk scheduling algorithm where requests are processed in the order they arrive in the queue. It is easy to implement but may lead to higher seek time and lower efficiency. Processes requests in arrival order Simple and easy to implement No starvation of requests May result in high seek time and poor performance"
        },
        {
          "id": "disk-scheduling-algorithms--first-come-first-serve",
          "heading": "First Come First Serve",
          "explanation": "Suppose the order of request is- (50,82,170,43,140,24,16,190) and current position of Read/Write head is: 50 So, total overhead movement (total distance covered by the disk arm) = (82-50)+(170-82)+(170-43)+(140-43)+(140-24)+(24-16)+(190-16) =642 Advantages of FCFS Here are some of the advantages of First Come First Serve. Every request gets a fair chance No indefinite postponement Disadvantages of FCFS Here are some of the disadvantages of First Come First Serve. Does not try to optimize seek time May not provide the best possible service Learn more in detail FCFS"
        },
        {
          "id": "disk-scheduling-algorithms--sstf-shortest-seek-time-first",
          "heading": "SSTF (Shortest Seek Time First)",
          "explanation": "SSTF (Shortest Seek Time First) is a disk scheduling algorithm that selects the request closest to the current disk arm position, minimizing seek time. It improves performance compared to FCFS by reducing average response time and increasing system throughput. Selects the request with minimum seek time Executes requests closest to the disk head first Reduces average seek time and improves efficiency May cause starvation of distant requests"
        },
        {
          "id": "disk-scheduling-algorithms--shortest-seek-time-first",
          "heading": "Shortest Seek Time First",
          "explanation": "Suppose the order of request is- (82,170,43,140,24,16,190) and current position of Read/Write head is: 50 total overhead movement (total distance covered by the disk arm) = (50-43)+(43-24)+(24-16)+(82-16)+(140-82)+(170-140)+(190-170) =208 Advantages of Shortest Seek Time First Here are some of the advantages of Shortest Seek Time First. The average Response Time decreases Throughput increases Disadvantages of Shortest Seek Time First Here are some of the disadvantages of Shortest Seek Time First. Overhead to calculate seek time in advance Can cause Starvation for a request if it has a higher seek time as compared to incoming requests The high variance of response time as SSTF favors only some requests Learn More in detail shortest seek time first"
        },
        {
          "id": "disk-scheduling-algorithms--scan",
          "heading": "SCAN",
          "explanation": "The SCAN algorithm is a disk scheduling method where the disk arm moves in one direction, servicing requests along the way, and then reverses direction at the end, similar to an elevator. It provides better performance than simple algorithms but may cause longer waiting time for some requests. Disk arm moves in one direction servicing requests Reverses direction after reaching the end Also known as the elevator algorithm Mid-range requests are served faster, others may wait longer Example: SCAN Algorithm Suppose the requests to be addressed are-82,170,43,140,24,16,190 and the Read/Write arm is at 50, and it is also given that the disk arm should move \"towards the larger value\". SCAN goes to disk end even if no request exists there Therefore, the total overhead movement (total distance covered by the disk arm) is calculated as = (199-50) + (199-16) = 332 Advantages of SCAN Algorithm Here are some of the advantages of the SCAN Algorithm. High throughput Low variance of response time Average response time Disadvantages of SCAN Algorithm Head may move to disk end unnecessarily High waiting time for some requests New requests may wait longer Learn More in detail SCAN"
        },
        {
          "id": "disk-scheduling-algorithms--c-scan",
          "heading": "C-SCAN",
          "explanation": "C-SCAN (Circular SCAN) is an improvement over the SCAN algorithm where the disk arm moves in one direction only. Instead of reversing, it jumps back to the beginning of the disk and continues servicing requests, providing more uniform wait times. Disk arm moves in one direction only After reaching the end, it jumps to the beginning Services requests in a circular manner Provides more uniform waiting time compared to SCAN Example: Circular SCAN Suppose the requests to be addressed are- 82,170,43,140,24,16,190 and the Read/Write arm is at 50, and it is also given that the disk arm should move \"towards the larger value\". So, the total overhead movement (total distance covered by the disk arm) is calculated as: =(199-50) + (199-0) + (43-0) = 391 Advantages of C-SCAN Algorithm Eliminates starvation of requests Better performance for heavy disk load More fair than SCAN algorithm\nLearn more in detail: C-SCAN Disadvantages of C-SCAN Algorithm Extra head movement due to return to start Increased seek time compared to SCAN in light load More overhead because of circular movement"
        },
        {
          "id": "disk-scheduling-algorithms--look",
          "heading": "LOOK",
          "explanation": "LOOK is a disk scheduling algorithm similar to SCAN, but instead of moving the disk arm to the end, it only goes up to the last pending request in that direction and then reverses, reducing unnecessary movement. Moves disk arm only up to the last request, not the disk end Reverses direction after servicing the last request Avoids unnecessary disk traversal Improves efficiency and reduces seek time compared to SCAN Example: LOOK Algorithm Suppose the requests to be addressed are- 82,170,43,140,24,16,190 and the Read/Write arm is at 50, and it is also given that the disk arm should move \"towards the larger value\". So, the total overhead movement (total distance covered by the disk arm) is calculated as: = (190-50) + (190-16) = 314\nReduced Unnecessary Movement: The disk arm only goes as far as the last request in each direction, avoiding travel to the disk’s physical end (unlike SCAN).\nFaster Response: Less head movement leads to quicker service for requests.\nDisadvantages of LOOK Algorithm: Waiting time can still be high for some requests Performance depends on request distribution Not completely fair to newly arrived requests Learn more in detail LOOK"
        },
        {
          "id": "disk-scheduling-algorithms--c-look",
          "heading": "C-LOOK",
          "explanation": "C-LOOK is similar to C-SCAN but avoids unnecessary movement by going only up to the last request in one direction and then jumping to the last request at the other end, instead of going to the disk’s extreme end. Moves only up to the last request in one direction Jumps to the last request at the other end Does not go to the physical disk end Reduces unnecessary movement and improves efficiency Example: Suppose the requests to be addressed are-82,170,43,140,24,16,190 and the Read/Write arm is at 50, and it is also given that the disk arm should move \"towards the larger value\" C-LOOK So, the total overhead movement (total distance covered by the disk arm) is calculated as = (190-50) + (190-16) + (43-16) = 341\nUniform Wait Time: Requests are serviced in a circular manner, so waiting times are more predictable and fair.\nReduced Head Movement: The arm only goes as far as the last request in one direction, then jumps back, saving time compared to C-SCAN.\nDisadvantages of C-LOOK Algorithm: Extra head movement due to circular scanning Increased seek time compared to LOOK under light load Newly arrived requests may have to wait for a full cycle Learn more in detail C-LOOK"
        },
        {
          "id": "disk-scheduling-algorithms--rss-random-scheduling",
          "heading": "RSS (Random Scheduling)",
          "explanation": "Random Scheduling is a technique where selects requests randomly for servicing. It is useful in systems with unpredictable conditions like random processing times or machine failures, and is mainly used for analysis and simulation. Selects processes randomly for execution Suitable for systems with unpredictable or stochastic behavior Used in simulation and performance analysis Simple but not efficient for practical scheduling"
        },
        {
          "id": "disk-scheduling-algorithms--lifo-last-in-first-out",
          "heading": "LIFO (Last-In First-Out)",
          "explanation": "In LIFO (Last In, First Out) algorithm, the newest jobs are serviced before the existing ones i.e. in order of requests that get serviced the job that is newest or last entered is serviced first, and then the rest in the same order. Maximizes locality and resource utilization Can seem a little unfair to other requests and if new requests keep coming in, it causes starvation to the old and existing ones."
        },
        {
          "id": "disk-scheduling-algorithms--n-step-scan",
          "heading": "N-STEP SCAN",
          "explanation": "N-STEP SCAN is a disk scheduling algorithm where requests are divided into groups of size N and each group is processed completely before moving to the next. This ensures fair service and prevents starvation of requests. Divides requests into fixed-size groups (buffers) of N Processes all requests in one group before taking new ones New requests are placed in a separate buffer Ensures fairness and guarantees service for all requests It eliminates the starvation of requests completely. Learn more in detail N-STEP SCAN"
        },
        {
          "id": "disk-scheduling-algorithms--f-scan",
          "heading": "F-SCAN",
          "explanation": "This algorithm uses two sub-queues. During the scan, all requests in the first queue are serviced and the new incoming requests are added to the second queue. All new requests are kept on halt until the existing requests in the first queue are serviced.\nPrevents Arm Stickiness: The head doesn’t get stuck near one area because requests are split into two queues.\nFairness: All requests in the first queue are guaranteed service before moving to the second, avoiding indefinite delays.\nLearn more in detail: F-SCAN Note: Average Rotational latency is generally taken as 1/2(Rotational latency)."
        }
      ],
      "quick_revision": [
        "Disk scheduling algorithms manage how data is read from and written to a computer's hard disk.",
        "Disk Scheduling Algorithms: There are several Disk Several Algorithms.",
        "FCFS (First Come First Serve): FCFS (First Come First Serve) is the simplest disk scheduling algorithm where requests are processed in the order they arrive in the queue.",
        "First Come First Serve: Suppose the order of request is- (50,82,170,43,140,24,16,190) and current position of Read/Write head is: 50 So, total overhead movement (total distance covered by the…",
        "SSTF (Shortest Seek Time First): SSTF (Shortest Seek Time First) is a disk scheduling algorithm that selects the request closest to the current disk arm position, minimizing seek time.",
        "Shortest Seek Time First: Suppose the order of request is- (82,170,43,140,24,16,190) and current position of Read/Write head is: 50 total overhead movement (total distance covered by the disk…",
        "SCAN: The SCAN algorithm is a disk scheduling method where the disk arm moves in one direction, servicing requests along the way, and then reverses direction at the end,…",
        "C-SCAN: C-SCAN (Circular SCAN) is an improvement over the SCAN algorithm where the disk arm moves in one direction only.",
        "LOOK: LOOK is a disk scheduling algorithm similar to SCAN, but instead of moving the disk arm to the end, it only goes up to the last pending request in that direction and…",
        "C-LOOK: C-LOOK is similar to C-SCAN but avoids unnecessary movement by going only up to the last request in one direction and then jumping to the last request at the other end,…",
        "RSS (Random Scheduling): Random Scheduling is a technique where selects requests randomly for servicing.",
        "LIFO (Last-In First-Out): In LIFO (Last In, First Out) algorithm, the newest jobs are serviced before the existing ones i.e. in order of requests that get serviced the job that is newest or last…",
        "N-STEP SCAN: N-STEP SCAN is a disk scheduling algorithm where requests are divided into groups of size N and each group is processed completely before moving to the next.",
        "F-SCAN: This algorithm uses two sub-queues."
      ]
    },
    {
      "id": "program-for-sstf-disk-scheduling-algorithm",
      "title": "Program for SSTF disk scheduling algorithm",
      "category": "Disk Management",
      "source_id": "program-for-sstf-disk-scheduling-algorithm",
      "summary": "Given an array of disk track numbers and initial head position, our task is to find the total number of seek operations done to access all the requested tracks if Shortest Seek Time First (SSTF) is a disk scheduling algorithm is used.",
      "sections": [
        {
          "id": "program-for-sstf-disk-scheduling-algorithm--overview",
          "heading": "Overview",
          "explanation": "Given an array of disk track numbers and initial head position, our task is to find the total number of seek operations done to access all the requested tracks if Shortest Seek Time First (SSTF) is a disk scheduling algorithm is used. The basic idea is the tracks that are closer to the current disk head position should be serviced first in order to minimize the seek operations is basically known as Shortest Seek Time First (SSTF). Step 1 Let the Request array represents an array storing indexes of tracks that have been requested. 'head' is the position of the disk head. Step 2 Find the positive distance of all tracks in the request array from the head. Step 3 Find a track from the requested array which has not been accessed/serviced yet and has a minimum distance from the head. Step 4 Increment the total seek count with this distance. Step 5 Currently serviced track position now becomes the new head position. Step 6 Go to step 2 until all tracks in the request array have not been serviced. Example: Request sequence = {176, 79, 34, 60, 92, 11, 41, 114} Initial head position = 50 The following chart shows the sequence in which requested tracks are serviced using SSTF."
        },
        {
          "id": "program-for-sstf-disk-scheduling-algorithm--therefore-the-total-seek-count-is-calculated-as",
          "heading": "Therefore, the total seek count is calculated as",
          "explanation": "SSTF (Shortest Seek Time First) = (50-41)+(41-34)+(34-11)+(60-11)+(79-60)+(92-79)+(114-92)+(176-114) = 204 which can also be directly calculated as: (50-11) + (176-11)\nImplementation: The implementation of SSTF is given below. Note that we have made a node class having 2 members. ‘distance’ is used to store the distance between the head and the track position. ‘accessed’ is a boolean variable that tells whether the track has been accessed/serviced before by the disk head or not. O(N) Advantages of Shortest Seek Time First (SSTF) Better performance than the FCFS scheduling algorithm. It provides better throughput. This algorithm is used in Batch Processing systems where throughput is more important. It has a less average response and waiting time. Disadvantages of Shortest Seek Time First (SSTF) Starvation is possible for some requests as it favors easy-to-reach requests and ignores the far-away processes. There is a lack of predictability because of the high variance of response time. Switching direction slows things down."
        },
        {
          "id": "program-for-sstf-disk-scheduling-algorithm--formulas-code",
          "heading": "Formulas & Code",
          "explanation": "C++ // C++ program for implementation of // SSTF disk scheduling #include <bits/stdc++.h> using namespace std ; // Calculates difference of each // track number with the head position void calculatedifference ( int request [], int head , int diff [][ 2 ], int n ) { for ( int i = 0 ; i < n ; i ++ ) { diff [ i ][ 0 ] = abs ( head - request [ i ]); } // Find unaccessed track which is // at minimum distance from head int findMIN ( int diff [][ 2 ], int n ) { int index = -1 ; int minimum = 1e9 ; for ( int i = 0 ; i < n ; i ++ ) { if ( ! diff [ i ][ 1 ] && minimum > diff [ i ][ 0 ]) { minimum = diff [ i ][ 0 ]; index = i ; } return index ; } void shortestSeekTimeFirst ( int request [], int head , int n ) { if ( n == 0 ) { return ; } // Create array of objects of class node int diff [ n ][ 2 ] = { 0 , 0 } }; // Count total number of seek operation int seekcount = 0 ; // Stores sequence in which disk access is done int seeksequence [ n + 1 ] = { 0 }; for ( int i = 0 ; i < n ; i ++ ) { seeksequence [ i ] = head ; calculatedifference ( request , head , diff , n ); int index = findMIN ( diff , n ); diff [ index ][ 1 ] = 1 ; // Increase the total count seekcount += diff [ index ][ 0 ]; // Accessed track is now new head head = request [ index ]; } seeksequence [ n ] = head ; cout << \"Total number of seek operations = \" << seekcount << endl ; cout << \"Seek sequence is : \" << \" \\n \" ; // Print the sequence for ( int i = 0 ; i <= n ; i ++ ) { cout << seeksequence [ i ] << \" \\n \" ; } // Driver code int main () { int n = 8 ; int proc [ n ] = { 176 , 79 , 34 , 60 , 92 , 11 , 41 , 114 }; shortestSeekTimeFirst ( proc , 50 , n ); return 0 ; } // This code is contributed by manish19je0495 #include <bits/stdc++.h> using namespace std ; void calculatedifference ( int request [], int head , int diff [][ 2 ], int n ) { for ( int i = 0 ; i < n ; i ++ ) { diff [ i ][ 0 ] = abs ( head - request [ i ]); } int findMIN ( int diff [][ 2 ], int n ) { int index = - 1 ; int minimum = 1e9 ; for ( int i = 0 ; i < n ; i ++ ) { if ( ! diff [ i ][ 1 ] && minimum > diff [ i ][ 0 ]) { minimum = diff [ i ][ 0 ]; index = i ; } return index ; } void shortestSeekTimeFirst ( int request [], int head , int n ) { if ( n == 0 ) { return ; } int diff [ n ][ 2 ] = { { 0 , 0 } }; int seekcount = 0 ; int seeksequence [ n + 1 ] = { 0 }; for ( int i = 0 ; i < n ; i ++ ) { seeksequence [ i ] = head ; calculatedifference ( request , head , diff , n ); int index = findMIN ( diff , n ); diff [ index ][ 1 ] = 1 ; seekcount += diff [ index ][ 0 ]; head = request [ index ]; } seeksequence [ n ] = head ; cout << \"Total number of seek operations = \" << seekcount << endl ; cout << \"Seek sequence is : \" << \"\\n\" ; for ( int i = 0 ; i <= n ; i ++ ) { cout << seeksequence [ i ] << \"\\n\" ; } int main () { int n = 8 ; int proc [ n ] = { 176 , 79 , 34 , 60 , 92 , 11 , 41 , 114 }; shortestSeekTimeFirst ( proc , 50 , n ); return 0 ; } Java // Java program for implementation of // SSTF disk scheduling class node { // represent difference between // head position and track number int distance = 0 ; // true if track has been accessed boolean accessed = false ; } public class SSTF { // Calculates difference of each // track number with the head position public static void calculateDifference ( int queue [] , int head , node diff [] ) { for ( int i = 0 ; i < diff . length ; i ++ ) diff [ i ] . distance = Math . abs ( queue [ i ] - head ); } // find unaccessed track // which is at minimum distance from head public static int findMin ( node diff [] ) { int index = - 1 , minimum = Integer . MAX_VALUE ; for ( int i = 0 ; i < diff . length ; i ++ ) { if ( ! diff [ i ] . accessed && minimum > diff [ i ] . distance ) { minimum = diff [ i ] . distance ; index = i ; } return index ; } public static void shortestSeekTimeFirst ( int request [] , int head ) { if ( request . length == 0 ) return ; // create array of objects of class node node diff [] = new node [ request . length ] ; // initialize array for ( int i = 0 ; i < diff . length ; i ++ ) diff [ i ] = new node (); // count total number of seek operation int seek_count = 0 ; // stores sequence in which disk access is done int [] seek_sequence = new int [ request . length + 1 ] ; for ( int i = 0 ; i < request . length ; i ++ ) { seek_sequence [ i ] = head ; calculateDifference ( request , head , diff ); int index = findMin ( diff ); diff [ index ] . accessed = true ; // increase the total count seek_count += diff [ index ] . distance ; // accessed track is now new head head = request [ index ] ; } // for last accessed track seek_sequence [ seek_sequence . length - 1 ] = head ; System . out . println ( \"Total number of seek operations = \" + seek_count ); System . out . println ( \"Seek Sequence is\" ); // print the sequence for ( int i = 0 ; i < seek_sequence . length ; i ++ ) System . out . println ( seek_sequence [ i ] ); } public static void main ( String [] args ) { // request array int arr [] = { 176 , 79 , 34 , 60 , 92 , 11 , 41 , 114 }; shortestSeekTimeFirst ( arr , 50 ); } + seek_count ); Python # Python3 program for implementation of # SSTF disk scheduling # Calculates difference of each # track number with the head position def calculateDifference ( queue , head , diff ) for i in range ( len ( diff )) diff [ i ][ 0 ] = abs ( queue [ i ] - head ) # find unaccessed track which is # at minimum distance from head def findMin ( diff ) index = - 1 minimum = 999999999 for i in range ( len ( diff )) if ( not diff [ i ][ 1 ] and minimum > diff [ i ][ 0 ]) minimum = diff [ i ][ 0 ] index = i return index def shortestSeekTimeFirst ( request , head ) if ( len ( request ) == 0 ) return l = len ( request ) diff = [ 0 ] * l # initialize array for i in range ( l ) diff [ i ] = [ 0 , 0 ] # count total number of seek operation seek_count = 0 # stores sequence in which disk # access is done seek_sequence = [ 0 ] * ( l + 1 ) for i in range ( l ) seek_sequence [ i ] = head calculateDifference ( request , head , diff ) index = findMin ( diff ) diff [ index ][ 1 ] = True # increase the total count seek_count += diff [ index ][ 0 ] # accessed track is now new head head = request [ index ] # for last accessed track seek_sequence [ len ( seek_sequence ) - 1 ] = head print ( \"Total number of seek operations =\" , seek_count ) print ( \"Seek Sequence is\" ) # print the sequence for i in range ( l + 1 ) print ( seek_sequence [ i ]) # Driver code if __name__ == \"__main__\" # request array proc = [ 176 , 79 , 34 , 60 , 92 , 11 , 41 , 114 ] shortestSeekTimeFirst ( proc , 50 ) # This code is contributed by # Shubham Singh(SHUBHAMSINGH10) C# // C# program for implementation of // SSTF disk scheduling using System ; public class node { // represent difference between // head position and track number public int distance = 0 ; // true if track has been accessed public Boolean accessed = false ; } public class SSTF { // Calculates difference of each // track number with the head position public static void calculateDifference ( int [] queue , int head , node [] diff ) { for ( int i = 0 ; i < diff . Length ; i ++ ) diff [ i ]. distance = Math . Abs ( queue [ i ] - head ); } // find unaccessed track // which is at minimum distance from head public static int findMin ( node [] diff ) { int index = - 1 , minimum = int . MaxValue ; for ( int i = 0 ; i < diff . Length ; i ++ ) { if ( ! diff [ i ]. accessed && minimum > diff [ i ]. distance ) { minimum = diff [ i ]. distance ; index = i ; } return index ; } public static void shortestSeekTimeFirst ( int [] request , int head ) { if ( request . Length == 0 ) return ; // create array of objects of class node node [] diff = new node [ request . Length ]; // initialize array for ( int i = 0 ; i < diff . Length ; i ++ ) diff [ i ] = new node (); // count total number of seek operation int seek_count = 0 ; // stores sequence in which disk access is done int [] seek_sequence = new int [ request . Length + 1 ]; for ( int i = 0 ; i < request . Length ; i ++ ) { seek_sequence [ i ] = head ; calculateDifference ( request , head , diff ); int index = findMin ( diff ); diff [ index ]. accessed = true ; // increase the total count seek_count += diff [ index ]. distance ; // accessed track is now new head head = request [ index ]; } // for last accessed track seek_sequence [ seek_sequence . Length - 1 ] = head ; Console . WriteLine ( \"Total number of seek operations = \" + seek_count ); Console . WriteLine ( \"Seek Sequence is\" ); // print the sequence for ( int i = 0 ; i < seek_sequence . Length ; i ++ ) Console . WriteLine ( seek_sequence [ i ]); } // Driver code public static void Main ( String [] args ) { // request array int [] arr = { 176 , 79 , 34 , 60 , 92 , 11 , 41 , 114 }; shortestSeekTimeFirst ( arr , 50 ); } // This code contributed by Rajput-Ji + seek_count ); JavaScript // Javascript Program for implementation of // SSTF disk scheduling function calculatedifference ( request , head , diff , n ) { for ( let i = 0 ; i < n ; i ++ ) { diff [ i ][ 0 ] = Math . abs ( head - request [ i ]); } // Find unaccessed track which is // at minimum distance from head function findMIN ( diff , n ) { let index = - 1 ; let minimum = 1e9 ; for ( let i = 0 ; i < n ; i ++ ) { if ( ! diff [ i ][ 1 ] && minimum > diff [ i ][ 0 ]) { minimum = diff [ i ][ 0 ]; index = i ; } return index ; } function shortestSeekTimeFirst ( request , head , n ) { if ( n == 0 ) { return ; } // Create array of objects of class node let diff = new Array ( n ); for ( let i = 0 ; i < n ; i ++ ) { diff [ i ] = new Array ( 2 ); } // Count total number of seek operation let seekcount = 0 ; // Stores sequence in which disk access is done let seeksequence = new Array ( n + 1 ); seeksequence [ 0 ] = head ; for ( let i = 0 ; i < n ; i ++ ) { calculatedifference ( request , head , diff , n ); let index = findMIN ( diff , n ); diff [ index ][ 1 ] = 1 ; // Increase the total count seekcount += diff [ index ][ 0 ]; // Accessed track is now new head head = request [ index ]; seeksequence [ i + 1 ] = head ; } console . log ( \"Total number of seek operations = \" + seekcount ); console . log ( \"Seek sequence is : \" ); // Print the sequence for ( let i = 0 ; i <= n ; i ++ ) { console . log ( seeksequence [ i ]); } // Driver code let n = 8 ; let proc = [ 176 , 79 , 34 , 60 , 92 , 11 , 41 , 114 ]; shortestSeekTimeFirst ( proc , 50 , n ); // This code is contributed by ishankhandelwals. console . log ( \"Total number of seek operations = \" + seekcount ); Output Total number of seek operations = 204 Seek Sequence: 50, 41, 34, 11, 60, 79, 92, 114, 176"
        }
      ],
      "quick_revision": [
        "Given an array of disk track numbers and initial head position, our task is to find the total number of seek operations done to access all the requested tracks if…",
        "Therefore, the total seek count is calculated as: SSTF (Shortest Seek Time First) = (50-41)+(41-34)+(34-11)+(60-11)+(79-60)+(92-79)+(114-92)+(176-114) = 204 which can also be directly calculated as: (50-11) + (176-11)",
        "Formulas & Code: C++ // C++ program for implementation of // SSTF disk scheduling #include <bits/stdc++.h> using namespace std ; // Calculates difference of each // track number with the…"
      ]
    },
    {
      "id": "what-exactly-spooling-is-all-about",
      "title": "What exactly Spooling is all about?",
      "category": "Disk Management",
      "source_id": "what-exactly-spooling-is-all-about",
      "summary": "Spooling in Operating System Spooling stands for Simultaneous Peripheral Operation On-Line.",
      "sections": [
        {
          "id": "what-exactly-spooling-is-all-about--overview",
          "heading": "Overview",
          "explanation": "Spooling in Operating System Spooling stands for Simultaneous Peripheral Operation On-Line. It refers to the process of temporarily storing data in a buffer (usually on secondary memory like a hard disk) before it is sent to a peripheral device (e.g., printers) or before being processed by a program. This decouples the speed of the CPU from the speed of peripheral devices. Helps in preventing CPU idleness and improving overall system efficiency. Note: It allows multiple processes to send their I/O jobs to a centralized storage area (known as the SPOOL), which holds the data until the respective I/O device is ready to process it. Why is Spooling Needed? To Avoid CPU Idle Time Without spooling, the CPU would remain idle while waiting for slow I/O devices (like printers) to complete their operations. Spooling allows the CPU to continue processing other tasks while I/O jobs are stored temporarily in secondary storage."
        },
        {
          "id": "what-exactly-spooling-is-all-about--to-synchronize-i-o-operations",
          "heading": "To Synchronize I/O Operations",
          "explanation": "Multiple processes or users may request I/O simultaneously (e.g., several print jobs). Spooling manages these requests in an orderly FIFO (First In First Out) manner, preventing data mixing or output corruption."
        },
        {
          "id": "what-exactly-spooling-is-all-about--to-manage-speed-mismatch",
          "heading": "To Manage Speed Mismatch",
          "explanation": "I/O devices (printers, disk drives, etc.) are much slower compared to the CPU. Spooling acts as a buffer that holds data temporarily, allowing devices to operate at their own pace without stalling the CPU."
        },
        {
          "id": "what-exactly-spooling-is-all-about--to-enable-parallelism",
          "heading": "To Enable Parallelism",
          "explanation": "Spooling enables overlapping of CPU and I/O operations. While one job is spooled and processed by the I/O device, the CPU can execute other processes, enhancing overall system throughput."
        },
        {
          "id": "what-exactly-spooling-is-all-about--to-provide-reliable-output-management",
          "heading": "To Provide Reliable Output Management",
          "explanation": "In printing or other output tasks, spooling prevents multiple jobs from being printed together and getting mixed up. The spool system handles jobs sequentially, ensuring clean orderly output. How Spooling Works?"
        },
        {
          "id": "what-exactly-spooling-is-all-about--input-spooling",
          "heading": "Input Spooling",
          "explanation": "When a fast device (e.g., CPU) sends data to a slower device (e.g., printer), the data is not sent directly. Instead, the data is first stored in a spool area (secondary storage). Once the slower device is ready, the data is fetched from the spool into main memory and processed."
        },
        {
          "id": "what-exactly-spooling-is-all-about--job-queue-management",
          "heading": "Job Queue Management",
          "explanation": "Each input device can submit multiple jobs to the spool. These jobs are stored in FIFO (First In, First Out) order. The spool ensures proper synchronization, preventing the output from getting mixed when multiple users send print jobs simultaneously."
        },
        {
          "id": "what-exactly-spooling-is-all-about--output-spooling",
          "heading": "Output Spooling",
          "explanation": "After CPU processing, the output is first written to main memory. It is then transferred to secondary memory (SPOOL). The output device fetches data from the spool and processes it sequentially. Combination of Buffering and Queuing Spooling acts as both a buffer (temporary storage of data) and a queue (sequential management of jobs). This helps overlap I/O operations with CPU operations, enhancing parallelism. Example of Spooling"
        },
        {
          "id": "what-exactly-spooling-is-all-about--printing-operation",
          "heading": "Printing Operation",
          "explanation": "Example of Spooling Documents submitted for printing are stored in the spool. While the printer is busy printing one document, other jobs can continue to be spooled. This ensures that the CPU continues executing other processes without waiting for the printer to finish. Jobs are printed one by one in the order they were received (FIFO order). Pros of Spooling Efficient use of system resources by enabling parallelism between CPU and I/O operations. Allows applications to run at CPU speed without waiting for slow peripheral devices. Prevents data loss and output mixing by enforcing ordered job processing. Provides a simple way to manage multiple jobs from various users in a synchronized manner. Cons of Spooling High Storage Requirement: Spooling requires significant secondary memory space as multiple jobs from various input devices are temporarily stored. Disk Traffic Overhead: When many devices are actively using the spool, the disk traffic increases, slowing down performance. Storage Limits: If the spool becomes full, new jobs cannot be spooled until existing ones are processed, potentially causing delays. Difference Between Spooling and Buffering Spooling v/s Buffering\nBasic Difference: It overlap the input/output of one job with the execution of another job. It overlaps the input/output of one job with the execution of the same job.\nEfficiency: Spooling is more efficient than buffering Buffering is less efficient than spooling."
        },
        {
          "id": "what-exactly-spooling-is-all-about--consider-size",
          "heading": "Consider Size",
          "explanation": "It consider disk as a huge spool or buffer. Buffer is limited area in main memory. remote processing It can process data at remote places. It does not support remote processing.\nImplementation: Implemented using spoolers which manage input/output requests and allocate resources as needed Implemented through software or hardware-based mechanisms such as circular buffers or FIFO queues\nCapacity: Can handle large amounts of data since spooled data is stored on disk or other external storage Limited by the size of memory available for buffering. Error handling Since data is stored on external storage, spooling can help recover from system crashes or other errors Error can occur if buffer overflow happens, which can cause data loss or corruption.\nComplexity: More complex than buffering since spooling requires additional software to manage input/output requests. Less complex than spooling since buffering is a simpler technique for managing data transfer."
        }
      ],
      "quick_revision": [
        "Spooling in Operating System Spooling stands for Simultaneous Peripheral Operation On-Line.",
        "To Synchronize I/O Operations: Multiple processes or users may request I/O simultaneously (e.g., several print jobs).",
        "To Manage Speed Mismatch: I/O devices (printers, disk drives, etc.) are much slower compared to the CPU. Spooling acts as a buffer that holds data temporarily, allowing devices to operate at…",
        "To Enable Parallelism: Spooling enables overlapping of CPU and I/O operations.",
        "To Provide Reliable Output Management: In printing or other output tasks, spooling prevents multiple jobs from being printed together and getting mixed up.",
        "Input Spooling: When a fast device (e.g., CPU) sends data to a slower device (e.g., printer), the data is not sent directly.",
        "Job Queue Management: Each input device can submit multiple jobs to the spool.",
        "Output Spooling: After CPU processing, the output is first written to main memory.",
        "Printing Operation: Example of Spooling Documents submitted for printing are stored in the spool.",
        "Consider Size: It consider disk as a huge spool or buffer."
      ]
    },
    {
      "id": "spooling-vs-buffering",
      "title": "Spooling vs Buffering",
      "category": "Disk Management",
      "source_id": "spooling-vs-buffering",
      "summary": "Input/output (I/O) operations can be slow because different devices work at different speeds.  To improve I/O efficiency and reduce waiting time, operating systems use techniques such as spooling and buffering.",
      "sections": [
        {
          "id": "spooling-vs-buffering--overview",
          "heading": "Overview",
          "explanation": "Input/output (I/O) operations can be slow because different devices work at different speeds. To improve I/O efficiency and reduce waiting time, operating systems use techniques such as spooling and buffering. Although both improve I/O performance, they are used for different purposes. Stores multiple I/O jobs in a disk-based queue so that a shared device can process them one at a time while other programs continue executing. Temporarily stores data in memory to make data transfer smoother between devices or programs, reducing waiting time and improving communication speed and reliability. Spooling vs Buffering\nBuffering: Overlaps the I/O of one job with the execution of another job. Overlaps the I/O with the execution of the same job. Stands for Simultaneous Peripheral Operation On-Line. Has no full form. Uses secondary storage (usually disk) as a queue for pending I/O jobs. Uses a small area of RAM as a temporary buffer. Suitable for managing multiple queued I/O requests for shared devices. Limited by available memory and intended for temporary data storage. Example: Print jobs are queued on disk and sent to the printer one by one. Example: Video streaming buffers data in memory for smooth playback."
        }
      ],
      "quick_revision": [
        "Input/output (I/O) operations can be slow because different devices work at different speeds."
      ]
    },
    {
      "id": "free-space-management",
      "title": "Free space management",
      "category": "Disk Management",
      "source_id": "free-space-management",
      "summary": "Free Space Management in Operating System Free space management involves managing the available storage space on the hard disk or other secondary storage devices.",
      "sections": [
        {
          "id": "free-space-management--overview",
          "heading": "Overview",
          "explanation": "Free Space Management in Operating System Free space management involves managing the available storage space on the hard disk or other secondary storage devices. To reuse the space released from deleting the files, a free space list is maintained. The free space list can be implemented mainly as: Free Space Management Bitmap or Bit vector\nFree List: Bitmap or Bit vector In this approach, A Bitmap or Bit Vector is series or collection of bits where each bit corresponds to a disk block. The bit can take two values 0 and 1: 0 indicates that the block is free and 1 indicates an allocated block. The given instance of disk blocks on the disk in Figure 1 can be represented by a bitmap of 16 bits as: 1111000111111001.\nAdvantages: Simple to understand. Finding the first free block is efficient. It requires scanning the words (a group of 8 bits) in a bitmap for a non-zero word. (A 0-valued word has all bits 0). The first free block is then found by scanning for the first 1 bit in the non-zero word.\nDisadvantages: For finding a free block, Operating System needs to iterate all the blocks which is time consuming. The efficiency of this method reduces as the disk size increases."
        },
        {
          "id": "free-space-management--linked-list",
          "heading": "Linked List",
          "explanation": "In this approach, Free blocks are linked together in a list. Each free block stores the address of the next free block. The list is maintained dynamically as blocks are allocated and freed. Note: The free space list head points to Block 5 which points to Block 6, the next free block and so on. The last free block would contain a null pointer indicating the end of free list.\nAdvantages: The total available space is used efficiently using this method. Dynamic allocation in Linked List is easy, thus can add the space as per the requirement dynamically.\nDisadvantages: When the size of Linked List increases, the headache of maintaining pointers is also increases. This method is not efficient during iteration of each block of memory. I/O is required for free space list traversal.\nBoundary Tags: In this approach, Each block contains a boundary tag indicating its size and whether it is free or occupied. Adjacent free blocks are merged during deallocation to reduce fragmentation. Useful in memory management systems. Simplifies coalescing of adjacent free blocks.\nDisadvantages: Slight overhead in storing tag information. More complex than bitmap or linked list.\nFree List: In this approach, The free blocks are maintained in a list (array or linked list). Each entry in the free list points directly to a free block on disk.\nAdvantages: Fast allocation as free blocks are known upfront. Easy to traverse and maintain.\nDisadvantages: Extra memory needed to store the list. May suffer from fragmentation over time."
        }
      ],
      "quick_revision": [
        "Free Space Management in Operating System Free space management involves managing the available storage space on the hard disk or other secondary storage devices.",
        "Linked List: In this approach, Free blocks are linked together in a list."
      ]
    }
  ]
};

export default OS_DATA_RESOURCE;
