const os = require("os");
console.log("Operating System End-of-Line Marker:", JSON.stringify(os.EOL));
//1.EOL
//Return :String
//The operating system-specific end-of-line marker.
//EOL = End of Line
// On Linux/macOS (POSIX): os.EOL returns "\n"
//On Windows: os.EOL returns "\r\n" 
//How it works:When you use os.EOL in code (like Node.js), it automatically inserts the correct line 
// break for the OS it's running on, ensuring consistent text formatting. 


//=====================================================================================================

//2.availableparallelism
//Returns: <integer> and  Always returns a value greater than zero.
// a Node.js (and Deno) function that returns an estimate of the ideal number of threads
//  or processes your application should use for parallel tasks, designed to
// be smarter than just counting CPU cores (os.cpus().length) by considering container limits
//Usage: Commonly used in worker thread management, load balancing, and determining cluster worker counts for better performance.
console.log("Available Parallelism:", os.availableParallelism());


//=====================================================================================================
//3.arch
//Returns: <string>
//Returns the operating system CPU architecture for which the Node.js binary was compiled.
//  Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc64', 'riscv64', 
// 's390x', and 'x64'.
//if i want to need a what is RAM in my computer inside c Drive then i can use os.arch()
console.log("CPU Architecture:", os.arch());



//=====================================================================================================
//4.constants
//Returns: <Object>
//Contains commonly used operating system-specific constants for error codes, process signals, and so on
//what is provide??
//What it provides
// Error Codes: os.constants.errno (e.g., EACCES, EEXIST).
// Signals: os.constants.signals (e.g., SIGINT, SIGHUP).
// File Flags: os.constants.O_ constants (e.g., O_CREAT, O_RDWR) for file operations.
// Process/Scheduling: os.constants.priority, os.constants.syscall. 
//why use it??
//Why use it?
// Portability: Avoid hardcoding OS-specific numbers; use symbolic names that work across different systems.
// Readability: Makes code self-documenting (e.g., if (err === os.constants.errno.ENOENT) vs. if (err === 2)).
// Discoverability: Allows you to easily find available OS-level constants without memorizing them. 
console.log("OS Constants:", os.constants);


//=====================================================================================================
//5.cpus
//Returns: <Object[]>
//Returns an array of objects containing information about each logical CPU core. 
// The array will be empty if no CPU information is available, such as if the /proc 
// file system is unavailable.

//why it is useful??
//Why it's used
// Performance Tuning: Developers use it to see CPU load and optimize tasks.
// Load Balancing: Distribute application tasks across available cores.
// System Info: Get hardware details for diagnostics or building system-aware tools
const cpus = os.cpus();
console.log(`Number of CPU cores: ${cpus.length}`);
console.log('First core model:', cpus[0].model);
console.log('First core speed:', cpus[0].speed, 'MHz');
console.log('First core idle time:', cpus[0].times.idle,'ms');

//=====================================================================================================
//****6.devnull
//Returns: <string>
//Provides the platform-specific path to the operating system's null device.
// On POSIX systems (Linux, macOS), this is typically /dev/null.
// On Windows systems,\\.\nul.
const devNullPath = os.devnull;
console.log("Path to Null Device:", devNullPath);

//7.endianness()
//Returns: <string>
//The term LE refers to the Little-Endian system, a specific method used in computer architecture 
// to store multi-byte data (like integers or floating-point numbers) in memory. It is widely used
//  by modern processor architectures, including the Intel x86 and most ARM chips
//Purpose:Purpose: It helps determine whether the system uses "big-endian" 
// (BE) or "little-endian" (LE) byte order.
//Practicale Usag:-
//Binary Data Handling: When working with binary files or streams, understanding the system's
//  endianness is crucial for correctly interpreting and manipulating multi-byte data 
// (e.g., integers, floating-point numbers). You might need to convert byte sequences if
//  the file format expects a different endianness than the system's.

//Network Commnication:Network Communication: Certain network protocols specify the byte
//  order for data transmission. Knowing the system's endianness helps ensure proper 
// serialization and deserialization of data when communicating over a network. 
console.log(`The system is endianess is: ${os.endianness()}`);


