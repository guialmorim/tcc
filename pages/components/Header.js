import { signOut } from 'firebase/auth';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { auth } from '../../firebase';

function Header({ user }) {
	return (
		<HeaderWrapper>
			<Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" />
			<Profile>
				<Name>{user && user.name}</Name>
				<Link href="/profile">
					<UserImage src={user && user.photoUrl} />
				</Link>
				{/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU */}
				{user && (
					<SignOutButton
						onClick={() => signOut(auth)}
						src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
					/>
				)}
			</Profile>
		</HeaderWrapper>
	);
}

const HeaderWrapper = tw.div`
     flex
     justify-between
     items-center
     my-4
`;

const Logo = tw.img`
     h-10
`;

const Profile = tw.div`
     flex
     items-center
`;

const Name = tw.div`
     mr-4
     w-20
     text-sm
`;

const UserImage = tw.img`
     h-12
     w-12
     rounded-full
     border
     border-gray-200
     p-px
     cursor-pointer
`;

const SignOutButton = tw.img`
     h-5
     w-5
     p-px
     bg-transparent
     mx-2
     mb-4
     cursor-pointer
`;

export default Header;
