// PDF Generator for CV
function downloadCV() {
    // Show loading indicator
    const originalText = event.target.textContent;
    event.target.textContent = 'Generating PDF...';
    event.target.disabled = true;

    // Clone the entire page for PDF
    const element = document.createElement('div');
    element.style.width = '100%';
    element.style.maxWidth = '210mm'; // A4 width
    element.style.margin = '0 auto';
    element.style.padding = '15mm 20mm';
    element.style.backgroundColor = 'white';
    element.style.boxSizing = 'border-box';

    // Create CV content
    element.innerHTML = `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #333; padding-bottom: 20px;">
                <h1 style="margin: 0; font-size: 32px; color: #1a1a1a;">Jevgenijs Voronovs</h1>
                <p style="margin: 10px 0 5px; font-size: 18px; color: #666;">Frontend Developer</p>
                <div style="font-size: 12px; color: #666;">
                    <span>jevgenijs.voronovs@gmail.com</span> | 
                    <span>linkedin.com/in/jevgenijsvoronovs</span> | 
                    <span>github.com/JevgenijVoronov</span>
                </div>
            </div>

            <!-- Professional Overview -->
            <div style="margin-bottom: 25px;">
                <h2 style="color: #1a1a1a; font-size: 20px; border-bottom: 2px solid #666; padding-bottom: 5px; margin-bottom: 15px;">Professional Overview</h2>
                <p style="line-height: 1.6; font-size: 12px;">
                    Experienced Frontend Developer with 10+ years of expertise in building responsive, user-centric web applications. 
                    Currently working at Swisscom, specializing in Angular and modern JavaScript frameworks. Passionate about clean code, 
                    performance optimization, and sharing knowledge as a lecturer at JavaGuru.
                </p>
            </div>

            <!-- Key Highlights -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 16px; color: #1a1a1a; margin-bottom: 10px;">Key Highlights</h3>
                <ul style="line-height: 1.8; font-size: 12px; margin: 0; padding-left: 20px;">
                    <li><strong>10+ Years</strong> of professional frontend development experience</li>
                    <li><strong>Current Role:</strong> Frontend Developer at Swisscom</li>
                    <li><strong>Teaching:</strong> Lecturer at JavaGuru for Frontend courses</li>
                    <li><strong>Tech Stack:</strong> Angular, React, TypeScript, JavaScript</li>
                    <li><strong>Expertise:</strong> Complex UI development, performance optimization, testing, and mentoring</li>
                </ul>
            </div>

            <!-- Work Experience -->
            <div style="margin-bottom: 25px;">
                <h2 style="color: #1a1a1a; font-size: 20px; border-bottom: 2px solid #666; padding-bottom: 5px; margin-bottom: 15px;">Work Experience</h2>
                
                <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 14px; margin: 0; color: #1a1a1a;">Front-end Developer | Angular</h3>
                    <p style="font-size: 13px; margin: 5px 0; color: #444;"><strong>Swisscom</strong></p>
                    <p style="font-size: 11px; margin: 5px 0; color: #666; font-style: italic;">April 2022 – Present</p>
                    <ul style="line-height: 1.6; font-size: 11px; margin: 8px 0; padding-left: 20px;">
                        <li>Development and maintenance of complex B2B user interfaces</li>
                        <li>Refactoring and optimization application performance</li>
                        <li>Writing and maintaining tests (unit tests, integration tests)</li>
                        <li>Providing technical solution for new features</li>
                        <li>Deputy of Scrum Master</li>
                    </ul>
                </div>

                <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 14px; margin: 0; color: #1a1a1a;">Lecturer</h3>
                    <p style="font-size: 13px; margin: 5px 0; color: #444;"><strong>JavaGuru</strong></p>
                    <p style="font-size: 11px; margin: 5px 0; color: #666; font-style: italic;">November 2021 – Present</p>
                    <ul style="line-height: 1.6; font-size: 11px; margin: 8px 0; padding-left: 20px;">
                        <li>Frontend (Basic) course teacher</li>
                        <li>React course teacher</li>
                    </ul>
                </div>

                <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 14px; margin: 0; color: #1a1a1a;">Front-end Developer | React</h3>
                    <p style="font-size: 13px; margin: 5px 0; color: #444;"><strong>Intexsys, Riga</strong></p>
                    <p style="font-size: 11px; margin: 5px 0; color: #666; font-style: italic;">August 2016 – 2022</p>
                    <ul style="line-height: 1.6; font-size: 11px; margin: 8px 0; padding-left: 20px;">
                        <li>Participating in code and technical reviews</li>
                        <li>Performing quality assurance and troubleshooting code rendering across multiple devices</li>
                        <li>Launching A/B tests using Google Optimize software</li>
                        <li>Providing introductory and ongoing training for new frontend team members</li>
                        <li>Working with PM to keep on track with the project plan and timeline</li>
                        <li>Participated in the initial wave of developers implementing React.JS and rewriting legacy code</li>
                    </ul>
                </div>

                <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 14px; margin: 0; color: #1a1a1a;">Graphic Web Designer, Frontend Developer</h3>
                    <p style="font-size: 13px; margin: 5px 0; color: #444;"><strong>Aligorex IT Services, Riga</strong></p>
                    <p style="font-size: 11px; margin: 5px 0; color: #666; font-style: italic;">February 2014 – August 2016</p>
                    <ul style="line-height: 1.6; font-size: 11px; margin: 8px 0; padding-left: 20px;">
                        <li>Designed web page mockups using Adobe Photoshop software</li>
                        <li>Creating responsive landing pages using HTML, CSS and Javascript technologies</li>
                        <li>Maintained and updated website functionality in collaboration with backend developers</li>
                    </ul>
                </div>
            </div>

            <!-- Skills -->
            <div style="margin-bottom: 25px;">
                <h2 style="color: #1a1a1a; font-size: 20px; border-bottom: 2px solid #666; padding-bottom: 5px; margin-bottom: 15px;">Skills</h2>
                <div style="margin-bottom: 15px;">
                    <h3 style="font-size: 14px; margin: 0 0 8px 0; color: #1a1a1a;">Core Technologies</h3>
                    <p style="line-height: 1.6; font-size: 11px; margin: 0;">
                        HTML5, CSS3 (LESS), JavaScript, TypeScript, Angular, NGRX, React JS, Redux/Saga, Jest, 
                        jQuery, Git, Bootstrap, Responsive UI, Adobe Lightroom, Adobe Photoshop, Google Optimize
                    </p>
                </div>
                <div>
                    <h3 style="font-size: 14px; margin: 0 0 8px 0; color: #1a1a1a;">Additional Interests</h3>
                    <p style="line-height: 1.6; font-size: 11px; margin: 0;">
                        Next.JS, Vue.JS, Gatsby, Tailwind CSS
                    </p>
                </div>
            </div>

            <!-- Education -->
            <div style="margin-bottom: 25px;">
                <h2 style="color: #1a1a1a; font-size: 20px; border-bottom: 2px solid #666; padding-bottom: 5px; margin-bottom: 15px;">Education</h2>
                <p style="line-height: 1.6; font-size: 12px; margin: 5px 0;">
                    <strong>Latvia University of Life Sciences and Technologies, Jelgava</strong><br>
                    Bachelor's degree | 2013 – 2016 (unfinished)
                </p>
                <p style="line-height: 1.6; font-size: 12px; margin: 5px 0;">
                    <strong>Jelgavas 5. vidusskola, Jelgava</strong><br>
                    2010 – 2013
                </p>
            </div>

            <!-- Languages -->
            <div style="margin-bottom: 25px;">
                <h2 style="color: #1a1a1a; font-size: 20px; border-bottom: 2px solid #666; padding-bottom: 5px; margin-bottom: 15px;">Languages</h2>
                <ul style="line-height: 1.8; font-size: 12px; margin: 0; padding-left: 20px;">
                    <li>Russian (Native)</li>
                    <li>English (Working Professional)</li>
                    <li>Latvian (Working Professional)</li>
                    <li>German (Learning)</li>
                </ul>
            </div>
        </div>
    `;

    // Configure PDF options
    const opt = {
        margin: 10,
        filename: 'Jevgenijs_Voronovs_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().set(opt).from(element).save().then(() => {
        // Reset button
        event.target.textContent = originalText;
        event.target.disabled = false;
    }).catch((error) => {
        console.error('Error generating PDF:', error);
        event.target.textContent = originalText;
        event.target.disabled = false;
    });
}

