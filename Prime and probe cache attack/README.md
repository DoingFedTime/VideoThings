# Prime and Probe Cache Attack Animation

This project provides a visual animation of the Prime and Probe cache side-channel attack technique using a single HTML file (`prime_probe_animation.html`). It aims to make the concept easier to understand through interactive steps.

## What is Prime and Probe?

Prime and Probe is a type of cache-based side-channel attack. It allows an attacker process to potentially deduce memory access patterns of a victim process running on the same physical CPU core, even without direct access to the victim's memory. This works by exploiting the shared nature of CPU caches (like the L3 cache).

The attack proceeds in three main phases:

1.  **Prime:** The attacker fills specific sets within the shared cache with their own data. They choose cache sets they want to monitor.
2.  **Wait (Victim Execution):** The attacker waits for a period, allowing the victim process to execute. During its execution, if the victim accesses memory locations that map to the same cache sets primed by the attacker, the victim's data will replace (evict) the attacker's data in those cache lines.
3.  **Probe:** The attacker re-accesses their original data that they used in the Prime phase.
    *   If accessing a piece of data is **fast** (a cache *hit*), it means the data was still in the cache, implying the victim did *not* access a memory location mapping to that specific cache line during the Wait phase.
    *   If accessing a piece of data is **slow** (a cache *miss*), it means the data was evicted from the cache and had to be fetched from main memory. This implies the victim *did* access a memory location mapping to that cache line, revealing information about the victim's activity.

By repeatedly priming and probing different cache sets, the attacker can build a profile of the victim's memory access patterns, potentially leaking sensitive information like cryptographic keys, user input, or website browsing history.

## The Animation (`prime_probe_animation.html`)

The included HTML file uses CSS animations and basic JavaScript to simulate these steps:

*   **Visual Components:** Represents the CPU, a simplified Cache (with sets and lines), Main Memory, the Attacker process, and the Victim process.
*   **Interactive Steps:** Buttons allow you to trigger each phase:
    *   **Prime:** Shows the attacker filling designated cache lines (highlighted in the attacker's color).
    *   **Victim Access:** Simulates the victim accessing memory. If it targets a primed cache set, the corresponding line is evicted (changes to the victim's color). It also shows the victim accessing a non-primed set for comparison.
    *   **Probe:** Shows the attacker re-accessing their lines. Lines that were *not* evicted result in a fast "Hit" (green border flash). Lines that *were* evicted result in a slow "Miss" (red border flash, followed by a simulated memory access and refill).
*   **Description:** Text updates explain what's happening in each phase.

A GIF demonstrating the animation flow is also included in this directory.

## How to Get and Run

You can find the source code and files for this animation in the `Prime and probe cache attack` folder within the following GitHub repository:

[https://github.com/doingfedtime/VideoThings/tree/main/Prime%20and%20probe%20cache%20attack](https://github.com/doingfedtime/VideoThings/tree/main/Prime%20and%20probe%20cache%20attack)

To run the animation:

1.  Download the `prime_probe_animation.html` file (and optionally the demonstration GIF, `Prime and probe cache attack.gif`) from the repository link above.
2.  Open the `prime_probe_animation.html` file directly in your web browser (e.g., Chrome, Firefox, Edge).

No special setup or server is required.