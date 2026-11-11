/** A pre-filled inquiry that gets passed into the contact form. */
export type Inquiry = {
  message: string;
  interest?: string;
  area?: string;
  /** Changes on every request so identical inquiries still re-trigger. */
  nonce: number;
};

export type InquiryInput = Omit<Inquiry, "nonce">;
