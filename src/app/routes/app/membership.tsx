import { ContentLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
// import { useUser } from '@/lib/auth';
// import { ROLES } from '@/lib/authorization';

const MembershipRoute = () => {
  // const user = useUser();
  return (
    <ContentLayout title="Membership">
      <section className='flex mb-6 md:md-4'>
        <Button className='px-6 py-6 mr-4'>
          Top Up
        </Button>
        <Button className='px-6 py-6 mr-4'>
          QR Membership
        </Button>
      </section>

      {/* <h4 className="my-3">
        Your role is : <b>{user.data?.role}</b>
      </h4>
      <p className="font-medium">In this application you can:</p>
      {user.data?.role === ROLES.USER && (
        <ul className="my-4 list-inside list-disc">
          <li>Create comments in discussions</li>
          <li>Delete own comments</li>
        </ul>
      )}
      {user.data?.role === ROLES.ADMIN && (
        <ul className="my-4 list-inside list-disc">
          <li>Create discussions</li>
          <li>Edit discussions</li>
          <li>Delete discussions</li>
          <li>Comment on discussions</li>
          <li>Delete all comments</li>
        </ul>
      )} */}
    </ContentLayout>
  );
};

export default MembershipRoute;
