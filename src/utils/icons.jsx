import React from 'react';
import { Home, Mail, Clock, User, Settings, Lock, HelpCircle, LogOut, ChevronLeft, ChevronRight, Send, Paperclip, Camera, Image, Mic, Search, Bell, X, Menu, Palette, Languages, Info, Star, Heart, Share2, Trash, Plus, Minus, Copy, MoreHorizontal, RefreshCw, Edit, CreditCard, UserPlus } from 'lucide-react';

// Ícones básicos
export {
  Home as HomeIcon,
  Mail as EmailIcon,
  Clock as ClockIcon,
  User as ProfileIcon,
  Settings as SettingsIcon,
  Lock as LockIcon,
  HelpCircle as HelpIcon,
  LogOut as LogoutIcon,
  ChevronLeft as BackIcon,
  ChevronRight as ForwardIcon,
  Copy as CopyIcon,
  MoreHorizontal as MoreHorizontalIcon,
  RefreshCw as RefreshIcon
};

// Ícones adicionais do sistema
export {
  Send as SendIcon,
  Paperclip as AttachmentIcon,
  Camera as CameraIcon,
  Image as GalleryIcon,
  Mic as MicrophoneIcon,
  Search as SearchIcon,
  Bell as NotificationIcon,
  X as CloseIcon,
  Menu as MenuIcon,
  Palette as ThemeIcon,
  Languages as LanguageIcon,
  Info as InfoIcon,
  Star as StarIcon,
  Heart as FavoriteIcon,
  Share2 as ShareIcon,
  Trash as DeleteIcon,
  Plus as AddIcon,
  Minus as RemoveIcon,
  Edit as EditIcon,
  CreditCard,
  UserPlus
};

// Função para obter o componente de ícone
export const getIconComponent = (name, size = 24, color = 'currentColor') => {
  const IconComponent = {
    Home, Mail, Clock, User, Settings, Lock, HelpCircle, LogOut, ChevronLeft, ChevronRight,
    Send, Paperclip, Camera, Image, Mic, Search, Bell, X, Menu, Palette, Languages, Info,
    Star, Heart, Share2, Trash, Plus, Minus, Copy, MoreHorizontal, RefreshCw
  }[name];

  return IconComponent ? (props) => IconComponent({ size, color, ...props }) : null;
};
