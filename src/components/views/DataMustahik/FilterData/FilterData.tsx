"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import FilterDataForm from "./FilterDataForm";

export default function FilterData() {
  const [isOpenFilter, setIsFilterOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setIsFilterOpen((prevValue) => !prevValue)}
        className="bg-[#EDF5F4] hover:bg-[#EDF5F4]/90 text-foreground text-xl mb-4"
      >
        Filter Data {isOpenFilter ? <ChevronDown /> : <ChevronRight />}
      </Button>
      {isOpenFilter && (
        <Card>
          <CardContent>
            <FilterDataForm />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
