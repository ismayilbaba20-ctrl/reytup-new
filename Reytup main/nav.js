document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    injectFooter();
    setupGlobalBehaviors();
});

function injectNavbar() {
    const theme = localStorage.getItem('theme') || 'dark';
    const isDark = theme === 'dark';

    const navHTML = `
        <nav class="navbar">
            <div class="container flex justify-between items-center" style="width: 100%;">
                <a href="index.html" class="flex items-center gap-10">
                    <div style="width: 28px; height: 28px; background: var(--green); border-radius: 7px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px;">R</div>
                    <div style="display: flex; flex-direction: column; line-height: 1.2;">
                        <span style="color: white; font-weight: 600; font-size: 18px;">ReytUp</span>
                        <span style="color: var(--muted); font-size: 11px;">Smart Location Engine</span>
                    </div>
                </a>
                
                <div class="navbar-links flex items-center gap-24">
                    <a href="index.html" class="nav-link" data-page="index">Ana Səhifə</a>
                    <a href="index.html#how" class="nav-link">Necə İşləyir</a>
                    <a href="pricing.html" class="nav-link" data-page="pricing">Qiymətlər</a>
                    <a href="about.html" class="nav-link" data-page="about">Haqqımızda</a>
                    <a href="contact.html" class="nav-link" data-page="contact">Əlaqə</a>
                </div>

                <div class="flex items-center gap-16">
                    <div style="display: flex; align-items: center; gap: 8px; background: var(--surface2); padding: 4px 10px; border-radius: 999px; border: 1px solid var(--border);">
                        <div class="pulse-dot" style="width: 6px; height: 6px; background: var(--green); border-radius: 50%;"></div>
                        <span style="font-size: 11px; color: white;">Canlı</span>
                    </div>

                    <button id="theme-toggle" style="width: 36px; height: 36px; border: 1px solid var(--border); border-radius: 8px; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                        ${isDark ? '🌙' : '☀️'}
                    </button>

                    <div style="display: flex; align-items: center; gap: 4px; cursor: pointer; color: var(--muted); font-size: 13px;">
                        <span>AZE</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>

                    <a href="analyze.html" class="btn btn-primary" style="padding: 10px 24px; border-radius: 999px;">Analizi Başlat</a>
                    
                    <div class="mobile-toggle" style="display: none; cursor: pointer;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </div>
                </div>
            </div>
        </nav>
        <div class="mobile-menu" style="display: none; position: fixed; top: 68px; left: 0; width: 100%; background: var(--surface); border-bottom: 1px solid var(--border); z-index: 999; padding: 24px;">
             <div class="flex flex-mobile-stack gap-16">
                <a href="index.html">Ana Səhifə</a>
                <a href="index.html#how">Necə İşləyir</a>
                <a href="pricing.html">Qiymətlər</a>
                <a href="about.html">Haqqımızda</a>
                <a href="contact.html">Əlaqə</a>
             </div>
        </div>
    `;
    
    const container = document.getElementById('nav-container');
    if (container) {
        container.innerHTML = navHTML;
        
        // Handle Theme Toggle Click
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                themeBtn.innerHTML = newTheme === 'dark' ? '🌙' : '☀️';
            });
        }

        // Handle Active Link
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.style.color = 'white';
            } else {
                link.style.color = 'var(--muted)';
            }
        });

        // Mobile logic
        const toggle = document.querySelector('.mobile-toggle');
        const menu = document.querySelector('.mobile-menu');
        if (window.innerWidth <= 768) {
            toggle.style.display = 'block';
        }
        toggle.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        });
    }
}

function injectFooter() {
    // ... (footer content remains same, only showing updated wrap)
    const footerHTML = `
        <footer class="footer">
            <div class="container grid grid-4 gap-48" style="grid-template-columns: 2fr 1fr 1fr 1fr;">
                <div class="flex flex-column gap-16" style="display: flex; flex-direction: column;">
                    <a href="index.html" class="flex items-center gap-10">
                        <div style="width: 28px; height: 28px; background: var(--green); border-radius: 7px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px;">R</div>
                        <span style="color: white; font-weight: 600; font-size: 18px;">ReytUp</span>
                    </a>
                    <p class="muted" style="font-size: 14px; margin-top: 12px;">AI ilə biznes yerini analiz et.</p>
                    <p class="muted" style="font-size: 13px; margin-top: auto;">© 2026 ReytUp. Bütün hüquqlar qorunur.</p>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <h4 style="font-size: 15px; margin-bottom: 8px;">Platforma</h4>
                    <a href="index.html" class="muted hover-white" style="font-size: 14px;">Ana Səhifə</a>
                    <a href="analyze.html" class="muted hover-white" style="font-size: 14px;">Analiz</a>
                    <a href="pricing.html" class="muted hover-white" style="font-size: 14px;">Qiymətlər</a>
                </div>

                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <h4 style="font-size: 15px; margin-bottom: 8px;">Şirkət</h4>
                    <a href="about.html" class="muted hover-white" style="font-size: 14px;">Haqqımızda</a>
                    <a href="contact.html" class="muted hover-white" style="font-size: 14px;">Əlaqə</a>
                    <a href="#" class="muted hover-white" style="font-size: 14px;">Məxfilik</a>
                </div>

                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <h4 style="font-size: 15px; margin-bottom: 8px;">Əlaqə</h4>
                    <span class="muted" style="font-size: 14px;">info@reytup.az</span>
                    <span class="muted" style="font-size: 14px;">+994 12 555 00 11</span>
                    <span class="muted" style="font-size: 14px;">Bakı AZ</span>
                </div>
            </div>
        </footer>
    `;
    
    const container = document.getElementById('footer-container');
    if (container) {
        container.innerHTML = footerHTML;
    }
}

function setupGlobalBehaviors() {
    // Apply initial theme
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    // Scroll Progress
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Back to top
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = progress + '%';

        if (window.pageYOffset > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Add CSS for hover white
    const style = document.createElement('style');
    style.textContent = `
        .hover-white:hover { color: white !important; }
        .gap-10 { gap: 10px; }
        .gap-16 { gap: 16px; }
        .gap-24 { gap: 24px; }
        .gap-48 { gap: 48px; }
        
        @keyframes pulse-dot {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
        }
        .pulse-dot {
            animation: pulse-dot 1.5s infinite;
        }
    `;
    document.head.appendChild(style);
}
