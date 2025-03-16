'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Search,
  MapPin,
  GraduationCap,
  Building2,
  Users,
  Globe2,
  BookOpen,
  Trophy,
  DollarSign,
  Calendar,
  ArrowUpDown,
  ChevronRight,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { universities } from './[id]/data';

// Dynamically import the map component to avoid SSR issues
const UniversityMap = dynamic(() => import('@/components/university-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-100 animate-pulse flex items-center justify-center">
      <p className="text-muted-foreground">Loading map...</p>
    </div>
  ),
});

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | undefined>();
  const [selectedField, setSelectedField] = useState<string | undefined>();
  const [tuitionRange, setTuitionRange] = useState([0, 50000]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState(universities);

  useEffect(() => {
    const filtered = universities.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          uni.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = !selectedCity || uni.city === selectedCity;
      const matchesField = !selectedField || uni.programs.some(p => p.name.toLowerCase().includes(selectedField.toLowerCase()));
      const matchesTuition = uni.tuitionRange[0] >= tuitionRange[0] && 
                            uni.tuitionRange[1] <= tuitionRange[1];
      
      return matchesSearch && matchesCity && matchesField && matchesTuition;
    });
    
    setFilteredUniversities(filtered);
  }, [searchTerm, selectedCity, selectedField, tuitionRange]);

  const toggleCompare = (uniName: string) => {
    setCompareList(prev => 
      prev.includes(uniName)
        ? prev.filter(name => name !== uniName)
        : prev.length < 3
          ? [...prev, uniName]
          : prev
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden turkish-pattern">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
          >
            Find Your Perfect <span className="text-red-500">University</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Explore top universities in Türkiye and start your academic journey
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search universities..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {cities.map(city => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedField} onValueChange={setSelectedField}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Field of Study" />
              </SelectTrigger>
              <SelectContent>
                {fields.map(field => (
                  <SelectItem key={field} value={field}>{field}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-[200px]">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Tuition Range
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Select Tuition Range</DialogTitle>
                  <DialogDescription>
                    Adjust the slider to filter universities by annual tuition fees (USD)
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <Slider
                    value={tuitionRange}
                    onValueChange={setTuitionRange}
                    max={50000}
                    step={1000}
                    className="my-6"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${tuitionRange[0].toLocaleString()}</span>
                    <span>${tuitionRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="map" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="map">
                <MapPin className="mr-2 h-4 w-4" />
                Map View
              </TabsTrigger>
              <TabsTrigger value="list">
                <Building2 className="mr-2 h-4 w-4" />
                List View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="space-y-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <UniversityMap universities={filteredUniversities} />
              </div>
            </TabsContent>

            <TabsContent value="list" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniversities.map((university) => (
                  <Card key={university.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={university.coverImage} 
                        alt={university.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90">
                          Ranking: {university.ranking}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {university.city}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          Est. {university.established}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="mr-2 h-4 w-4" />
                          ${university.tuitionRange[0].toLocaleString()} - ${university.tuitionRange[1].toLocaleString()} / year
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {university.programs.slice(0, 3).map((program) => (
                          <Badge key={program.name} variant="outline">
                            {program.name}
                          </Badge>
                        ))}
                        {university.programs.length > 3 && (
                          <Badge variant="outline">+{university.programs.length - 3} more</Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button asChild className="flex-1">
                          <Link href={`/universities/${university.id}`}>
                            View Details
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => toggleCompare(university.name)}
                          className={compareList.includes(university.name) ? 'bg-primary text-white hover:bg-primary/90' : ''}
                        >
                          {compareList.includes(university.name) ? 'Added' : 'Compare'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Compare Universities Dialog */}
          {compareList.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="fixed bottom-8 right-8 shadow-lg"
                  size="lg"
                >
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  Compare ({compareList.length})
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>University Comparison</DialogTitle>
                  <DialogDescription>
                    Compare up to 3 universities side by side
                  </DialogDescription>
                </DialogHeader>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Features</TableHead>
                        {compareList.map(uniName => (
                          <TableHead key={uniName}>{uniName}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparisonFeatures.map(feature => (
                        <TableRow key={feature}>
                          <TableCell className="font-medium">{feature}</TableCell>
                          {compareList.map(uniName => {
                            const uni = universities.find(u => u.name === uniName);
                            return (
                              <TableCell key={`${uniName}-${feature}`}>
                                {getComparisonValue(uni!, feature)}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </section>
    </main>
  );
}

const cities = [
  'Istanbul',
  'Ankara',
  'Izmir',
  'Antalya',
  'Bursa',
  'Eskişehir',
  'Konya',
  'Kayseri'
];

const fields = [
  'Engineering',
  'Medicine',
  'Business',
  'Arts & Humanities',
  'Social Sciences',
  'Natural Sciences',
  'Architecture',
  'Law'
];

const comparisonFeatures = [
  'Ranking',
  'Established',
  'City',
  'International Students',
  'Student/Faculty Ratio',
  'Research Output',
  'Tuition Range',
  'Scholarship Availability',
  'Campus Size',
  'Housing Options'
];

function getComparisonValue(university: typeof universities[0], feature: string) {
  switch (feature) {
    case 'Ranking':
      return university.ranking;
    case 'Established':
      return university.established;
    case 'City':
      return university.city;
    case 'International Students':
      return `${university.internationalStudents.toLocaleString()}+`;
    case 'Tuition Range':
      return `$${university.tuitionRange[0].toLocaleString()} - $${university.tuitionRange[1].toLocaleString()}`;
    default:
      return 'N/A';
  }
}