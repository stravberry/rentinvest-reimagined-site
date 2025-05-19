
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Przepraszamy, nie możemy znaleźć tej strony</p>
        <Button className="btn-primary" asChild>
          <Link to="/">
            Powrót do strony głównej
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
