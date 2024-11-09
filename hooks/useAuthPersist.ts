import { useEffect } from 'react';
import { useParticleAuth } from '@particle-network/connectkit';
import { useUserStore } from '@/store/userStore';

export function useAuthPersist() {
  const { getUserInfo } = useParticleAuth();
  const { setUserInfo, setConnected } = useUserStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const info = await getUserInfo();
        if (info) {
          setUserInfo(info);
          setConnected(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, [getUserInfo, setUserInfo, setConnected]);
}