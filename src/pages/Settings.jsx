import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Settings() {

  const navigate = useNavigate();

  const [passwordData, setPasswordData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: ""
  });
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    theme: "dark",
    ai_personality: "friendly",
    created_at: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadUser() {

      try {

        const userId =
          localStorage.getItem("user_id");

        const response =
          await API.get(`/user/${userId}`);

        setUser(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    }

    loadUser();

  }, []);

  async function saveProfile() {

    try {

      const userId =
        localStorage.getItem("user_id");

      await API.put(
        `/user/${userId}`,
        {
          username: user.username,
          email: user.email
        }
      );

      alert("Profile Updated Successfully");

    } catch (error) {

      console.log(error);

      alert("Failed to update profile");

    }
  }

  async function savePreferences() {

  try {

    const userId =
      localStorage.getItem("user_id");

    await API.put(
      `/preferences/${userId}`,
      {
        theme: user.theme,
        ai_personality:
          user.ai_personality
      }
    );

    alert("Preferences Updated");

  } catch (error) {

    console.log(error);

  }
}

  async function changePassword() {

  if (
    passwordData.new_password !==
    passwordData.confirm_password
  ) {

    alert("Passwords do not match");
    return;
  }

  try {

    const userId =
      localStorage.getItem("user_id");

    const response =
      await API.put(
        `/change-password/${userId}`,
        {
          current_password:
            passwordData.current_password,

          new_password:
            passwordData.new_password
        }
      );

    alert(response.data.message);

    setPasswordData({
      current_password: "",
      new_password: "",
      confirm_password: ""
    });

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Password change failed"
    );

  }
  }
  
  async function deleteAccount() {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete your account?"
  );

  if (!confirmDelete) {
    return;
  }

  try {

    const userId =
      localStorage.getItem("user_id");

    await API.delete(
      `/user/${userId}`
    );

    localStorage.clear();

    navigate("/login");

  } catch (error) {

    console.log(error);

    alert("Failed to delete account");

  }
}
  if (loading) {

    return (
      <div className="p-8 text-white">
        Loading Settings...
      </div>
    );

  }

  return (
    <div className="p-8 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Settings ⚙️
      </h1>

      {/* Profile Card */}

      <div className="bg-[#161B22] p-6 rounded-3xl mb-6">

        <h2 className="text-2xl font-semibold mb-4">
          Profile
        </h2>

        <div className="space-y-4">

          <div>

            <label className="block mb-2">
              Username
            </label>

            <input
              value={user.username}
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value
                })
              }
              className="
                w-full
                bg-[#0D1117]
                p-3
                rounded-xl
              "
            />

          </div>

          <div>

            <label className="block mb-2">
              Email
            </label>

            <input
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value
                })
              }
              className="
                w-full
                bg-[#0D1117]
                p-3
                rounded-xl
              "
            />

          </div>

          <div>

            <label className="block mb-2">
              Member Since
            </label>

            <p className="text-gray-400">
              {user.created_at}
            </p>

          </div>

          <button
            onClick={saveProfile}
            className="
              bg-purple-600
              px-6
              py-3
              rounded-xl
              hover:bg-purple-700
            "
          >
            Save Changes
          </button>

        </div>

      </div>

      {/* Preferences Card */}

      <div className="bg-[#161B22] p-6 rounded-3xl">

        <h2 className="text-2xl font-semibold mb-4">
          Preferences
        </h2>

      <div className="mt-4">

  <label className="block mb-2">
    Theme
  </label>

  <select
    value={user.theme}
    onChange={(e) =>
      setUser({
        ...user,
        theme: e.target.value
      })
    }
    className="
      bg-[#0D1117]
      p-3
      rounded-xl
      w-full
    "
  >
    <option value="dark">
      Dark
    </option>

    <option value="light">
      Light
    </option>

  </select>

</div>

<div className="mt-4">

  <label className="block mb-2">
    AI Personality
  </label>

  <select
    value={user.ai_personality}
    onChange={(e) =>
      setUser({
        ...user,
        ai_personality: e.target.value
      })
    }
    className="
      bg-[#0D1117]
      p-3
      rounded-xl
      w-full
    "
  >
    <option value="friendly">
      Friendly
    </option>

    <option value="professional">
      Professional
    </option>

    <option value="motivational">
      Motivational
    </option>

    <option value="therapist">
      Therapist
    </option>

  </select>
<button
  onClick={savePreferences}
 className="
              bg-purple-600
              px-6
              py-3
              mt-5
              rounded-xl
              hover:bg-purple-700
            "
>
  Save Preferences
</button>
</div>

      </div>

      <div className="bg-[#161B22] p-6 rounded-3xl mt-6">

  <h2 className="text-2xl font-semibold mb-4">
    Change Password
  </h2>

  <input
    type="password"
    placeholder="Current Password"
    value={passwordData.current_password}
    onChange={(e) =>
      setPasswordData({
        ...passwordData,
        current_password: e.target.value
      })
    }
    className="w-full bg-[#0D1117] p-3 rounded-xl mb-3"
  />

  <input
    type="password"
    placeholder="New Password"
    value={passwordData.new_password}
    onChange={(e) =>
      setPasswordData({
        ...passwordData,
        new_password: e.target.value
      })
    }
    className="w-full bg-[#0D1117] p-3 rounded-xl mb-3"
  />

  <input
    type="password"
    placeholder="Confirm Password"
    value={passwordData.confirm_password}
    onChange={(e) =>
      setPasswordData({
        ...passwordData,
        confirm_password: e.target.value
      })
    }
    className="w-full bg-[#0D1117] p-3 rounded-xl mb-4"
  />

  <button
    onClick={changePassword}
    className="
              bg-purple-600
              px-6
              py-3
              rounded-xl
              hover:bg-purple-700
            "
  >
    Update Password
  </button>

      </div>
      <div className="bg-[#161B22] p-6 rounded-3xl mt-6">

  <h2 className="text-2xl font-semibold text-red-500 mb-4">
    Danger Zone
  </h2>

  <p className="text-gray-400 mb-4">
    Permanently delete your account and all diary entries.
  </p>

  <button
    onClick={deleteAccount}
    className="
      bg-red-600
      px-6
      py-3
      rounded-xl
      hover:bg-red-700
    "
  >
    Delete Account
  </button>

</div>
    </div>
  );

  
}