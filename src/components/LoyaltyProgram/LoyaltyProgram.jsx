const LoyaltyProgram = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Join Our Loyalty Program
        </h2>
        <p className="mb-4 text-center">
          Become a part of our family and enjoy exclusive benefits. Earn points
          for every purchase and redeem them for exciting rewards!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-neutral-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Earn Points</h3>
          <p>
            For every dollar you spend, you'll earn points that can be used
            towards future purchases. The more you dine with us, the more you
            earn!
          </p>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-neutral-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Exclusive Rewards</h3>
          <p>
            Redeem your points for special discounts, free meals, and exclusive
            event invitations. Our way of saying thank you for your loyalty.
          </p>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-neutral-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Birthday Treats</h3>
          <p>
            Celebrate your special day with us and enjoy a complimentary dessert
            or drink on your birthday. It's our little gift to you!
          </p>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-neutral-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Priority Reservations</h3>
          <p>
            Get priority access to reservations and special events. Never miss
            out on your favorite dining experience again.
          </p>
        </div>
      </div>
      <div className="text-center mt-6">
        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition duration-200">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
