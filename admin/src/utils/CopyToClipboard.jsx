import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

export default function CopyToClipboard(text) {
  copy(text);
  toast.success("Copied to clipboard");
}
