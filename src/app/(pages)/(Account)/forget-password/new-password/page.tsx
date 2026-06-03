import { Suspense } from 'react';
import NewPasswordClient from '../_components/NewPasswordClient';
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
      <NewPasswordClient />
    </Suspense>
  );
}