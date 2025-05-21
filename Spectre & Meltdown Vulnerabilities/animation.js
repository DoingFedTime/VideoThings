// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const animationStage = document.querySelector('.animation-stage');
    const playButton = document.getElementById('play-btn');
    const toggleButton = document.getElementById('toggle-btn');
    
    // Animation state
    let isPlaying = false;
    let currentAnimation = 'spectre'; // Start with Spectre animation
    let animationTimeline = [];
    let currentStep = 0;
    let animationInterval;
    
    // Set up event listeners
    playButton.addEventListener('click', togglePlay);
    toggleButton.addEventListener('click', toggleAnimationType);
    
    // Initialize the animation stage
    initAnimationStage();
    
    // Function to toggle between play and pause
    function togglePlay() {
        if (isPlaying) {
            pauseAnimation();
            playButton.textContent = 'Play Animation';
        } else {
            startAnimation();
            playButton.textContent = 'Pause Animation';
        }
        isPlaying = !isPlaying;
    }
    
    // Function to toggle between Spectre and Meltdown animations
    function toggleAnimationType() {
        // Clear the current animation
        clearAnimation();
        
        // Toggle the animation type
        currentAnimation = currentAnimation === 'spectre' ? 'meltdown' : 'spectre';
        toggleButton.textContent = `Toggle to ${currentAnimation === 'spectre' ? 'Meltdown' : 'Spectre'}`;
        
        // Reset and initialize the animation stage
        initAnimationStage();
        
        // If animation was playing, restart it
        if (isPlaying) {
            startAnimation();
        }
    }
    
    // Function to initialize the animation stage based on current animation type
    function initAnimationStage() {
        // Clear the animation stage
        animationStage.innerHTML = '';
        
        // Create step indicator
        const stepIndicator = document.createElement('div');
        stepIndicator.className = 'step-indicator';
        stepIndicator.id = 'step-indicator';
        animationStage.appendChild(stepIndicator);
        
        if (currentAnimation === 'spectre') {
            initSpectreAnimation();
        } else {
            initMeltdownAnimation();
        }
    }
    
    // Function to initialize Spectre animation
    function initSpectreAnimation() {
        // Create CPU
        const cpu = document.createElement('div');
        cpu.className = 'cpu';
        cpu.textContent = 'CPU';
        cpu.style.left = '50%';
        cpu.style.top = '50%';
        cpu.style.transform = 'translate(-50%, -50%)';
        animationStage.appendChild(cpu);
        
        // Create branch predictor
        const branchPredictor = document.createElement('div');
        branchPredictor.className = 'branch-predictor';
        branchPredictor.id = 'branch-predictor';
        branchPredictor.textContent = 'Branch Predictor';
        branchPredictor.style.left = '50%';
        branchPredictor.style.top = '25%';
        branchPredictor.style.transform = 'translateX(-50%)';
        animationStage.appendChild(branchPredictor);
        
        // Create memory
        const memory = document.createElement('div');
        memory.className = 'memory';
        memory.style.left = '20%';
        memory.style.top = '50%';
        memory.style.transform = 'translateY(-50%)';
        
        // Add memory blocks
        for (let i = 0; i < 10; i++) {
            const memoryBlock = document.createElement('div');
            memoryBlock.className = 'memory-block';
            memoryBlock.textContent = i === 5 ? 'SECRET' : `Data ${i}`;
            if (i === 5) {
                memoryBlock.classList.add('secret-data');
                memoryBlock.id = 'secret-data';
            }
            memory.appendChild(memoryBlock);
        }
        animationStage.appendChild(memory);
        
        // Create cache
        const cache = document.createElement('div');
        cache.className = 'cache';
        cache.id = 'cache';
        cache.style.right = '20%';
        cache.style.top = '50%';
        cache.style.transform = 'translateY(-50%)';
        
        // Add cache lines
        for (let i = 0; i < 8; i++) {
            const cacheLine = document.createElement('div');
            cacheLine.className = 'cache-line';
            cacheLine.textContent = `Line ${i}`;
            cacheLine.id = `cache-line-${i}`;
            cache.appendChild(cacheLine);
        }
        animationStage.appendChild(cache);
        
        // Add labels
        const memoryLabel = document.createElement('div');
        memoryLabel.className = 'label';
        memoryLabel.textContent = 'Memory';
        memoryLabel.style.left = '20%';
        memoryLabel.style.top = '20%';
        animationStage.appendChild(memoryLabel);
        
        const cacheLabel = document.createElement('div');
        cacheLabel.className = 'label';
        cacheLabel.textContent = 'Cache';
        cacheLabel.style.right = '20%';
        cacheLabel.style.top = '20%';
        animationStage.appendChild(cacheLabel);
        
        const cpuLabel = document.createElement('div');
        cpuLabel.className = 'label';
        cpuLabel.textContent = 'CPU';
        cpuLabel.style.left = '50%';
        cpuLabel.style.top = '40%';
        cpuLabel.style.transform = 'translateX(-50%)';
        animationStage.appendChild(cpuLabel);
        
        // Define the animation timeline for Spectre
        animationTimeline = [
            // Step 1: Train branch predictor
            function() {
                updateStepIndicator('Step 1: Training Branch Predictor');
                const branchPredictor = document.getElementById('branch-predictor');
                branchPredictor.classList.add('highlight');
                branchPredictor.style.backgroundColor = '#f39c12';
            },
            
            // Step 2: Speculative execution begins
            function() {
                updateStepIndicator('Step 2: Speculative Execution Begins');
                const branchPredictor = document.getElementById('branch-predictor');
                branchPredictor.classList.remove('highlight');
                
                // Create data packet for visualization
                const dataPacket = document.createElement('div');
                dataPacket.className = 'data-packet';
                dataPacket.id = 'data-packet';
                dataPacket.style.left = '50%';
                dataPacket.style.top = '30%';
                animationStage.appendChild(dataPacket);
                
                // Animate data packet movement
                setTimeout(() => {
                    dataPacket.style.transition = 'all 1.5s ease';
                    dataPacket.style.left = '25%';
                    dataPacket.style.top = '50%';
                }, 100);
            },
            
            // Step 3: Access secret data
            function() {
                updateStepIndicator('Step 3: Accessing Secret Data');
                const secretData = document.getElementById('secret-data');
                secretData.classList.add('highlight');
                
                // Create data flow visualization
                const dataFlow = document.createElement('div');
                dataFlow.className = 'data-flow';
                dataFlow.style.left = '25%';
                dataFlow.style.top = '50%';
                dataFlow.style.width = '0';
                animationStage.appendChild(dataFlow);
                
                // Animate data flow
                setTimeout(() => {
                    dataFlow.style.transition = 'all 1.5s ease';
                    dataFlow.style.width = '25%';
                }, 100);
                
                // Move data packet
                const dataPacket = document.getElementById('data-packet');
                dataPacket.style.transition = 'all 1.5s ease';
                dataPacket.style.left = '50%';
                dataPacket.style.top = '50%';
            },
            
            // Step 4: Data flows to cache through side channel
            function() {
                updateStepIndicator('Step 4: Data Flows to Cache (Side Channel)');
                const secretData = document.getElementById('secret-data');
                secretData.classList.remove('highlight');
                
                // Create new data flow visualization
                const dataFlow = document.createElement('div');
                dataFlow.className = 'data-flow';
                dataFlow.style.left = '50%';
                dataFlow.style.top = '50%';
                dataFlow.style.width = '0';
                animationStage.appendChild(dataFlow);
                
                // Animate data flow
                setTimeout(() => {
                    dataFlow.style.transition = 'all 1.5s ease';
                    dataFlow.style.width = '30%';
                }, 100);
                
                // Move data packet
                const dataPacket = document.getElementById('data-packet');
                dataPacket.style.transition = 'all 1.5s ease';
                dataPacket.style.left = '80%';
                dataPacket.style.top = '50%';
            },
            
            // Step 5: Cache line is modified
            function() {
                updateStepIndicator('Step 5: Cache Line Modified');
                const cacheLine = document.getElementById('cache-line-5');
                cacheLine.style.backgroundColor = 'rgba(231, 76, 60, 0.7)';
                cacheLine.classList.add('highlight');
                
                // Remove data packet
                const dataPacket = document.getElementById('data-packet');
                dataPacket.remove();
            },
            
            // Step 6: Attacker measures timing to extract data
            function() {
                updateStepIndicator('Step 6: Attacker Extracts Secret via Timing');
                
                // Create attacker visualization
                const attackerNote = document.createElement('div');
                attackerNote.className = 'label';
                attackerNote.textContent = 'SECRET EXTRACTED!';
                attackerNote.style.right = '20%';
                attackerNote.style.bottom = '20%';
                attackerNote.style.color = '#e74c3c';
                attackerNote.style.fontSize = '18px';
                attackerNote.classList.add('highlight');
                animationStage.appendChild(attackerNote);
            },
            
            // Reset animation
            function() {
                updateStepIndicator('Spectre Attack Complete - Restarting...');
                setTimeout(() => {
                    clearAnimation();
                    initAnimationStage();
                    currentStep = 0;
                    if (isPlaying) {
                        executeCurrentStep();
                    }
                }, 2000);
            }
        ];
        
        // Reset current step
        currentStep = 0;
    }
    
    // Function to initialize Meltdown animation
    function initMeltdownAnimation() {
        // Create kernel and user space
        const kernelSpace = document.createElement('div');
        kernelSpace.className = 'kernel-space';
        kernelSpace.style.left = '20%';
        kernelSpace.style.top = '20%';
        kernelSpace.style.width = '60%';
        kernelSpace.style.height = '30%';
        
        const kernelLabel = document.createElement('div');
        kernelLabel.className = 'label';
        kernelLabel.textContent = 'Kernel Memory (Protected)';
        kernelSpace.appendChild(kernelLabel);
        
        const secretData = document.createElement('div');
        secretData.className = 'memory-block secret-data';
        secretData.textContent = 'SECRET KEY';
        secretData.id = 'kernel-secret';
        secretData.style.width = '80%';
        secretData.style.margin = '10px';
        kernelSpace.appendChild(secretData);
        
        animationStage.appendChild(kernelSpace);
        
        const userSpace = document.createElement('div');
        userSpace.className = 'user-space';
        userSpace.style.left = '20%';
        userSpace.style.top = '60%';
        userSpace.style.width = '60%';
        userSpace.style.height = '30%';
        
        const userLabel = document.createElement('div');
        userLabel.className = 'label';
        userLabel.textContent = 'User Space (Unprivileged)';
        userSpace.appendChild(userLabel);
        
        const attackCode = document.createElement('div');
        attackCode.className = 'memory-block';
        attackCode.textContent = 'Attack Code';
        attackCode.id = 'attack-code';
        attackCode.style.width = '80%';
        attackCode.style.margin = '10px';
        attackCode.style.backgroundColor = '#3498db';
        userSpace.appendChild(attackCode);
        
        animationStage.appendChild(userSpace);
        
        // Create CPU
        const cpu = document.createElement('div');
        cpu.className = 'cpu';
        cpu.textContent = 'CPU';
        cpu.style.right = '20%';
        cpu.style.top = '50%';
        cpu.style.transform = 'translateY(-50%)';
        animationStage.appendChild(cpu);
        
        // Create cache
        const cache = document.createElement('div');
        cache.className = 'cache';
        cache.id = 'meltdown-cache';
        cache.style.right = '30%';
        cache.style.bottom = '20%';
        
        // Add cache lines
        for (let i = 0; i < 8; i++) {
            const cacheLine = document.createElement('div');
            cacheLine.className = 'cache-line';
            cacheLine.textContent = `Line ${i}`;
            cacheLine.id = `meltdown-cache-line-${i}`;
            cache.appendChild(cacheLine);
        }
        animationStage.appendChild(cache);
        
        // Add cache label
        const cacheLabel = document.createElement('div');
        cacheLabel.className = 'label';
        cacheLabel.textContent = 'Cache';
        cacheLabel.style.right = '30%';
        cacheLabel.style.bottom = '15%';
        animationStage.appendChild(cacheLabel);
        
        // Define the animation timeline for Meltdown
        animationTimeline = [
            // Step 1: Attack code attempts to access kernel memory
            function() {
                updateStepIndicator('Step 1: Attack Code Attempts Kernel Access');
                const attackCode = document.getElementById('attack-code');
                attackCode.classList.add('highlight');
                
                // Create access arrow
                const accessArrow = document.createElement('div');
                accessArrow.className = 'data-flow';
                accessArrow.style.left = '50%';
                accessArrow.style.top = '60%';
                accessArrow.style.height = '0';
                accessArrow.style.width = '3px';
                accessArrow.style.transformOrigin = 'bottom center';
                animationStage.appendChild(accessArrow);
                
                // Animate arrow
                setTimeout(() => {
                    accessArrow.style.transition = 'all 1.5s ease';
                    accessArrow.style.height = '30%';
                }, 100);
            },
            
            // Step 2: Out-of-order execution begins
            function() {
                updateStepIndicator('Step 2: Out-of-Order Execution Begins');
                
                // Create OOO note
                const oooNote = document.createElement('div');
                oooNote.className = 'label';
                oooNote.textContent = 'Out-of-Order Execution';
                oooNote.style.right = '25%';
                oooNote.style.top = '40%';
                oooNote.style.color = '#e74c3c';
                oooNote.classList.add('highlight');
                animationStage.appendChild(oooNote);
                
                // Highlight kernel secret
                const kernelSecret = document.getElementById('kernel-secret');
                kernelSecret.classList.add('highlight');
            },
            
            // Step 3: Secret data is loaded speculatively
            function() {
                updateStepIndicator('Step 3: Secret Data Loaded Speculatively');
                
                // Create data packet
                const dataPacket = document.createElement('div');
                dataPacket.className = 'data-packet';
                dataPacket.id = 'meltdown-data-packet';
                dataPacket.style.left = '50%';
                dataPacket.style.top = '30%';
                animationStage.appendChild(dataPacket);
                
                // Animate data packet
                setTimeout(() => {
                    dataPacket.style.transition = 'all 1.5s ease';
                    dataPacket.style.right = '25%';
                    dataPacket.style.top = '50%';
                    dataPacket.style.left = 'auto';
                }, 100);
            },
            
            // Step 4: Data flows to cache before exception
            function() {
                updateStepIndicator('Step 4: Data Flows to Cache Before Exception');
                
                // Create data flow
                const dataFlow = document.createElement('div');
                dataFlow.className = 'data-flow';
                dataFlow.style.right = '25%';
                dataFlow.style.top = '50%';
                dataFlow.style.width = '0';
                dataFlow.style.transformOrigin = 'right center';
                animationStage.appendChild(dataFlow);
                
                // Animate data flow
                setTimeout(() => {
                    dataFlow.style.transition = 'all 1.5s ease';
                    dataFlow.style.width = '15%';
                }, 100);
                
                // Move data packet
                const dataPacket = document.getElementById('meltdown-data-packet');
                dataPacket.style.transition = 'all 1.5s ease';
                dataPacket.style.right = '30%';
                dataPacket.style.top = '70%';
            },
            
            // Step 5: Exception is raised, but too late
            function() {
                updateStepIndicator('Step 5: Exception Raised, But Too Late!');
                
                // Create exception note
                const exceptionNote = document.createElement('div');
                exceptionNote.className = 'label';
                exceptionNote.textContent = 'EXCEPTION!';
                exceptionNote.style.left = '50%';
                exceptionNote.style.top = '50%';
                exceptionNote.style.transform = 'translate(-50%, -50%)';
                exceptionNote.style.color = '#e74c3c';
                exceptionNote.style.fontSize = '24px';
                exceptionNote.classList.add('highlight');
                animationStage.appendChild(exceptionNote);
                
                // Highlight cache line
                const cacheLine = document.getElementById('meltdown-cache-line-3');
                cacheLine.style.backgroundColor = 'rgba(231, 76, 60, 0.7)';
                cacheLine.classList.add('highlight');
                
                // Remove data packet
                const dataPacket = document.getElementById('meltdown-data-packet');
                dataPacket.remove();
            },
            
            // Step 6: Attacker measures timing to extract data
            function() {
                updateStepIndicator('Step 6: Attacker Extracts Secret via Timing');
                
                // Create attacker note
                const attackerNote = document.createElement('div');
                attackerNote.className = 'label';
                attackerNote.textContent = 'SECRET EXTRACTED!';
                attackerNote.style.right = '30%';
                attackerNote.style.bottom = '30%';
                attackerNote.style.color = '#e74c3c';
                attackerNote.style.fontSize = '18px';
                attackerNote.classList.add('highlight');
                animationStage.appendChild(attackerNote);
            },
            
            // Reset animation
            function() {
                updateStepIndicator('Meltdown Attack Complete - Restarting...');
                setTimeout(() => {
                    clearAnimation();
                    initAnimationStage();
                    currentStep = 0;
                    if (isPlaying) {
                        executeCurrentStep();
                    }
                }, 2000);
            }
        ];
        
        // Reset current step
        currentStep = 0;
    }
    
    // Function to start the animation
    function startAnimation() {
        if (animationInterval) {
            clearInterval(animationInterval);
        }
        
        // Execute the current step immediately
        executeCurrentStep();
        
        // Set up interval for subsequent steps
        animationInterval = setInterval(() => {
            currentStep++;
            if (currentStep >= animationTimeline.length) {
                currentStep = 0;
            }
            executeCurrentStep();
        }, 4000); // 4 seconds per step
    }
    
    // Function to pause the animation
    function pauseAnimation() {
        if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
        }
    }
    
    // Function to clear the animation
    function clearAnimation() {
        pauseAnimation();
        currentStep = 0;
    }
    
    // Function to execute the current animation step
    function executeCurrentStep() {
        if (animationTimeline[currentStep]) {
            animationTimeline[currentStep]();
        }
    }
    
    // Function to update the step indicator
    function updateStepIndicator(text) {
        const stepIndicator = document.getElementById('step-indicator');
        if (stepIndicator) {
            stepIndicator.textContent = text;
        }
    }
});