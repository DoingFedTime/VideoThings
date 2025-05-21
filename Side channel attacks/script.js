// Side channel attack data
const attacks = [
    {
        name: "TIMING ATTACK",
        description: "Exploits variations in execution time to deduce secret information. By measuring how long operations take, attackers can infer private keys or passwords.",
        color: "#ff2a6d",
        animate: function(ctx, canvas) {
            // Simulate timing differences
            const baseTime = 50;
            const secretPattern = [2, 5, 3, 7, 1]; // Simulated secret pattern
            
            let x = 0;
            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw timing graph
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                
                for (let i = 0; i < 20; i++) {
                    const y = 100 + Math.sin(x/20 + i) * 30;
                    const timeVariation = secretPattern[i % secretPattern.length] * 10;
                    ctx.lineTo(i * 40, y + timeVariation);
                }
                
                ctx.stroke();
                
                // Draw "probe" effect
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.3;
                ctx.fillRect(x % canvas.width, 0, 50, canvas.height);
                ctx.globalAlpha = 1.0;
                
                x += 2;
                requestAnimationFrame(draw);
            };
            
            draw();
        }
    },
    {
        name: "POWER ANALYSIS",
        description: "Measures power consumption to extract cryptographic keys. Different operations consume different amounts of power, revealing secret data patterns.",
        color: "#05d9e8",
        animate: function(ctx, canvas) {
            // Simulate power fluctuations
            let phase = 0;
            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw power trace
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 3;
                ctx.beginPath();
                
                for (let x = 0; x < canvas.width; x++) {
                    const noise = Math.random() * 10;
                    const y = canvas.height/2 + 
                              Math.sin(x/30 + phase) * 50 + 
                              Math.sin(x/5) * 20 + 
                              noise;
                    ctx.lineTo(x, y);
                }
                
                ctx.stroke();
                
                // Highlight operations
                for (let i = 0; i < 3; i++) {
                    const opX = (phase * 10 + i * 200) % canvas.width;
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = 0.1;
                    ctx.fillRect(opX - 30, 0, 60, canvas.height);
                    ctx.globalAlpha = 1.0;
                }
                
                phase += 0.02;
                requestAnimationFrame(draw);
            };
            
            draw();
        }
    },
    {
        name: "EM RADIATION",
        description: "Captures electromagnetic leaks from devices to reconstruct sensitive data. Even air-gapped systems can be compromised through EM emissions.",
        color: "#d300c5",
        animate: function(ctx, canvas) {
            // Simulate EM radiation
            let time = 0;
            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw EM waves
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1;
                
                for (let i = 0; i < 5; i++) {
                    ctx.beginPath();
                    for (let x = 0; x < canvas.width; x++) {
                        const y = canvas.height/2 + 
                                  Math.sin(x/20 + time + i) * 30 * (1 - i/10) +
                                  Math.sin(x/3 + time*2) * 10;
                        ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                }
                
                // Draw "data bursts"
                if (Math.sin(time * 3) > 0.9) {
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = 0.3;
                    ctx.beginPath();
                    ctx.arc(
                        canvas.width/2 + Math.sin(time) * 100,
                        canvas.height/2 + Math.cos(time) * 50,
                        50 + Math.sin(time*5) * 20,
                        0, Math.PI * 2
                    );
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                }
                
                time += 0.05;
                requestAnimationFrame(draw);
            };
            
            draw();
        }
    },
    {
        name: "CACHE ATTACK",
        description: "Exploits CPU cache behavior to access another process's memory. Flush+Reload and Prime+Probe are common variants of this attack.",
        color: "#00ff9d",
        animate: function(ctx, canvas) {
            // Simulate cache access patterns
            let frame = 0;
            const memorySize = 16;
            const memory = Array(memorySize).fill(0);
            
            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Simulate memory access pattern
                if (frame % 10 === 0) {
                    // "Secret" access pattern
                    const secretAccess = [3, 7, 2, 9, 14];
                    secretAccess.forEach(i => memory[i] = 1);
                    
                    // Random noise
                    for (let i = 0; i < memorySize; i++) {
                        if (Math.random() < 0.2) memory[i] = 1;
                    }
                }
                
                // Draw memory cells
                const cellWidth = canvas.width / memorySize;
                for (let i = 0; i < memorySize; i++) {
                    if (memory[i]) {
                        ctx.fillStyle = this.color;
                        ctx.globalAlpha = 0.7;
                        ctx.fillRect(i * cellWidth, 0, cellWidth, canvas.height);
                        
                        // Draw "cache hit" effect
                        if (frame % 5 === 0 && Math.random() < 0.3) {
                            ctx.globalAlpha = 0.3;
                            ctx.fillStyle = "#ffffff";
                            ctx.fillRect(i * cellWidth, 0, cellWidth, canvas.height);
                        }
                    }
                    
                    ctx.globalAlpha = 1.0;
                    ctx.strokeStyle = "#ffffff";
                    ctx.lineWidth = 1;
                    ctx.strokeRect(i * cellWidth, 0, cellWidth, canvas.height);
                    
                    // Gradually fade memory accesses
                    if (memory[i] > 0) memory[i] -= 0.02;
                }
                
                frame++;
                requestAnimationFrame(draw);
            };
            
            draw();
        }
    }
];

// Initialize animation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('attackContainer');
    const attackName = document.getElementById('attackName');
    const attackDesc = document.getElementById('attackDescription');
    
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    // Cycle through attacks
    let currentAttack = 0;
    let animationId = null;
    
    function startAttack(index) {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        
        currentAttack = index;
        const attack = attacks[index];
        
        // Update info panel
        attackName.textContent = attack.name;
        attackName.style.textShadow = `0 0 10px ${attack.color}`;
        attackDesc.textContent = attack.description;
        
        // Start animation
        attack.animate(ctx, canvas);
    }
    
    // Rotate attacks every 8 seconds
    startAttack(0);
    setInterval(() => {
        startAttack((currentAttack + 1) % attacks.length);
    }, 8000);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        startAttack(currentAttack);
    });
});