
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { fetchStats, StrapiStat } from '@/services/strapiService';
import { useQuery } from '@tanstack/react-query';

interface StatProps {
  number: string;
  label: string;
}

const StatBox: React.FC<StatProps> = ({ number, label }) => {
  return (
    <div className="border-r border-gray-200 last:border-r-0 p-8 flex flex-col items-center">
      <h3 className="text-5xl font-bold text-brand-blue mb-2">{number}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  // Fetch stats data from Strapi
  const { data: statsData, isLoading, error } = useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats,
  });

  // Fallback data in case the API call fails or while loading
  const fallbackStats: StatProps[] = [
    { number: "200+", label: "Zadowolonych najemców" },
    { number: "120+", label: "mieszkań inwestycyjnych przygotowanych pod wynajem" },
    { number: "< 5 lat", label: "wieloletnie doświadczenie w obsłudze najmu długoterminowego" },
  ];

  // Stats to display - use data from API if available, otherwise use fallback
  const stats = statsData || fallbackStats;

  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Nasze liczby mówią same za siebie
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Zarządzamy wieloma nieruchomościami, współpracujemy z setkami zadowolonych klientów i pomagamy osiągać
          stabilne zyski z inwestycji. Nasze doświadczenie i skuteczność to gwarancja Twojego sukcesu.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 mb-10">
          {isLoading ? (
            // Display loading placeholders
            <>
              <div className="animate-pulse h-32 bg-gray-200 rounded"></div>
              <div className="animate-pulse h-32 bg-gray-200 rounded"></div>
              <div className="animate-pulse h-32 bg-gray-200 rounded"></div>
            </>
          ) : error ? (
            // If there's an error, use fallback data
            fallbackStats.map((stat, index) => (
              <StatBox key={index} number={stat.number} label={stat.label} />
            ))
          ) : (
            // Display data from Strapi
            stats.map((stat, index) => (
              <StatBox key={index} number={stat.number} label={stat.label} />
            ))
          )}
        </div>
        
        <div className="text-center">
          <Button className="btn-primary" asChild>
            <Link to="/kontakt">
              Skontaktuj się z nami
              <ArrowRight className="arrow-icon" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
