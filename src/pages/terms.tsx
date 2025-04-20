import React from 'react';
import PageWrapper from '../components/PageWrapper';

const TOS = () => {
  return (
    <PageWrapper
      title="Terms of Service | Vausly Media"
      description="Read the terms and conditions of using Vausly Media's website and services."
      keywords="terms of service, vausly media, rules, agreement, usage policy"
    >
      <div className="min-h-screen flex justify-center px-4 py-20">
        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 text-white">
          <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
          <p className="mb-4">
            Welcome to Vausly Media. By accessing or using our website and services, you agree to be bound by the following terms and conditions.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Service</h2>
          <p className="mb-4">
            You agree to use our content and services responsibly and for lawful purposes only. Unauthorized use may result in consequences.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website is the property of Vausly Media unless otherwise stated. Do not copy, reproduce, or redistribute without permission.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Changes to Terms</h2>
          <p className="mb-4">
            We may update these terms at any time. By visiting means you accept the latest version of our terms.
          </p>
          <p>
            For more information, contact us through our{" "}
            <a href="/contact" className="text-purple-400 underline hover:text-purple-300">Contact Page</a>.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TOS;
