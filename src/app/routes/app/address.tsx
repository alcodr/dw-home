import { ContentLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
// import { useUser } from '@/lib/auth';
// import { ROLES } from '@/lib/authorization';
import { PencilLineIcon } from 'lucide-react';

const AddressRoute = () => {
  // const user = useUser();
  const addresses = [
    {
      name: 'Sofia Haverts',
      phone_number: '(+1) 234 567 890',
      point: '345 Long Island, NewYork, United States. 345 Long Island, NewYork, United States. 345 Long Island, NewYork, United States',
      type: 'billing'
    },
    {
      name: 'James Watson',
      phone_number: '(+1) 234 567 890',
      point: '669 Long Island, NewYork, United States. 669 Long Island, NewYork, United States. 669 Long Island, NewYork, United States',
      type: 'shipping'
    }
  ]
  return (
    <ContentLayout title="Address">
      <div className='font-[12px] mb-6 text-gray-500'>Manage Your Addresses for a Seamless Delivery Experience</div>

      <section className='mb-6 md:md-4'>
        <Button className='px-6 py-6'>
          Add Address
        </Button>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-[40px]'>

        {addresses.map((address: any, index: number) => {
          return <div key={`address_${index}`} className='address-container border border-black rounded-lg p-6 relative'>
            <div className='absolute right-[16px] top-[16px]font-[14px] text-[#6C7275] font-semibold'>
              <PencilLineIcon width={18} height={18} className='inline mr-2'></PencilLineIcon>
              Edit</div>

            <div className='mb-6 font-semibold'>
              <span className='capitalize'>{address.type}</span> Address
            </div>
            <div className='font-[14px]'>
              <div className='mb-2'>{address.name}</div>
              <div className='mb-2'>{address.phone_number}</div>
              <div className='line-clamp-2'>{address.point}</div>
            </div>
          </div>
        })}

      </section>
    </ContentLayout>
  );
};

export default AddressRoute;
