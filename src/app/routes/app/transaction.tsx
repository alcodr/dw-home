import { ContentLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { useUser } from '@/lib/auth';
import { ROLES } from '@/lib/authorization';
import { formatDate } from '@/utils/format';
import { useState } from 'react';

const TransactionRoute = () => {
  const user = useUser();

  const [transactionTitle, setTransactionTitle] = useState('Order Active')
  const [transactionType, setTransactionType] = useState('active')

  const transactions = [
    {
      id: '1',
      order_id: '#1',
      date: 'October 17, 2023',
      order_type: 'Delivery',
      status: 'Finish',
      price: 'Rp 50.000',
      trackingId: 'nhf871h1d',
      createdAt: 1740495164223
    },
    {
      id: '2',
      order_id: '#2',
      date: 'October 17, 2023',
      order_type: 'Delivery',
      status: 'Finish',
      price: 'Rp 50.000',
      trackingId: 'Zw012jMYWE',
      createdAt: 1740495164223
    },
  ]

  const history = [
    {
      id: '1',
      order_id: '#1',
      date: 'October 17, 2023',
      order_type: 'Delivery',
      status: 'Finish',
      price: 'Rp 50.000',
      trackingId: 'nhf871h1d',
      createdAt: 1740495164223,
      paymentType: 'QRIS'
    },
    {
      id: '2',
      order_id: '#2',
      date: 'October 17, 2023',
      order_type: 'Delivery',
      status: 'Finish',
      price: 'Rp 50.000',
      trackingId: 'Zw012jMYWE',
      createdAt: 1740495164223,
      payment_type: 'M-Banking'
    },
  ]

  const topup = [
    {
      id: '1',
      order_id: '#1',
      date: 'October 17, 2023',
      order_type: 'Delivery',
      status: 'Finish',
      price: 'Rp 50.000',
      trackingId: 'nhf871h1d',
      createdAt: 1740495164223
    },
    {
      id: '2',
      order_id: '#2',
      date: 'October 17, 2023',
      order_type: 'Delivery',
      status: 'Finish',
      price: 'Rp 50.000',
      trackingId: 'Zw012jMYWE',
      createdAt: 1740495164223
    },
  ]

  const meta = {
    totalPages: 5,
    page: 1
  }

  const changeTransactionType = (type: string) => {
    let titleType = ''
    let transactionType = 'active'
    switch (type) {
      case 'active':
        titleType = 'Order Active'
        transactionType = 'active'
        break;
      case 'history':
        titleType = 'Order History'
        transactionType = 'history'
        break;
      case 'topup':
        titleType = 'Topup History'
        transactionType = 'topup'
        break;
      default:
        titleType = 'Order Active'
        transactionType = 'active'
    }

    setTransactionTitle(titleType)
    setTransactionType(transactionType)
  }

  return (
    <ContentLayout title="Transaction History">
      <section className='flex mb-4'>
        <Button className='px-7 py-1 mr-4 cursor-pointer' onClick={() => { changeTransactionType('active') }}>
          Order Active
        </Button>
        <Button className='px-7 py-1 mr-4 cursor-pointer' onClick={() => { changeTransactionType('history') }}>
          Order History
        </Button>
        <Button className='px-7 py-1 mr-4 cursor-pointer' onClick={() => { changeTransactionType('topup') }}>
          Topup History
        </Button>
      </section>

      <div className='font-semibold py-4 text-[18px] mt-8'>
        {transactionTitle}
      </div>

      {transactionType === 'active' &&
        <>
          <Table
            data={transactions}
            pagination={
              meta && {
                totalPages: meta.totalPages,
                currentPage: meta.page,
                rootUrl: '',
              }
            }
            columns={[
              {
                title: 'Order ID',
                field: 'order_id',
              },
              {
                title: 'Dates',
                field: 'date',
              },
              {
                title: 'Status',
                field: 'status',
              },
              {
                title: 'Order Type',
                field: 'order_type',
              },
              {
                title: 'Price',
                field: 'price',
              },
              {
                title: 'Action',
                field: 'trackingId',
                Cell({ entry: { trackingId } }) {
                  return (<div>{`Live Tracking`}</div>);
                },
              },
            ]}
          />
        </>
      }
      {transactionType === 'active' &&
        <>
          <Table
            data={history}
            pagination={
              meta && {
                totalPages: meta.totalPages,
                currentPage: meta.page,
                rootUrl: '',
              }
            }
            columns={[
              {
                title: 'Order ID',
                field: 'order_id',
              },
              {
                title: 'Dates',
                field: 'date',
              },
              {
                title: 'Status',
                field: 'status',
              },
              {
                title: 'Payment Type',
                field: 'payment_type',
              },
              {
                title: 'Price',
                field: 'price',
              },
            ]}
          />
        </>
      }
      {
        transactionType === 'topup' &&
        <>
        </>
      }

    </ContentLayout>
  );
};

export default TransactionRoute;
