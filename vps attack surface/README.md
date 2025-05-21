# VPS Attack Surface Visualization

![VPS Attack Surface Demo](vps%20attack%20surface.gif)

An interactive visualization of common attack vectors against Virtual Private Servers (VPS) and their mitigation strategies.

## Features

- **Real-world vulnerabilities** including Log4Shell, Heartbleed, and more
- **Interactive UI** to explore different attack types
- **Detailed explanations** of each attack vector
- **Mitigation strategies** for each vulnerability
- **Animated visualization** of attack patterns
- **Responsive design** works on desktop and mobile

## How It Works

The visualization demonstrates five major attack vectors:

1. **DDoS Attacks** (🌪️) - Overwhelming server resources
2. **Log4Shell** (📜) - Critical RCE in Log4j library
3. **SSH Brute Force** (🔑) - Password guessing attacks
4. **Heartbleed** (💔) - OpenSSL memory leak vulnerability
5. **SQL Injection** (💉) - Database manipulation attacks

Each attack is represented visually with animations and includes:
- Description of the vulnerability
- Potential impact if exploited
- Recommended mitigation strategies

## Usage

Simply open `vps_attack_surface.html` in any modern web browser. Use the buttons at the top to filter specific attack types.

## Technical Details

- Built with HTML5, CSS3, and vanilla JavaScript
- No external dependencies or frameworks
- Responsive design using CSS Flexbox
- Smooth animations with CSS keyframes
- Interactive elements with event listeners

## Contributing

Contributions are welcome! Please open an issue or pull request for any:
- Additional attack vectors
- Improved visualizations
- Enhanced explanations
- Better mitigation strategies

## License

MIT License - See [LICENSE](LICENSE) file for details

## About

Created as an educational resource to help visualize and understand common VPS security threats. Part of the [VideoThings](https://github.com/doingfedtime/VideoThings) collection.