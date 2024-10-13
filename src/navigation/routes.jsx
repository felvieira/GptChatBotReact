import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { SplashPage } from '../pages/SplashPage';
import { OnboardingPage } from '../pages/OnboardingPage';
import { ChatPage } from '../pages/ChatPage';
import { ProfilePage } from '../pages/ProfilePage';
import { PreferencesPage } from '../pages/PreferencesPage';
import { EditInformationPage } from '../pages/EditInformationPage';
import { InviteFriendsPage } from '../pages/InviteFriendsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
        <Route path="/edit-information" element={<EditInformationPage />} />
        <Route path="/invite-friends" element={<InviteFriendsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
