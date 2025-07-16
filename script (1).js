// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Company Election Center 2023 - Website Initialized');
    
    // Department names
    const departments = [
       "IT exxa", 
    "Sahdayti Gaddih Exxa", 
    "Maaliyyah exxa", 
     "Tellemmoh exxa", 
     "Taamsiyyi exxa", 
     "Kusaq exxa", 
     "Maqmiilwah Ayfaafayih Ludda", 
    "Murtissoh exxa", 
    "Ganun exxa", 
    "Limoh exxa"
    ];
    
    // Nominee names
    const nominees = [
        "Huseen Esmail",
        "Abdulkadir Yasiin",
        "Ebrahim Salih",
        "Hashim Amin",
        "Naji Abdulkadir",
        "Sadam Mohammed",
        "Makbul Abdulkadir",
        "Darasa Ousman",
        "Ahmed Mohammed",
        "Mohammed Salih"
    ];
    
    // Function to generate department forms dynamically
    function generateDepartmentForms() {
        const departmentFormsContainer = document.getElementById('department-forms');
        
        departments.forEach((department, deptIndex) => {
            // Create department form container
            const departmentForm = document.createElement('div');
            departmentForm.className = 'department-form';
            
            // Create department title
            const departmentTitle = document.createElement('h3');
            departmentTitle.className = 'department-title';
            departmentTitle.textContent = department;
            
            // Create form element
            const form = document.createElement('form');
            form.id = `form-${deptIndex}`;
            form.className = 'vote-form';
            
            // Create form grid container
            const formGrid = document.createElement('div');
            formGrid.className = 'form-grid';
            
            // Create inputs for each nominee
            nominees.forEach((nominee, nomIndex) => {
                // Create form group
                const formGroup = document.createElement('div');
                formGroup.className = 'form-group';
                
                // Create label
                const label = document.createElement('label');
                label.setAttribute('for', `dept-${deptIndex}-nom-${nomIndex}`);
                label.textContent = nominee;
                
                // Create input
                const input = document.createElement('input');
                input.type = 'number';
                input.id = `dept-${deptIndex}-nom-${nomIndex}`;
                input.name = `dept-${deptIndex}-nom-${nomIndex}`;
                input.placeholder = `Xongolo Caddo ${nominee}`;
                input.min = 0;
                input.max = 10;
                
                // Append elements
                formGroup.appendChild(label);
                formGroup.appendChild(input);
                formGrid.appendChild(formGroup);
            });
            
            // Create submit button
            const submitBtn = document.createElement('button');
            submitBtn.type = 'submit';
            submitBtn.className = 'submit-btn';
            submitBtn.textContent = 'Xongolo culus';
            
            // Append all elements
            form.appendChild(formGrid);
            form.appendChild(submitBtn);
            departmentForm.appendChild(departmentTitle);
            departmentForm.appendChild(form);
            departmentFormsContainer.appendChild(departmentForm);
            
            // Add form submit event listener
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show alert for demo purposes
                alert(`Votes for ${department} submitted successfully!`);
                
                // Reset the form
                form.reset();
            });
        });
    }
    
    // Create floating sand particles for the desert theme
    function createSandParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size between 1-4px
            const size = Math.random() * 3 + 1;
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random opacity
            const opacity = Math.random() * 0.5 + 0.1;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            
            // Apply styles
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background-color: rgba(230, 208, 165, ${opacity});
                left: ${posX}%;
                top: ${posY}%;
                border-radius: 50%;
                pointer-events: none;
                box-shadow: 0 0 ${size * 2}px rgba(255, 123, 0, 0.5);
                animation: floatParticle ${duration}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Add hover effects to nominee cards
    function addNomineeCardEffects() {
        const cards = document.querySelectorAll('.nominee-card');
        cards.forEach(card => {
            card.addEventListener('mouseover', function() {
                // Add a subtle glow effect
                this.style.boxShadow = '0 5px 25px rgba(0, 217, 255, 0.3)';
            });
            
            card.addEventListener('mouseout', function() {
                // Reset box shadow to original
                this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            });
        });
    }
    
    // Initialize functions
    generateDepartmentForms();
    createSandParticles();
    addNomineeCardEffects();
});