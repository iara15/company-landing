import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface BookCardItem {
    id: number;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    title: string;
    description: string;
    linkTitle: string;
  }