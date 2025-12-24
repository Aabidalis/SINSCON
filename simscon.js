function closePopup() {
            const overlay = document.querySelector('.popup-overlay');
            overlay.style.animation = 'slideOut 0.5s ease-out forwards';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        }

        

        // Add slideOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideOut {
                to {
                    opacity: 0;
                    transform: translateY(-50px);
                }
            }
        `;
        document.head.appendChild(style);