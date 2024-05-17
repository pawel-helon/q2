import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FormField } from "./form-field";

export function PhoneNumberField() {
  return (
    <FormField>
      <Label htmlFor="SIM">Phone number</Label>
      <div className="flex gap-2">
        <Select name="prefix" defaultValue="+1">
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <Separator className="my-1" />
              {phonePrefixesNorthAmerica.map((prefix) => (
                <SelectItem key={prefix.value} value={prefix.value}>
                  {prefix.value}
                </SelectItem>
              ))}
            </SelectGroup>
            <Separator className="my-1" />
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              {phonePrefixesEurope.map((prefix) => (
                <SelectItem key={prefix.value} value={prefix.value}>
                  {prefix.value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormField className="w-full">
          <Input
            id="SIM"
            name="SIM"
            placeholder="Enter phone number"
            spellCheck="false"
          />
        </FormField>
      </div>
    </FormField>
  );
}

const phonePrefixesNorthAmerica = [
  { value: "+1", label: "USA" },
  { value: "+52", label: "MEX" },
  { value: "+501", label: "BLZ" },
  { value: "+506", label: "CRI" },
  { value: "+502", label: "GTM" },
  { value: "+504", label: "HND" },
  { value: "+505", label: "NIC" },
  { value: "+507", label: "PAN" },
  { value: "+503", label: "SLV" },
];

const phonePrefixesEurope = [
  { value: "+49", label: "DEU" },
  { value: "+33", label: "FRA" },
  { value: "+34", label: "ESP" },
  { value: "+39", label: "ITA" },
  { value: "+44", label: "GBR" },
  { value: "+31", label: "NLD" },
  { value: "+32", label: "BEL" },
  { value: "+43", label: "AUT" },
  { value: "+41", label: "CHE" },
  { value: "+46", label: "SWE" },
];