//=====================================================================================================
//***8.os.getPriority([pid])
//pid <integer> The process ID to retrieve scheduling priority for. Default: 0.
//Returns: <integer>
//Returns the scheduling priority for the process specified by pid.
//If pid is not provided or is 0, the priority of the current process is returned.
console.log("Current process priority:"+os.getPriority());


//=====================================================================================================
//9.homedir()
//Returns: <string>
//Returns the string path of the current user's home directory.
//On Windows, it uses the USERPROFILE environment variable if defined. 
// Otherwise it uses the path to the profile directory of the current user.
console.log("The Currunt User Home Directory is:",os.homedir());


//=====================================================================================================
//10.hostname()
//Returns: <string>
//Returns the host name of the operating system as a string.
//Purpose:
//The primary purpose of os.hostname() is to retrieve the network name of the machine where the
//  Node.js application is running. This can be useful for:
//Network Identification: Identifying the specific machine in a network,
//  especially in distributed systems or server clusters.
//Logging: Including the hostname in application logs to trace the origin of events or errors.
//Environment-Specific Logic: Adjusting application behavior based on the hostname,
//  for example, differentiating between development, staging, and production environments.
console.log("The Host Name of the System:",os.hostname());



//=====================================================================================================
//11.loadavg()
//Returns: <number[]>
//Returns an array containing the 1, 5, and 15 minute load averages.
//The load average is a measure of system activity calculated by the operating system 
// and expressed as a fractional number.
//The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
const loadAverages = os.loadavg();
console.log(`1-minute load average: ${loadAverages[0]}`);
console.log(`5-minute load average: ${loadAverages[1]}`);
console.log(`15-minute load average: ${loadAverages[2]}`);

//=====================================================================================================
//11.machine()
//Returns: <string>
//Returns the machine type as a string, such as arm, arm64, aarch64, mips,
//  mips64, ppc64, ppc64le, s390x, i386, i686, x86_64.
console.log("Machine:",os.machine());



//=====================================================================================================
//12.Networkinterface:-
//Returns: <Object>
//Returns an object containing network interfaces that have been assigned a network address.
//Each key on the returned object identifies a network interface.
//  The associated value is an array of objects that each describe an assigned network address.
//The properties available on the assigned network address object include:
//address <string> The assigned IPv4 or IPv6 address
//netmask <string> The IPv4 or IPv6 network mask
//family <string> Either IPv4 or IPv6
//mac <string> The MAC address of the network interface
//internal <boolean> true if the network interface is a loopback or similar interface that is not remotely accessible; otherwise false
//scopeid <number> The numeric IPv6 scope ID (only specified when family is IPv6)
//cidr <string> The assigned IPv4 or IPv6 address with the routing prefix in CIDR notation. If the netmask is invalid, this property is set to null
console.log("Network Interface:",os.networkInterfaces());



//=====================================================================================================
//13.Platform:-
//Returns: <string>
//Returns a string identifying the operating system platform for which the Node.js 
// binary was compiled. The value is set at compile time. Possible values are 'aix', 
// 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
console.log("The Platform:",os.platform());



//=====================================================================================================
//14.Release()
//Returns: <string>
//Returns the operating system as a string.
console.log("Release:"+os.release());




//=====================================================================================================
//15.setPriority([pid, ]priority);
//pid → process ID (number)
//priority → value between -20 (highest priority) and 19 (lowest priority)
os.setPriority(0,-20)
console.log("Priority:"+os.getPriority(0));




//=====================================================================================================
//16.tmpdir()
//Returns: <string>
//Returns the operating system's default directory for temporary files as a string.
console.log("Temporery Directory:"+os.tmpdir());



//=====================================================================================================
//17.type()
//Returns: <string>
//Returns the operating system name as returned by uname(3). 
// For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
console.log("Type:"+os.type());




//=====================================================================================================
//18.uptime();
//Returns: <integer>
// Returns the system uptime in number of seconds.
console.log("Up Time:"+os.uptime());




//=====================================================================================================
//19.userInfo([options])
//Returns: <Object>
//Returns information about the currently effective user. On POSIX platforms, this is typically
//  a subset of the password file. The returned object includes the username, 
// uid, gid, shell, and homedir. On Windows, the uid and gid fields are -1, and shell is null.
console.log("User Info:",os.userInfo());



//=====================================================================================================
//20.version();
//Returns: <string>
//Returns a string identifying the kernel version.
console.log("Version Name:"+os.version());