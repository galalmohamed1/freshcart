import { Suspense } from 'react';
import OtpClient from '../_components/OtpClient';
import { SpinnerCustom } from '@/components/ButtonSpinner/ButtonSpinner';

export default function NewPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <SpinnerCustom />
        </div>
      }
    >
      <OtpClient />
    </Suspense>
  );
}