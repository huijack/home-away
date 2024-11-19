import FormContainer from '@/components/form/FormContainer'
import {
  updateProfileAction,
  fetchProfile,
  updateProfileImageAction,
} from '@/utils/actions'
import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import ImageInputContainer from '@/components/form/ImageInputContainer'

async function ProfilePage() {
  const profile = await fetchProfile()
  const { firstName, lastName, username, profileImage } = profile

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
      <div className="border p-8 rounded-md">
        {/* image input container */}
        <ImageInputContainer
          image={profileImage}
          name={username}
          action={updateProfileImageAction}
          text="Update Profile Image"
        />
        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              type="text"
              name="firstName"
              label="First Name"
              defaultValue={firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Last Name"
              defaultValue={lastName}
            />
            <FormInput
              type="text"
              name="username"
              label="Username"
              defaultValue={username}
            />
          </div>
          <SubmitButton text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  )
}
export default ProfilePage
