import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { PageProps } from "@/types"

import DeleteAccount from "./Profile/components/delete-account"
import ProfileInformation from "./Profile/components/profile-information"
import UpdatePassword from "./Profile/components/update-password"

interface Props extends PageProps {
	mustVerifyEmail: boolean
	status?: string
}

const Profile: React.FC<Props> = ({ auth, mustVerifyEmail, status }) => {
	return (
		<AuthenticatedLayout
			user={auth.user}
			title="Profile"
		>
			<div className="container max-w-[800px] space-y-4 pb-16">
				<ProfileInformation
					auth={auth}
					mustVerifyEmail={mustVerifyEmail}
					status={status}
				/>
				<UpdatePassword />
				<DeleteAccount />
			</div>
		</AuthenticatedLayout>
	)
}

export default Profile
