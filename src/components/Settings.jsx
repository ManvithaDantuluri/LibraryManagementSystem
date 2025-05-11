import React from 'react';

const Settings = () => {
  return (
    <div className="form-glass p-8 text-white max-h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Settings</h2>

      {/* Account Settings */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">👤 Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Username:</label>
            <input type="text" placeholder="Your username" className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300" />
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300" />
          </div>
        </div>
      </section>

      {/* Preferences */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">⚙️ Preferences</h3>
        <div className="space-y-2">
          <label>
            <input type="checkbox" className="mr-2" /> Enable notifications
          </label>
          <label>
            <input type="checkbox" className="mr-2" /> Dark mode (Auto)
          </label>
          <label>
            <input type="checkbox" className="mr-2" /> Show tooltips
          </label>
        </div>
      </section>

      {/* Security */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🔐 Security</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Change Password:</label>
            <input type="password" placeholder="New password" className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300" />
          </div>
          <div>
            <label className="block mb-1">Confirm Password:</label>
            <input type="password" placeholder="Confirm password" className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300" />
          </div>
        </div>
      </section>

      {/* Save Settings */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
