import React, { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-[120px] pb-[100px] px-[5%] bg-[var(--color-frost)] min-h-screen">
      <div className="max-w-[800px] mx-auto bg-white p-[40px] md:p-[60px] rounded-[20px] shadow-[0_8px_30px_rgba(10,25,49,.04)]">
        <h1 className="font-serif text-[2.5rem] font-bold text-[var(--color-navy)] mb-[30px] tracking-[-.02em]">
          Terms of Service
        </h1>
        
        <div className="prose prose-slate max-w-none text-[.95rem] leading-[1.8] text-[var(--color-muted)] font-light space-y-[24px]">
          <p>
            Welcome to Fluco (fluco.uk). By accessing or using our application, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Use of the Service</h2>
            <p>
              Fluco provides AI-powered tools designed to analyze LinkedIn profiles and generate personalized comments and engagement strategies. You are responsible for ensuring that your use of the generated content complies with LinkedIn's User Agreement and community policies. We are an independent tool and are not affiliated with, endorsed by, or sponsored by LinkedIn Corporation.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Account Registration and Security</h2>
            <p>
              To use certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and up-to-date information during the onboarding process and to promptly update any changes to your email or professional details.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Content and AI Limitations</h2>
            <p>
              While our AI aims to provide high-quality, context-aware suggestions, artificial intelligence is not flawless. You acknowledge that Fluco may occasionally generate inaccurate, inappropriate, or repetitive content. You are solely responsible for reviewing, editing, and approving any comments or content before posting them to LinkedIn or any other platform. We are not liable for any reputational damage, account restrictions, or other consequences resulting from the use of our generated text.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Acceptable Use</h2>
            <p>
              You agree not to misuse our platform. This includes, but is not limited to, attempting to reverse-engineer our software, bypassing our security measures, using automated scripts to scrape our data, or utilizing our AI to generate spam, hate speech, harassment, or misleading information. Violation of these rules may result in immediate suspension or termination of your account without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Payments and Subscriptions</h2>
            <p>
              If you subscribe to a paid plan, you agree to pay all applicable fees associated with your chosen tier. Subscriptions are billed automatically on a recurring basis. You may cancel your subscription at any time, but please note that all payments are non-refundable, and your access to premium features will continue until the end of your current billing cycle.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Intellectual Property</h2>
            <p>
              Fluco retains all ownership rights to the application, its original code, design, interface, and proprietary algorithms. However, you retain all rights to the specific prompts you input and the raw text output generated specifically for you, provided it is used in accordance with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Disclaimer of Warranties and Liability</h2>
            <p>
              The service is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not guarantee that the app will be uninterrupted, error-free, or completely secure. In no event shall Fluco or its developers be liable for any indirect, incidental, special, or consequential damages arising out of your use or inability to use the service.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. If we make material changes, we will notify you by updating the text in the app or via email. Your continued use of the app after such changes constitutes your acceptance of the new terms.
            </p>
          </div>

          <div className="pt-[20px] border-t border-[rgba(179,207,229,.3)] mt-[40px]">
            <p className="font-medium text-[var(--color-navy)]">
              If you have any questions or need to report a violation of these terms, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
