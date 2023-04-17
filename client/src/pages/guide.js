import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import TableTeacher from "../components/TableTeacher";
export default function Guide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-[#000000]">
      <TableTeacher/>
    </div>
  );
}
