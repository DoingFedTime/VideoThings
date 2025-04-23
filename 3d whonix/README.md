# Whonix 3D Topology Visualization

![3D Whonix Visualization](3dwhonix.gif)

This HTML file (`3dwhonix.html`) uses [Babylon.js](https://www.babylonjs.com/) to create a 3D visualization of the Whonix network topology. Whonix is a Debian-based security-focused Linux distribution that aims to provide anonymity and privacy.

## Overview

The visualization displays the following components of the Whonix network:

*   **Whonix-Workstation:** An isolated virtual machine for user applications. It routes all traffic through the Whonix-Gateway.
*   **Whonix-Gateway:** A Tor proxy virtual machine that acts as a gateway for all traffic from the Whonix-Workstation.
*   **Internet:** Represents the internet, accessed through the Tor network via the Whonix-Gateway.
*   **Host OS:** (Optional) Represents the host operating system, which may or may not be running a hypervisor.

The visualization also shows animated spheres moving along the connections between these components, representing data packets being routed through the network.

## Usage

To view the visualization, simply open the `3dwhonix.html` file in a web browser.

## Libraries

This visualization uses the following JavaScript libraries:

*   **Babylon.js:** A powerful, simple, open source 3D engine for creating and rendering 3D graphics in a web browser.

## License

[DoingFedTime](https://github.com/DoingFedTime)
