import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-[120px] pb-[100px] px-[5%] bg-[var(--color-frost)] min-h-screen">
      <div className="max-w-[800px] mx-auto bg-white p-[40px] md:p-[60px] rounded-[20px] shadow-[0_8px_30px_rgba(10,25,49,.04)]">
        <h1 className="font-serif text-[2.5rem] font-bold text-[var(--color-navy)] mb-[30px] tracking-[-.02em]">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate max-w-none text-[.95rem] leading-[1.8] text-[var(--color-muted)] font-light space-y-[24px]">
          <p>
            This Privacy Policy explains how Fluco (fluco.uk) collects, uses, and protects your personal information when you use our application. By using our service, you consent to the data practices described below.
          </p>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you register and set up your profile, including your name, email address, job title, and professional bio. As you use the app, we also collect the LinkedIn profile URLs you input, your custom AI prompts, and the generated comments and analysis. Additionally, we automatically collect standard usage data, such as login timestamps and interaction metrics, to ensure the app functions properly.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">How We Use Your Information</h2>
            <p>
              The primary purpose of collecting your data is to provide and personalize our core service. Your professional context (like your bio and job title) is fed into our AI to generate highly relevant and tailored LinkedIn comments. We also use your information to maintain your account, process subscription payments, provide customer support, and analyze usage trends to improve the application's performance.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Data Sharing and Third Parties</h2>
            <p>
              We do not sell your personal data. To operate our service, we share necessary information with trusted third-party service providers. This includes secure payment processors to handle your subscription, analytics platforms to monitor app health, and third-party AI providers (language models) used to generate the comments and analyze profiles. These partners are authorized to use your data only as necessary to provide these services to us.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Data Security and Retention</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. We retain your data for as long as your account is active or as needed to provide the services. If you choose to delete your account, we will securely erase your personal data from our active databases, except for information we are legally required to retain for tax or compliance purposes.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Your Rights and Choices</h2>
            <p>
              You have the right to access, update, or delete the personal information associated with your account. You can manage your profile details and preferences directly within the app. If you wish to exercise your right to be forgotten and permanently delete your account and all associated data, you may do so through the app settings or by contacting our support team.
            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-bold text-[var(--color-navy)] mb-[12px] mt-[32px]">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our technology, features, or legal requirements. If we make material changes, we will notify you by updating the text within the app or sending an email to the address associated with your account. Your continued use of Fluco after such updates constitutes your acceptance of the new privacy practices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
