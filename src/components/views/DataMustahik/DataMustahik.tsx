"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import FilterData from "./FilterData/FilterData";
import { useState } from "react";

export default function DataMustahik() {
  const [isOpenFilter, setIsFilterOpen] = useState(true);
  return (
    <div className="p-4">
      <Button
        onClick={() => setIsFilterOpen((prevValue) => !prevValue)}
        className="bg-[#EDF5F4] hover:bg-[#EDF5F4]/90 text-foreground text-xl mb-4"
      >
        Filter Data <ChevronDown />
      </Button>
      {isOpenFilter && (
        <Card>
          <CardContent>
            <FilterData />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
